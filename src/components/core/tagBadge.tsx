import { useTimeline } from "@/contexts/timeline"
import type { EventTag } from "@/types/event"
import { ChevronRightIcon, XIcon } from "lucide-react"
import { useMemo } from "react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

export function TagBadge({ tag, onClick }: { tag: EventTag, onClick?: () => void }) {
  const { getTag } = useTimeline()

  const tags = useMemo(() => {
    const ids: string[] = []
    const tags: EventTag[] = []

    const idPath = tag.id.split(':')
    idPath.pop()

    idPath.forEach(id => {
      ids.push(id)

      const tag = getTag(ids.join(':'))

      if (tag)
        tags.push(tag)
    })

    return tags
  }, [tag.id, getTag])

  const path = useMemo(() => {
    const tagNames = tags.map(t => t.name)

    return tagNames.length > 0 ? tagNames : ['Tags']
  }, [tags])

  const isRootTag = useMemo(() => path.length === 0, [path])

  return (
    <div
      key={tag.id}
      className={cn(
        'surface group/tag flex flex-col gap-0.5 py-1 ps-1.5 pe-1 rounded-sm leading-none text-xs',
        'before:bg-neutral-100/50! dark:before:bg-neutral-900/50!'
      )}
      onClick={() => onClick?.()}
    >
      <div style={{ color: tag.color }} className="flex items-center gap-1 text-xs max-w-full">
        {tag.icon && <tag.icon className="size-3" />}

        <span className='font-semibold text-nowrap overflow-hidden text-ellipses'>{tag.name}</span>

        <Button
          className='group/remove-tag size-auto! p-0.5! mt-px ms-auto scale-75 transition-all duration-300 group-hover/tag:opacity-100 group-hover/tag:scale-100 hover:bg-neutral-300/50'
          variant='ghost'
        >
          <XIcon className='size-3 text-neutral-400 opacity-0 group-hover/tag:opacity-100 group-hover/remove-tag:text-red-500' />
        </Button>
      </div>

      {/* path */}
      <div className='flex items-center text-current/50 px-0.5'>
        {path.map((tagName, index) => (
          <>
            {index > 0 && <ChevronRightIcon className="relative size-2 mt-px mx-0.5 opacity-50" />}

            <small key={index} className="text-[8.5px]">{tagName}</small>
          </>
        ))}
      </div>
    </div>
  )
}
