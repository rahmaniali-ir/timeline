import { cn } from "@/lib/utils"
import type { Icon } from "@/types/icon"
import { ChevronDownIcon } from "lucide-react"
import React, { useCallback, useEffect, useRef, type ReactNode } from "react"
import { Button } from "../ui/button"

export function DefaultExpandableTrigger({
  name,
  isOpen = false,
  className,
  badge,
  ...props
}: React.ComponentProps<typeof Button> & {
  name: string
  isOpen?: boolean
  className?: string
  icon?: Icon
  badge?: string
}) {
  return (
    <Button
      variant='ghost'
      size='sm'
      className={cn(
        "group/expandable-toggle h-auto! justify-start py-1 gap-2 flex-1",
        className
      )}
      {...props}
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
            "group-hover/expandable-toggle:-translate-y-2/3",
            badge && "opacity-100 scale-100"
          )}
        >
          {badge}
        </div>
      </div>

      <strong className='text-xs font-semibold text-neutral-600'>{name}</strong>

      <ChevronDownIcon
        className={cn(
          "size-3 text-neutral-400 ms-auto transition-all duration-300",
          isOpen && "rotate-x-150"
        )}
      />
    </Button>
  )
}

export function Expandable({
  isOpen,
  toggle = true,
  trigger,
  children,
  className,
  contentClassName,
  setIsOpen,
  onClickOutside,
  onEscape,
}: {
  isOpen?: boolean
  toggle?: boolean
  trigger?: ReactNode
  children?: ReactNode
  className?: string
  contentClassName?: string
  setIsOpen?: (o: boolean) => void
  onClickOutside?: () => void
  onEscape?: () => void
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  const toggleOpen = useCallback(() => {
    if (toggle) setIsOpen?.(!isOpen)
  }, [toggle, isOpen, setIsOpen])

  useEffect(() => {
    if (!containerRef.current) return

    const clickListener = (e: MouseEvent) => {
      const element = e.target as HTMLElement

      if (!containerRef.current?.contains(element)) {
        setIsOpen?.(false)
        onClickOutside?.()
      }
    }

    const keyUpListener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen?.(false)
        onEscape?.()
      }
    }

    window.addEventListener("click", clickListener)
    window.addEventListener("keyup", keyUpListener)

    return () => {
      window.removeEventListener("click", clickListener)
      window.removeEventListener("keyup", keyUpListener)
    }
  }, [containerRef, setIsOpen])

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex flex-col gap-2 p-1 bg-neutral-200/50 backdrop-blur-sm rounded-lg border-2 border-neutral-100/25 min-w-[250px]",
        className
      )}
    >
      <div onClick={toggleOpen} className='flex w-full'>
        {trigger}
      </div>

      {isOpen && (
        <div
          className={cn(
            "relative flex flex-col gap-1 px-1 pb-0.5 overflow-y-auto max-h-[25vh] rounded-md",
            contentClassName
          )}
        >
          {children}
        </div>
      )}
    </div>
  )
}
