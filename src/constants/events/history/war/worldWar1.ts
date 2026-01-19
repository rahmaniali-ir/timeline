import type { TimelineEvent } from "@/types/event"

const events: TimelineEvent[] = [
  {
    id: "worldWar1",
    title: "World War I",
    startDate: { year: 1914 },
    endDate: { year: 1918 },
    tags: ["history:war:ww1"],
    counteries: ["fr", "it", "ru", "gb", "us", "de", "hu"],
    images: ["images/ww1.jpg"],
    description:
      "The First World War saw the Entente Powers - led by France, Russia, the British Empire, and later Italy (from 1915) and the United States (from 1917) - defeat the Central Powers - led by the German, Austro-Hungarian, Bulgarian and Ottoman Empires. Russia withdrew from the war after the revolution there in 1917.",
  },
]

export default events
