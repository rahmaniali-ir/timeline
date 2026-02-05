import { MathUtils, Vector3 } from "three"

export function latLngToVector3(
  lat: number,
  lng: number,
  radius = 1,
  height = 0
): Vector3 {
  const phi = MathUtils.degToRad(90 - lat)
  const theta = MathUtils.degToRad(lng + 180)

  const r = radius + height

  return new Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta)
  )
}
