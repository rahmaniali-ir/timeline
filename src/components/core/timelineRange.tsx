import { useTimeline } from "@/contexts/timeline"
import YearInput from "./yearInput"
import { cn } from "@/lib/utils"
import { RangeList } from "./rangeList"

export function TimelineRange({ className }: { className?: string }) {
  const { viewStart, viewEnd, setViewStart, setViewEnd } = useTimeline()

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <RangeList />

      <YearInput value={viewStart} onChange={setViewStart} />
      <span className='text-neutral-300 font-bold text-2xl'>–</span>
      <YearInput value={viewEnd} onChange={setViewEnd} />
    </div>
  )
}
