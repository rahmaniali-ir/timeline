import { TextureLoader, BackSide } from "three"
import { useLoader } from "@react-three/fiber"
import { useTimeline } from "@/contexts/timeline"

export function SkyBox() {
  const { isNight, selectedGlobeMap } = useTimeline()

  const [starsTexture, starsNormalMap] = useLoader(
    TextureLoader,
    [
      `/maps/textures/lg/${isNight ? 'stars.jpg' : 'starsLight.jpg'}`,
      '/maps/textures/lg/starsNormalMap.png'
    ]
  )

  const { starsColor } = selectedGlobeMap

  return (
    <mesh>
      <sphereGeometry args={[50, 64, 64]} />
      <meshStandardMaterial
        map={starsTexture}
        normalMap={starsNormalMap}
        side={BackSide}
        color={starsColor}
      />
    </mesh>
  )
}