import { useTimeline } from "@/contexts/timeline"
import YearInput from "./yearInput"
import { cn } from "@/lib/utils"

export function TimelineRange({ className }: { className?: string }) {
  const { viewStart, viewEnd, setViewStart, setViewEnd } = useTimeline()

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <YearInput value={viewStart} onChange={setViewStart} />
      <span className='text-neutral-300 font-bold text-2xl'>–</span>
      <YearInput value={viewEnd} onChange={setViewEnd} />
    </div>
  )
}
