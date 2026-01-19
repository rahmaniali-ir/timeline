import type { TimelineEvent } from "@/types/event"

const kubrick: Partial<TimelineEvent> = {
  tags: ["art:movie:director:kubrick"],
  counteries: ["us"],
}

const events: TimelineEvent[] = [
  {
    ...kubrick,
    id: "kubrick-shining",
    title: "Shining",
    startDate: { year: 1998 },
  },
  {
    ...kubrick,
    id: "kubrick-full-metal-jacket",
    title: "Full Metal Jacket",
    startDate: { year: 1997 },
  },
  {
    ...kubrick,
    id: "kubrick-eyes-wide-shut",
    title: "Eyes Wide Shut",
    startDate: { year: 2000 },
  },
]

export default events
