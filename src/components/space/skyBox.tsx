import { TextureLoader, BackSide } from "three"
import { useLoader } from "@react-three/fiber"

export function SkyBox() {
  const texture = useLoader(TextureLoader, '/images/maps/8k_stars_milky_way.jpg')
  // const meshRef = useRef<THREE.Mesh>(null!)

  // useFrame(() => {
  //   // subtle rotation for life
  //   meshRef.current.rotation.y += 0.0002
  // })

  return (
    // <mesh ref={meshRef}>
    <mesh>
      <sphereGeometry args={[50, 64, 64]} />
      <meshBasicMaterial
        map={texture}
        side={BackSide}
      />
    </mesh>
  )
}