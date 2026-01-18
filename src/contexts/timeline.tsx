import { EVENTS } from "@/constants/events"
import { TAGS } from "@/constants/tags"
import { BIG_BANG_YEAR, WORLD_MAX, WORLD_MIN } from "@/constants/world"
import { useParams } from "@/hooks/useParams"
import type { EventTag, TimelineEvent } from "@/types/event"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
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
  activeTags: string[]
  hoveredCountries: string[]
  selectedCountries: string[]
  hoveredEvents: TimelineEvent[]
  selectedEvents: TimelineEvent[]
  setViewStart: (year: number) => void
  setViewEnd: (year: number) => void
  toPercent: (year: number) => number
  setEvents: (events: TimelineEvent[]) => void
  isEventInView: (event: TimelineEvent) => boolean
  setTags: (tags: EventTag[]) => void
  isTagActive: (id: string) => boolean
  setActiveTags: (tags: string[]) => void
  toggleTag: (id: string) => void
  startCountryHovering: (country: string) => void
  endCountryHovering: (country: string) => void
  getTagEvents: (tagId: string) => TimelineEvent[]
  setSelectedCountries: (counteries: string[]) => void
  isCountrySelected: (countryId: string) => boolean
  selectCountry: (countryId: string) => void
  deselectCountry: (countryId: string) => void
  toggleCountrySelection: (countryId: string) => void
  setHoveredEvents: (events: TimelineEvent[]) => void
  setSelectedEvents: (events: TimelineEvent[]) => void
}

const TimelineContext = createContext<TimelineContextType>({
  viewStart: WORLD_MIN,
  viewEnd: WORLD_MAX,
  range: 0,
  zoom: 1,
  events: [],
  tags: [],
  activeTags: [],
  hoveredCountries: [],
  selectedCountries: [],
  hoveredEvents: [],
  selectedEvents: [],
  setViewStart: (_: number) => {},
  setViewEnd: (_: number) => {},
  toPercent: (_: number) => 0,
  setEvents: () => {},
  isEventInView: (_: TimelineEvent) => false,
  setTags: () => {},
  setActiveTags: () => {},
  isTagActive: (_: string) => false,
  toggleTag: (_: string) => {},
  startCountryHovering: (_: string) => {},
  endCountryHovering: (_: string) => {},
  getTagEvents: (_: string) => [],
  setSelectedCountries: (_: string[]) => {},
  isCountrySelected: (_: string) => false,
  selectCountry: (_: string) => {},
  deselectCountry: (_: string) => {},
  toggleCountrySelection: (_: string) => {},
  setHoveredEvents: (_: TimelineEvent[]) => {},
  setSelectedEvents: (_: TimelineEvent[]) => {},
})

