import { useTimeline } from "@/contexts/timeline"
import type { ListItem } from "@/types/list"
import { SearchIcon, TagsIcon } from "lucide-react"
import { NestedList } from "./nestedList"
import { OptionsGroup } from "./optionsGroup"
import { useCallback, useMemo, useState, type FormEventHandler } from "react"

export function TagsOptions() {
  const { tags, activeTags, toggleTag } = useTimeline()

  const [searchKey, setSearchKey] = useState("")

  const tagsList: ListItem[] = useMemo(
    () =>
      tags.map(tag => ({
        id: tag.id,
        name: tag.name,
        icon: tag.icon,
        color: tag.color,
        className: tag.className,
      })),
    [tags, searchKey]
  )

  const handleSearchInput: FormEventHandler<HTMLInputElement> = useCallback(
    e => {
      const target = e.target as HTMLInputElement

      setSearchKey(target.value)
    },
    []
  )

  return (
    <OptionsGroup name='Tags' icon={TagsIcon} badge={activeTags.length}>
      <label className='sticky top-0 flex items-center gap-1 px-1.5 bg-neutral-300/50 backdrop-blur-sm rounded-md z-10'>
        <SearchIcon className='size-3 text-neutral-500' />

        <input
          value={searchKey}
          onInput={handleSearchInput}
          placeholder='Search'
          className='py-1 outline-none text-xs'
        />
      </label>

      <NestedList
        list={tagsList}
        selectedItems={activeTags}
        onSelect={id => toggleTag(id)}
      />
    </OptionsGroup>
  )
}
