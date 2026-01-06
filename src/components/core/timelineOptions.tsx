import { useTimeline } from "@/contexts/timeline"
import { cn } from "@/lib/utils"
import type { EventTag } from "@/types/event"
import { ChevronDownIcon, TagsIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"

function TagToggle({ tag }: { tag: EventTag }) {
  const { isTagActive, toggleTag } = useTimeline()

  const isActive = isTagActive(tag.id)

  return (
    <Button
      key={tag.id}
      onClick={() => toggleTag(tag.id)}
      variant='secondary'
      size='sm'
      className='h-auto! p-1 justify-start bg-neutral-300/50'
    >
      {tag.icon && (
        <tag.icon
          style={{
            color: isActive ? tag.color : undefined,
          }}
          className={cn("size-3 text-neutral-400", isActive && "text-current")}
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
    </Button>
  )
}

export function TimelineOptions({ className }: { className?: string }) {
  const { tags } = useTimeline()

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(open => !open)
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-2 p-1 bg-neutral-200 rounded-lg min-w-[150px]",
        className
      )}
    >
      <Button
        onClick={toggleOpen}
        variant='ghost'
        size='sm'
        className='h-auto! justify-start py-1'
      >
        <TagsIcon className='size-3 text-neutral-400' />

        <strong className='text-xs font-semibold text-neutral-600'>Tags</strong>

        <ChevronDownIcon
          className={cn(
            "size-3 text-neutral-400 ms-auto transition-all duration-300",
            isOpen && "rotate-x-150"
          )}
        />
      </Button>

      {isOpen && (
        <div className='flex flex-col gap-1'>
          {tags.map(tag => (
            <TagToggle key={tag.id} tag={tag} />
          ))}
        </div>
      )}
    </div>
  )
}
