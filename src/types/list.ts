import type { Icon } from "./icon"

export interface ListItem {
  id: string
  name: string
  icon?: Icon
  image?: string
  color?: string
  className?: string
}
