import { TextureLoader, BackSide } from "three"
import { useLoader } from "@react-three/fiber"
import { useTimeline } from "@/contexts/timeline"

export function SkyBox() {
  const { isNight } = useTimeline()
  const texture = useLoader(
    TextureLoader,
    `/maps/textures/${isNight ? '8k_stars_milky_way.jpg' : '8k_stars_milky_way_light.jpg'}`
  )

  return (
    <mesh>
      <sphereGeometry args={[50, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        side={BackSide}
        roughness={0}
      />
    </mesh>
  )
}