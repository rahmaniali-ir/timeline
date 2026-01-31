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

export interface PositionedEvent {
  event: TimelineEvent
  left: number
  width: number
}
