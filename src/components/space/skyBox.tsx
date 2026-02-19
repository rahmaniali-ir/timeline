import { useTimeline } from "@/contexts/timeline"
import { useTexture } from "@/hooks/useTexture"
import { BackSide } from "three"

export function SkyBox() {
  const { isNight, selectedGlobeMap } = useTimeline()

  const [starsTexture, starsNormalMap] = useTexture(
    [
      `${isNight ? 'stars.jpg' : 'starsLight.jpg'}`,
      'starsNormalMap.jpg'
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