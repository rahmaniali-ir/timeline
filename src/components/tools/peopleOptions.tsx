import { COUNTRIES_LIST } from "@/constants/countries"
import { useTimeline } from "@/contexts/timeline"
import type { ListItem } from "@/types/list"
import { MapIcon, SearchIcon, UsersIcon } from "lucide-react"
import { useCallback, useMemo, useState, type FormEventHandler } from "react"
import { NestedList } from "../core/nestedList"
import { OptionsGroup } from "../core/optionsGroup"
import { PEOPLE } from "@/constants/people"

export function PeopleOptions() {
  // const {
  //   hoveredCountries,
  //   selectedCountries,
  //   toggleCountrySelection,
  //   startCountryHovering,
  //   endCountryHovering,
  // } = useTimeline()

  const [searchKey, setSearchKey] = useState("")

  // const countriesList: ListItem[] = useMemo(
  //   () =>
  //     COUNTRIES_LIST.map(country => ({
  //       id: country.id,
  //       name: country.name,
  //       image: country.flag,
  //     })),
  //   [searchKey]
  // )

  const peopleList: ListItem[] = useMemo(
    () =>
      PEOPLE.map(person => ({
        id: person.id,
        name: person.name,
        backgroundImage: person.images?.[0].src,
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
    <OptionsGroup name='People' icon={UsersIcon}>
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
        list={peopleList}
        // hoveredItems={hoveredCountries}
        // selectedItems={selectedCountries}
        searchKey={searchKey}
        // onSelect={id => toggleCountrySelection(id)}
        // onHoverStart={id => startCountryHovering(id)}
        // onHoverEnd={id => endCountryHovering(id)}
      />
    </OptionsGroup>
  )
}
