import type { TimelineEvent } from "@/types/event"

export interface EventWithPosition {
  event: TimelineEvent
  left: number
  width: number
}

export interface EventWithRow extends EventWithPosition {
  rowIndex: number
}

export interface EventWithTitleRow extends EventWithRow {
  titleRowIndex: number
}

/** Approximate title width as percentage of timeline (center ± half). */
const TITLE_SPAN_PERCENT = 8

function titleOverlaps(
  centerA: number,
  centerB: number,
  span: number = TITLE_SPAN_PERCENT
): boolean {
  const half = span / 2
  return Math.abs(centerA - centerB) < span
}

/**
 * Assign title row indices so no two titles overlap horizontally.
 * Events at exactly the same time (same left+width) share a column and stack (same center, different rows).
 * Returns events with titleRowIndex (0 = bottom row in title area).
 */
export function assignTitleRows(items: EventWithRow[]): EventWithTitleRow[] {
  const sorted = [...items].sort((a, b) => {
    const centerA = a.left + a.width / 2
    const centerB = b.left + b.width / 2
    if (centerA !== centerB) return centerA - centerB
    return a.rowIndex - b.rowIndex
  })

  const result: EventWithTitleRow[] = []
  const rowCenters: number[][] = []

  for (const item of sorted) {
    const center = item.left + item.width / 2
    let row = 0
    while (row < rowCenters.length) {
      const hasOverlap = rowCenters[row].some((c) =>
        titleOverlaps(center, c)
      )
      if (!hasOverlap) break
      row++
    }
    if (row >= rowCenters.length) rowCenters.push([])
    rowCenters[row].push(center)

    result.push({ ...item, titleRowIndex: row })
  }

  return result
}

function eventStartYear(e: TimelineEvent): number {
  return e.startDate.year
}

function eventEndYear(e: TimelineEvent): number {
  return e.endDate?.year ?? e.startDate.year
}

function eventDuration(e: TimelineEvent): number {
  return eventEndYear(e) - eventStartYear(e)
}

/** Pick the tag to use for row grouping: shortest tag id among those matching active tags. */
function getPrimaryTag(event: TimelineEvent, activeTags: string[]): string {
  const tags = event.tags ?? []
  if (tags.length === 0 || activeTags.length === 0) return ""

  const matching = tags.filter(
    (t) =>
      activeTags.includes(t) ||
      activeTags.some((active) => t === active || t.startsWith(active + ":"))
  )
  if (matching.length === 0) return ""

  return matching.reduce((a, b) => (a.length <= b.length ? a : b))
}

function overlaps(
  startA: number,
  endA: number,
  startB: number,
  endB: number
): boolean {
  return startA < endB && endA > startB
}

/**
 * Assign row indices so that:
 * - Events are grouped by tag (shortest tag for multi-tag events).
 * - Within each tag, events are sorted by start date then by range size (smaller first).
 * - Overlapping events within a tag are on separate rows; earlier-starting events appear on top (lower row index).
 */
export function assignEventRows(
  items: EventWithPosition[],
  activeTags: string[]
): EventWithRow[] {
  const byTag = new Map<string, EventWithPosition[]>()
  for (const item of items) {
    const tag = getPrimaryTag(item.event, activeTags)
    const list = byTag.get(tag) ?? []
    list.push(item)
    byTag.set(tag, list)
  }

  const tagIds = Array.from(byTag.keys()).sort((a, b) => {
    if (a === "") return 1
    if (b === "") return -1
    return a.localeCompare(b)
  })

  const result: EventWithRow[] = []
  let globalRowOffset = 0

  for (const tagId of tagIds) {
    const group = byTag.get(tagId) ?? []
    const sorted = [...group].sort((a, b) => {
      const startA = eventStartYear(a.event)
      const startB = eventStartYear(b.event)
      if (startA !== startB) return startA - startB
      const durA = eventDuration(a.event)
      const durB = eventDuration(b.event)
      return durA - durB
    })

    const rowIntervals: number[][] = []

    for (const item of sorted) {
      const start = eventStartYear(item.event)
      const end = eventEndYear(item.event)
      let row = 0
      while (row < rowIntervals.length) {
        const intervals = rowIntervals[row]
        const hasOverlap = intervals.some((_, i) => {
          if (i % 2 === 1) return false
          return overlaps(start, end, intervals[i], intervals[i + 1])
        })
        if (!hasOverlap) break
        row++
      }
      if (row >= rowIntervals.length) rowIntervals.push([])
      rowIntervals[row].push(start, end)

      result.push({
        ...item,
        rowIndex: globalRowOffset + row,
      })
    }

    globalRowOffset += rowIntervals.length
  }

  return result
}
