import type { EventTag } from "@/types/event"
import { Button } from "../ui/button"
import { XIcon } from "lucide-react"
import { useTimeline } from "@/contexts/timeline"
import { useMemo } from "react"

export function TagBadge({ tag }: { tag: EventTag }) {
  const { getTag } = useTimeline()

  const path = useMemo(() => {
    // const ids = tag.id
    // .split(":")
    // for(let i = 0; i < ids.length - 1; i++) {
    //   for(let j = 0)
    // }
    // .slice(0, -1)
    // .map(getTag)
  }, [])

  return (
    <div
      key={tag.id}
      className='group/tag flex items-center gap-0.5 py-0.5 ps-1.5 pe-1 rounded-md bg-neutral-300/50 leading-none'
    >
      <div className='flex flex-col'>
        <strong className='text-xs text-neutral-500'>{tag.name}</strong>

        <div className='flex items-center gap-1 text-[10px] text-neutral-500'>
          {/* {path.map(({ id, name }) => (
            <div key={id}>{name}</div>
          ))} */}
        </div>
      </div>

      <Button
        className='group/remove-tag size-auto! p-0.5! scale-75 transition-all duration-300 group-hover/tag:opacity-100 group-hover/tag:scale-100 hover:bg-neutral-300/50'
        variant='ghost'
      >
        <XIcon className='size-3 text-neutral-400 group-hover/remove-tag:text-red-600' />
      </Button>
    </div>
  )
}
