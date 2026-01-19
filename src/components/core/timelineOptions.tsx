import { cn } from "@/lib/utils"
import {
  BookIcon,
  ChartGanttIcon,
  ListTreeIcon,
  Share2Icon,
  UploadIcon,
} from "lucide-react"
import { useState } from "react"
import { MapOptions } from "../tools/mapOpations"
import { Button } from "../ui/button"
import { OptionsGroup } from "./optionsGroup"
import { TagsOptions } from "../tools/tagOptions"

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
          <MapOptions />

          <OptionsGroup name='Timeline' icon={ChartGanttIcon} />
          <OptionsGroup name='Stories' icon={BookIcon} />
        </div>
      )}
    </div>
  )
}
