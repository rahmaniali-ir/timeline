import { useTimeline } from "@/contexts/timeline"
import { cn } from "@/lib/utils"
import type { PositionedEvent } from "@/types/event"
import { useCallback } from "react"

/** Renders only the indicator dot and connector line up to the track (for masked layer). */
export function EventIndicator({
  event,
  left,
  width,
  rowIndex,
  className,
}: PositionedEvent & { className?: string }) {
  const { startCountryHovering, endCountryHovering } = useTimeline()
  const lineOffset = rowIndex * 2 + 3

  const onMouseEnter = useCallback(() => {
    event.counteries?.forEach((c) => startCountryHovering(c))
  }, [event.counteries, startCountryHovering])

  const onMouseLeave = useCallback(() => {
    event.counteries?.forEach((c) => endCountryHovering(c))
  }, [event.counteries, endCountryHovering])

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        bottom: `calc(var(--spacing) * ${lineOffset})`,
        left: `${left}%`,
        width: `${width}%`,
        minHeight: `calc(var(--spacing) * ${lineOffset})`,
        transition: "left 0.1s ease, width 0.1s ease",
      }}
      className="group/event absolute hover:z-20"
    >
      {/* Connector line from track (top of wrapper) down to indicator */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-neutral-400 dark:bg-neutral-500 opacity-50 group-hover/event:opacity-100 group-hover/event:bg-neutral-500 dark:group-hover/event:bg-neutral-300 pointer-events-none transition-colors"
        style={{
          height: `calc(var(--spacing) * ${lineOffset})`,
        }}
      />
      {/* Indicator at bottom of line */}
      <div
        id={"event-element-" + event.id}
        className={cn(
          "surface w-full h-2.5 absolute! bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 animate-scale-y z-20 rounded-xs!",
          "transition-all duration-300 group-hover/event:h-4",
          "group-hover/event:before:bg-primary-500 dark:group-hover/event:before:bg-primary-500",
          className
        )}
      />
    </div>
  )
}
