import type { TimelineEvent } from "@/types/event"

const aliceInChains: Partial<TimelineEvent> = {
  tags: ["art:music:band:alice-in-chains"],
  links: {
    Spotify: "https://open.spotify.com/artist/alice-in-chains",
  },
  counteries: ["us"],
}

const events: TimelineEvent[] = [
  {
    ...aliceInChains,
    id: "alice-in-chains-facelift",
    title: "Facelift",
    startDate: { year: 1990 },
    images: ["/images/alice-in-chains-facelift.png"],
  },
  {
    ...aliceInChains,
    id: "alice-in-chains-dirt",
    title: "Dirt",
    startDate: { year: 1992 },
    images: ["/images/alice-in-chains-dirt.png"],
  },
  {
    ...aliceInChains,
    id: "alice-in-chains-jar-of-flies",
    title: "Jar Of Flies",
    startDate: { year: 1993 },
    images: ["/images/alice-in-chains-jar-of-flies.png"],
  },
  {
    ...aliceInChains,
    id: "alice-in-chains-alice-in-chains",
    title: "Alice In Chains",
    startDate: { year: 1995 },
    images: ["/images/alice-in-chains-alice-in-chains.png"],
  },
  {
    ...aliceInChains,
    id: "alice-in-chains-nothing-safe",
    title: "Nothing Safe",
    startDate: { year: 1999 },
    images: ["/images/alice-in-chains-nothing-safe.png"],
  },
  {
    ...aliceInChains,
    id: "alice-in-chains-black-gives-way-to-blue",
    title: "Black Gives Way To Blue",
    startDate: { year: 2009 },
    images: ["/images/alice-in-chains-black-gives-way-to-blue.png"],
  },
  {
    ...aliceInChains,
    id: "alice-in-chains-discover-beyond",
    title: "Discover Beyond",
    startDate: { year: 2010 },
    images: ["/images/alice-in-chains-discover-beyond.png"],
  },
]

export default events
