import type { TimelineEvent } from "@/types/event"
import events from "./events/index"
import { CURRENT_YEAR, WORLD_MAX } from "./world"

export const EVENTS: TimelineEvent[] = [
  ...events,
  {
    id: "year0",
    title: "Year Zero",
    startDate: { year: 0 },
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Year_zero",
    },
  },
  {
    id: "2000",
    title: "2000",
    startDate: { year: 2000 },
  },
  {
    id: String(CURRENT_YEAR),
    title: "Today!",
    startDate: { year: CURRENT_YEAR },
  },
  {
    id: String(WORLD_MAX),
    title: "2027",
    startDate: { year: WORLD_MAX },
  },
].sort((a, b) => a.startDate.year - b.startDate.year)
