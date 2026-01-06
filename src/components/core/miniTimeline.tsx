import { cn } from "@/lib/utils"

function MiniTimeline({ className }: { className?: string }) {
  return (
    <div className={cn("flex rounded-md bg-neutral-200 p-2", className)}>
      MiniTimeline
    </div>
  )
}

export default MiniTimeline
