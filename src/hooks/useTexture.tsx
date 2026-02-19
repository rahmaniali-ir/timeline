import { useTimeline } from "@/contexts/timeline"
import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three"

export function useTexture(sources: string[]) {
  const { quality } = useTimeline()

  const paths = sources.map(src => `/maps/textures/${quality}/${src}`)

  return useLoader(
    TextureLoader,
    paths
  )
}
