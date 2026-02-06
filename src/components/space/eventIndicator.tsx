import { latLngToVector3 } from "@/lib/space"
import type { Indicator } from "@/types/indicator"
import type { LatLng } from "@/types/space"
import { Text } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { Suspense, useMemo, useRef } from "react"
import * as THREE from "three"

function BillboardText({
  position,
  children,
  ...props
}: {
  position: [number, number, number]
  children: string
  [key: string]: any
}) {
  const groupRef = useRef<THREE.Group>(null)
  const { camera } = useThree()

  useFrame(() => {
    if (groupRef.current) {
      // Make text always face the camera
      groupRef.current.lookAt(camera.position)
    }
  })

  return (
    <group ref={groupRef} position={position}>
      <Text
        {...props}
      >
        {children}
      </Text>
    </group>
  )
}

export function EventIndicator({ indicator }: { indicator: Indicator }) {
  const { name, latLng, color = 'white' } = indicator

  const position = latLng ? latLngToVector3(latLng.lat, latLng.lng, 1, 0.025) : undefined

  // Calculate text position above the sphere
  const textPosition = useMemo(() => {
    const textOffset = 0.075 // Distance above the sphere
    const normalized = new THREE.Vector3(...position).normalize()
    return normalized.multiplyScalar(1 + textOffset).toArray() as [number, number, number]
  }, [position])

  if (!name) return null

  return (
    <>
      <mesh position={position} scale={0.5}>
        <sphereGeometry args={[0.01, 16, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* <pointLight position={position} lookAt={textPosition} intensity={20} color="white" /> */}
      {/* <pointLight position={textPosition} intensity={0.2} color="white" /> */}
      <ambientLight intensity={0.05} color="white" />

      {/* 3D text title */}
      <Suspense fallback={null}>
        <BillboardText
          position={textPosition}
          fontSize={0.01}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.001}
          outlineColor="#000000"
        >
          {name}
        </BillboardText>
      </Suspense>
    </>
  )
}
