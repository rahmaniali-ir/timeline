import type { TimelineEvent } from "@/types/event"

const pinkfloyd: Partial<TimelineEvent> = {
  tags: ["art:music:band:pinkfloyd"],
  links: {
    Spotify: "https://open.spotify.com/artist/pinkfloyd",
  },
  counteries: ["gb"],
}

const events: TimelineEvent[] = [
  {
    ...pinkfloyd,
    id: "pinkfloyd-meddle",
    title: "Meddle",
    startDate: { year: 1971 },
    images: ["/images/pinkfloyd-meddle.png"],
  },
  {
    ...pinkfloyd,
    id: "pinkfloyd-obscured-by-clouds",
    title: "Obscured by Clouds",
    startDate: { year: 1972 },
    images: ["/images/pinkfloyd-obscured-by-clouds.png"],
  },
  {
    ...pinkfloyd,
    id: "pinkfloyd-wish-you-were-here",
    title: "Wish You Were Here",
    startDate: { year: 1975 },
    images: ["/images/pinkfloyd-wish-you-were-here.png"],
  },
  {
    ...pinkfloyd,
    id: "pinkfloyd-the-wall",
    title: "The Wall",
    startDate: { year: 1979 },
    images: ["/images/pinkfloyd-the-wall.png"],
  },
  {
    ...pinkfloyd,
    id: "pinkfloyd-the-final-cut",
    title: "The Final Cut",
    startDate: { year: 1983 },
    images: ["/images/pinkfloyd-the-final-cut.png"],
  },
  {
    ...pinkfloyd,
    id: "pinkfloyd-a-momentary-lapse-of-reason",
    title: "A Momentary Lapse of Reason",
    startDate: { year: 1987 },
    images: ["/images/pinkfloyd-a-momentary-lapse-of-reason.png"],
  },
  {
    ...pinkfloyd,
    id: "pinkfloyd-the-division-bell",
    title: "The Division Bell",
    startDate: { year: 2011 },
    images: ["/images/pinkfloyd-the-division-bell.png"],
  },
  {
    ...pinkfloyd,
    id: "pinkfloyd-the-dark-side-of-the-moon",
    title: "The Dark Side Of The Moon",
    startDate: { year: 2011 },
    images: ["/images/pinkfloyd-the-dark-side-of-the-moon.png"],
  },
  {
    ...pinkfloyd,
    id: "pinkfloyd-the-later-years",
    title: "The Later Years",
    startDate: { year: 2019 },
    images: ["/images/pinkfloyd-the-later-years.png"],
  },
  {
    ...pinkfloyd,
    id: "pinkfloyd-atom-heart-mother",
    title: "Atom Heart Mother",
    startDate: { year: 2025 },
    images: ["/images/pinkfloyd-atom-heart-mother.png"],
  },
]

export default events
