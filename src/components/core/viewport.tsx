import type { TimelineEvent } from "@/types/event"
import Timeline from "./timeline"
import { TimelineOptions } from "./timelineOptions"
import { WorldMap } from "./worldMap"
import { useTimeline } from "@/contexts/timeline"
import { useEffect, useMemo, useRef } from "react"

export function MapEventIndicator({ event }: { event: TimelineEvent }) {
  const timelineIndicatorRef = useRef<HTMLDivElement>(null)

  const mainImage = event.images?.[0]

  const timelineIndicatorBounding = useMemo(
    () => timelineIndicatorRef.current?.getBoundingClientRect(),
    [timelineIndicatorRef.current]
  )

  const position = useMemo(() => {
    if (!timelineIndicatorBounding) return { x: 0, y: 0 }

    return {
      x: timelineIndicatorBounding.left + timelineIndicatorBounding.width / 2,
      y: timelineIndicatorBounding.top - 150,
    }
  }, [timelineIndicatorBounding])

  useEffect(() => {
    const timlieneIndicatorElement = document.getElementById(
      `event-element-${event.id}`
    )
    if (!timlieneIndicatorElement) return

    timelineIndicatorRef.current = timlieneIndicatorElement as HTMLDivElement

    console.log(event.title, timlieneIndicatorElement)
  }, [event.id])

  return (
    <div
      className='absolute size-10 rounded-full'
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
    <div className='fixed inset-0 flex flex-col pt-16 p-4'>
      <div className='relative flex-2'>
        <WorldMap className='absolute inset-0 text-neutral-200' />

        {events.map(event => (
          <MapEventIndicator key={event.id} event={event} />
        ))}
      </div>

      <Timeline className='flex-1 z-30' />

      <TimelineOptions className='fixed top-4 right-4 z-10' />
    </div>
  )
}
