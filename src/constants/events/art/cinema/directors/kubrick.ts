import type { TimelineEvent } from "@/types/event"

const events: TimelineEvent[] = [
  {
    id: "kubrick-shining",
    title: "Shining",
    startDate: { year: 1998 },
    tags: ["art:movie:director:kubrick"],
    counteries: ["us"],
  },
  {
    id: "kubrick-full-metal-jacket",
    title: "Full Metal Jacket",
    startDate: { year: 1997 },
    tags: ["art:movie:director:kubrick"],
    counteries: ["us"],
  },
  {
    id: "kubrick-eyes-wide-shut",
    title: "Eyes Wide Shut",
    startDate: { year: 2000 },
    tags: ["art:movie:director:kubrick"],
    counteries: ["us"],
  },
]

export default events
