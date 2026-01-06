import { EVENTS } from "@/constants/events"
import { TAGS } from "@/constants/tags"
import { WORLD_MAX, WORLD_MIN } from "@/constants/world"
import type { EventTag, TimelineEvent } from "@/types/event"
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"

interface TimelineContextType {
  viewStart: number
  viewEnd: number
  range: number
  zoom: number
  events: TimelineEvent[]
  tags: EventTag[]
  setViewStart: (year: number) => void
  setViewEnd: (year: number) => void
  setEvents: (events: TimelineEvent[]) => void
  setTags: (tags: EventTag[]) => void
  isTagActive: (id: string) => boolean
  toggleTag: (id: string) => void
}

const TimelineContext = createContext<TimelineContextType>({
  viewStart: WORLD_MIN,
  viewEnd: WORLD_MAX,
  range: 0,
  zoom: 1,
  events: [],
  tags: [],
  setViewStart: (_: number) => {},
  setViewEnd: (_: number) => {},
  setEvents: () => {},
  setTags: () => {},
  isTagActive: (_: string) => false,
  toggleTag: (_: string) => {},
})

export function TimelineProvider({ children }: { children: React.ReactNode }) {
  const [events, setEvents] = useState<TimelineEvent[]>(EVENTS)
  const [tags, setTags] = useState<EventTag[]>(TAGS)
  const [activeTags, setActiveTags] = useState<string[]>(["cosmic"])

  const [viewStart, setViewStart] = useState(WORLD_MIN)
  const [viewEnd, setViewEnd] = useState(WORLD_MAX)

  const range = useMemo(() => viewEnd - viewStart, [viewEnd, viewStart])

  const zoom = useMemo(() => {
    const ratio = Math.abs(WORLD_MIN) / range

    return Math.round(ratio)
  }, [range])

  const visibleEvents = useMemo(
    () =>
      events.filter(
        e => !e.tags || activeTags.some(tagId => e.tags?.includes(tagId))
      ),
    [events, activeTags]
  )

  const isTagActive = useCallback(
    (id: string) => activeTags.includes(id),
    [activeTags]
  )

  const toggleTag = useCallback(
    (tagId: string) => {
      const isActive = activeTags.includes(tagId)

      if (isActive) setActiveTags(activeTags.filter(id => id !== tagId))
      else setActiveTags([...activeTags, tagId])
    },
    [activeTags]
  )

  return (
    <TimelineContext.Provider
      value={{
        viewStart,
        viewEnd,
        range,
        zoom,
        events: visibleEvents,
        tags,
        setViewStart,
        setViewEnd,
        setEvents,
        setTags,
        isTagActive,
        toggleTag,
      }}
    >
      {children}
    </TimelineContext.Provider>
  )
}

export const useTimeline = () => {
  return useContext(TimelineContext)
}
