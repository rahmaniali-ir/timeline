import { useTimeline } from "@/contexts/timeline"
import { useState } from "react"
import { Button } from "../ui/button"
import { ChevronDownIcon, TagsIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { TagToggle } from "./tagToggle"

export function TagsOptions() {
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
