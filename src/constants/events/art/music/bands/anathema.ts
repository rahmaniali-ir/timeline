import type { TimelineEvent } from "@/types/event"

const anathema: Partial<TimelineEvent> = {
  tags: ["art:music:band:anathema"],
  links: {
    Spotify: "https://open.spotify.com/artist/anathema",
  },
  counteries: ["gb"],
}

const events: TimelineEvent[] = [
  {
    ...anathema,
    id: "anathema-alternative-4",
    title: "Alternative 4",
    startDate: { year: 1998 },
    images: ["anathema-alternative-4.png"],
  },
  {
    ...anathema,
    id: "anathema-hindsight",
    title: "Hindsight",
    startDate: { year: 2008 },
    images: ["anathema-hindsight.png"],
  },
  {
    ...anathema,
    id: "anathema-original-album-classics",
    title: "Original Album Classics",
    startDate: { year: 2011 },
    images: ["anathema-original-album-classics.png"],
  },
  {
    ...anathema,
    id: "anathema-weather-systems",
    title: "Weather Systems",
    startDate: { year: 2012 },
    images: ["anathema-weather-systems.png"],
  },
  {
    ...anathema,
    id: "anathema-universal",
    title: "Universal",
    startDate: { year: 2013 },
    images: ["anathema-universal.png"],
  },
  {
    ...anathema,
    id: "anathema-distant-satellites",
    title: "Distant Satellites",
    startDate: { year: 2014 },
    images: ["anathema-distant-satellites.png"],
  },
  {
    ...anathema,
    id: "anathema-judgement",
    title: "Judgement",
    startDate: { year: 2015 },
    images: ["anathema-judgement.png"],
  },
  {
    ...anathema,
    id: "anathema-a-natrual-disaster",
    title: "A Natrual Disaster",
    startDate: { year: 2015 },
    images: ["anathema-a-natrual-disaster.png"],
  },
  {
    ...anathema,
    id: "anathema-the-optimist",
    title: "The Optimist",
    startDate: { year: 2017 },
    images: ["anathema-the-optimist.png"],
  },
]

export default events
