import { cn } from "@/lib/utils"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import { Button } from "../ui/button"
import { getFormattedYear } from "@/lib/time"

export default function YearInput({
  value = 0,
  onChange,
}: {
  value: number
  onChange?: (value: number) => void
}) {
  const [year, setYear] = useState({ value: 0, unit: "" })

  const valueLength = useMemo(() => String(year.value).length, [year])

  const inputWidth = useMemo(() => valueLength + 1 + "ch", [valueLength])

  const inputStep = useMemo(() => {
    if (year.unit === "M") return 1_000_000
    if (year.unit === "B") return 1_000_000_000
    if (year.unit === "T") return 1_000_000_000_000

    return 1
  }, [year.unit])

  const changeValue = (value: number) => {
    setYear(getFormattedYear(value))
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

    const { value, unit } = getFormattedYear(targetValue)

    if (unit === "M") changeValue(value * 1_000_000)
    if (unit === "B") changeValue(value * 1_000_000_000)
    if (unit === "T") changeValue(value * 1_000_000_000_000)
    else changeValue(value)
  }

  useEffect(() => {
    setYear(getFormattedYear(value ?? 0))
  }, [value])

  return (
    <label className='group/yearInput flex items-center gap-0.5 rounded-lg text-neutral-600 dark:text-neutral-100 focus-within:text-neutral-800'>
      <input
        type='number'
        className={cn(
          "font-semibold text-lg outline-none text-center",
          "[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        )}
        max={new Date().getFullYear()}
        value={year.value}
        step={inputStep}
        onChange={handleInputChange}
        style={{
          width: inputWidth,
        }}
      />

      <strong>{year.unit}</strong>

      <div className='flex flex-col opacity-0 transition-opacity group-hover/yearInput:opacity-100'>
        <Button
          onClick={increment}
          variant='secondary'
          className='h-auto w-auto! p-0! rounded-sm!'
        >
          <ChevronUpIcon className='size-3' />
        </Button>

        <Button
          onClick={decrement}
          variant='secondary'
          className='h-auto w-auto! p-0! rounded-sm!'
        >
          <ChevronDownIcon className='size-3' />
        </Button>
      </div>
    </label>
  )
}
