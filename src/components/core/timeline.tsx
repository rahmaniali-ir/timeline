import { WORLD_MAX, WORLD_MIN } from "@/constants/world"
import { useTimeline } from "@/contexts/timeline"
import { assignEventRows, assignTitleRows } from "@/lib/eventLayout"
import { cn } from "@/lib/utils"
import type { Positioned, PositionedEvent } from "@/types/event"
import { useMemo, useRef } from "react"
import { EventIndicator } from "./eventIndicator"
import {
  EventTitle,
  TITLE_AREA_HEIGHT_PX,
} from "./eventTitle"
import { YearLabelIndicator, YearLabelTitle } from "./yearLabel"

function Timeline({
  className,
  onStartChange,
  onEndChange,
}: {
  className?: string
  onStartChange?: (value: number) => void
  onEndChange?: (value: number) => void
}) {
  const {
    events,
    viewStart,
    viewEnd,
    range,
    zoom,
    setViewStart,
    setViewEnd,
    toPercent,
    isEventInView,
    activeTags,
  } = useTimeline()

  const containerRef = useRef<HTMLDivElement>(null)
  const isPanningRef = useRef(false)
  const lastXRef = useRef(0)

  const positionedEvents: PositionedEvent[] = useMemo(() => {
    const withPosition = events.filter(isEventInView).map(e => ({
      event: e,
      left: toPercent(e.startDate.year),
      width:
        toPercent(e.endDate?.year ?? e.startDate.year) -
        toPercent(e.startDate.year),
    }))
    const withRows = assignEventRows(withPosition, activeTags)
    const withTitleRows = assignTitleRows(withRows)
    return withTitleRows.map(({ titleRowIndex, ...rest }) => ({
      ...rest,
      titleRowIndex,
    }))
  }, [events, isEventInView, toPercent, activeTags])

  const maxRowIndex = useMemo(() => {
    if (positionedEvents.length === 0) return 0
    return Math.max(...positionedEvents.map(e => e.rowIndex), 0)
  }, [positionedEvents])

  const titlesLayerHeight = useMemo(
    () =>
      `calc(${TITLE_AREA_HEIGHT_PX}px + 4px + var(--spacing) * ${maxRowIndex * 2 + 3})`,
    [maxRowIndex]
  )

  const maskedLayerHeight = useMemo(
    () =>
      `calc(4px + var(--spacing) * ${maxRowIndex * 2 + 3})`,
    [maxRowIndex]
  )

  const yearLabels: Positioned<{ year: number }>[] = useMemo(() => {
    const maxSpanCount = 30

    const spanCount = toPercent(range) < 5 ? maxSpanCount + 2 : Math.min(maxSpanCount, Math.floor(range)) + 2
    const spanLength = range / maxSpanCount

    const years: number[] = [];

    return Array.from(
      { length: spanCount },
      (_, i) => Math.floor(viewStart + spanLength * i)
    ).filter(year => {
      if (years.includes(year)) return false

      years.push(year)
      return true
    }).map(year => ({
      year,
      left: toPercent(year),
      width: 0,
    }))
  }, [range, viewStart, zoom, toPercent])

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
    if (newEnd > WORLD_MAX) {
      newEnd = WORLD_MAX
      newStart = newEnd - range
    }

    setViewStart(newStart)
    setViewEnd(newEnd)
  }

  function stopPanning() {
    isPanningRef.current = false
  }

  return (
    <div className={cn("relative flex flex-col items-stretch", className)}>
      <div
        ref={containerRef}
        onWheel={onWheel}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopPanning}
        onMouseLeave={stopPanning}
        className={cn(
          "w-full flex flex-col justify-end pt-32 pb-16 px-8",
          "bg-linear-to-b from-transparent to-background",
          isPanningRef.current && "cursor-grabbing"
        )}
      >
        {/* Titles layer: no mask, on top, so titles are never clipped */}
        <div
          className="relative w-full z-10 shrink-0"
          style={{ height: titlesLayerHeight }}
        >
          {[...positionedEvents]
            .sort((a, b) => a.rowIndex - b.rowIndex)
            .map(e => (
              <EventTitle
                key={e.event.id}
                event={e.event}
                left={e.left}
                width={e.width}
                rowIndex={e.rowIndex}
                titleRowIndex={e.titleRowIndex ?? 0}
                className="hover:z-50"
                style={{ zIndex: maxRowIndex - e.rowIndex }}
              />
            ))}
        </div>

        {/* Masked layer: track + indicators + year labels; mask and blur so titles stay visible above */}
        <div
          className="relative w-full shrink-0 overflow-visible backdrop-blur-sm mask-t-sm"
          style={{ minHeight: maskedLayerHeight }}
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-neutral-300 dark:bg-neutral-200" />

          <div className="absolute inset-0">
            {positionedEvents.map(e => (
              <EventIndicator
                key={e.event.id}
                event={e.event}
                left={e.left}
                width={e.width}
                rowIndex={e.rowIndex}
                className="hover:z-50"
              />
            ))}
          </div>

          {yearLabels.map(({ year, left, width }) => (
            <YearLabelIndicator
              key={year}
              year={year}
              left={left}
              width={width}
            />
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0">
          {yearLabels.map(({ year, left, width }) => (
            <YearLabelTitle
              key={year}
              year={year}
              left={left}
              width={width}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline
