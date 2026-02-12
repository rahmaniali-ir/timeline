import type { TimelineEvent } from "@/types/event"

const camel: Partial<TimelineEvent> = {
  tags: ["art:music:band:camel"],
  links: {
    Spotify: "https://open.spotify.com/artist/camel",
  },
  counteries: ["us"],
}

const events: TimelineEvent[] = [
  {
    ...camel,
    id: "camel-rajaz",
    title: "Rajaz",
    startDate: { year: 1999 },
    images: ["camel-rajaz.png"],
  },
  {
    ...camel,
    id: "camel-stationary-traveller",
    title: "Stationary Traveller",
    startDate: { year: 2010 },
    images: ["camel-stationary-traveller.png"],
  },
  {
    ...camel,
    id: "camel-i-can-see-your-house-from-here",
    title: "I Can See Your House From Here",
    startDate: { year: 2010 },
    images: ["camel-i-can-see-your-house-from-here.png"],
  },
  {
    ...camel,
    id: "camel-camel",
    title: "Camel",
    startDate: { year: 2023 },
    images: ["camel-camel.png"],
  },
]

export default events
