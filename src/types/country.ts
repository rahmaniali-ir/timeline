import type { LatLng, LatLngRange } from "./space"

export interface Country {
  id: string
  name: string
  capital: City
  latLngRange: LatLngRange
  flag?: string
  color?: string
  description?: string
}

export interface City {
  id: string
  name: string
  latLng: LatLng
}
