import type { TimelineEvent } from "@/types/event"

const blackSabbath: Partial<TimelineEvent> = {
  tags: ["art:music:band:black-sabbath"],
  links: {
    Spotify: "https://open.spotify.com/artist/black-sabbath",
  },
  counteries: ["us"],
}

const events: TimelineEvent[] = [
  {
    ...blackSabbath,
    id: "black-sabbath-master-of-reality",
    title: "Master of Reality",
    startDate: { year: 1971 },
    images: ["black-sabbath-master-of-reality.png"],
  },
  {
    ...blackSabbath,
    id: "black-sabbath-paranoid",
    title: "Paranoid",
    startDate: { year: 1980 },
    images: ["black-sabbath-paranoid.png"],
  },
  {
    ...blackSabbath,
    id: "black-sabbath-heaven-and-hell",
    title: "Heaven & Hell",
    startDate: { year: 1980 },
    images: ["black-sabbath-heaven-and-hell.png"],
  },
  {
    ...blackSabbath,
    id: "black-sabbath-the-ultimate-collection",
    title: "The Ultimate Collection",
    startDate: { year: 2016 },
    images: ["black-sabbath-the-ultimate-collection.png"],
  },
]

export default events
