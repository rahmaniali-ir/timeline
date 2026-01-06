import { WORLD_MIN } from "@/constants/world"
import { useTimeline } from "@/contexts/timeline"
import { cn } from "@/lib/utils"
import type { PositionedEvent, TimelineEvent } from "@/types/event"
import { useCallback, useMemo, useRef } from "react"
import { EventElement } from "./eventElement"

function Timeline({
  className,
  onStartChange,
  onEndChange,
}: {
  className?: string
  onStartChange?: (value: number) => void
  onEndChange?: (value: number) => void
}) {
  const { events, viewStart, viewEnd, range, zoom, setViewStart, setViewEnd } =
    useTimeline()

  const containerRef = useRef<HTMLDivElement>(null)
  const isPanningRef = useRef(false)
  const lastXRef = useRef(0)

  const toPercent = useCallback(
    (value: number) => ((value - viewStart) / range) * 100,
    [viewStart, range]
  )

  const isEventInView = useCallback(
    (e: TimelineEvent) => {
      const eventEnd = e.endDate?.year ?? e.startDate.year

      return e.startDate.year >= viewStart && eventEnd <= viewEnd
    },
    [viewStart, viewEnd]
  )

  const positionedEvents: PositionedEvent[] = useMemo(() => {
    return events.filter(isEventInView).map(e => ({
      event: e,
      left: toPercent(e.startDate.year),
      width:
        toPercent(e.endDate?.year ?? e.startDate.year) -
        toPercent(e.startDate.year),
    }))
  }, [events, isEventInView, toPercent])

  function onWheel(e: React.WheelEvent) {
    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const width = rect.width

    // mouse position as 0..1
    let mouseRatio = mouseX / width

    if (mouseRatio < 0.1) mouseRatio = 0
    if (mouseRatio > 0.9) mouseRatio = 1

    // convert mouse position to time
    const mouseTime = viewStart + mouseRatio * range

    // zoom strength
    const zoomIntensity = 0.001
    const zoomFactor = Math.exp(e.deltaY * zoomIntensity)

    const newRange = range * zoomFactor

    let newStart = mouseTime - mouseRatio * newRange
    let newEnd = newStart + newRange

    // clamp to world bounds
    if (newStart < WORLD_MIN) {
      newStart = WORLD_MIN
      newEnd = newStart + newRange
    }
    if (newEnd > new Date().getFullYear()) {
      newEnd = new Date().getFullYear()
      newStart = newEnd - newRange
    }

    setViewStart(newStart)
    onStartChange?.(newStart)
    setViewEnd(newEnd)
    onEndChange?.(newEnd)
  }

  function onMouseDown(e: React.MouseEvent) {
    isPanningRef.current = true
    lastXRef.current = e.clientX
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!isPanningRef.current) return

    const el = containerRef.current
    if (!el) return

    const dx = e.clientX - lastXRef.current
    lastXRef.current = e.clientX

    const range = viewEnd - viewStart
    const deltaRatio = dx / el.clientWidth
    const deltaTime = deltaRatio * range

    let newStart = viewStart - deltaTime
    let newEnd = viewEnd - deltaTime

    // clamp
    if (newStart < WORLD_MIN) {
      newStart = WORLD_MIN
      newEnd = newStart + range
    }
    if (newEnd > new Date().getFullYear()) {
      newEnd = new Date().getFullYear()
      newStart = newEnd - range
    }

    setViewStart(newStart)
    setViewEnd(newEnd)
  }

  function stopPanning() {
    isPanningRef.current = false
  }

  return (
    <div
      ref={containerRef}
      onWheel={onWheel}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={stopPanning}
      onMouseLeave={stopPanning}
      className={cn(
        "flex flex-col gap-8 py-64 overflow-x-hidden px-8",
        isPanningRef.current && "cursor-grabbing",
        className
      )}
    >
      <strong className='b-8'>{zoom}</strong>

      <div className='relative flex h-1 bg-neutral-200 w-full'>
        {positionedEvents.map(e => (
          <EventElement
            key={e.event.id}
            event={e.event}
            left={e.left}
            width={e.width}
          />
        ))}
      </div>
    </div>
  )
}

export default Timeline
