import type { TimelineEvent } from "@/types/event"

const events: TimelineEvent[] = [
  {
    id: "internet",
    title: "Development of the Internet",
    startDate: { year: 1960 },
    description:
      "In the 1960s, computer scientists began developing systems for time-sharing of computer resources",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Internet",
    },
    tags: ["history:country:usa", "knowledge:technology"],
    counteries: ["us"],
  },
]

export default events
