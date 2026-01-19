import { cn } from "@/lib/utils"
import type { Icon } from "@/types/icon"
import { ChevronDownIcon } from "lucide-react"
import { useEffect, useState, type ReactNode } from "react"
import { Button } from "../ui/button"

export function OptionsGroup({
  open = false,
  name,
  badge,
  className,
  containerClassName,
  children,
  setOpen,
  ...props
}: {
  open?: boolean
  name?: string
  icon?: Icon
  badge?: ReactNode
  className?: string
  containerClassName?: string
  children?: ReactNode
  setOpen?: (open: boolean) => void
}) {
  const [isOpen, setIsOpen] = useState(open)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
    setOpen?.(isOpen)
  }

  useEffect(() => setIsOpen(open), [open, setOpen])

  return (
    <div className='relative flex flex-col gap-2 p-1 bg-neutral-200 rounded-lg border-2 border-neutral-100/50 min-w-[250px]'>
      <Button
        onClick={toggleOpen}
        variant='ghost'
        size='sm'
        className='group/tags-option-toggle h-auto! justify-start py-1 gap-2'
      >
        <div className='relative'>
          {props.icon && <props.icon className='size-3 text-neutral-400' />}

          {/* badge */}
          <div
            className={cn(
              "absolute py-0.5 px-1 left-full top-full -translate-x-1/3 -translate-y-1/2",
              "text-[8px] bg-neutral-400 text-neutral-100 leading-none rounded-full",
              "transition-all duration-300",
              "opacity-0 scale-75",
              "group-hover/tags-option-toggle:-translate-y-2/3",
              badge && "opacity-100 scale-100"
            )}
          >
            {badge}
          </div>
        </div>

        <strong className='text-xs font-semibold text-neutral-600'>
          {name}
        </strong>

        <ChevronDownIcon
          className={cn(
            "size-3 text-neutral-400 ms-auto transition-all duration-300",
            isOpen && "rotate-x-150"
          )}
        />
      </Button>

      {isOpen && (
        <div className='relative flex flex-col gap-1 px-1 pb-0.5 overflow-y-auto max-h-[25vh] rounded-md'>
          {children}
        </div>
      )}
    </div>
  )
}
