import type { LatLng } from "./space"

export type IndicatorShape = 'square' | 'circle' | 'triangle'

export interface Indicator {
  id: string
  name: string
  latLng?: LatLng
  shape?: IndicatorShape
  line?: boolean
  color?: string
  image?: string
  size?: number
  lockElementId?: string
}