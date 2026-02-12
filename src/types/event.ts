import type { TimePoint } from "./core"
import type { Icon } from "./icon"

export interface EventTag {
  id: string
  name: string
  color?: string
  icon?: Icon
  className?: string
}

export interface TimelineEvent {
  id: string
  title: string
  startDate: TimePoint
  endDate?: TimePoint
  importance?: number
  tags?: string[]
  description?: string
  links?: Record<string, string | undefined>
  images?: string[]
  location?: string
  counteries?: string[]
  people?: string[]
}

export interface TimePointRange {
  from: TimePoint
  to: TimePoint
}

export type Positioned<T extends {} = Object> = T & {
  left: number
  width: number
}

export interface PositionedEvent extends Positioned {
  event: TimelineEvent
  rowIndex: number
  /** For event titles layer; omitted for year labels. */
  titleRowIndex?: number
}
