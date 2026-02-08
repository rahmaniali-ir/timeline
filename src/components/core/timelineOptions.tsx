import { cn } from "@/lib/utils"
import {
  BookIcon,
  ChartGanttIcon,
  ListTreeIcon,
  Share2Icon,
  UploadIcon,
} from "lucide-react"
import { useState } from "react"
import { CountriesOptions } from "../tools/countriesOpations"
import { PeopleOptions } from "../tools/peopleOptions"
import { TagsOptions } from "../tools/tagOptions"
import { Button } from "../ui/button"
import { OptionsGroup } from "./optionsGroup"
import { MapOptions } from "../tools/mapOptions"

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
          variant='ghost'
          className="backdrop-blur-sm"
        >
          <Share2Icon className='size-3' />
        </Button>

        <Button
          size='icon-sm'
          variant='ghost'
          className="backdrop-blur-sm"
        >
          <UploadIcon className='size-3' />
        </Button>

        <Button
          onClick={toggleOpen}
          size='icon-sm'
          variant='ghost'
          className="backdrop-blur-sm"
        >
          <ListTreeIcon className='size-3' />
        </Button>
      </div>

      {isOpen && (
        <div className='flex flex-col gap-1'>
          <MapOptions />

          <TagsOptions />

          <PeopleOptions />

          <CountriesOptions />
          <OptionsGroup name='Timeline' icon={ChartGanttIcon} />
        </div>
      )}
    </div>
  )
}
