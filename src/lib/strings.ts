export function countCharacter(str: string, character: string) {
  return str
    .split("")
    .reduce((count, c) => (c === character ? count + 1 : count), 0)
}
