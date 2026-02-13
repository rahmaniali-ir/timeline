import { ERAS } from "@/constants/eras"
import { useTimeline } from "@/contexts/timeline"
import { getFormattedYear } from "@/lib/time"
import type { EraRange } from "@/types/era"
import { CalendarRangeIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

function RangeListItem({
  name,
  startYear,
  endYear,
  onClick,
}: {
  name: string
  startYear: number
  endYear: number
  onClick?: () => void
}) {
  const start = getFormattedYear(startYear)
  const end = getFormattedYear(endYear)

  return (
    <Button
      onClick={onClick}
      variant='ghost'
      className='size-auto! flex-col p-1 gap-0 px-2 items-start text-xs'
    >
      <span className='font-normal pe-4'>{name}</span>

      <div className='flex items-center gap-1 text-neutral-500'>
        <small>
          {start.value} {start.unit}
        </small>

        <span className='text-neutral-400'>–</span>

        <small>
          {end.value} {end.unit}
        </small>
      </div>
    </Button>
  )
}

export function RangeList({ className }: { className?: string }) {
  const { setViewStart, setViewEnd } = useTimeline()

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(o => !o)

  const selectRange = (range: EraRange) => {
    setViewStart(range.from.year)
    setViewEnd(range.to.year)

    setIsOpen(false)
  }

  return (
    <div className={cn("relative", className)}>
      <Button
        onClick={toggleOpen}
        variant='ghost'
        className='size-auto! p-2! -ms-1.5 text-neutral-800 dark:text-neutral-300 hover:bg-neutral-200'
      >
        <CalendarRangeIcon className='size-3.5' />
      </Button>

      {isOpen && (
        <div className='surface absolute! top-[calc(100%+var(--spacing))] -left-1 flex flex-col gap-1 p-1'>
          <strong className='text-xs font-semibold text-neutral-500 px-2 py-1 pt-0.5'>
            Ranges
          </strong>

          {ERAS.map((era, index) => (
            <RangeListItem
              key={index}
              name={era.name}
              startYear={era.from.year}
              endYear={era.to.year}
              onClick={() => selectRange(era)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
