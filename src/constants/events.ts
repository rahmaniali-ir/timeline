import type { TimelineEvent } from "@/types/event"
import { BIG_BANG_YEAR, CURRENT_YEAR, WORLD_MAX } from "./world"

export const EVENTS: TimelineEvent[] = [
  {
    id: "bigBang",
    title: "The Big Bang",
    startDate: { year: BIG_BANG_YEAR },
    tags: ["knowledge:cosmic"],
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
    tags: ["knowledge:cosmic"],
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
    tags: ["knowledge:cosmic"],
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
    tags: ["knowledge:cosmic"],
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
    tags: ["knowledge:cosmic"],
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
    tags: ["knowledge:cosmic"],
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
    tags: ["knowledge:cosmic"],
    description:
      "A prolonged period of global cooling marked by recurring glacial cycles that reshaped Earth's surface and influenced the evolution and spread of early humans.",
    images: ["/images/ice-age.jpg"],
  },
  {
    id: "humans",
    title: "First humans (Homo sapiens)",
    startDate: { year: -300_000 },
    tags: ["knowledge:cosmic"],
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
    id: "elamiteKingdom",
    title: "Elamite Kingdom",
    startDate: { year: -3200 },
    endDate: { year: -539 },
    tags: ["history:country:iran"],
    description:
      "One of the earliest civilizations in Iran, centered in southwestern Iran with Susa as a major city.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Elam",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmcnzSV9OciJX_DYF8PIOyDVqcg1zoKJ60A&s",
    ],
    counteries: ["ir"],
  },
  {
    id: "medianEmpire",
    title: "Median Empire",
    startDate: { year: -678 },
    endDate: { year: -550 },
    tags: ["history:country:iran"],
    description:
      "An Iranian empire that unified the Medes and played a crucial role in the fall of Assyria.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Median_kingdom",
      "Medes Wikipedia": "https://en.wikipedia.org/wiki/Medes",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsSn9OwZPwWRjmKstbcd64Dp_iJLys3EuhEw&s",
    ],
    counteries: ["ir"],
  },
  {
    id: "achaemenidEmpire",
    title: "Achaemenid Empire",
    startDate: { year: -550 },
    endDate: { year: -330 },
    tags: ["history:country:iran"],
    description:
      "Founded by Cyrus the Great, it became the largest empire of the ancient world.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Achaemenid_Empire",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Standard_of_Cyrus_the_Great.svg",
    ],
    counteries: ["ir"],
  },
  {
    id: "seleucidEmpire",
    title: "Seleucid Empire",
    startDate: { year: -312 },
    endDate: { year: -63 },
    tags: ["history:country:iran"],
    description:
      "A Hellenistic empire that ruled Iran after Alexander the Great.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Seleucid_Empire",
    },
    images: [
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10ebefbb-3b4e-41d4-b7d6-0de1b5aac3aa/dk4wx0y-a5126647-64cf-4cfa-b300-b641cb523045.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi8xMGViZWZiYi0zYjRlLTQxZDQtYjdkNi0wZGUxYjVhYWMzYWEvZGs0d3gweS1hNTEyNjY0Ny02NGNmLTRjZmEtYjMwMC1iNjQxY2I1MjMwNDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sfLRr0yY3qvSxwUYucq_cohgrdboo2H0yaT5BtJMXOY",
    ],
    counteries: ["ir"],
  },
  {
    id: "parthianEmpire",
    title: "Parthian Empire",
    startDate: { year: -247 },
    endDate: { year: 224 },
    tags: ["history:country:iran"],
    description:
      "An Iranian empire known for its feudal system and wars with Rome.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Parthian_Empire",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuYreVryRpz7gqC_EJqIOEenc3DMm1z-gRdQ&s",
    ],
    counteries: ["ir"],
  },
  {
    id: "sassanidEmpire",
    title: "Sassanid Empire",
    startDate: { year: 224 },
    endDate: { year: 651 },
    tags: ["history:country:iran"],
    description:
      "The last pre-Islamic Persian empire, a major rival of the Byzantine Empire.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Sasanian_Empire",
    },
    images: ["https://flags.paxhistoria.co/sassanid_empire-224-651.png"],
  },
  {
    id: "rashidunCaliphateIran",
    title: "Rashidun Caliphate (Iran)",
    startDate: { year: 651 },
    endDate: { year: 661 },
    tags: ["history:country:iran", "history:religion:islam"],
    description:
      "The first Islamic rule over Iran following the fall of the Sassanids.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Rashidun_Caliphate",
    },
    images: [
      "https://i.redd.it/flags-for-a-new-fictional-islamic-caliphate-v0-ohg5gl1jkkef1.jpg?width=1599&format=pjpg&auto=webp&s=2c583b2b35aef2db94ef975674b31e3c59356db7",
    ],
    counteries: ["ir"],
  },
  {
    id: "umayyadCaliphateIran",
    title: "Umayyad Caliphate (Iran)",
    startDate: { year: 661 },
    endDate: { year: 750 },
    tags: ["history:country:iran", "history:religion:islam"],
    description:
      "Arab caliphate that governed Iran as part of a vast Islamic empire.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Umayyad_Caliphate",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTio6kFWZoRTSikbCjiPMnRhh9Vnx3AutrpJg&s",
    ],
    counteries: ["ir"],
  },
  {
    id: "abbasidCaliphateIran",
    title: "Abbasid Caliphate (Iran)",
    startDate: { year: 750 },
    endDate: { year: 1258 },
    tags: ["history:country:iran", "history:religion:islam"],
    description:
      "Persian-influenced Islamic caliphate with Baghdad as its center.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Abbasid_Caliphate",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRungxlsGhywYmf7m20GdruHKgPNsm12toOoA&s",
    ],
    counteries: ["ir"],
  },
  {
    id: "safavidEmpire",
    title: "Safavid Empire",
    startDate: { year: 1501 },
    endDate: { year: 1736 },
    tags: ["history:country:iran", "history:religion:islam"],
    description:
      "Established Twelver Shia Islam as the state religion of Iran.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Safavid_Empire",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Safavid_Flag.svg/960px-Safavid_Flag.svg.png",
    ],
    counteries: ["ir"],
  },
  {
    id: "afsharidDynasty",
    title: "Afsharid Dynasty",
    startDate: { year: 1736 },
    endDate: { year: 1796 },
    tags: ["history:country:iran"],
    description:
      "Founded by Nader Shah, known for military expansion and campaigns.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Afsharid_dynasty",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshiuMIm_51zVD6FS7Wns8dekTE17wYFRaSA&s",
    ],
    counteries: ["ir"],
  },
  {
    id: "zandDynasty",
    title: "Zand Dynasty",
    startDate: { year: 1751 },
    endDate: { year: 1794 },
    tags: ["history:country:iran"],
    description: "A relatively peaceful Iranian dynasty centered in Shiraz.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Zand_dynasty",
    },
    images: ["https://www.worldstatesmen.org/ir-zand1750.jpg"],
    counteries: ["ir"],
  },
  {
    id: "qajarDynasty",
    title: "Qajar Dynasty",
    startDate: { year: 1794 },
    endDate: { year: 1925 },
    tags: ["history:country:iran"],
    description:
      "A period marked by territorial losses and early modernization efforts.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Qajar_dynasty",
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_UTi0HdqyEZSzO8wSDU4ZJv88Pw2g_13XA&s",
    ],
    counteries: ["ir"],
  },
  {
    id: "pahlaviDynasty",
    title: "Pahlavi Dynasty",
    startDate: { year: 1925 },
    endDate: { year: 1979 },
    tags: [
      "history:country:iran",
      "history:country:iran:government:pahlavi-dynesty",
    ],
    description:
      "Modernizing monarchy that ruled Iran before the Islamic Revolution.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Pahlavi_dynasty",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/State_flag_of_Iran_%281964%E2%80%931980%29.svg/960px-State_flag_of_Iran_%281964%E2%80%931980%29.svg.png",
    ],
    counteries: ["ir"],
  },
  {
    id: "islamicRepublicOfIran",
    title: "Islamic Republic of Iran",
    startDate: { year: 1979 },
    endDate: { year: 2026 },
    tags: ["history:country:iran", "history:religion:islam"],
    description:
      "Current government of Iran established after the 1979 Islamic Revolution.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Islamic_Republic_of_Iran",
    },
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/330px-Flag_of_Iran.svg.png",
    ],
    counteries: ["ir"],
  },
  {
    id: "iran-iraq-war",
    title: "Iran - Iraq War",
    startDate: { year: 1979 },
    endDate: { year: 1987 },
    tags: [
      "history:country:iran",
      "history:war:iran-iraq",
      "history:country:iran:government:islamic-republic",
      "history:religion:islam",
    ],
    images: ["/images/iran-iraq-war.jpg"],
    counteries: ["ir"],
  },
  {
    id: "iran",
    title: "Formation of Iran",
    startDate: { year: -550 },
    tags: ["history:country:iran"],
    description: "Rise of the Achaemenid Empire under Cyrus the Great",
    counteries: ["ir"],
  },
  {
    id: "iran-crime-1388",
    title: "Suppression of the Green Revolution",
    startDate: { year: 2010 },
    tags: ["history:country:iran:government:islamic-republic:crime"],
    counteries: ["ir"],
  },
  {
    id: "iran-crime-1401",
    title: "Killing of Mahsa Amini",
    startDate: { year: 2023 },
    tags: ["history:country:iran:government:islamic-republic:crime"],
    counteries: ["ir"],
  },
  {
    id: "iran-crime-1404",
    title: "Suppression of peacful protstors",
    startDate: { year: 2026 },
    tags: ["history:country:iran:government:islamic-republic:crime"],
    counteries: ["ir"],
  },
  {
    id: "year0",
    title: "Year Zero",
    startDate: { year: 0 },
    description: "Rise of the Achaemenid Empire under Cyrus the Great",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Year_zero",
    },
  },
  {
    id: "internet",
    title: "Development of the Internet",
    startDate: { year: 1960 },
    description:
      "In the 1960s, computer scientists began developing systems for time-sharing of computer resources",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Internet",
    },
    tags: ["history:country:usa", "knowledge:technology"],
    counteries: ["us"],
  },
  {
    id: String(CURRENT_YEAR),
    title: "Today!",
    startDate: { year: CURRENT_YEAR },
  },
  {
    id: String(WORLD_MAX),
    title: "2027",
    startDate: { year: WORLD_MAX },
  },
  {
    id: "2000",
    title: "2000",
    startDate: { year: 2000 },
  },
  {
    id: "tool-fearInoculum",
    title: "Fear Inoculum",
    startDate: { year: 2019 },
    tags: ["art:music:band:tool"],
    links: {
      Spotify: "https://open.spotify.com/artist/tool",
    },
    images: ["/images/tool-fearInoculum.png"],
    counteries: ["us"],
  },
  {
    id: "tool-10000Days",
    title: "10,000 Days",
    startDate: { year: 2012 },
    tags: ["art:music:band:tool"],
    links: {
      Spotify: "https://open.spotify.com/artist/tool",
    },
    images: ["/images/tool-10000Days.png"],
    counteries: ["us"],
  },
  {
    id: "tool-lateralus",
    title: "Lateralus",
    startDate: { year: 2008 },
    tags: ["art:music:band:tool"],
    links: {
      Spotify: "https://open.spotify.com/artist/tool",
    },
    images: ["/images/tool-lateralus.png"],
    counteries: ["us"],
  },
  {
    id: "tool-Ænima",
    title: "Ænima",
    startDate: { year: 2000 },
    tags: ["art:music:band:tool"],
    links: {
      Spotify: "https://open.spotify.com/artist/tool",
    },
    images: ["/images/tool-Ænima.png"],
    counteries: ["us"],
  },
  {
    id: "tool-underflow",
    title: "Underflow",
    startDate: { year: 1993 },
    tags: ["art:music:band:tool"],
    links: {
      Spotify: "https://open.spotify.com/artist/tool",
    },
    images: ["/images/tool-underflow.png"],
    counteries: ["us"],
  },
  {
    id: "archive-glassMinds",
    title: "Glass Minds",
    startDate: { year: 2026 },
    tags: ["art:music:band:archive"],
    links: {
      Spotify: "https://open.spotify.com/artist/archive",
    },
    images: ["/images/archive-glassMinds.png"],
    counteries: ["us"],
  },
  {
    id: "kubrick-eyes-wide-shut",
    title: "Eyes Wide Shut",
    startDate: { year: 2000 },
    tags: ["art:movie:director:kubrick"],
    counteries: ["us"],
  },
  {
    id: "kubrick-shining",
    title: "Shining",
    startDate: { year: 1998 },
    tags: ["art:movie:director:kubrick"],
    counteries: ["us"],
  },
  {
    id: "kubrick-full-metal-jacket",
    title: "Full Metal Jacket",
    startDate: { year: 1997 },
    tags: ["art:movie:director:kubrick"],
    counteries: ["us"],
  },
  {
    id: "tarantino-once-upon-a-time",
    title: "Once Upon A Time In Hollywood",
    startDate: { year: 2020 },
    tags: ["art:movie:director:tarantino"],
    counteries: ["us"],
  },
  {
    id: "nolan-following",
    title: "Following",
    startDate: { year: 1998 },
    tags: ["art:movie:director:nolan"],
    counteries: ["us"],
    description: "Nolan's very first feature film",
    images: ["/images/nolan-following.png"],
  },
  {
    id: "nolan-memento",
    title: "Memento",
    startDate: { year: 2000 },
    tags: ["art:movie:director:nolan"],
    counteries: ["us"],
    images: ["/images/nolan-memento.png"],
  },
  {
    id: "nolan-insomnia",
    title: "Insomnia",
    startDate: { year: 2002 },
    tags: ["art:movie:director:nolan"],
    images: ["/images/nolan-insomnia.png"],
    counteries: ["us"],
  },
  {
    id: "nolan-batman-begins",
    title: "Batman Begins",
    startDate: { year: 2005 },
    tags: ["art:movie:director:nolan"],
    images: ["/images/nolan-batman-begins.png"],
    counteries: ["us"],
  },
  {
    id: "nolan-prestige",
    title: "Prestige",
    startDate: { year: 2006 },
    tags: ["art:movie:director:nolan"],
    counteries: ["us"],
  },
  {
    id: "nolan-the-dark-knight",
    title: "The Dark Knight",
    startDate: { year: 2008 },
    tags: ["art:movie:director:nolan"],
    images: ["/images/nolan-the-dark-knight.png"],
    counteries: ["us"],
  },
  {
    id: "nolan-inception",
    title: "Inception",
    startDate: { year: 2010 },
    tags: ["art:movie:director:nolan"],
    images: ["/images/nolan-inception.png"],
    counteries: ["us"],
  },
  {
    id: "nolan-the-dark-knight-rises",
    title: "The Dark Knight Rises",
    startDate: { year: 2012 },
    tags: ["art:movie:director:nolan"],
    images: ["/images/nolan-the-dark-knight-rises.png"],
    counteries: ["us"],
  },
  {
    id: "nolan-interstellar",
    title: "Interstellar",
    startDate: { year: 2014 },
    tags: ["art:movie:director:nolan"],
    images: ["/images/nolan-interstellar.png"],
    counteries: ["us"],
  },
  {
    id: "nolan-dunkirk",
    title: "Dunkirk",
    startDate: { year: 2017 },
    tags: ["art:movie:director:nolan"],
    images: ["/images/nolan-dunkirk.png"],
    counteries: ["us"],
  },
  {
    id: "nolan-tenet",
    title: "Tenet",
    startDate: { year: 2020 },
    tags: ["art:movie:director:nolan"],
    images: ["/images/nolan-tenet.png"],
    counteries: ["us"],
  },
  {
    id: "nolan-oppenheimer",
    title: "Oppenheimer",
    startDate: { year: 2023 },
    tags: ["art:movie:director:nolan"],
    images: ["/images/nolan-oppenheimer.png"],
    counteries: ["us"],
  },
  {
    id: "space-apollo-11",
    title: "Apollo 11",
    startDate: { year: 1969 },
    tags: ["knowledge:space"],
    counteries: ["us"],
  },
  {
    id: "crusades",
    title: "Crusades",
    startDate: { year: 488 },
    endDate: { year: 1291 },
    tags: ["history:war:crusades", "history:religion:christianity"],
    counteries: ["il"],
    images: ["images/cruseds.png"],
  },
].sort((a, b) => a.startDate.year - b.startDate.year)
