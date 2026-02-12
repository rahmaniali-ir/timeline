import type { MapInfo } from "@/types/map"

export const MAPS: Record<string, MapInfo> = {
  default: {
    id: "default",
    name: "Default",
    texture: "NE2_LR_LC_SR_W_DR.jpg",
    normalMap: "2k_earth_normal_map.jpg",
    heightMap: "GRAY_LR_SR_OB.jpg",
    thumbnail: "NE2_LC_SR_W_DR.jpg",
    theme: "light",
  },
  hypsometric: {
    id: "hypsometric",
    name: "Hypsometric",
    texture: "HYP_LR_SR_OB_DR.jpg",
    normalMap: "2k_earth_normal_map.jpg",
    heightMap: "GRAY_LR_SR_OB.jpg",
    thumbnail: "HYP_LR_SR_OB_DR.jpg",
    theme: "light",
  },
  night: {
    id: "night",
    name: "Night",
    texture: "2k_earth_nightmap.jpg",
    normalMap: "2k_earth_normal_map.jpg",
    heightMap: "GRAY_LR_SR_OB.jpg",
    thumbnail: "earth_nightmap.jpg",
    theme: "dark",
  },
  shadedRelief: {
    id: "shadedRelief",
    name: "Shaded Relief",
    texture: "SR_LR.jpg",
    normalMap: "2k_earth_normal_map.jpg",
    heightMap: "GRAY_LR_SR_OB.jpg",
    thumbnail: "SR_LR.jpg",
    theme: "light",
  },
}

export const MAPS_LIST = Object.values(MAPS)
