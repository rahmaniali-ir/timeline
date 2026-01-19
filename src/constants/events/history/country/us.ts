import type { TimelineEvent } from "@/types/event"

const events: TimelineEvent[] = [
  {
    id: "discovery-of-america",
    title: "Discovery of America",
    startDate: { year: 1492 },
    tags: ["history:country:us"],
    description:
      "The Viking voyages did not become common knowledge in the Old World, and Europeans remained unaware of the existence of the Americas as a whole, until 1492 when Spain discovered the Americas to the rest of the world.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Exploration_of_North_America",
    },
    counteries: ["us"],
  },
]

export default events
