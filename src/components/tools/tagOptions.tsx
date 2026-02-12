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
      <div className='flex items-center flex-wrap gap-1'>
        {selectedTags.map(tag => (
          <TagBadge key={tag.id} tag={tag} onClick={() => toggleTag(tag.id)} />
        ))}

        {!selectedTags.length && (
          <div className="flex items-center justify-center text-xs opacity-50 w-full min-h-8.5">
            <span>No tags selected yet!</span>
          </div>
        )}
      </div>

      <label className='surface sticky top-0 flex items-center gap-1 px-1.5 z-20'>
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
