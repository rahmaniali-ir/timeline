import { useTimeline } from "@/contexts/timeline"
import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"
import { SVGWorldMap } from "./svgWorldMap"

export function WorldMap({ className }: { className?: string }) {
  const { hoveredCountries, startCountryHovering, endCountryHovering } =
    useTimeline()

  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const countryElements = svgRef.current?.querySelectorAll(
      "& > g, & > path"
    ) as NodeListOf<SVGElement>

    countryElements.forEach(e => (e.style.fill = "currentColor"))

    hoveredCountries.forEach(hovered => {
      const countryElement: SVGElement | undefined =
        svgRef.current?.querySelector("#" + hovered) ?? undefined

      if (countryElement) countryElement.style.fill = "gray"
    })
  }, [hoveredCountries])

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

    const countryElements = svgRef.current?.querySelectorAll(
      "& > g, & > path"
    ) as NodeListOf<SVGElement>

    countryElements?.forEach(element => {
      element.addEventListener("mouseenter", mouseEnterListener)
      element.addEventListener("mouseleave", mouseLeaveListener)
    })

    return () => {
      countryElements?.forEach(element => {
        element.removeEventListener("mouseenter", mouseEnterListener)
        element.removeEventListener("mouseleave", mouseLeaveListener)
      })
    }
  }, [])

  return (
    <div className={cn(className)}>
      <SVGWorldMap ref={svgRef} />
    </div>
  )
}
