import { cn } from "@/lib/utils"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import { Button } from "../ui/button"

const getFormattedValue = (value: number) => {
  const absValue = Math.abs(value)

  if (absValue < 1_000_000) return { value, unit: "" }

  if (absValue < 1_000_000_000)
    return { value: Math.round(value / 1_000_000), unit: "M" }

  if (absValue < 1_000_000_000_000)
    return { value: Math.round(value / 1_000_000_000), unit: "B" }

  return { value: Math.round(value / 1_000_000_000_000), unit: "T" }
}

export default function YearInput({
  value = 0,
  onChange,
}: {
  value: number
  onChange?: (value: number) => void
}) {
  const [year, setYear] = useState({ value: 0, unit: "" })

  const inputStep = useMemo(() => {
    if (year.unit === "M") return 1_000_000
    if (year.unit === "B") return 1_000_000_000
    if (year.unit === "T") return 1_000_000_000_000

    return 1
  }, [year.unit])

  const changeValue = (value: number) => {
    setYear(getFormattedValue(value))
    onChange?.(value)
  }

  const increment = () => {
    changeValue(value + inputStep)
  }

  const decrement = () => {
    changeValue(value - inputStep)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = Number(e.target.value)

    const { value, unit } = getFormattedValue(targetValue)

    if (unit === "M") changeValue(value * 1_000_000)
    if (unit === "B") changeValue(value * 1_000_000_000)
    if (unit === "T") changeValue(value * 1_000_000_000_000)
    else changeValue(value)
  }

  useEffect(() => {
    setYear(getFormattedValue(value ?? 0))
  }, [value])

  return (
    <div className='group/yearInput flex items-center gap-1 py-1 ps-2 pe-1 rounded-lg hover:bg-neutral-200/50 focus-within:bg-neutral-200/75!'>
      <input
        type='number'
        className={cn(
          "font-semibold text-2xl w-20 outline-none",
          "[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        )}
        max={new Date().getFullYear()}
        value={year.value}
        step={inputStep}
        onChange={handleInputChange}
      />

      <strong>{year.unit}</strong>

      <div className='flex flex-col gap-1'>
        <Button
          onClick={increment}
          variant='secondary'
          className='size-4 rounded-sm!'
        >
          <ChevronUpIcon className='size-4' />
        </Button>

        <Button
          onClick={decrement}
          variant='secondary'
          className='size-4 rounded-sm!'
        >
          <ChevronDownIcon className='size-4' />
        </Button>
      </div>
    </div>
  )
}
