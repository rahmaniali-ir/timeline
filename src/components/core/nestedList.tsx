import { countCharacter } from "@/lib/strings"
import { cn } from "@/lib/utils"
import type { ListItem } from "@/types/list"
import {
  CheckIcon,
  ChevronDownIcon,
  MinusIcon,
  SquircleIcon,
} from "lucide-react"
import { useCallback, useMemo, useState } from "react"
import { Button } from "../ui/button"

export function NestedItem({
  list,
  hoveredItems = [],
  selectedItems = [],
  id,
  name,
  color,
  image,
  backgroundImage,
  searchKey,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...listItem
}: ListItem & {
  list: ListItem[]
  hoveredItems?: string[]
  selectedItems?: string[]
  searchKey?: string
  onClick?: (id: string) => void
  onMouseEnter?: (id: string) => void
  onMouseLeave?: (id: string) => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [imageError, setImageError] = useState(false)

  const selected = useMemo(
    () => selectedItems?.includes(id),
    [selectedItems, id]
  )

  const hovered = useMemo(() => hoveredItems?.includes(id), [hoveredItems, id])

  const children = useMemo(() => {
    return list.filter(
      item =>
        item.id.startsWith(id + ":") &&
        countCharacter(item.id, ":") === countCharacter(id, ":") + 1
    )
  }, [list, id])

  const hasChildren = useMemo(() => children.length !== 0, [])

  const hasSelectedChildren = useMemo(
    () => selectedItems.some(t => t.startsWith(id + ":")),
    [selectedItems, id]
  )

  const toggleOpen = useCallback(() => setIsOpen(open => !open), [])

  return (
    <div
      onMouseEnter={() => onMouseEnter?.(id)}
      onMouseLeave={() => onMouseLeave?.(id)}
      className='flex flex-col rounded-sm bg-neutral-200'
    >
      {/* header */}
      <div
        className={cn(
          "group/tag-toggle relative flex items-center gap-1 p-1 justify-start rounded-[inherit] bg-neutral-100/50 transition-all duration-100 hover:bg-neutral-100",
          hovered && "bg-neutral-100",
          className
        )}
      >
        {/* item details */}
        <div
          onClick={() => onClick?.(id)}
          className='flex items-center gap-1 flex-1 pe-4 rounded-[inherit]'
        >
          {/* background image */}
          {backgroundImage && !imageError && (
            <div className='w-8 rounded-[inherit] rounded-e-none pointer-events-none'>
              <div className='absolute left-0 top-0 h-full w-8 overflow-hidden rounded-[inherit] circle-mask-r-sm transition-all group-hover/tag-toggle:w-10'>
                <img
                  src={backgroundImage}
                  alt={name}
                  onError={() => setImageError(true)}
                  className={cn(
                    "absolute left-0 top-0 size-full grayscale-100 opacity-50 object-cover rounded-[inherit] transition-all",
                    "group-hover/tag-toggle:grayscale-0 group-hover/tag-toggle:opacity-90 group-hover/tag-toggle:scale-130",
                    selected && "grayscale-0 opacity-75 scale-115"
                  )}
                />
              </div>
            </div>
          )}

          {/* checkbox */}
          <div className='relative pointer-events-none'>
            <SquircleIcon
              className={cn(
                "size-3 text-neutral-400",
                "group-hover/tag-toggle:text-neutral-500"
              )}
            />

            {selected ? (
              <CheckIcon
                // style={{
                //   color: tag.color,
                // }}
                className={cn(
                  "size-2 absolute top-1/2 left-1/2 -translate-1/2"
                  // tag.className
                )}
              />
            ) : hasSelectedChildren ? (
              <MinusIcon
                className={cn(
                  "size-1.5 absolute top-1/2 left-1/2 -translate-1/2 text-neutral-600"
                )}
              />
            ) : null}
          </div>

          {listItem.icon && (
            <listItem.icon
              style={{
                color: selected ? color : undefined,
              }}
              className={cn(
                "size-3 text-neutral-400 pointer-events-none",
                selected && "text-current"
              )}
            />
          )}

          {image && !imageError && (
            <img
              src={image}
              alt={name}
              onError={() => setImageError(true)}
              className='size-3 rounded-full object-cover pointer-events-none'
            />
          )}

          <span
            className={cn(
              "text-xs text-neutral-500 pointer-events-none",
              selected && "text-neutral-800"
            )}
          >
            {name}
          </span>
        </div>

        {/* toggle button */}
        {hasChildren && (
          <Button
            onClick={toggleOpen}
            className='size-auto! p-0.5! ms-auto bg-neutral-200 hover:bg-neutral-50'
          >
            <ChevronDownIcon
              className={cn(
                "size-3 text-neutral-400 transition-all duration-300",
                isOpen && "text-neutral-400 -scale-y-100"
              )}
            />
          </Button>
        )}
      </div>

      {/* children */}
      {isOpen && hasChildren && (
        <div
          className={cn(
            "relative flex flex-col gap-0.5 mt-0.5 p-0.5 ps-4 pe-0 mb-1 z-10 rounded-[inherit]",
            "before:absolute before:h-full before:w-px before:bg-neutral-400/50 before:left-2.5 before:top-0"
          )}
        >
          {children.map((child, index) => (
            <NestedItem
              {...child}
              key={index}
              list={list}
              hoveredItems={hoveredItems}
              selectedItems={selectedItems}
              onClick={id => onClick?.(id.startsWith(id + ":") ? child.id : id)}
              onMouseEnter={enteredId =>
                onMouseEnter?.(enteredId.startsWith(id + ":") ? child.id : id)
              }
              onMouseLeave={leftId =>
                onMouseLeave?.(leftId.startsWith(id + ":") ? child.id : id)
              }
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function NestedList({
  list,
  selectedItems = [],
  hoveredItems = [],
  searchKey,
  onHoverStart,
  onHoverEnd,
  onSelect,
}: {
  list: ListItem[]
  selectedItems?: string[]
  hoveredItems?: string[]
  searchKey?: string
  onSelect?: (item: string) => void
  onHoverStart?: (item: string) => void
  onHoverEnd?: (item: string) => void
}) {
  const topLevelItems = useMemo(
    () => list.filter(item => item.id.match(/:/g) === null),
    [list]
  )

  return (
    <div className='flex flex-col gap-1'>
      {topLevelItems.map(item => (
        <NestedItem
          {...item}
          key={item.id}
          list={list}
          selectedItems={selectedItems}
          hoveredItems={hoveredItems}
          onClick={id => onSelect?.(id)}
          onMouseEnter={id => onHoverStart?.(id)}
          onMouseLeave={id => onHoverEnd?.(id)}
        />
      ))}
    </div>
  )
}
