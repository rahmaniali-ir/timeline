import { CheckIcon, EarthIcon, SquircleIcon } from "lucide-react"
import { OptionsGroup } from "../core/optionsGroup"
import { MAPS_LIST } from "@/constants/maps"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { useTimeline } from "@/contexts/timeline"
import { CheckBox } from "../core/checkBox"
import { useCallback, useMemo } from "react"

export function MapOptions() {
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

  const selectedMapId = useMemo(() => selectedGlobeMap.id, [selectedGlobeMap])

  const isMapSelected = useCallback((mapId: string) => selectedMapId === mapId, [selectedMapId])

  return (
    <OptionsGroup name='Map' icon={EarthIcon} containerClassName="flex flex-col gap-2">
      <small className="text-xs text-neutral-500 px-1">Options</small>
      <div className="flex flex-col gap-px">
        <Button variant="ghost" className="h-auto! p-1! items-center text-xs font-normal justify-start" onClick={() => setShowGlobeClouds(!showGlobeClouds)}>
          <CheckBox checked={showGlobeClouds} />

          <span>Clouds</span>
        </Button>

        <Button variant="ghost" className="h-auto! p-1! items-center text-xs font-normal justify-start" onClick={() => setShowGlobeAtmosphere(!showGlobeAtmosphere)}>
          <CheckBox checked={showGlobeAtmosphere} />

          <span>Atmosphere</span>
        </Button>

        <Button variant="ghost" className="h-auto! p-1! items-center text-xs font-normal justify-start" onClick={() => setShowGlobeSkyBox(!showGlobeSkyBox)}>
          <CheckBox checked={showGlobeSkyBox} />

          <span>SkyBox</span>
        </Button>

        <Button variant="ghost" className="h-auto! p-1! items-center text-xs font-normal justify-start" onClick={() => setGlobeAutoRotate(!globeAutoRotate)}>
          <CheckBox checked={globeAutoRotate} />

          <span>Auto Rotate</span>
        </Button>
      </div>

      <small className="text-xs text-neutral-500 px-1">Maps</small>
      <div className="flex flex-row flex-wrap gap-2">
        {MAPS_LIST.map(map => (
          <Button
            key={map.id}
            onClick={() => setSelectedGlobeMap(map)}
            variant="ghost"
            className="h-auto! w-auto! flex-col items-start gap-1 bg-neutral-200 dark:bg-neutral-700/50 rounded-md p-1 text-xs"
          >
            <img src={'/maps/thumbnails/' + map.thumbnail} alt={map.name} className="h-8 w-full object-cover rounded-t-sm" />

            <div className="flex items-center gap-1 ps-1 pe-2">
              {isMapSelected(map.id) ? <CheckIcon className="size-2.5 dark:text-neutral-50" /> : <SquircleIcon className="size-2.5" />}

              <small className={cn("dark:text-neutral-400", isMapSelected(map.id) && 'dark:text-neutral-50')}>{map.name}</small>
            </div>

          </Button>
        ))}
      </div>

    </OptionsGroup>
  )
}
