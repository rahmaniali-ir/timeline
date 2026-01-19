import type { TimelineEvent } from "@/types/event"

const nolan: Partial<TimelineEvent> = {
  tags: ["art:movie:director:nolan"],
  counteries: ["us"],
}

const events: TimelineEvent[] = [
  {
    ...nolan,
    id: "nolan-following",
    title: "Following",
    startDate: { year: 1998 },
    description: "Nolan's very first feature film",
    images: ["/images/nolan-following.png"],
  },
  {
    ...nolan,
    id: "nolan-memento",
    title: "Memento",
    startDate: { year: 2000 },
    images: ["/images/nolan-memento.png"],
  },
  {
    ...nolan,
    id: "nolan-insomnia",
    title: "Insomnia",
    startDate: { year: 2002 },
    images: ["/images/nolan-insomnia.png"],
  },
  {
    ...nolan,
    id: "nolan-batman-begins",
    title: "Batman Begins",
    startDate: { year: 2005 },
    images: ["/images/nolan-batman-begins.png"],
  },
  {
    ...nolan,
    id: "nolan-prestige",
    title: "Prestige",
    startDate: { year: 2006 },
    images: ["/images/nolan-prestige.png"],
  },
  {
    ...nolan,
    id: "nolan-the-dark-knight",
    title: "The Dark Knight",
    startDate: { year: 2008 },
    images: ["/images/nolan-the-dark-knight.png"],
  },
  {
    ...nolan,
    id: "nolan-inception",
    title: "Inception",
    startDate: { year: 2010 },
    images: ["/images/nolan-inception.png"],
  },
  {
    ...nolan,
    id: "nolan-the-dark-knight-rises",
    title: "The Dark Knight Rises",
    startDate: { year: 2012 },
    images: ["/images/nolan-the-dark-knight-rises.png"],
  },
  {
    ...nolan,
    id: "nolan-interstellar",
    title: "Interstellar",
    startDate: { year: 2014 },
    images: ["/images/nolan-interstellar.png"],
  },
  {
    ...nolan,
    id: "nolan-dunkirk",
    title: "Dunkirk",
    startDate: { year: 2017 },
    images: ["/images/nolan-dunkirk.png"],
  },
  {
    ...nolan,
    id: "nolan-tenet",
    title: "Tenet",
    startDate: { year: 2020 },
    images: ["/images/nolan-tenet.png"],
  },
  {
    ...nolan,
    id: "nolan-oppenheimer",
    title: "Oppenheimer",
    startDate: { year: 2023 },
    images: ["/images/nolan-oppenheimer.png"],
  },
]

export default events
