import { cn } from "@/lib/utils"
import { type ReactNode } from "react"
import { TimelineRange } from "../core/timelineRange"
import { GlobalSearch } from "../core/globalSearch"

export function Navbar({
  className,
  children,
}: {
  className?: string
  children?: ReactNode
}) {
  return (
    <nav className={cn("flex items-center gap-2", className)}>
      <div className='flex flex-col gap-1'>
        <strong className='text-xl font-semibold'>Timeline</strong>

        <TimelineRange />
      </div>

      <GlobalSearch className='fixed top-4 left-1/2 -translate-x-1/2' />

      {children}
    </nav>
  )
}
