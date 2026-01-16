import type { ReactNode } from "react"

export function KeyboardKey({ children }: { children?: ReactNode }) {
  return (
    <kbd
      style={{ letterSpacing: "-1px" }}
      className='bg-neutral-50/50 border-2 border-t-1 border-neutral-400/50 rounded-xs p-0.5 min-w-4 text-center leading-none'
    >
      {children}
    </kbd>
  )
}
