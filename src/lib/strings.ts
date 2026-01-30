export function countCharacter(str: string, character: string) {
  return str
    .split("")
    .reduce((count, c) => (c === character ? count + 1 : count), 0)
}

export function getChildrenIds(ids: string[], parentId: string) {
  return ids.filter(
    id =>
      id.startsWith(parentId + ":") &&
      countCharacter(id, ":") === countCharacter(parentId, ":") + 1
  )
}

export function getClenSearchKey(searchKey: string) {
  return searchKey.toLowerCase().trim()
}
