import { COUNTRIES_LIST } from "@/constants/countries"
import { useTimeline } from "@/contexts/timeline"
import { latLngToVector3 as latLngToVector3Util } from "@/lib/space"
import type { Indicator } from "@/types/indicator"
import { Hud, Line } from "@react-three/drei"
import { useFrame, useLoader, useThree } from "@react-three/fiber"
import { useMemo, useRef, useState } from "react"
import { FileLoader, Mesh, TextureLoader, Vector3 } from "three"
import { EventIndicator } from "./eventIndicator"

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


function useGeoJSON(url: string) {
  const data = useLoader(FileLoader, url)
  return JSON.parse(data)
}

export function Globe() {
  const { selectedGlobeMap } = useTimeline()

  const [texture, normalMap, heightMap] = useLoader(
    TextureLoader,
    [
      `/maps/textures/lg/${selectedGlobeMap.texture}`,
      `/maps/textures/lg/${selectedGlobeMap.normalMap}`,
      `/maps/textures/lg/${selectedGlobeMap.heightMap}`,
    ]
  )

  return (
    <mesh
      onClick={() => console.log('Earth clicked')}
    // onPointerOver={(e) => (e.object.scale.set(1.05, 1.05, 1.05))}
    // onPointerOut={(e) => (e.object.scale.set(1, 1, 1))}
    >
      <sphereGeometry args={[1, 256, 256]} />

      <meshStandardMaterial
        map={texture}
        displacementMap={heightMap}
        normalMap={normalMap}
        displacementScale={0.03}
        displacementBias={0.01}
      />
    </mesh>
  )
}

