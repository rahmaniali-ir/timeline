import type { TimelineEvent } from "@/types/event"

const airbag: Partial<TimelineEvent> = {
  tags: ["art:music:band:airbag"],
  links: {
    Spotify: "https://open.spotify.com/artist/airbag",
  },
  counteries: ["no"],
}

const events: TimelineEvent[] = [
  {
    ...airbag,
    id: "airbag-identity",
    title: "Identity",
    startDate: { year: 2009 },
    images: ["airbag-identity.png"],
  },
  {
    ...airbag,
    id: "airbag-all-rights-removed",
    title: "All Rights Removed",
    startDate: { year: 2011 },
    images: ["airbag-all-rights-removed.png"],
  },
  {
    ...airbag,
    id: "airbag-the-greatest-show-on-earth",
    title: "The Greatest Show On Earth",
    startDate: { year: 2013 },
    images: ["airbag-the-greatest-show-on-earth.png"],
  },
  {
    ...airbag,
    id: "airbag-disconnected",
    title: "Disconnected",
    startDate: { year: 2016 },
    images: ["airbag-disconnected.png"],
  },
  {
    ...airbag,
    id: "airbag-a-day-at-the-beach",
    title: "A Day at the Beach",
    startDate: { year: 2020 },
    images: ["airbag-a-day-at-the-beach.png"],
  },
  {
    ...airbag,
    id: "airbag-a-day-in-the-studio",
    title: "A Day in the Studio / Unplugged in Oslo",
    startDate: { year: 2021 },
    images: ["airbag-a-day-in-the-studio.png"],
  },
  {
    ...airbag,
    id: "airbag-the-century-of-the-self",
    title: "The Century of the Self",
    startDate: { year: 2024 },
    images: ["airbag-the-century-of-the-self.png"],
  },
]

export default events
