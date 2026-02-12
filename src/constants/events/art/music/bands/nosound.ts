import type { TimelineEvent } from "@/types/event"

const nosound: Partial<TimelineEvent> = {
  tags: ["art:music:band:nosound"],
  links: {
    Spotify: "https://open.spotify.com/artist/nosound",
  },
  counteries: ["gb"],
}

const events: TimelineEvent[] = [
  {
    ...nosound,
    id: "nosound-slow-it-goes",
    title: "Slow, It Goes",
    startDate: { year: 2007 },
    images: ["nosound-slow-it-goes.png"],
  },
  {
    ...nosound,
    id: "nosound-lightdark",
    title: "Lightdark",
    startDate: { year: 2008 },
    images: ["nosound-lightdark.png"],
  },
  {
    ...nosound,
    id: "nosound-slo29",
    title: "Slo29",
    startDate: { year: 2013 },
    images: ["nosound-slo29.png"],
  },
  {
    ...nosound,
    id: "nosound-afterthoughts",
    title: "Afterthoughts",
    startDate: { year: 2013 },
    images: ["nosound-afterthoughts.png"],
  },
  {
    ...nosound,
    id: "nosound-teide-2390",
    title: "Teide 2390",
    startDate: { year: 2015 },
    images: ["nosound-teide-2390.png"],
  },
  {
    ...nosound,
    id: "nosound-at-the-pier",
    title: "At the Pier",
    startDate: { year: 2015 },
    images: ["nosound-at-the-pier.png"],
  },
  {
    ...nosound,
    id: "nosound-scintilla",
    title: "Scintilla",
    startDate: { year: 2016 },
    images: ["nosound-scintilla.png"],
  },
  {
    ...nosound,
    id: "nosound-allow-yourself",
    title: "Allow Yourself",
    startDate: { year: 2018 },
    images: ["nosound-allow-yourself.png"],
  },
  {
    ...nosound,
    id: "nosound-to-the-core",
    title: "To The Core",
    startDate: { year: 2025 },
    images: ["nosound-to-the-core.png"],
  },
]

export default events
