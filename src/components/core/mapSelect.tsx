import { MAPS_LIST } from "@/constants/maps";
import { useTimeline } from "@/contexts/timeline";
import { cn } from "@/lib/utils";
import type { MapInfo } from "@/types/map";
import { ChevronDownIcon, CloudyIcon, GlobeIcon, Rotate3dIcon, SparklesIcon } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { Button } from "../ui/button";
import { CheckBox } from "./checkBox";
import { Expandable } from "./expandable";

export function MapThumbnail({ map, className }: { map: MapInfo, className?: string }) {
  const thumbnail = map.thumbnail ? `/maps/thumbnails/${map.thumbnail}` : undefined

  return (
    <div className={cn("size-10 rounded-[inherit] overflow-hidden", className)}>
      <img
        src={thumbnail}
        alt={map.name}
        className={cn(
          "size-full rounded-[inherit] object-cover transition-all duration-300",
          "group-hover/map-select-thumbnail:scale-150 group-active/map-select-thumbnail:scale-125",
        )}
      />
    </div>
  )
}

export function MapSelectTrigger({ map, isOpen, className, onClick }: { map: MapInfo, isOpen?: boolean, className?: string, onClick?: () => void }) {
  const thumbnail = map.thumbnail ? `/maps/thumbnails/${map.thumbnail}` : undefined

  return (
    <Button
      variant='ghost'
      className={cn(
        "group/map-select-trigger group/map-select-thumbnail",
        "h-auto! w-auto! p-px! relative gap-2 justify-start transition-colors",
        isOpen && "flex-1 pe-3 bg-neutral-50 dark:bg-neutral-900",
      )}
      onClick={onClick}>

      {/* thumbnail */}
      {thumbnail && (<MapThumbnail map={map} />)}

      {/* name */}
      {isOpen && (
        <div className="flex flex-1 flex-col items-start">
          <small className="text-[10px] text-neutral-500">Selected Map</small>

          <strong className="text-sm">{map.name}</strong>
        </div>
      )}

      {/* arrow */}
      <div
        className={cn(
          "absolute right-0 bottom-0 flex p-1 bg-neutral-200 dark:bg-neutral-700/50 rounded-full transition-all duration-300",
          isOpen && "right-1 -translate-y-1/2"
        )}
      >
        <ChevronDownIcon
          className={cn(
            "size-3 text-neutral-500 transition-all duration-100",
            isOpen && "-scale-y-100"
          )}
        />
      </div>
    </Button>
  )
}

export function MapSelect({ open = false, className, setOpen }: { open?: boolean, className?: string, setOpen?: (open: boolean) => void }) {
  const {
    selectedGlobeMap,
    setSelectedGlobeMap,
    showGlobeClouds,
    setShowGlobeClouds,
    showGlobeAtmosphere,
    setShowGlobeAtmosphere,
    showGlobeSkyBox,
    setShowGlobeSkyBox,
    globeAutoRotate,
    setGlobeAutoRotate
  } = useTimeline()

  const [isOpen, setIsOpen] = useState(open)

  const selectedMapId = useMemo(() => selectedGlobeMap.id, [selectedGlobeMap])

  const otherMaps = useMemo(() => MAPS_LIST.filter(map => map.id !== selectedMapId), [selectedMapId])

  const isMapSelected = useCallback((mapId: string) => selectedMapId === mapId, [selectedMapId])

  const changeOpen = useCallback((open: boolean) => {
    setIsOpen(open)
    setOpen?.(open)
  }, [setOpen])

  const toggleOpen = useCallback(() => changeOpen(!isOpen), [isOpen, changeOpen])

  return (
    <Expandable
      isOpen={isOpen}
      trigger={<MapSelectTrigger isOpen={isOpen} map={selectedGlobeMap} onClick={toggleOpen} />}
      className={cn("w-min-content p-px", isOpen && "min-w-[200px]", className)}
      contentClassName="flex flex-col gap-1 px-px"
    >
      <small className="text-[10px] text-neutral-500 px-1">Other Maps</small>
      <div className="flex flex-row flex-wrap gap-px w-full">
        {otherMaps.map(map => (
          <Button
            key={map.id}
            onClick={() => setSelectedGlobeMap(map)}
            variant="ghost"
            className="group/map-select-thumbnail h-auto! w-full! justify-start gap-2 p-1! text-xs"
          >
            <MapThumbnail map={map} className="size-8" />

            <span>{map.name}</span>
          </Button>
        ))}
      </div>

      <small className="text-[10px] text-neutral-500 px-1">Viewport Options</small>
      <div className="flex flex-col gap-px">
        <Button
          variant="ghost"
          className="group/check-box h-auto! p-1! items-center text-xs font-normal justify-start"
          onClick={() => setShowGlobeClouds(!showGlobeClouds)}
        >
          <CheckBox checked={showGlobeClouds} icon={CloudyIcon} className="text-sm" />

          <span>Clouds</span>
        </Button>

        <Button
          variant="ghost"
          className="group/check-box h-auto! p-1! items-center text-xs font-normal justify-start"
          onClick={() => setShowGlobeAtmosphere(!showGlobeAtmosphere)}
        >
          <CheckBox checked={showGlobeAtmosphere} icon={GlobeIcon} className="text-sm" />

          <span>Atmosphere</span>
        </Button>

        <Button
          variant="ghost"
          className="group/check-box h-auto! p-1! items-center text-xs font-normal justify-start"
          onClick={() => setShowGlobeSkyBox(!showGlobeSkyBox)}
        >
          <CheckBox checked={showGlobeSkyBox} icon={SparklesIcon} className="text-sm" />

          <span>Stars</span>
        </Button>

        <Button
          variant="ghost"
          className="group/check-box h-auto! p-1! items-center text-xs font-normal justify-start"
          onClick={() => setGlobeAutoRotate(!globeAutoRotate)}
        >
          <CheckBox checked={globeAutoRotate} icon={Rotate3dIcon} className="text-sm" />

          <span>Auto Rotate</span>
        </Button>
      </div>
    </Expandable>
  )
}
