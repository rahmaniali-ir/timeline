import { useLoader } from "@react-three/fiber"
import { FileLoader } from "three"

export function useGeoJSON(url: string) {
  const data = useLoader(FileLoader, url)
  return JSON.parse(data)
}
