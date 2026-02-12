import type { TimelineEvent } from "@/types/event"

const events: TimelineEvent[] = [
  {
    id: "worldWar2",
    title: "World War II",
    startDate: { year: 1939 },
    endDate: { year: 1945 },
    tags: ["history:war:ww2"],
    counteries: ["fr", "it", "jp", "ru", "gb", "us", "de", "cn"],
    images: ["ww2.jpg"],
    description:
      "World War II or the Second World War was a global conflict between two coalitions: the Allies and the Axis powers.",
  },
]

export default events
