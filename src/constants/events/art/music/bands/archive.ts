import type { TimelineEvent } from "@/types/event"

const archive: Partial<TimelineEvent> = {
  tags: ["art:music:band:archive"],
  links: {
    Spotify: "https://open.spotify.com/artist/archive",
  },
  counteries: ["us"],
}

const events: TimelineEvent[] = [
  {
    ...archive,
    id: "archive-londinium",
    title: "Londinium",
    startDate: { year: 1997 },
    images: ["/images/archive-londinium.png"],
  },
  {
    ...archive,
    id: "archive-you-all-look-the-same-to-me",
    title: "You All Look The Same To Me",
    startDate: { year: 2002 },
    images: ["/images/archive-you-all-look-the-same-to-me.png"],
  },
  {
    ...archive,
    id: "archive-noise",
    title: "Noise",
    startDate: { year: 2004 },
    images: ["/images/archive-noise.png"],
  },
  {
    ...archive,
    id: "archive-black-and-blue",
    title: "Black & Blue",
    startDate: { year: 2014 },
    images: ["/images/archive-black-and-blue.png"],
  },
  {
    ...archive,
    id: "archive-lights",
    title: "Lights",
    startDate: { year: 2018 },
    images: ["/images/archive-lights.png"],
  },
  {
    ...archive,
    id: "archive-controlling-crowds-part1-3",
    title: "Controlling Crowds Parts I-III",
    startDate: { year: 2018 },
    images: ["/images/archive-controlling-crowds-part1-3.png"],
  },
  {
    ...archive,
    id: "archive-absurd",
    title: "Absurd",
    startDate: { year: 2018 },
    images: ["/images/archive-absurd.png"],
  },
  {
    ...archive,
    id: "archive-25",
    title: "25",
    startDate: { year: 2019 },
    images: ["/images/archive-25.png"],
  },
  {
    ...archive,
    id: "archive-versions",
    title: "Versions",
    startDate: { year: 2020 },
    images: ["/images/archive-versions.png"],
  },
  {
    ...archive,
    id: "archive-controlling-crowds-part4",
    title: "Controlling Crowds Part IV",
    startDate: { year: 2020 },
    images: ["/images/archive-controlling-crowds-part4.png"],
  },
  {
    ...archive,
    id: "archive-collide-session",
    title: "Collide Session",
    startDate: { year: 2020 },
    images: ["/images/archive-collide-session.png"],
  },
  {
    ...archive,
    id: "archive-times-to-kill",
    title: "Times To Kill",
    startDate: { year: 2024 },
    images: ["/images/archive-times-to-kill.png"],
  },
  {
    ...archive,
    id: "archive-look-at-us",
    title: "Look At Us",
    startDate: { year: 2025 },
    images: ["/images/archive-look-at-us.png"],
  },
  {
    ...archive,
    id: "archive-glassMinds",
    title: "Glass Minds",
    startDate: { year: 2026 },
    images: ["/images/archive-glassMinds.png"],
  },
]

export default events
