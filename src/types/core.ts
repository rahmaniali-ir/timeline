export interface TimePoint {
  year: number
  month?: number
  day?: number
  hour?: number
  minute?: number
}

export interface ImageAsset {
  src: string
  alt?: string
  timestamp?: number
  description?: string
}

export type Images = ImageAsset[]

export interface LinkAsset {
  url: string
  name: string
}

export type Links = Record<string, LinkAsset>
