import { cn } from "@/lib/utils"
import { type ReactNode } from "react"
import { TimelineRange } from "../core/timelineRange"
import { GlobalSearch } from "../core/globalSearch"
import { Button } from "../ui/button"
import { BookIcon, ChevronDownIcon, EarthIcon, TypeOutlineIcon } from "lucide-react"

export function Logo() {
  return <strong className='text-lg font-semibold py-0.5'>Timeline</strong>
}

export function MenuBar() {
  return (
    <div className="flex items-center gap-3 ps-3 pe-1 py-0.5 bg-neutral-300/50 dark:bg-neutral-700/50 backdrop-blur-sm rounded-lg border-2 border-neutral-100/25 dark:border-neutral-800/25">
      <TypeOutlineIcon className="size-5" />

      <Logo />

      <div className="w-px h-2 self-center bg-current/10">&nbsp;</div>

      <Button variant='ghost' className="h-auto! px-2! py-1">
        <BookIcon className="size-3" />

        <span>Stories</span>

        <ChevronDownIcon className="size-3 ms-1" />
      </Button>

      <Button variant='ghost' className="h-auto! px-2! py-1">
        <EarthIcon className="size-3" />

        <span>Maps</span>

        <ChevronDownIcon className="size-3 ms-1" />
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
      <div className='flex flex-col items-start gap-3'>
        <MenuBar />

        <div className="relative rounded-lg">
          <div className="bg-background/15 rounded-[inherit] absolute -inset-x-0.5 -inset-y-1 backdrop-blur-sm rounded-[inherit] -z-10" />

          <TimelineRange className="ps-2" />
        </div>
      </div>

      <div className="fixed top-4 left-1/2 -translate-x-1/2 flex items-start gap-2 mx-auto">
        <GlobalSearch />
      </div>

      {children}
    </nav>
  )
}
