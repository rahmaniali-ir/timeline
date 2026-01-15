import { WORLD_MAX, WORLD_MIN } from "@/constants/world"
import { useTimeline } from "@/contexts/timeline"
import { getFormattedYear } from "@/lib/time"
import { cn } from "@/lib/utils"
import type { TimePointRange } from "@/types/event"
import { CalendarRangeIcon } from "lucide-react"
import { useState, type ReactNode } from "react"
import { TimelineRange } from "../core/timelineRange"
import { Button } from "../ui/button"

type EraRange = TimePointRange & { name: string }

const eras: EraRange[] = [
  {
    name: "Contemprory",
    from: { year: 2_000 },
    to: { year: WORLD_MAX },
  },
  {
    name: "Garegorian Calendar",
    from: { year: 0 },
    to: { year: WORLD_MAX },
  },
  {
    name: "Pre-historic",
    from: { year: -1_000_000 },
    to: { year: 0 },
  },
  {
    name: "Everything",
    from: { year: WORLD_MIN },
    to: { year: WORLD_MAX },
  },
]

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
      className='size-auto! flex-col p-1 gap-0 px-2 items-start bg-neutral-100/50 text-xs'
    >
      <span className='font-normal'>{name}</span>

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

function RangeList() {
  const { setViewStart, setViewEnd } = useTimeline()

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(o => !o)

  const selectRange = (range: EraRange) => {
    setViewStart(range.from.year)
    setViewEnd(range.to.year)

    setIsOpen(false)
  }

  return (
    <div className='relative'>
      <Button
        onClick={toggleOpen}
        variant='ghost'
        className='size-auto! p-1.5! -ms-1.5 text-neutral-600 hover:bg-neutral-200'
      >
        <CalendarRangeIcon className='size-3.5' />
      </Button>

      {isOpen && (
        <div className='absolute top-[calc(100%+var(--spacing))] -left-1 flex flex-col gap-1 rounded-lg bg-neutral-200 p-1'>
          <strong className='text-xs font-semibold text-neutral-500 px-2 py-1 pt-0.5'>
            Ranges
          </strong>

          {eras.map((era, index) => (
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

export function Navbar({
  className,
  children,
}: {
  className?: string
  children?: ReactNode
}) {
  return (
    <nav className={cn("flex items-center gap-2", className)}>
      <div className='flex flex-col gap-1'>
        <strong className='text-xl font-semibold'>Timeline</strong>

        <div className='flex items-center gap-2'>
          <RangeList />

          <TimelineRange />
        </div>
      </div>

      {children}
    </nav>
  )
}
