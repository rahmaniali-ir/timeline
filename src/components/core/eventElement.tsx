import { useTimeline } from "@/contexts/timeline"
import { cn } from "@/lib/utils"
import type { EventTag, PositionedEvent } from "@/types/event"
import { CalendarIcon } from "lucide-react"
import { useCallback, useMemo, useState } from "react"

export function EventElement({ event, left, width }: PositionedEvent) {
  const { tags, viewStart, viewEnd, startCountryHovering, endCountryHovering } =
    useTimeline()

  const [imageError, setImageError] = useState(false)

  const startDate = event.startDate
  const endDate = event.endDate ?? startDate

  const hasRange = "endDate" in event

  const eventTags = useMemo(() => {
    return tags.filter(tag => event.tags?.includes(tag.id))
  }, [tags, event.tags])

  const tagsColors = useMemo(() => {
    const colorfulTags = eventTags.filter(tag => tag.color) as Array<
      EventTag & { color: string }
    >

    return colorfulTags.map(tag => tag.color)
  }, [eventTags])

  const links = useMemo(
    () => (event.links ? Object.entries(event.links) : []),
    [event]
  )

  const tagsConicGradient = useMemo(() => {
    const colorStops = tagsColors.map(
      (color, index) => `${color} ${(index / tagsColors.length) * 100}%`
    )

    colorStops.push(tagsColors[0])

    return `conic-gradient(${colorStops.join(", ")})`
  }, [tagsColors])

  const images = useMemo(() => event.images ?? [], [])

  const mainImage = useMemo(() => images[0], [images])

  const onMouseEnter = useCallback(() => {
    event.counteries?.forEach(c => startCountryHovering(c))
  }, [])

  const onMouseLeave = useCallback(() => {
    event.counteries?.forEach(c => endCountryHovering(c))
  }, [])

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        left: `${left}%`,
        width: `${width}%`,
        transition: "left 0.1s ease, width 0.1s ease",
      }}
      className='group/event absolute top-1/2 -translate-y-1/2 hover:z-10'
    >
      <div
        className={cn(
          "h-2.5 w-full absolute top-1/2 left-1/2 -translate-1/2 bg-neutral-200 z-20",
          "animate-scale-y border-x border-neutral-400",
          "transition-transform duration-300 group-hover/event:scale-y-150"
        )}
        // style={{
        //   background: tagsConicGradient,
        // }}
      />

      {mainImage && (
        <div
          className={cn(
            "size-8 absolute left-1/2 bottom-[calc(100%+16px)] -translate-x-1/2 bg-neutral-300 rounded-full isolate",
            "animate-pop transition-all duration-300 group-hover/event:size-12 group-hover/event:bottom-[calc(100%+24px)]",
            "before:absolute before:left-1/2 before:-translate-x-1/2 before:top-full before:h-5 before:w-0.5 before:bg-neutral-300 before:-z-10"
          )}
        >
          {!imageError && (
            <img
              src={mainImage}
              alt={event.title}
              onError={() => setImageError(true)}
              className='size-full object-cover rounded-[inherit] pointer-events-none'
            />
          )}

          {imageError && (
            <CalendarIcon className='size-4 absolute left-1/2 top-1/2 -translate-1/2 text-neutral-400' />
          )}
        </div>
      )}

      <div
        className={cn(
          "hidden absolute bottom-[calc(100%+80px)] left-1/2 -translate-x-1/2 p-2 text-xs rounded-sm",
          "bg-neutral-200 border border-neutral-300",
          "group-hover/event:flex transition-opacity duration-300",
          "flex-col gap-1 w-[200px]"
        )}
        // style={{
        //   translate:
        //     left < 50
        //       ? `calc(-50% + ${50 - left}%) 0`
        //       : `calc(-50% - ${left - 50}%) 0`,
        // }}
      >
        {mainImage && !imageError && (
          <img
            src={mainImage}
            alt={event.title}
            className='w-full max-h-24 object-cover rounded-sm'
          />
        )}

        <strong className='text-nowrap'>{event.title}</strong>

        <div className='flex items-center gap-2'>
          <small>{startDate.year}</small>

          {hasRange && (
            <>
              <small className='text-neutral-400'>–</small>
              <small>{endDate.year}</small>
            </>
          )}
        </div>

        {event.description && (
          <p className='text-neutral-600 mt-1'>{event.description}</p>
        )}

        {links.length && (
          <small className='flex items-center gap-2 flex-wrap mt-2'>
            {links.map(([title, href], index) => (
              <a
                key={index}
                href={href}
                target='_blank'
                className='py-0.5 px-1.5 rounded-sm text-sky-800 bg-neutral-100 hover:bg-neutral-50'
              >
                {title}
              </a>
            ))}
          </small>
        )}
      </div>

      <div
        className={cn(
          "animate-appear absolute px-2 origin-left top-0 rotate-90 text-nowrap text-xs isolate group-hover/event:letter-spacing-2 group-hover/event:font-semibold",
          "before:absolute before:-z-10 before:inset-x-0 before:-inset-y-6 before:bg-linear-to-b before:from-transparent before:via-background before:to-transparent before:pointer-events-none",
          startDate.year < viewStart && "left-8",
          endDate.year > viewEnd && "left-[calc(100%-calc(var(--spacing)*8))]",
          startDate.year >= viewStart && endDate.year <= viewEnd && "left-1/2"
        )}
        style={{
          transition: "left .5s ease",
        }}
      >
        {event.title}
      </div>
    </div>
  )
}
