import { EVENTS } from "@/constants/events"
import { TAGS } from "@/constants/tags"
import type { EventTag, TimelineEvent } from "@/types/event"
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"

interface TimelineContextType {
  events: TimelineEvent[]
  tags: EventTag[]
  setEvents: (events: TimelineEvent[]) => void
  setTags: (tags: EventTag[]) => void
  isTagActive: (id: string) => boolean
  toggleTag: (id: string) => void
}

const TimelineContext = createContext<TimelineContextType>({
  events: [],
  tags: [],
  setEvents: () => {},
  setTags: () => {},
  isTagActive: (_: string) => false,
  toggleTag: (_: string) => {},
})

export function TimelineProvider({ children }: { children: React.ReactNode }) {
  const [events, setEvents] = useState<TimelineEvent[]>(EVENTS)
  const [tags, setTags] = useState<EventTag[]>(TAGS)
  const [activeTags, setActiveTags] = useState<string[]>(["cosmic"])

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
        events: visibleEvents,
        tags,
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
