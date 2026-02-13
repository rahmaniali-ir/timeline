import type { ThemeSchema } from "./theme"

export interface MapInfo {
  id: string
  name: string
  texture: string
  theme: ThemeSchema
  normalMap?: string
  heightMap?: string
  thumbnail?: string
  countryBorderColor?: string
  atmosphereColor?: string
  font?: string
}
