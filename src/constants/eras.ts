import type { EraRange } from "@/types/era"
import { WORLD_MAX, WORLD_MIN } from "./world"

export const ERAS: EraRange[] = [
  {
    name: "Contemprory",
    from: { year: 2_000 },
    to: { year: WORLD_MAX },
  },
  {
    name: "Garegorian Calendar",
    from: { year: 0 },
    to: { year: WORLD_MAX },
  },
  {
    name: "Pre-historic",
    from: { year: -1_000_000 },
    to: { year: 0 },
  },
  {
    name: "Everything",
    from: { year: WORLD_MIN },
    to: { year: WORLD_MAX },
  },
]
