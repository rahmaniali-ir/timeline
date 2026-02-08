import { cn } from "@/lib/utils"
import type { Icon } from "@/types/icon"
import { ChevronDownIcon } from "lucide-react"
import { useEffect, useState, type ReactNode } from "react"
import { Button } from "../ui/button"
import { Expandable } from "./expandable"

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
    <Expandable
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      trigger={
        <Button
          onClick={toggleOpen}
          variant='ghost'
          size='sm'
          className='group/tags-option-toggle h-auto! justify-start py-1 gap-2 w-full'
        >
          <div className='relative'>
            {props.icon && <props.icon className='size-3 text-neutral-400 dark:text-neutral-50' />}

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

          <strong className='text-xs font-semibold text-neutral-600 dark:text-neutral-100'>
            {name}
          </strong>

          <ChevronDownIcon
            className={cn(
              "size-3 text-neutral-400 ms-auto transition-all duration-300",
              isOpen && "rotate-x-150"
            )}
          />
        </Button>
      }
      contentClassName="gap-1 px-1 pb-0.5 overflow-y-auto max-h-[25vh]"
    >
      {children}
    </Expandable>
  )
}
