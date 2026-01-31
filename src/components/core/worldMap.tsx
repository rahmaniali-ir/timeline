import { COUNTRIES } from "@/constants/countries"
import { useTimeline } from "@/contexts/timeline"
import { cn } from "@/lib/utils"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { SVGWorldMap } from "./svgWorldMap"

type CountryLabelSize = "xs" | "sm" | "md" | "lg" | "xl"

interface CountryBoundry {
  id: string
  name: string
  bounding: DOMRect
  size: CountryLabelSize
  hovered?: boolean
  selected?: boolean
}

function getElementSize(element: SVGElement | HTMLElement): CountryLabelSize {
  const bounding = element.getBoundingClientRect()
  const maxSize = Math.max(bounding.height, bounding.width)

  if (maxSize < 50) return "xs"
  else if (maxSize < 100) return "sm"
  else if (maxSize < 200) return "md"
  else if (maxSize < 300) return "lg"

  return "xl"
}

function MapBoundary({
  id,
  name,
  bounding,
  size,
  hovered,
  selected,
  className,
}: CountryBoundry & {
  className?: string
}) {
  return (
    <div
      style={{
        top: bounding.top + "px",
        left: bounding.left + "px",
        height: bounding.height + "px",
        width: bounding.width + "px",
      }}
      className={cn("fixed pointer-events-none animate-fade-in")}
    >
      <div className='absolute left-1/2 top-1/2 -translate-1/2 text-nowrap'>
        <div
          className={cn(
            "flex flex-col items-center gap-1 font-semibold transition-all",
            size === "xs" && "text-xs",
            size === "sm" && "text-sm",
            size === "md" && "text-base",
            size === "lg" && "text-lg font-bold",
            size === "xl" && "text-2xl font-black",
            hovered && "text-neutral-400",
            selected && "text-neutral-600",
            hovered && selected && "text-neutral-800",
            className
          )}
          style={{
            letterSpacing: size === "xl" ? "0.5ch" : undefined,
          }}
        >
          <img
            src={"/images/flags/" + id + ".jpg"}
            alt={name}
            className={cn(
              "size-[1em] rounded-full object-cover transition-all duration-300",
              selected && "animate-pop",
              hovered && selected && "scale-125"
            )}
          />

          <span>{name}</span>
        </div>
      </div>
    </div>
  )
}

