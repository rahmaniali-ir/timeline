import { useTimeline } from "@/contexts/timeline"
import type { ListItem } from "@/types/list"
import { SearchIcon, TagsIcon } from "lucide-react"
import { useCallback, useMemo, useState, type FormEventHandler } from "react"
import { NestedList } from "../core/nestedList"
import { OptionsGroup } from "../core/optionsGroup"
import { TagBadge } from "../core/tagBadge"

export function TagsOptions() {
  const { tags, activeTags, getActiveTags, toggleTag } = useTimeline()

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

  const selectedTags = useMemo(() => getActiveTags(), [getActiveTags])

  const handleSearchInput: FormEventHandler<HTMLInputElement> = useCallback(
    e => {
      const target = e.target as HTMLInputElement

      setSearchKey(target.value)
    },
    []
  )

  return (
    <OptionsGroup name='Tags' icon={TagsIcon} badge={activeTags.length}>
      <label className='sticky top-0 flex items-center gap-1 px-1.5 bg-neutral-300/50 backdrop-blur-sm rounded-md z-20'>
        <SearchIcon className='size-3 text-neutral-500' />

        <input
          value={searchKey}
          onInput={handleSearchInput}
          placeholder='Search'
          className='py-1 outline-none text-xs'
        />
      </label>

      <div className='flex items-center gap-2'>
        {selectedTags.map(tag => (
          <TagBadge key={tag.id} tag={tag} />
        ))}
      </div>

      <NestedList
        list={tagsList}
        selectedItems={activeTags}
        onSelect={id => toggleTag(id)}
      />
    </OptionsGroup>
  )
}
