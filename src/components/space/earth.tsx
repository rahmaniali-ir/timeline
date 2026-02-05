import { useLoader, useFrame } from "@react-three/fiber"
import { useState, useRef } from "react"
import { TextureLoader, Mesh } from "three"
import { EventIndicator } from "./eventIndicator"

export function Globe({ isNight = false }: { isNight?: boolean }) {
  const [texture, normalMap, heightMap, nightTexture] = useLoader(
    TextureLoader,
    [
      '/images/maps/8k_earth_daymap.jpg',
      '/images/maps/8k_earth_normal_map.jpg',
      '/images/maps/worldHeightMap.jpg',
      '/images/maps/8k_earth_nightmap.jpg',
    ]
  )

  return (
    <mesh
      onClick={() => console.log('Earth clicked')}
    // onPointerOver={(e) => (e.object.scale.set(1.05, 1.05, 1.05))}
    // onPointerOut={(e) => (e.object.scale.set(1, 1, 1))}
    >
      <sphereGeometry args={[1, 512, 512]} />

      <meshStandardMaterial
        map={isNight ? nightTexture : texture}
        displacementMap={heightMap}
        normalMap={normalMap}
        displacementScale={0.06}
        displacementBias={0.01}
      />
    </mesh>
  )
}

export function Clouds() {
  const [cloudsTexture] = useLoader(
    TextureLoader,
    ['/images/maps/8k_earth_clouds.jpg']
  )
  const meshRef = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.03 // Slow rotation
    }
  })

  return (
    <mesh ref={meshRef} scale={[1.06, 1.06, 1.06]}>
      <sphereGeometry args={[1, 512, 512]} />

      <meshStandardMaterial
        transparent
        map={cloudsTexture}
        alphaMap={cloudsTexture}
      />
    </mesh>
  )
}

export function Atmosphere() {
  return (
    <mesh scale={[1.08, 1.08, 1.08]}>
      <sphereGeometry args={[1, 512, 512]} />

      <meshStandardMaterial
        transparent
        color="#33A1B8"
        opacity={0.2}
      />
    </mesh>
  )
}

export function Earth() {
  const [isNight] = useState(false)

  return (
    <group>
      <Globe isNight={isNight} />
      <Clouds />
      <Atmosphere />

      {/* indicators */}
      <EventIndicator lat={35.6892} lng={51.3890} /> {/* Tehran */}
      <EventIndicator lat={51.5074} lng={-0.1278} /> {/* London */}
      <EventIndicator lat={35.6762} lng={139.6503} /> {/* Tokyo */}
    </group>
  )
}
