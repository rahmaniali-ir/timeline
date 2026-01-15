export const getFormattedYear = (value: number) => {
  const absValue = Math.abs(value)

  if (absValue < 1_000_000) return { value: Math.floor(value), unit: "" }

  if (absValue < 1_000_000_000)
    return {
      value: Number((value / 1_000_000).toFixed(2)),
      unit: "M",
    }

  if (absValue < 1_000_000_000_000)
    return {
      value: Number((value / 1_000_000_000).toFixed(2)),
      unit: "B",
    }

  return {
    value: Number((value / 1_000_000_000_000).toFixed),
    unit: "T",
  }
}
