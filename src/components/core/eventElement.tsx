import { useTimeline } from "@/contexts/timeline"
import { getFormattedYear } from "@/lib/time"
import { cn } from "@/lib/utils"
import type { EventTag, PositionedEvent } from "@/types/event"
import { CalendarIcon } from "lucide-react"
import { useCallback, useMemo, useState } from "react"

export function EventElement({ event, left, width, rowIndex, className }: PositionedEvent & { className?: string }) {
  const {
    tags,
    activeTags,
    viewStart,
    viewEnd,
    getTag,
    startCountryHovering,
    endCountryHovering,
  } = useTimeline()

  const [imageError, setImageError] = useState(false)

  const startDate = event.startDate
  const endDate = event.endDate ?? startDate
  const hasRange = "endDate" in event

  const startYear = getFormattedYear(startDate.year)
  const endYear = getFormattedYear(endDate.year)

  const eventTags = useMemo(() => {
    return event.tags?.map((id => getTag(id))).filter(t => !!t) || []
  }, [event.tags, getTag])

  const hasTags = useMemo(() => eventTags.length > 0, [eventTags])

  const activeEventTags = useMemo(
    () => eventTags.filter(t => activeTags.some(activeId => activeId === t.id)),
    [eventTags, activeTags]
  )

  const tagsColors = useMemo(() => {
    const colorfulTags = activeEventTags.filter(tag => tag.color) as Array<
      EventTag & { color: string }
    >

    return colorfulTags.map(tag => tag.color)
  }, [activeEventTags])

  const links = useMemo(
    () => (event.links ? Object.entries(event.links) : []),
    [event]
  )

  const tagsGradient = useMemo(() => {
    const colorStops = tagsColors.map(
      (color, index) => `${color} ${(index / tagsColors.length) * 100}%`
    )

    return `linear-gradient(to right, ${colorStops.join(", ")})`
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
        bottom: `calc(var(--spacing) * ${rowIndex * 2 + 3})`,
        left: `${left}%`,
        width: `${width}%`,
        transition: "left 0.1s ease, width 0.1s ease",
      }}
      className='group/event absolute hover:z-20'
    >
      {/* back image */}
      {/* {mainImage && !imageError && (
        <img
          src={mainImage}
          alt={event.title}
          onError={() => setImageError(true)}
          className={cn(
            "absolute left-0 bottom-0 w-full ellipse-mask-b object-cover object-top rounded-[inherit] pointer-events-none mix-blend-darken -z-10 opacity-0",
            "mix-blend-mode-darken max-h-[200px] transition-all duration-500 group-hover/event:opacity-50"
          )}
        />
      )} */}

      {/* indicator */}
      <div
        id={"event-element-" + event.id}
        className={cn(
          "surface w-full h-2.5 absolute! top-1/2 left-1/2 -translate-1/2 animate-scale-y z-20 rounded-xs!",
          "transition-all duration-300 group-hover/event:h-4",
          "group-hover/event:before:bg-primary-500 dark:group-hover/event:before:bg-primary-500",
          className
          // "before:absolute before:left-1/2 before:-translate-x-1/2 before:w-full before:h-full before:border-2 before:border-neutral-400 before:rounded-full before:mix-blend-darken"
        )}
      // style={{
      //   background: tagsGradient,
      // }}
      />

      {/* range labels */}
      {/* <div
        className={cn(
          "absolute bottom-full left-0 w-full text-xs font-mono opacity-0 translate-y-4 pointer-events-none transition-all",
          "group-hover/event:opacity-100 group-hover/event:translate-y-2"
        )}
      >
        <div
          className={cn(
            "absolute origin-left left-0 bottom-4 -rotate-90",
            !hasRange && "left-0"
          )}
        >
          {startYear.value} {startYear.unit}
        </div>

        {hasRange && (
          <div className='absolute origin-left translate-x-3/4 right-0 bottom-4 -rotate-90'>
            {endYear.value} {endYear.unit}
          </div>
        )}
      </div> */}

      {/* event image */}
      {/* {mainImage && (
        <div
          className={cn(
            "size-8 absolute left-1/2 bottom-[calc(100%+16px)] -translate-x-1/2 bg-neutral-300 rounded-full isolate",
            "animate-pop-in transition-all duration-300 group-hover/event:size-12 group-hover/event:bottom-[calc(100%+24px)]",
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
      )} */}

      {/* event details */}
      {/* <div
        className={cn(
          "hidden absolute bottom-[calc(100%+80px)] left-1/2 -translate-x-1/2 p-2 text-xs rounded-md",
          "bg-neutral-200 border border-neutral-300",
          "group-hover/event:flex transition-opacity duration-300",
          "flex-col gap-1 w-[200px]"
        )}
      >
        {mainImage && !imageError && (
          <img
            src={mainImage}
            alt={event.title}
            className='w-full max-h-32 object-cover rounded-sm'
          />
        )}

        <strong className='text-nowrap'>{event.title}</strong>

        <div className='flex items-center gap-2'>
          <small>
            {startYear.value} {startYear.unit}
          </small>

          {hasRange && (
            <>
              <small className='text-neutral-400'>–</small>
              <small>
                {endYear.value} {endYear.unit}
              </small>
            </>
          )}
        </div>

        {event.description && (
          <p className='text-neutral-600 mt-1'>{event.description}</p>
        )}

        {links.length > 0 && (
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
      </div> */}

      {/* title */}
      <div
        className={cn(
          "surface flex items-center gap-1",
          "leading-none! absolute! text-nowrap text-xs isolate",
          "rounded-sm rounded-bl-none!",
          hasTags && "before:bg-background py-1 px-2 origin-left bottom-4 left-1/2 -translate-x-1/5 -rotate-30 group-hover/event:letter-spacing-2 group-hover/event:font-semibold",
          !hasTags && "top-6 left-1/2 -translate-x-1/2"
          // "before:absolute before:-z-10 before:inset-x-0 before:-inset-y-1 before:bg-linear-to-b before:opacity-75 before:bg-[linear-gradient(to_top,transparent,var(--background)_15%,var(--background)_85%,transparent)] before:pointer-events-none",
          // startDate.year < viewStart && "left-8",
          // endDate.year > viewEnd && "left-[calc(100%-calc(var(--spacing)*8))]",
          // startDate.year >= viewStart && endDate.year <= viewEnd && "left-1/2"
        )}
        style={{
          bottom: `calc(var(--spacing) * ${rowIndex * 2 + 3})`,
          transition: "left .5s ease",
          textShadow: "0 0 16px color-mix(in srgb, currentColor 50%, transparent)"
        }}
      >
        {mainImage && <img src={mainImage} alt={event.title} className="size-4 rounded-sm object-cover" />}

        <span>{event.title}</span>
      </div>

      {/* line */}
      {hasTags && <div className={cn(
        "w-px h-8 bg-neutral-400 dark:bg-neutral-500 absolute bottom-0 left-1/2 -translate-x-1/2 opacity-50",
        "group-hover/event:opacity-100 group-hover/event:bg-neutral-500 dark:group-hover/event:bg-neutral-300"
      )}></div>}
    </div>
  )
}