export function TimelineProvider({ children }: { children: React.ReactNode }) {
  const params = useParams()

  const [viewStart, setViewStart] = useState(0)
  const [viewEnd, setViewEnd] = useState(WORLD_MAX)

  const [events, setEvents] = useState<TimelineEvent[]>(EVENTS)
  const [hoveredEvents, setHoveredEvents] = useState<TimelineEvent[]>([])
  const [selectedEvents, setSelectedEvents] = useState<TimelineEvent[]>([])

  const [tags, setTags] = useState<EventTag[]>(TAGS)
  const [activeTags, setActiveTags] = useState<string[]>(["art"])

  const [hoveredCountries, setHoveredCounteries] = useState<string[]>([])
  const [selectedCountries, setSelectedCountries] = useState<string[]>([])

  const range = useMemo(() => viewEnd - viewStart, [viewEnd, viewStart])

  const zoom = useMemo(() => {
    const ratio = Math.abs(WORLD_MIN) / range

    return Math.round(ratio)
  }, [range])

  const visibleEvents = useMemo(
    () =>
      events
        .filter(
          e =>
            !e.tags ||
            activeTags.some(tagId => e.tags?.includes(tagId)) ||
            activeTags.some(tagId => e.tags?.some(t => t.startsWith(tagId)))
        )
        .filter(
          e =>
            selectedCountries.length === 0 ||
            e.counteries?.some(c => selectedCountries.includes(c))
        ),
    [events, activeTags, selectedCountries]
  )

  const toPercent = useCallback(
    (value: number) => ((value - viewStart) / range) * 100,
    [viewStart, range]
  )

  const changeViewStart = useCallback(
    (start: number) => {
      setViewStart(Math.max(BIG_BANG_YEAR, start))
    },
    [setViewStart]
  )

  const isEventInView = useCallback(
    (e: TimelineEvent) => {
      const eventStart = e.startDate.year
      const eventEnd = e.endDate?.year ?? e.startDate.year

      return (
        (eventStart >= viewStart && eventStart <= viewEnd) ||
        (eventEnd >= viewStart && eventEnd <= viewEnd) ||
        (eventStart <= viewStart && eventEnd >= viewEnd)
      )
    },
    [viewStart, viewEnd]
  )

  const isTagActive = useCallback(
    (id: string) => activeTags.includes(id),
    [activeTags]
  )

  const toggleTag = useCallback(
    (tagId: string) => {
      const isActive = activeTags.includes(tagId)

      if (isActive) {
        setActiveTags(
          activeTags.filter(id => id !== tagId && !id.startsWith(tagId + ":"))
        )
      } else {
        const childTags =
          TAGS.filter(t => t.id.startsWith(tagId + ":")).map(t => t.id) ?? []

        setActiveTags([...activeTags, tagId, ...childTags])
      }
    },
    [activeTags]
  )

  const startCountryHovering = useCallback((country: string) => {
    setHoveredCounteries(countries => [...countries, country])
  }, [])

  const endCountryHovering = useCallback((country: string) => {
    setHoveredCounteries(countries => countries.filter(c => c !== country))
  }, [])

  const getTagEvents = useCallback(
    (tagId: string) =>
      EVENTS.filter(e =>
        e.tags?.some(t => t === tagId || t.startsWith(tagId + ":"))
      ),
    []
  )

  const isCountrySelected = useCallback(
    (id: string) => selectedCountries.includes(id),
    [selectedCountries]
  )

  const selectCountry = useCallback(
    (id: string) =>
      setSelectedCountries(countries =>
        isCountrySelected(id) ? countries : [...countries, id]
      ),
    [isCountrySelected]
  )

  const deselectCountry = useCallback(
    (id: string) =>
      setSelectedCountries(countries => countries.filter(c => c !== id)),
    [isCountrySelected]
  )

  const toggleCountrySelection = useCallback(
    (id: string) => {
      if (isCountrySelected(id)) deselectCountry(id)
      else selectCountry(id)
    },
    [isCountrySelected, selectCountry, deselectCountry]
  )

  useEffect(() => {
    const paramTagsString = params["tags"] || undefined
    const paramTags = paramTagsString?.split(",") ?? []

    const tags = paramTags.filter(tag => TAGS.some(t => t.id === tag))

    setActiveTags(tags)
  }, [params])

  return (
    <TimelineContext.Provider
      value={{
        viewStart,
        viewEnd,
        range,
        zoom,
        events: visibleEvents,
        tags,
        activeTags,
        hoveredCountries,
        selectedCountries,
        hoveredEvents,
        selectedEvents,
        setViewStart: changeViewStart,
        setViewEnd,
        toPercent,
        setEvents,
        setTags,
        setActiveTags,
        isEventInView,
        isTagActive,
        toggleTag,
        startCountryHovering,
        endCountryHovering,
        getTagEvents,
        setSelectedCountries,
        isCountrySelected,
        selectCountry,
        deselectCountry,
        toggleCountrySelection,
        setHoveredEvents,
        setSelectedEvents,
      }}
    >
      {children}
    </TimelineContext.Provider>
  )
}

export const useTimeline = () => {
  return useContext(TimelineContext)
}
