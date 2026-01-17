export function combine<T = any>(...arrays: T[][]) {
  const combined: T[] = []

  for (const array of arrays) {
    combined.push(...array)
  }

  return combined
}
