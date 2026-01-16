import { cn } from "@/lib/utils"
import {
  ChartGanttIcon,
  ChevronDownIcon,
  ListTreeIcon,
  MapIcon,
  SearchIcon,
  Share2Icon,
  UploadIcon,
} from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"
import { TagsOptions } from "./tagOptions"

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
