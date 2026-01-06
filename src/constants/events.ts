import type { TimelineEvent } from "@/types/event"

export const BIG_BANG_YEAR = -13_800_000_000

export const EVENTS: TimelineEvent[] = [
  {
    id: "bigBang",
    title: "The Big Bang",
    startDate: { year: BIG_BANG_YEAR },
    tags: ["cosmic"],
    description: "Start of spacetime itself",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Big_Bang",
    },
    images: [
      "https://media.istockphoto.com/id/1130985331/photo/stars-time-warp.jpg?b=1&s=612x612&w=0&k=20&c=1d_v-4SVW9Kmc8FD91WwSs_1BOpL5c9nUZwKW83-2OY=",
    ],
  },
  {
    id: "milkyWay",
    title: "Formation of the Milky Way",
    startDate: { year: -13_600_000_000 },
    tags: ["cosmic"],
    description:
      "The Milky Way began forming a few hundred million years after the Big Bang",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/The_milky_way",
    },
    images: [
      "https://i.pinimg.com/736x/fb/ac/d1/fbacd1105289b87ff689b2a44c579e75.jpg",
    ],
  },
  {
    id: "sun",
    title: "Formation of the Sun",
    startDate: { year: -4_600_000_000 },
    tags: ["cosmic"],
    description: "Our Sun ignited from a molecular cloud",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Sun",
    },
    images: [
      "https://i.pinimg.com/736x/5b/c6/4f/5bc64fdaa14535c3455c9d1a18482e09.jpg",
    ],
  },
  {
    id: "earth",
    title: "Formation of the Earth",
    startDate: { year: -4_540_000_000 },
    tags: ["cosmic"],
    description: "Earth formed shortly after the Sun",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Earth",
    },
    images: [
      "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002131/GSFC_20171208_Archive_e002131~large.jpg",
    ],
  },
  {
    id: "life",
    title: "First signs of life on Earth",
    startDate: { year: -3_700_000_000 },
    tags: ["cosmic"],
    description: "Oldest known microbial life evidence",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Life",
    },
    images: [
      "https://images.nationalgeographic.org/image/upload/v1638891995/EducationHub/photos/frontonia-protist.jpg",
    ],
  },
  {
    id: "dinosaurs",
    title: "Dinosaurs",
    startDate: { year: -230_000_000 },
    endDate: { year: -66_000_000 },
    tags: ["cosmic"],
    description:
      "Dinosaurs dominated Earth's land ecosystems for over 160 million years, evolving into a wide variety of forms before a mass extinction event ended their era.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Dinosaur",
    },
    images: [
      "https://i.pinimg.com/736x/00/dc/c4/00dcc43fe834438c4dbcd107ed92323b.jpg",
    ],
  },
  {
    id: "iceAge",
    title: "Ice Age",
    startDate: { year: -2_580_000 },
    endDate: { year: -11_700 },
    tags: ["cosmic"],
    description:
      "A prolonged period of global cooling marked by recurring glacial cycles that reshaped Earth's surface and influenced the evolution and spread of early humans.",
  },
  {
    id: "humans",
    title: "First humans (Homo sapiens)",
    startDate: { year: -300_000 },
    tags: ["cosmic"],
    description: "Anatomically modern humans emerge in Africa",
  },
  {
    id: "civilizations",
    title: "First civilizations",
    startDate: { year: -3_500 },
    tags: ["cosmic", "history"],
    description: "Writing, cities, organized states begin appearing",
  },
  {
    id: "cyrusTheGreat",
    title: "Cyrus the great got born",
    startDate: { year: -600 },
    tags: ["iran", "history"],
    description:
      "Cyrus was born to Cambyses I, King of Anshan, and Mandane, daughter of Astyages, King of Media",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Cyrus_the_Great#Early_life",
    },
    images: ["https://media.imna.ir/d/2017/10/29/3/1459646.jpg"],
  },
  {
    id: "iran",
    title: "Formation of Iran",
    startDate: { year: -550 },
    tags: ["iran", "history"],
    description: "Rise of the Achaemenid Empire under Cyrus the Great",
  },

  {
    id: "2026",
    title: "Today!",
    startDate: { year: 2026 },
    tags: ["cosmic"],
  },
].sort((a, b) => a.startDate.year - b.startDate.year)
