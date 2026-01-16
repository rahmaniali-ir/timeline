import { EVENTS } from "@/constants/events"
import { cn } from "@/lib/utils"
import {
  CalendarIcon,
  DeleteIcon,
  SearchIcon,
  TagIcon,
  XIcon,
} from "lucide-react"
import { useCallback, useMemo, useState, type FormEventHandler } from "react"
import { Button } from "../ui/button"
import type { EventTag, TimelineEvent, TimePoint } from "@/types/event"
import { useTimeline } from "@/contexts/timeline"
import { WORLD_MAX, WORLD_MIN } from "@/constants/world"
import { getFormattedYear } from "@/lib/time"
import { TAGS } from "@/constants/tags"
import { KeyboardKey } from "./keyboardKey"

type SearchResultType = "event" | "tag" | "country"

interface SearchResult<T = unknown> {
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
      className='size-auto! text-nowrap justify-start bg-neutral-100 text-xs py-1 ps-1.5! pe-2 hover:bg-neutral-50'
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

export function GlobalSearch({ className }: { className?: string }) {
  const { setActiveTags, setViewStart, setViewEnd, getTagEvents } =
    useTimeline()

  const [isOpen, setIsOpen] = useState(true)
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

  const handleSearchInput: FormEventHandler<HTMLInputElement> = useCallback(
    e => {
      const target = e.target as HTMLInputElement
      setSearchKey(target.value)
    },
    []
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

      console.log("activate tag", tag)

      const events = getTagEvents(tag.id)
      const earliestEventYear = events.at(0)?.startDate.year

      const latestEvent = events.at(-1)
      const latestEventYear =
        latestEvent?.endDate?.year ?? latestEvent?.startDate.year

      console.log("tag events", events)
      console.log("earliest event", earliestEventYear)
      console.log("latest event", latestEventYear)

      if (earliestEventYear && latestEventYear) {
        setViewStart(Math.max(WORLD_MIN, earliestEventYear - 1))
        setViewEnd(Math.min(WORLD_MAX, latestEventYear + 1))
      }

      setSearchKey("")
    },
    []
  )

  const clearSearch = useCallback(() => {
    setSearchKey("")
  }, [])

  const handleSearchResultSelect = useCallback((result: SearchResult) => {
    if (result.type === "event")
      handleSelectEvent(result as SearchResult<TimelineEvent>)
    else if (result.type === "tag")
      handleSelectTag(result as SearchResult<EventTag>)

    setSearchHistory(history => [result, ...history])
    setIsOpen(false)
    clearSearch()
  }, [])

  return (
    <div className={cn("relative", className)}>
      <label className='group/search-input flex items-center gap-1 bg-neutral-200 rounded py-1 px-2 rounded-full'>
        <SearchIcon className='size-4 text-neutral-500' />

        <input
          type='text'
          placeholder='Search'
          className='outline-none text-center'
          value={searchKey}
          onInput={handleSearchInput}
          onFocus={() => setIsOpen(true)}
        />

        <DeleteIcon
          onClick={clearSearch}
          className={cn(
            "size-3 text-neutral-500 opacity-0 transition-opacity hover:text-neutral-700 hover:scale-105",
            cleanSearchKey.length === 0 && "pointer-events-none",
            cleanSearchKey.length > 0 && "opacity-100"
          )}
        />

        <div className='absolute flex items-center gap-2 top-1/2 right-2 -translate-y-1/2 text-[10px] pointer-events-none transition-opacity group-focus-within/search-input:opacity-0'>
          <KeyboardKey>Ctrl</KeyboardKey>
          <span className='font-mono'>+</span>

          <KeyboardKey>K</KeyboardKey>
        </div>
      </label>

      {isOpen && (
        <div className='absolute flex flex-col gap-1 p-1 rounded-md bg-neutral-200 top-[calc(100%+var(--spacing))] left-1/2 -translate-x-1/2 min-w-min w-full'>
          {showResults && (
            <div className='flex flex-col gap-1'>
              <strong className='text-xs font-semibold text-neutral-500 px-1'>
                Search Results
              </strong>

              {searchResults.map((item, index) => (
                <SearchResultItem
                  key={index}
                  item={item}
                  onClick={() => handleSearchResultSelect(item)}
                />
              ))}
            </div>
          )}

          <div className='flex flex-col gap-1'>
            <strong className='text-xs font-semibold text-neutral-500 px-1'>
              Recent Searchs
            </strong>

            {searchHistory.map((item, index) => (
              <SearchResultItem
                key={index}
                item={item}
                onClick={() => handleSearchResultSelect(item)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
