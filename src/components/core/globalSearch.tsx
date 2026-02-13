import { EVENTS } from "@/constants/events"
import { TAGS } from "@/constants/tags"
import { WORLD_MAX, WORLD_MIN } from "@/constants/world"
import { useTimeline } from "@/contexts/timeline"
import { getEventsCountries } from "@/lib/events"
import { getClenSearchKey } from "@/lib/strings"
import { getFormattedYear } from "@/lib/time"
import { cn } from "@/lib/utils"
import type { EventTag, TimelineEvent } from "@/types/event"
import {
  BookIcon,
  CalendarIcon,
  DeleteIcon,
  FileSearchIcon,
  HistoryIcon,
  MapPinIcon,
  SearchIcon,
  TagIcon,
  UserIcon
} from "lucide-react"
import { useCallback, useMemo, useState, type FormEventHandler } from "react"
import { type TimePoint } from '../../types/core'
import { Button } from "../ui/button"
import { Expandable } from "./expandable"
import { KeyboardKey } from "./keyboardKey"

type SearchResultType = "event" | "tag" | "country"

interface SearchResult<T = unknown> {
  id: string
  type: SearchResultType
  title: string
  start?: TimePoint
  end?: TimePoint
  image?: string
  desciption?: string
  data?: T
}

function isTagSearchResult(
  result: SearchResult
): result is SearchResult<EventTag> {
  return result.type === "tag"
}

function SearchResultItem({
  item,
  onClick,
}: {
  item: SearchResult
  onClick?: () => void
}) {
  const [imageError, setImageError] = useState(false)

  const startYear = item.start ? getFormattedYear(item.start.year) : undefined
  const endYear = item.end ? getFormattedYear(item.end.year) : undefined

  const tagColor = useMemo(() => {
    if (!isTagSearchResult(item)) return undefined

    return item.data?.color
  }, [])

  return (
    <Button
      onClick={onClick}
      variant='ghost'
      size='sm'
      className='size-auto! text-nowrap justify-start bg-neutral-100 dark:bg-neutral-900 text-xs py-1 ps-1.5! pe-2 hover:bg-neutral-50'
    >
      <div className='size-5'>
        {item.image && !imageError && (
          <img
            src={item.image}
            alt={item.title}
            onError={() => setImageError(true)}
            className='size-full rounded-sm object-cover'
          />
        )}
      </div>

      {item.type === "event" && (
        <CalendarIcon className='size-3 text-neutral-400' />
      )}

      {item.type === "tag" && (
        <TagIcon style={{ color: tagColor }} className='size-3' />
      )}

      <span className='pe-4'>{item.title}</span>

      {startYear && (
        <div className='flex items-center gap-1 ms-auto text-xs text-neutral-500'>
          <small>
            {startYear.value} {startYear.unit}
          </small>

          {endYear && (
            <>
              <small>–</small>

              <small>
                {endYear.value} {endYear.unit}
              </small>
            </>
          )}
        </div>
      )}
    </Button>
  )
}

function SearchInput({
  searchKey,
  setSearchKey,
  onClear,
  onFocus,
}: {
  searchKey: string
  setSearchKey: (s: string) => void
  onClear?: () => void
  onFocus?: () => void
}) {
  const cleanSearchKey = useMemo(() => getClenSearchKey(searchKey), [searchKey])

  const handleOnInput: FormEventHandler<HTMLInputElement> = useCallback(e => {
    const target = e.target as HTMLInputElement
    setSearchKey?.(target.value)
  }, [])

  const [isFocused, setIsFocused] = useState(true)

  return (
    <label className='group/search-input w-[300px] focus-within:w-[25vw] flex items-center gap-1 bg-neutral-transparent focus-within:bg-neutral-50/75 dark:focus-within:bg-neutral-950/75 rounded-sm px-2 py-0.5 w-full transition-[width_0.3_ease-in-out]'>
      <SearchIcon className='size-4 text-neutral-500 dark:text-neutral-300/75' />

      <input
        type='text'
        placeholder='Search'
        className='outline-none text-center flex-1 placeholder:text-neutral-500 dark:placeholder:text-neutral-300/75'
        value={searchKey}
        onInput={handleOnInput}
        onFocus={() => {
          setIsFocused(true)
          onFocus?.()
        }}
        onBlur={() => setIsFocused(false)}
      />

      <DeleteIcon
        onClick={() => onClear?.()}
        className={cn(
          "size-3 text-neutral-500 opacity-0 transition-opacity hover:text-neutral-700 hover:scale-105",
          cleanSearchKey.length === 0 && "pointer-events-none",
          cleanSearchKey.length > 0 && isFocused && "opacity-100"
        )}
      />

      <div className='absolute flex items-center gap-2 top-1/2 right-2 -translate-y-1/2 text-[10px] pointer-events-none transition-opacity group-focus-within/search-input:opacity-0'>
        <KeyboardKey>Ctrl</KeyboardKey>
        <span className='font-mono'>+</span>

        <KeyboardKey>K</KeyboardKey>
      </div>
    </label>
  )
}

