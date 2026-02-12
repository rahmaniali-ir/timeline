import type { TimelineEvent } from "@/types/event"
import events from "./events/index"

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
].sort((a, b) => a.startDate.year - b.startDate.year)
