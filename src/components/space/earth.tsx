import { useLoader, useFrame } from "@react-three/fiber"
import { Hud, Line } from "@react-three/drei"
import { useState, useRef, useMemo } from "react"
import { FileLoader, TextureLoader, Mesh, Vector3, BufferGeometry, Shape, ShapeGeometry } from "three"
import { EventIndicator } from "./eventIndicator"
import { COUNTRIES_LIST } from "@/constants/countries"
import type { Indicator } from "@/types/indicator"

function latLngToVector3(
  lat: number,
  lng: number,
  radius: number
) {
  const phi = (90 - lat) * Math.PI / 180
  const theta = (lng + 180) * Math.PI / 180

  return new Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  )
}

function polygonToShape(polygon: number[][]) {
  const shape = new Shape()

  polygon.forEach(([lng, lat], i) => {
    const x = lng
    const y = lat
    if (i === 0) shape.moveTo(x, y)
    else shape.lineTo(x, y)
  })

  return shape
}

function projectGeometryToSphere(
  geometry: BufferGeometry,
  radius: number
) {
  const pos = geometry.attributes.position

  for (let i = 0; i < pos.count; i++) {
    const lng = pos.getX(i)
    const lat = pos.getY(i)

    const v = latLngToVector3(lat, lng, radius * 1.002)

    pos.setXYZ(i, v.x, v.y, v.z)
  }

  geometry.computeVertexNormals()
}

function useGeoJSON(url: string) {
  const data = useLoader(FileLoader, url)
  return JSON.parse(data)
}

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
      // displacementMap={heightMap}
      // normalMap={normalMap}
      // displacementScale={0.06}
      // displacementBias={0.01}
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

function CountryBorders({ geojson, radius = 1 }) {
  const [hovered, setHovered] = useState(false)

  return (
    <group>
      {geojson.features.map((feature, i) => {
        const polygons =
          feature.geometry.type === "MultiPolygon"
            ? feature.geometry.coordinates
            : [feature.geometry.coordinates]

        // const shape = polygonToShape(polygons[0])
        // const geometry2D = new ShapeGeometry(shape)

        // projectGeometryToSphere(geometry2D, radius)

        return <>
          {
            polygons.map((polygon, j) => {
              const points = polygon[0].map(
                ([lng, lat]: number[]) =>
                  latLngToVector3(lat, lng, radius + 0.001)
              )

              const geometry =
                new BufferGeometry().setFromPoints(points)

              return (
                <Line
                  key={`${i}-${j}`}
                  points={points}
                  geometry={geometry}
                  onPointerOver={(e) => {
                    e.stopPropagation()
                    console.log(feature.properties.NAME)
                  }}
                >
                  <lineBasicMaterial color="white" />
                </Line>
              )
            })
          }

          {/* <mesh
            geometry={geometry2D}
            onPointerOver={(e) => {
              e.stopPropagation()
              setHovered(feature.properties.NAME)
            }}
            onPointerOut={() => setHovered(null)}
          >
            <meshStandardMaterial
              color={hovered ? "orange" : "#ffffff"}
              transparent
              opacity={hovered ? 0.6 : 0}
              depthWrite={false}
            />
          </mesh> */}
        </>
      })}
    </group>
  )
}

export function Earth() {
  const geo = useGeoJSON("/geojson/ne_10m_admin_0_countries.json")
  if (!geo) return null

  const [isNight] = useState(false)

  const indicators: Indicator[] = useMemo(() => {
    const indicators: Indicator[] = []

    // country capitals
    COUNTRIES_LIST.forEach(c => indicators.push({
      id: c.capital.id,
      name: c.capital.name,
      latLng: c.capital.latLng,
      color: c.color,
    }))

    return indicators
  }, [])

  return (
    <group>
      <Globe isNight={isNight} />
      <Clouds />
      <Atmosphere />

      {/* Countries */}
      <CountryBorders geojson={geo} radius={1} />

      {/* indicators */}
      <Hud>
        {indicators.map((indicator) => (
          <EventIndicator
            key={indicator.id}
            indicator={indicator}
          />
        )
        )}

        {/* <EventIndicator title="Tehran" color="green" lat={35.6892} lng={51.3890} />
        <EventIndicator title="London" color="green" lat={51.5074} lng={-0.1278} />
        <EventIndicator title="Tokyo" color="green" lat={35.6762} lng={139.6503} />
        <EventIndicator title="Everest" color="red" lat={27.9881} lng={86.9253} /> */}
      </Hud>
    </group>
  )
}
