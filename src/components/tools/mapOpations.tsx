import { COUNTRIES_LIST } from "@/constants/countries"
import { useTimeline } from "@/contexts/timeline"
import { MapIcon, SearchIcon } from "lucide-react"
import { NestedList } from "../core/nestedList"
import { OptionsGroup } from "../core/optionsGroup"
import type { ListItem } from "@/types/list"
import {
  useCallback,
  useMemo,
  useState,
  type FormEventHandler,
  type InputEvent,
} from "react"

export function MapOptions() {
  const {
    hoveredCountries,
    selectedCountries,
    toggleCountrySelection,
    startCountryHovering,
    endCountryHovering,
  } = useTimeline()

  const [searchKey, setSearchKey] = useState("")

  const countriesList: ListItem[] = useMemo(
    () =>
      COUNTRIES_LIST.map(country => ({
        id: country.id,
        name: country.name,
        image: "/images/flags/" + country.id + ".jpg",
      })),
    [searchKey]
  )

  const handleSearchInput: FormEventHandler<HTMLInputElement> = useCallback(
    e => {
      const target = e.target as HTMLInputElement

      setSearchKey(target.value)
    },
    []
  )

  return (
    <OptionsGroup name='Map' icon={MapIcon}>
      <label className='sticky top-0 flex items-center gap-1 px-1.5 bg-neutral-300/50 backdrop-blur-sm rounded-md z-20'>
        <SearchIcon className='size-3 text-neutral-500' />

        <input
          value={searchKey}
          onInput={handleSearchInput}
          placeholder='Search'
          className='py-1 outline-none text-xs'
        />
      </label>

      <NestedList
        list={countriesList}
        hoveredItems={hoveredCountries}
        selectedItems={selectedCountries}
        searchKey={searchKey}
        onSelect={id => toggleCountrySelection(id)}
        onHoverStart={id => startCountryHovering(id)}
        onHoverEnd={id => endCountryHovering(id)}
      />
    </OptionsGroup>
  )
}
