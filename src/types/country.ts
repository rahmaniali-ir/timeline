import type { LatLng } from "./space"

export interface Country {
  id: string
  name: string
  capital: City
  flag?: string
  color?: string
  description?: string
}

export interface City {
  id: string
  name: string
  latLng: LatLng
}
