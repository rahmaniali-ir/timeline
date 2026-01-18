import { useTimeline } from "@/contexts/timeline"
import { cn } from "@/lib/utils"
import { useCallback, useEffect, useMemo, useRef } from "react"
import { SVGWorldMap } from "./svgWorldMap"
import { countryNames } from "@/constants/countryNames"

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
      className={cn("fixed pointer-events-none")}
    >
      <div className='absolute left-1/2 top-1/2 -translate-1/2 text-nowrap'>
        <div
          className={cn(
            "font-semibold transition-all",
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
          {name}
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
  } = useTimeline()

  const svgRef = useRef<SVGGElement>(null)

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
        .filter(e => e.id in countryNames)
        .map(element => {
          const id = element.id
          const name = countryNames[id]

          return {
            id,
            name,
            bounding: element.getBoundingClientRect(),
            size: getElementSize(element),
            hovered: hoveredCountries.includes(id),
            selected: isCountrySelected(id),
          }
        }),
    [getCountryElements, visibleCountries, hoveredCountries, isCountrySelected]
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
    <div className={cn("relative", className)}>
      <SVGWorldMap ref={svgRef} className='text-neutral-200' />

      {countriesBoundaries.map((boundary, index) => (
        <MapBoundary key={boundary.id + "-" + index} {...boundary} />
      ))}
    </div>
  )
}