export function Clouds() {
  const [cloudsTexture] = useLoader(
    TextureLoader,
    ['/maps/textures/lg/clouds.jpg']
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
  const { isNight } = useTimeline()

  return (
    <mesh scale={[1.08, 1.08, 1.08]}>
      <sphereGeometry args={[1, 512, 512]} />

      <meshStandardMaterial
        transparent
        color={isNight ? '#141833' : '#33A1B8'}
        opacity={0.2}
      />
    </mesh>
  )
}

function CountryBorders({
  geojson,
  radius = 1,
  groupRefs
}: {
  geojson: any,
  radius?: number,
  groupRefs: React.MutableRefObject<Map<number, any>>
}) {
  const { selectedGlobeMap } = useTimeline()

  const { theme } = selectedGlobeMap
  const isDark = theme === 'dark'

  return (
    <group>
      {geojson.features.map((feature, i) => {
        // Add null check for geometry
        if (!feature.geometry) return null

        const polygons =
          feature.geometry.type === "MultiPolygon"
            ? feature.geometry.coordinates
            : [feature.geometry.coordinates]

        return (
          <group
            key={i}
            ref={(ref) => {
              if (ref) {
                groupRefs.current.set(i, ref)
              } else {
                groupRefs.current.delete(i)
              }
            }}
          >
            {polygons.map((polygon, j) => {
              // Add null check for polygon
              if (!polygon || !polygon[0]) return null

              const points = polygon[0].map(
                ([lng, lat]: number[]) =>
                  latLngToVector3(lat, lng, radius + 0.02)
              )

              return (
                <Line
                  key={`${i}-${j}`}
                  points={points}
                  onPointerOver={(e) => {
                    e.stopPropagation()
                    console.log(feature.properties?.NAME)
                  }}
                  lineWidth={2}
                  color={isDark ? '#787878' : 'black'}
                >
                  {/* <lineBasicMaterial color='black' /> */}
                </Line>
              )
            })}
          </group>
        )
      })}
    </group>
  )
}

function VisibleIndicators({
  indicators,
  indicatorRefs
}: {
  indicators: Indicator[],
  indicatorRefs: React.MutableRefObject<Map<string, any>>
}) {
  return (
    <>
      {indicators.map((indicator) => (
        <group
          key={indicator.id}
          ref={(ref) => {
            if (ref) {
              indicatorRefs.current.set(indicator.id, ref)
            }
          }}
        >
          <EventIndicator indicator={indicator} />
        </group>
      ))}
    </>
  )
}

export function Earth() {
  const { showGlobeClouds, showGlobeAtmosphere, showCountryBoundries, showCountryCapitals } = useTimeline()
  const { camera } = useThree()

  const geo = useGeoJSON("/maps/countries.geojson")

  const [isNight] = useState(false)
  // Use refs to store visibility data to avoid state updates during render
  const visibleFeaturesRef = useRef<Set<number>>(new Set())
  const visibleIndicatorsRef = useRef<Set<string>>(new Set())

  const frameCountRef = useRef(0)
  const lastCameraDirRef = useRef<Vector3 | null>(null)
  const countryGroupRefs = useRef<Map<number, any>>(new Map())
  const indicatorGroupRefs = useRef<Map<string, any>>(new Map())

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

  // Pre-compute country feature centers for faster visibility checks
  const countryCenters = useMemo(() => {
    if (!geo) return []

    return geo.features.map((feature: any) => {
      if (!feature.geometry) return null

      const polygons =
        feature.geometry.type === "MultiPolygon"
          ? feature.geometry.coordinates
          : [feature.geometry.coordinates]

      const firstPoint = polygons[0]?.[0]?.[0] // [lng, lat]
      if (firstPoint) {
        const [lng, lat] = firstPoint
        return latLngToVector3(lat, lng, 1).normalize()
      }

      return null
    })
  }, [geo])

  // Throttled visibility check - only every 5 frames and if camera moved significantly
  useFrame(() => {
    if (!geo) return

    frameCountRef.current++

    // Only check every 5 frames
    if (frameCountRef.current % 5 !== 0) return

    const cameraPosition = new Vector3()
    camera.getWorldPosition(cameraPosition)
    const cameraDirection = cameraPosition.clone().normalize()

    // Only update if camera direction changed significantly (threshold: 0.05)
    if (lastCameraDirRef.current) {
      const angleChange = cameraDirection.dot(lastCameraDirRef.current)
      if (angleChange > 0.998) { // ~3.6 degrees change threshold
        return // Camera hasn't moved enough, skip update
      }
    }
    lastCameraDirRef.current = cameraDirection.clone()

    // Check which country features are visible using pre-computed centers
    const newVisibleFeatures = new Set<number>()
    countryCenters.forEach((center, i) => {
      if (center) {
        const dotProduct = center.dot(cameraDirection)
        if (dotProduct > 0) {
          newVisibleFeatures.add(i)
        }
      }
    })

    // Check which indicators are visible
    const newVisibleIndicators = new Set<string>()
    indicators.forEach((indicator) => {
      if (indicator.latLng) {
        const pointPos = latLngToVector3Util(indicator.latLng.lat, indicator.latLng.lng, 1).normalize()
        const dotProduct = pointPos.dot(cameraDirection)

        if (dotProduct > 0) {
          newVisibleIndicators.add(indicator.id)
        }
      }
    })

    // Update refs directly (no state update during render)
    visibleFeaturesRef.current = newVisibleFeatures
    visibleIndicatorsRef.current = newVisibleIndicators

    // Update Three.js object visibility directly (no React updates)
    countryGroupRefs.current.forEach((group, featureIndex) => {
      if (group) {
        group.visible = newVisibleFeatures.has(featureIndex)
      }
    })

    indicatorGroupRefs.current.forEach((group, id) => {
      if (group) {
        group.visible = newVisibleIndicators.has(id)
      }
    })
  })

  if (!geo) return null

  return (
    <group>
      <Globe />

      {showGlobeClouds && <Clouds />}
      {showGlobeAtmosphere && <Atmosphere />}

      {/* Countries */}
      {showCountryBoundries && <CountryBorders
        geojson={geo}
        radius={1}
        groupRefs={countryGroupRefs}
      />}

      {/* indicators */}
      <Hud>
        {showCountryCapitals && <VisibleIndicators
          indicators={indicators}
          indicatorRefs={indicatorGroupRefs}
        />}
      </Hud>
    </group>
  )
}