export function GlobalSearch({ className }: { className?: string }) {
  const {
    setActiveTags,
    setViewStart,
    setViewEnd,
    getTagEvents,
    setHoveredCountries,
  } = useTimeline()

  const [isOpen, setIsOpen] = useState(false)
  const [searchKey, setSearchKey] = useState("")
  const [searchHistory, setSearchHistory] = useState<SearchResult[]>([])

  const cleanSearchKey = useMemo(
    () => searchKey.toLowerCase().trim(),
    [searchKey]
  )

  const searchResults = useMemo<SearchResult[]>(() => {
    const events: SearchResult<TimelineEvent>[] = EVENTS.filter(e =>
      e.title.toLowerCase().includes(cleanSearchKey)
    )
      .slice(0, 5)
      .map(e => ({
        type: "event",
        id: "event-" + e.id,
        title: e.title,
        start: e.startDate,
        end: e.endDate,
        image: e.images?.[0],
        desciption: e.description,
        data: e,
      }))

    const tags: SearchResult<EventTag>[] = TAGS.filter(t =>
      t.name.toLowerCase().includes(cleanSearchKey)
    )
      .slice(0, 5)
      .map(tag => {
        const events = getTagEvents(tag.id)
        const start = events.at(0)?.startDate

        const latestEvent = events.at(-1)
        const end = latestEvent?.endDate ?? latestEvent?.startDate

        const image = events.find(e => e.images)?.images?.[0]

        return {
          type: "tag",
          id: "tag-" + tag.id,
          title: tag.name,
          start,
          end,
          data: tag,
          image,
        }
      })

    return [...events, ...tags]
  }, [cleanSearchKey])

  const showResults = useMemo(
    () => cleanSearchKey && searchResults.length > 0,
    [cleanSearchKey, searchResults]
  )

  const recentSearchs = useMemo(
    () =>
      searchHistory.filter(h => h.title.toLowerCase().includes(cleanSearchKey)),
    [searchHistory, cleanSearchKey]
  )

  const handleSelectEvent = useCallback(
    (event: SearchResult<TimelineEvent>) => {
      setActiveTags(event.data?.tags ?? [])

      if (event.start) {
        const endDate = event.end?.year ?? event.start?.year

        setViewStart(Math.max(WORLD_MIN, event.start.year - 1))
        setViewEnd(Math.min(WORLD_MAX, endDate + 1))
      }

      setSearchKey("")
    },
    []
  )

  const handleSelectTag = useCallback(
    ({ data: tag }: SearchResult<EventTag>) => {
      if (!tag) return

      setActiveTags([tag.id])

      const events = getTagEvents(tag.id)
      const earliestEventYear = events.at(0)?.startDate.year

      const latestEvent = events.at(-1)
      const latestEventYear =
        latestEvent?.endDate?.year ?? latestEvent?.startDate.year

      const countries = getEventsCountries(events)
      setHoveredCountries(countries)

      if (earliestEventYear && latestEventYear) {
        setViewStart(Math.max(WORLD_MIN, earliestEventYear - 1))
        setViewEnd(Math.min(WORLD_MAX, latestEventYear + 1))
      }

      setSearchKey("")
    },
    [setHoveredCountries]
  )

  const clearSearch = useCallback(() => {
    setSearchKey("")
  }, [])

  const handleSearchResultSelect = useCallback(
    (result: SearchResult) => {
      if (result.type === "event")
        handleSelectEvent(result as SearchResult<TimelineEvent>)
      else if (result.type === "tag")
        handleSelectTag(result as SearchResult<EventTag>)

      setIsOpen(false)
      clearSearch()

      if (!searchHistory.some(({ id }) => id === result.id))
        setSearchHistory(history => [result, ...history])
    },
    [searchHistory]
  )

  return (
    <Expandable
      isOpen={isOpen}
      toggle={false}
      onClickOutside={() => setIsOpen(false)}
      onEscape={() => setIsOpen(false)}
      trigger={
        <SearchInput
          searchKey={searchKey}
          setSearchKey={setSearchKey}
          onFocus={() => setIsOpen(true)}
          onClear={clearSearch}
        />
      }
      className={className}
      contentClassName='gap-2.5'
    >
      {/* search results */}
      {showResults && (
        <div className='flex flex-col gap-1'>
          <span className='flex items-center gap-1 px-1 text-xs text-neutral-400'>
            <FileSearchIcon className='size-3' />
            <small>Search Results</small>
          </span>

          {searchResults.map(item => (
            <SearchResultItem
              key={item.id}
              item={item}
              onClick={() => handleSearchResultSelect(item)}
            />
          ))}
        </div>
      )}

      {/* recent searchs */}
      {recentSearchs.length > 0 && (
        <div className='flex flex-col gap-1'>
          <span className='flex items-center gap-1 px-1 text-xs text-neutral-400'>
            <HistoryIcon className='size-3' />
            <small>Recent Searchs</small>
          </span>

          {recentSearchs.map(item => (
            <SearchResultItem
              key={item.id}
              item={item}
              onClick={() => handleSearchResultSelect(item)}
            />
          ))}
        </div>
      )}

      {/* search help */}
      {!cleanSearchKey && (
        <div className='flex items-center justify-center gap-2 text-xs p-2 text-neutral-500 dark:text-neutral-300 overflow-hidden w-full'>
          <span>Search</span>

          <div className='flex items-center gap-1'>
            <CalendarIcon className='size-3' />
            <span>Events</span>
          </div>

          <small>,</small>

          <div className='flex items-center gap-1'>
            <TagIcon className='size-3' />
            <span>Tags</span>
          </div>
          <small>,</small>

          <div className='flex items-center gap-1'>
            <UserIcon className='size-3' />
            <span>People</span>
          </div>
          <small>,</small>

          <div className='flex items-center gap-1'>
            <BookIcon className='size-3' />
            <span>Stories</span>
          </div>
          <small>,</small>

          <div className='flex items-center gap-1'>
            <MapPinIcon className='size-3' />
            <span>Locations</span>
          </div>
        </div>
      )}
    </Expandable>
  )
}
