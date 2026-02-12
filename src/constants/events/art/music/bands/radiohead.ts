import type { TimelineEvent } from "@/types/event"

const radiohead: Partial<TimelineEvent> = {
  tags: ["art:music:band:radiohead"],
  links: {
    Spotify: "https://open.spotify.com/artist/radiohad",
  },
  counteries: ["gb"],
}

const events: TimelineEvent[] = [
  {
    ...radiohead,
    id: "radiohead-pablo-honey",
    title: "Pablo Honey",
    startDate: { year: 1993 },
    images: ["radiohead-pablo-honey.png"],
  },
  {
    ...radiohead,
    id: "radiohead-the-bends",
    title: "The Bends",
    startDate: { year: 1995 },
    images: ["radiohead-the-bends.png"],
  },
  {
    ...radiohead,
    id: "radiohead-ok-computer",
    title: "OK Computer",
    startDate: { year: 1997 },
    images: ["radiohead-ok-computer.png"],
  },
  {
    ...radiohead,
    id: "radiohead-kid-a",
    title: "Kid A",
    startDate: { year: 2000 },
    images: ["radiohead-kid-a.png"],
  },
  {
    ...radiohead,
    id: "radiohead-amnesiac",
    title: "Amnesiac",
    startDate: { year: 2001 },
    images: ["radiohead-amnesiac.png"],
  },
  {
    ...radiohead,
    id: "radiohead-hail-to-the-theif",
    title: "Hail To the Thief",
    startDate: { year: 2003 },
    images: ["radiohead-hail-to-the-theif.png"],
  },
  {
    ...radiohead,
    id: "radiohead-com-lag",
    title: "Com Lag: 2+2=5",
    startDate: { year: 2004 },
    images: ["radiohead-com-lag.png"],
  },
  {
    ...radiohead,
    id: "radiohead-in-rainbows",
    title: "In Rainbows",
    startDate: { year: 2007 },
    images: ["radiohead-in-rainbows.png"],
  },
  {
    ...radiohead,
    id: "radiohead-the-king-of-limbs",
    title: "The King Of Limbs",
    startDate: { year: 2011 },
    images: ["radiohead-the-king-of-limbs.png"],
  },
  {
    ...radiohead,
    id: "radiohead-a-moon-shaped-pool",
    title: "A Moon Shaped Pool",
    startDate: { year: 2016 },
    images: ["radiohead-a-moon-shaped-pool.png"],
  },
]

export default events
