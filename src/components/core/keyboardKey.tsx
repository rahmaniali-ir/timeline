import type { ReactNode } from "react"

export function KeyboardKey({ children }: { children?: ReactNode }) {
  return (
    <kbd
      style={{ letterSpacing: "-1px" }}
      className='bg-neutral-300/50 rounded-sm py-1 px-1.5 min-w-4 text-center leading-none'
    >
      {children}
    </kbd>
  )
}
