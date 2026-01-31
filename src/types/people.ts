import type { Images, Links, TimePoint } from "./core"

export interface Person {
  id: string
  name: string
  description?: string
  birthCountry?: string
  countries?: string[]
  startDate: TimePoint
  endDate?: TimePoint
  images?: Images
  links?: Links
}

export type People = Person[]
