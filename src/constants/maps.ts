import type { MapInfo } from "@/types/map"

export const MAPS: Record<string, MapInfo> = {
  default: {
    id: "default",
    name: "Default",
    texture: "NE2_LR_LC_SR_W_DR.jpg",
    normalMap: "8k_earth_normal_map.jpg",
    heightMap: "GRAY_LR_SR_OB.jpg",
    thumbnail: "NE2_LR_LC_SR_W_DR.jpg",
    theme: "light",
  },
  night: {
    id: "night",
    name: "Night",
    texture: "8k_earth_nightmap.jpg",
    normalMap: "8k_earth_normal_map.jpg",
    heightMap: "GRAY_LR_SR_OB.jpg",
    thumbnail: "8k_earth_nightmap.jpg",
    theme: "dark",
  },
}

export const MAPS_LIST = Object.values(MAPS)
