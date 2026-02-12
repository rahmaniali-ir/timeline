import { cn } from "@/lib/utils"
import { BookIcon, ChevronDownIcon } from "lucide-react"
import { type HTMLProps, type ReactNode } from "react"
import { GlobalSearch } from "../core/globalSearch"
import { MapSelect } from "../core/mapSelect"
import { TimelineRange } from "../core/timelineRange"
import { Button } from "../ui/button"

export function Logo({ className, ...props }: HTMLProps<HTMLHeadingElement>) {
  return (
    <strong
      className={cn(
        'text-lg font-semibold py-0.5',
        className
      )}
      {...props}
    >
      Timeline
    </strong>
  )
}

export function MenuBar() {
  return (
    <div className="surface flex items-center gap-3 ps-2.5 pe-1 py-0.5">
      <Logo className="text-black dark:text-white" />

      <div className="w-px h-2 self-center bg-current/10">&nbsp;</div>

      <Button variant='ghost' className="h-auto! px-2! py-1">
        <BookIcon className="size-3.5" />

        <span className="text-neutral-700 dark:text-neutral-300">Stories</span>

        <ChevronDownIcon className="size-3 ms-1 opacity-50" />
      </Button>
    </div>
  )
}

export function Navbar({
  className,
  children,
}: {
  className?: string
  children?: ReactNode
}) {
  return (
    <nav className={cn("flex items-center gap-2", className)}>
      <div className='flex flex-col items-start gap-2'>
        <MenuBar />

        <TimelineRange className="surface before:bg-background/50! ps-1.5 pe-4 py-2" />

        <MapSelect />
      </div>

      <div className="fixed top-4 left-1/2 -translate-x-1/2 flex items-start gap-2 mx-auto">
        <GlobalSearch />
      </div>

      {children}
    </nav>
  )
}
