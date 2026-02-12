import { useTimeline } from "@/contexts/timeline"
import type { TimelineEvent } from "@/types/event"
import { useEffect, useMemo, useRef } from "react"
import SpaceScene from "../space/space"
import Timeline from "./timeline"
import { TimelineOptions } from "./timelineOptions"

export function MapEventIndicator({ event }: { event: TimelineEvent }) {
  const { mapPanX, mapPanY, mapZoom, zoom, viewStart, viewEnd, events, activeTags } = useTimeline()

  const timelineIndicatorRef = useRef<HTMLDivElement>(null)

  const mainImage = event.images?.[0]

  const position = useMemo(() => {
    const bounding = timelineIndicatorRef.current?.getBoundingClientRect()

    if (!bounding) return { x: 0, y: 0 }

    if (!bounding) return { x: 0, y: 0 }

    return {
      x: bounding.left + bounding.width / 2,
      y: bounding.top - 150,
    }
  }, [timelineIndicatorRef.current, mapPanX, mapPanY, mapZoom, zoom, viewStart, viewEnd, events, activeTags])

  useEffect(() => {
    const timelineIndicatorElement = document.getElementById(
      `event-element-${event.id}`
    )
    if (!timelineIndicatorElement) return

    timelineIndicatorRef.current = timelineIndicatorElement as HTMLDivElement
  }, [event.id])

  return (
    <div
      className='absolute size-10 rounded-full transition-all duration-100'
      style={{ left: position.x + "px", top: position.y + "px" }}
    >
      <img
        src={mainImage}
        alt={event.title}
        className='size-full object-cover rounded-full'
      />
    </div>
  )
}

export function Viewport() {
  const { events } = useTimeline()

  return (
    <div className='relative flex flex-1 items-end'>
      <div className='fixed inset-0 flex-2'>
        {/* <WorldMap className='absolute inset-0 text-neutral-200' /> */}

        <SpaceScene />

        {/* {events.map(event => (
          <MapEventIndicator key={event.id} event={event} />
        ))} */}
      </div>

      <div className="group/timeline-wrapper relative flex flex-1">
        <div className="absolute top-0 left-0 -translate-y-1/2 py-px w-full bg-background/50 z-10 opacity-0 group-hover/timeline-wrapper:opacity-15 transition-opacity">
          <div className="bg-background h-1 w-full"></div>
        </div>

        <div className='flex-1 flex items-end pt-16'>
          <Timeline className='flex-1 z-30' />
        </div>
      </div>

      <TimelineOptions className='fixed top-4 right-4 z-10' />
    </div>
  )
}
