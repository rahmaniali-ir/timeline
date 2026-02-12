import { getFormattedYear } from "@/lib/time"
import { cn } from "@/lib/utils"
import type { Positioned } from "@/types/event"

/** Props for year label (from yearLabels in timeline). */
export interface YearLabelProps extends Positioned {
  year: number
  className?: string
}

/**
 * Indicator (tick) on the track for a year label. Use in the masked layer.
 * Renders a small tick on the track at the year position.
 */
export function YearLabelIndicator({
  year,
  left,
  width,
  className,
}: YearLabelProps) {
  const lineOffset = 1

  return (
    <div
      style={{
        left: `${left}%`,
        transition: "left 0.1s ease",
      }}
      className={cn("absolute w-[3px] h-2 bottom-0 pointer-events-none", className)}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-neutral-400 dark:bg-neutral-500 opacity-70"
        style={{
          height: `calc(var(--spacing) * ${lineOffset})`,
        }}
      />
      {/* <div
        className={cn(
          "surface w-full h-2.5 absolute! bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-xs!",
          "bg-neutral-400 dark:bg-neutral-500"
        )}
      /> */}
    </div>
  )
}

/** Row for year label text in the titles layer (just above the track). */
const YEAR_LABEL_TOP_PX = 156

/**
 * Title (year number) for a year label. Use in the titles layer.
 * Positioned just above the track, no connector line.
 */
export function YearLabelTitle({
  year,
  left,
  width,
  className,
}: YearLabelProps) {
  const centerPercent = width === 0 ? left : left + width / 2

  const { value, unit } = getFormattedYear(year)

  return (
    <div
      className={cn(
        "absolute bottom-8 text-xs font-mono text-muted-foreground",
        "pointer-events-none select-none",
        className
      )}
      style={{
        left: `${centerPercent}%`,
        transform: "translateX(-50%)",
        transition: "left 0.1s ease",
      }}
    >
      <span>{value}</span>
      {unit && <small>{unit}</small>}
    </div>
  )
}
