import { IranIcon } from "@/components/icons/iran"
import type { EventTag } from "@/types/event"
import { AtomIcon, EarthIcon } from "lucide-react"

export const TAGS: EventTag[] = [
  {
    id: "cosmic",
    name: "Cosmic",
    color: "oklch(58.8% 0.158 241.966)",
    icon: AtomIcon,
  },
  {
    id: "history",
    name: "History",
    color: "oklch(55.5% 0.163 48.998)",
    icon: EarthIcon,
  },
  {
    id: "iran",
    name: "Iran",
    color: "#10B981",
    icon: IranIcon,
  },
]
