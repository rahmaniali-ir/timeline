import { latLngToVector3 } from "@/lib/space"
import type { LatLng } from "@/types/space"

export function EventIndicator({ lat, lng }: LatLng) {
  const position = latLngToVector3(lat, lng, 1, 0.03)

  return (
    <mesh position={position}>
      <sphereGeometry args={[0.01, 16, 16]} />
      <meshStandardMaterial color="#ff0000" />
    </mesh>
  )
}
