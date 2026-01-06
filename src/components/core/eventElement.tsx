import { useTimeline } from "@/contexts/timeline"
import { cn } from "@/lib/utils"
import type { EventTag, PositionedEvent } from "@/types/event"
import { useMemo } from "react"

export function EventElement({ event, left, width }: PositionedEvent) {
  const { tags } = useTimeline()

  const eventTags = useMemo(() => {
    return tags.filter(tag => event.tags?.includes(tag.id))
  }, [tags, event.tags])

  const tagsColors = useMemo(() => {
    const colorfulTags = eventTags.filter(tag => tag.color) as Array<
      EventTag & { color: string }
    >

    return colorfulTags.map(tag => tag.color)
  }, [eventTags])

  const tagsConicGradient = useMemo(() => {
    const colorStops = tagsColors.map(
      (color, index) =>
        `${color} ${(index / tagsColors.length) * 100}%, ${color} ${
          ((index + 1) / tagsColors.length) * 100
        }%`
    )

    return `conic-gradient(${colorStops.join(", ")})`
  }, [tagsColors])

  const images = useMemo(() => event.images ?? [], [])

  const mainImage = useMemo(() => images[0], [images])

  return (
    <div
      style={{
        left: `${left}%`,
        width: `${width}%`,
        transition: "left 0.1s ease, width 0.3s ease-in-out",
      }}
      className='group/event absolute top-1/2 -translate-y-1/2 hover:z-10'
    >
      <div
        className={cn(
          "size-2.5 absolute left-1/2 top-1/2 -translate-1/2 bg-neutral-500 rounded-full z-20",
          "transition-transform duration-300 group-hover/event:scale-150"
        )}
        style={{
          background: tagsConicGradient,
        }}
      />

      {mainImage && (
        <div
          className={cn(
            "size-8 absolute left-1/2 bottom-[calc(100%+16px)] -translate-x-1/2 bg-neutral-500 rounded-full isolate",
            "transition-all duration-300 group-hover/event:size-12 group-hover/event:bottom-[calc(100%+24px)]",
            "before:absolute before:left-1/2 before:-translate-x-1/2 before:top-full before:h-4 before:w-0.5 before:bg-neutral-300 before:-z-10"
          )}
        >
          <img
            src={mainImage}
            alt={event.title}
            className='size-full object-cover rounded-[inherit]'
          />
        </div>
      )}

      {/* <div
        className={cn(
          "hidden absolute bottom-[calc(100%+8px)] -translate-x-1/2 py-1 px-2 rounded-full text-nowrap text-xs",
          "bg-neutral-200 border border-neutral-300",
          "group-hover/event:block transition-opacity duration-300"
        )}
        style={{
          translate:
            left < 50
              ? `calc(-50% + ${50 - left}%) 0`
              : `calc(-50% - ${left - 50}%) 0`,
        }}
      >
        {event.title}
      </div> */}

      <div className='absolute bg-linear-to-b from-transparent via-background to-transparent px-1 py-4 origin-left left-0 top-1/2 translate-y-1 rotate-90 text-nowrap text-xs group-hover/event:font-semibold'>
        {event.title}
      </div>
    </div>
  )
}
