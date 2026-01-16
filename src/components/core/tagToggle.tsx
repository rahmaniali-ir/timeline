import { TAGS } from "@/constants/tags"
import { useTimeline } from "@/contexts/timeline"
import { countCharacter } from "@/lib/strings"
import { cn } from "@/lib/utils"
import type { EventTag } from "@/types/event"
import {
  CheckIcon,
  ChevronDownIcon,
  MinusIcon,
  SquircleIcon,
} from "lucide-react"
import { useCallback, useMemo, useState } from "react"
import { Button } from "../ui/button"

export function TagToggle({ tag }: { tag: EventTag }) {
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
    <div className='sticky top-0 flex flex-col rounded-sm bg-neutral-200'>
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
