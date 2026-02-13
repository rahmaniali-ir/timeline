import { useTimeline } from "@/contexts/timeline"
import YearInput from "./yearInput"
import { cn } from "@/lib/utils"
import { RangeList } from "./rangeList"

export function TimelineRange({ className }: { className?: string }) {
  const { viewStart, viewEnd, setViewStart, setViewEnd } = useTimeline()

  return (
    <div className={cn("group/timeline-range flex items-center gap-3", className)}>
      <div className="flex flex-col items-start">
        <YearInput value={viewStart} onChange={setViewStart} />
        <small className="ps-1 text-neutral-500 dark:text-neutral-400 text-[10px] leading-none">From</small>
      </div>

      <div className='bg-neutral-300 h-px w-10' />

      <div className="flex flex-col items-start">
        <YearInput value={viewEnd} onChange={setViewEnd} />
        <small className="ps-1 text-neutral-500 dark:text-neutral-400 text-[10px] leading-none">To</small>
      </div>

      <RangeList className="group-focus-within/timeline-range:opacity-100 group-hover/timeline-range:opacity-100 opacity-0 transition-opacity" />
    </div>
  )
}
