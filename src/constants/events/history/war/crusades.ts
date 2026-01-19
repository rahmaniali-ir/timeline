import type { TimelineEvent } from "@/types/event"

const events: TimelineEvent[] = [
  {
    id: "crusades",
    title: "Crusades",
    startDate: { year: 488 },
    endDate: { year: 1291 },
    tags: ["history:war:crusades", "history:religion:christianity"],
    counteries: ["il"],
    images: ["images/crusades.jpg"],
  },
]

export default events