export function WorldMap({ className }: { className?: string }) {
  const {
    hoveredCountries,
    startCountryHovering,
    endCountryHovering,
    selectedCountries,
    isCountrySelected,
    toggleCountrySelection,
    setSelectedCountries,
    mapZoom,
    mapPanX,
    mapPanY,
    setMapZoom,
    setMapPanX,
    setMapPanY,
  } = useTimeline()

  const svgRef = useRef<SVGGElement>(null)

  const containerRef = useRef<HTMLDivElement>(null)
  const svgWrapperRef = useRef<HTMLDivElement>(null)

  const isPanningRef = useRef(false)
  const lastXRef = useRef(0)
  const lastYRef = useRef(0)
  const [isPanning, setIsPanning] = useState(false)

  const countryElements = useMemo(() => {
    const elements =
      svgRef.current?.querySelectorAll<SVGElement>("& > g, & > path")

    return elements ? [...elements] : []
  }, [svgRef.current])

  const getCountryElements = useCallback(
    (ids: string[]) => countryElements.filter(e => ids.includes(e.id)),
    [countryElements]
  )

  const hoveredCountriesElements = useMemo(
    () => getCountryElements(hoveredCountries),
    [hoveredCountries]
  )

  const selectedCountriesElements = useMemo(
    () => getCountryElements(selectedCountries),
    [selectedCountries]
  )

  const visibleCountries = useMemo(() => {
    const countries = [...hoveredCountries]

    selectedCountries.forEach(c => {
      if (!countries.includes(c)) countries.push(c)
    })

    return countries
  }, [hoveredCountries, selectedCountries])

  const countriesBoundaries = useMemo<CountryBoundry[]>(
    () =>
      getCountryElements(visibleCountries)
        .filter(e => e.id in COUNTRIES)
        .map(element => {
          const id = element.id
          const name = COUNTRIES[id].name

          return {
            id,
            name,
            bounding: element.getBoundingClientRect(),
            size: getElementSize(element),
            hovered: hoveredCountries.includes(id),
            selected: isCountrySelected(id),
          }
        }),
    [
      getCountryElements,
      visibleCountries,
      hoveredCountries,
      isCountrySelected,
      mapZoom,
      mapPanX,
      mapPanY,
    ]
  )

  useEffect(() => {
    countryElements?.forEach(c => (c.style.fill = "currentColor"))

    selectedCountriesElements?.forEach(element => {
      element.style.fill = "var(--color-neutral-400)"
    })

    hoveredCountriesElements?.forEach(element => {
      const id = element.id

      if (id)
        element.style.fill = isCountrySelected(id)
          ? "#676767"
          : "var(--color-neutral-300)"
    })
  }, [
    countryElements,
    hoveredCountriesElements,
    selectedCountriesElements,
    isCountrySelected,
  ])

  function onWheel(e: React.WheelEvent) {
    const container = containerRef.current
    if (!container) return

    e.preventDefault()

    const rect = container.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const width = rect.width
    const height = rect.height

    // mouse position relative to center (in pixels)
    const centerX = width / 2
    const centerY = height / 2
    const mouseOffsetX = mouseX - centerX
    const mouseOffsetY = mouseY - centerY

    // zoom strength
    const zoomIntensity = 0.001
    const zoomFactor = Math.exp(-e.deltaY * zoomIntensity)
    const newZoom = Math.max(0.1, Math.min(10, mapZoom * zoomFactor))

    // adjust pan to keep mouse position fixed in SVG space
    // The mouse position in SVG space before zoom
    const svgMouseX = mouseOffsetX / mapZoom + mapPanX
    const svgMouseY = mouseOffsetY / mapZoom + mapPanY

    // After zoom, we want the same SVG point under the mouse
    const newPanX = svgMouseX - mouseOffsetX / newZoom
    const newPanY = svgMouseY - mouseOffsetY / newZoom

    setMapZoom(newZoom)
    setMapPanX(newPanX)
    setMapPanY(newPanY)
  }

  function onMouseDown(e: React.MouseEvent) {
    // Only pan with middle mouse button (button 1)
    if (e.button !== 1) return
    e.preventDefault()
    isPanningRef.current = true
    setIsPanning(true)
    lastXRef.current = e.clientX
    lastYRef.current = e.clientY
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!isPanningRef.current) return

    const container = containerRef.current
    if (!container) return

    const dx = e.clientX - lastXRef.current
    const dy = e.clientY - lastYRef.current
    lastXRef.current = e.clientX
    lastYRef.current = e.clientY

    // Convert pixel movement to SVG coordinate movement
    const deltaX = dx / mapZoom
    const deltaY = dy / mapZoom

    setMapPanX(prev => prev + deltaX)
    setMapPanY(prev => prev + deltaY)
  }

  function stopPanning() {
    isPanningRef.current = false
    setIsPanning(false)
  }

  useEffect(() => {
    const handleGlobalMouseUp = (e: MouseEvent) => {
      if (e.button === 1) {
        stopPanning()
      }
    }

    window.addEventListener("mouseup", handleGlobalMouseUp)

    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp)
    }
  }, [])

  useEffect(() => {
    const mouseEnterListener = (e: MouseEvent) => {
      const element = e.target as SVGElement
      const id = element.id

      startCountryHovering(id)
    }

    const mouseLeaveListener = (e: MouseEvent) => {
      const element = e.target as SVGElement
      const id = element.id

      endCountryHovering(id)
    }

    const mouseClickListener = (e: MouseEvent) => {
      const element = e.target as SVGElement
      const id = element.id || element.parentElement?.id

      if (id) toggleCountrySelection(id)
    }

    const mouseDblClickListener = (e: MouseEvent) => {
      const element = e.target as SVGElement
      const id = element.id || element.parentElement?.id

      if (id) setSelectedCountries([id])
    }

    countryElements?.forEach(element => {
      element.addEventListener("mouseenter", mouseEnterListener)
      element.addEventListener("mouseleave", mouseLeaveListener)
      element.addEventListener("click", mouseClickListener)
      element.addEventListener("dblclick", mouseDblClickListener)
    })

    return () => {
      countryElements?.forEach(element => {
        element.removeEventListener("mouseenter", mouseEnterListener)
        element.removeEventListener("mouseleave", mouseLeaveListener)
        element.removeEventListener("click", mouseClickListener)
        element.removeEventListener("dblclick", mouseDblClickListener)
      })
    }
  }, [countryElements, toggleCountrySelection, setSelectedCountries])

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      onWheel={onWheel}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={stopPanning}
      onMouseLeave={stopPanning}
      onContextMenu={e => e.preventDefault()}
      style={{
        cursor: isPanning ? "grabbing" : "default",
      }}
    >
      <div
        ref={svgWrapperRef}
        style={{
          transform: `translate(${mapPanX}px, ${mapPanY}px) scale(${mapZoom})`,
          transformOrigin: "center center",
        }}
        className='w-full h-full isolate'
      >
        {/* <img
          src='/images/maps/map-1.jpg'
          className='absolute top-0 left-0 size-full object-contain -z-10'
        /> */}

        <SVGWorldMap ref={svgRef} className='text-neutral-200' />
      </div>

      {countriesBoundaries.map(boundary => (
        <MapBoundary key={boundary.id} {...boundary} />
      ))}
    </div>
  )
}
