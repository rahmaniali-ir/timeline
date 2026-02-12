import { useTimeline } from "@/contexts/timeline"
import { cn } from "@/lib/utils"
import type { PositionedEvent } from "@/types/event"
import { useCallback, useMemo } from "react"

const TITLE_AREA_HEIGHT_PX = 80
const TITLE_ROW_HEIGHT_PX = 24

export interface EventTitleProps extends PositionedEvent {
  titleRowIndex: number
  className?: string
  style?: React.CSSProperties
}

/**
 * Renders event title + connecting line to indicator (for unmasked titles layer).
 * Rendered in a slot at (left+width/2)% so the line connects to the indicator below.
 */
export function EventTitle({
  event,
  left,
  width,
  rowIndex,
  titleRowIndex,
  className,
  style,
}: EventTitleProps) {
  const { getTag, startCountryHovering, endCountryHovering } = useTimeline()
  const eventTags = useMemo(
    () => event.tags?.map((id) => getTag(id)).filter(Boolean) ?? [],
    [event.tags, getTag]
  )
  const hasTags = eventTags.length > 0
  const lineOffset = rowIndex * 2 + 3
  const titleBottomFromTop =
    TITLE_AREA_HEIGHT_PX - titleRowIndex * TITLE_ROW_HEIGHT_PX
  const lineHeight = `calc(${TITLE_AREA_HEIGHT_PX - titleBottomFromTop}px + 4px + var(--spacing) * ${lineOffset})`
  const titleTopFromTop = TITLE_AREA_HEIGHT_PX - (titleRowIndex + 1) * TITLE_ROW_HEIGHT_PX

  const mainImage = useMemo(() => {
    const src = event.images?.[0]

    if (!src || src.startsWith('https://') || src.startsWith('data:image/'))
      return src

    return `/images/events/${src}`
  }, [event.images])

  const onMouseEnter = useCallback(() => {
    event.counteries?.forEach((c) => startCountryHovering(c))
  }, [event.counteries, startCountryHovering])

  const onMouseLeave = useCallback(() => {
    event.counteries?.forEach((c) => endCountryHovering(c))
  }, [event.counteries, endCountryHovering])

  const centerPercent = left + width / 2

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn("group/event absolute top-0 bottom-0 w-px", className)}
      style={{ left: `${centerPercent}%`, ...style }}
    >
      {/* Connecting line from title bottom down to indicator */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-px bg-neutral-400 dark:bg-neutral-500 opacity-50 group-hover/event:opacity-100 group-hover/event:bg-neutral-500 dark:group-hover/event:bg-neutral-300 transition-colors"
        style={{
          top: `${titleTopFromTop}px`,
          width: "1px",
          bottom: '0px',
        }}
      />

      {/* Title label */}
      <div
        className={cn(
          "surface flex items-center gap-1 absolute left-1/2 -translate-y-full min-w-min",
          "leading-none! text-nowrap text-xs isolate",
          "rounded-sm rounded-bl-none!",
          "py-1 px-2 origin-left-bottom -rotate-30 -translate-x-4 group-hover/event:letter-spacing-2 group-hover/event:font-semibold before:bg-background",
        )}
        style={{
          top: `${titleTopFromTop}px`,
          // bottom: '100%',
          transition: "left .5s ease",
        }}
      >
        {mainImage && (
          <img
            src={mainImage}
            alt={event.title}
            className="size-4 min-w-4 rounded-sm object-cover"
          />
        )}
        <span>{event.title}</span>
      </div>
    </div>
  )
}

export { TITLE_AREA_HEIGHT_PX, TITLE_ROW_HEIGHT_PX }
