import { TAGS } from "@/constants/tags"
import { useTimeline } from "@/contexts/timeline"
import { cn } from "@/lib/utils"
import type { EventTag } from "@/types/event"
import {
  ChartGanttIcon,
  CheckIcon,
  ChevronDownIcon,
  ListTreeIcon,
  MapIcon,
  MinusIcon,
  SearchIcon,
  Share2Icon,
  SquircleIcon,
  TagsIcon,
  UploadIcon,
} from "lucide-react"
import { useCallback, useMemo, useState } from "react"
import { Button } from "../ui/button"
import { countCharacter } from "@/lib/strings"

function TagToggle({ tag }: { tag: EventTag }) {
  const { activeTags, isTagActive, toggleTag } = useTimeline()

  const [isOpen, setIsOpen] = useState(false)

  const isActive = isTagActive(tag.id)

  const children = useMemo(() => {
    return TAGS.filter(
      t =>
        countCharacter(t.id, ":") === countCharacter(tag.id, ":") + 1 &&
        t.id.startsWith(tag.id + ":")
    )
  }, [tag])

  const hasChildren = useMemo(() => children.length !== 0, [])

  const hasActiveChildren = useMemo(
    () => activeTags.some(t => t.startsWith(tag.id + ":")),
    [activeTags, tag]
  )

  const toggleOpen = useCallback(() => setIsOpen(open => !open), [])

  return (
    <div className='sticky top-0 flex flex-col rounded-sm'>
      <div className='z-30 group/tag-toggle sticky top-0 flex items-center gap-1 p-1 justify-start rounded-sm bg-neutral-100/50 transition-all duration-100 hover:bg-neutral-100'>
        <div
          onClick={() => toggleTag(tag.id)}
          className='flex items-center gap-1 flex-1 pe-4'
        >
          {/* checkbox */}
          <div className='relative'>
            <SquircleIcon
              className={cn(
                "size-3 text-neutral-400",
                "group-hover/tag-toggle:text-neutral-500"
              )}
            />

            {isActive ? (
              <CheckIcon
                style={{
                  color: tag.color,
                }}
                className={cn(
                  "size-2 absolute top-1/2 left-1/2 -translate-1/2",
                  tag.className
                )}
              />
            ) : hasActiveChildren ? (
              <MinusIcon
                className={cn(
                  "size-1.5 absolute top-1/2 left-1/2 -translate-1/2 text-neutral-600"
                )}
              />
            ) : null}
          </div>

          {tag.icon && (
            <tag.icon
              style={{
                color: isActive ? tag.color : undefined,
              }}
              className={cn(
                "size-3 text-neutral-400",
                isActive && "text-current"
              )}
            />
          )}

          <span
            className={cn(
              "text-xs text-neutral-500",
              isActive && "text-neutral-800"
            )}
          >
            {tag.name}
          </span>
        </div>

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

      {isOpen && hasChildren && (
        <div
          className={cn(
            "relative flex flex-col gap-0.5 mt-0.5 p-0.5 ps-4 pe-0 mb-1 z-20",
            "before:absolute before:h-full before:w-px before:bg-neutral-400/50 before:left-2.5 before:top-0"
          )}
        >
          {children.map((child, index) => (
            <TagToggle key={index} tag={child} />
          ))}
        </div>
      )}
    </div>
  )
}

function TagsOptions() {
  const { tags, activeTags } = useTimeline()

  const [isOpen, setIsOpen] = useState(false)

  const topLevelTags = tags.filter(t => t.id.match(/:/g) === null)

  const toggleOpen = () => {
    setIsOpen(open => !open)
  }

  return (
    <div className='relative flex flex-col gap-2 p-1 bg-neutral-200 rounded-lg border-2 border-neutral-100/50 min-w-[250px]'>
      <Button
        onClick={toggleOpen}
        variant='ghost'
        size='sm'
        className='group/tags-option-toggle h-auto! justify-start py-1 gap-2'
      >
        <div className='relative'>
          <TagsIcon className='size-3 text-neutral-400' />

          {/* active tags count badge */}
          <div
            className={cn(
              "absolute py-0.5 px-1 left-full top-full -translate-x-1/3 -translate-y-1/2",
              "text-[8px] bg-neutral-400 text-neutral-100 leading-none rounded-full",
              "transition-all duration-300",
              "opacity-0 scale-75",
              "group-hover/tags-option-toggle:-translate-y-2/3",
              activeTags.length > 0 && "opacity-100 scale-100"
            )}
          >
            {activeTags.length}
          </div>
        </div>

        <strong className='text-xs font-semibold text-neutral-600'>Tags</strong>

        <ChevronDownIcon
          className={cn(
            "size-3 text-neutral-400 ms-auto transition-all duration-300",
            isOpen && "rotate-x-150"
          )}
        />
      </Button>

      {isOpen && (
        <div className='relative flex flex-col gap-1 px-1 pb-0.5 overflow-y-auto max-h-[50vh] rounded-md'>
          {topLevelTags.map(tag => (
            <TagToggle key={tag.id} tag={tag} />
          ))}
        </div>
      )}
    </div>
  )
}

export function TimelineOptions({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(true)

  const toggleOpen = () => {
    setIsOpen(open => !open)
  }

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {/* actions */}
      <div className='flex items-center gap-1 justify-end'>
        <Button
          size='icon-sm'
          className='bg-neutral-200 text-current hover:bg-neutral-300'
        >
          <SearchIcon className='size-3' />
        </Button>

        <Button
          size='icon-sm'
          className='bg-neutral-200 text-current hover:bg-neutral-300'
        >
          <Share2Icon className='size-3' />
        </Button>

        <Button
          size='icon-sm'
          className='bg-neutral-200 text-current hover:bg-neutral-300'
        >
          <UploadIcon className='size-3' />
        </Button>

        <Button
          onClick={toggleOpen}
          size='icon-sm'
          className='bg-neutral-200 text-current hover:bg-neutral-300'
        >
          <ListTreeIcon className='size-3' />
        </Button>
      </div>

      {isOpen && (
        <div className='flex flex-col gap-1'>
          <TagsOptions />

          {/* map */}
          <div className='flex flex-col gap-2 p-1 bg-neutral-200 rounded-lg border-2 border-neutral-100/50'>
            <Button
              onClick={toggleOpen}
              variant='ghost'
              size='sm'
              className='h-auto! justify-start py-1 gap-2'
            >
              <MapIcon className='size-3 text-neutral-400' />

              <strong className='text-xs font-semibold text-neutral-600'>
                Map
              </strong>

              <ChevronDownIcon
                className={cn(
                  "size-3 text-neutral-400 ms-auto transition-all duration-300",
                  isOpen && "rotate-x-150"
                )}
              />
            </Button>
          </div>

          {/* timeline */}
          <div className='flex flex-col gap-2 p-1 bg-neutral-200 rounded-lg border-2 border-neutral-100/50'>
            <Button
              onClick={toggleOpen}
              variant='ghost'
              size='sm'
              className='h-auto! justify-start py-1 gap-2'
            >
              <ChartGanttIcon className='size-3 text-neutral-400' />

              <strong className='text-xs font-semibold text-neutral-600'>
                Timeline
              </strong>

              <ChevronDownIcon
                className={cn(
                  "size-3 text-neutral-400 ms-auto transition-all duration-300",
                  isOpen && "rotate-x-150"
                )}
              />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
