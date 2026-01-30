import type { TimelineEvent } from "@/types/event"

const events: TimelineEvent[] = [
  {
    id: "indigenous-america",
    title: "Indigenous Civilizations of North America",
    startDate: { year: -10000 },
    endDate: { year: 1492 },
    tags: ["history:country:us"],
    description:
      "Indigenous peoples lived across North America for thousands of years, developing rich cultures, governance systems, and trade networks.",
    links: {
      Wikipedia:
        "https://en.wikipedia.org/wiki/Indigenous_peoples_of_the_Americas",
    },
    counteries: ["us"],
  },

  {
    id: "discovery-of-america",
    title: "European Discovery of the Americas",
    startDate: { year: 1492 },
    endDate: { year: 1607 },
    tags: ["history:country:us"],
    description:
      "European exploration of the Americas began in 1492, initiating long-term contact, colonization, and global exchange.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Exploration_of_North_America",
    },
    counteries: ["us"],
  },

  {
    id: "colonial-america",
    title: "Colonial America",
    startDate: { year: 1607 },
    endDate: { year: 1775 },
    tags: ["history:country:us"],
    description:
      "European colonies developed along the Atlantic coast, forming distinct political, economic, and cultural identities.",
    links: {
      Wikipedia:
        "https://en.wikipedia.org/wiki/Colonial_history_of_the_United_States",
    },
    counteries: ["us"],
  },

  {
    id: "american-revolution",
    title: "American Revolutionary War",
    startDate: { year: 1775 },
    endDate: { year: 1783 },
    tags: ["history:country:us"],
    description:
      "The thirteen colonies fought Great Britain to gain independence and establish a new nation.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/American_Revolutionary_War",
    },
    counteries: ["us"],
  },

  {
    id: "declaration-of-independence",
    title: "Declaration of Independence",
    startDate: { year: 1776, month: 7, day: 4 },
    tags: ["history:country:us"],
    description:
      "The colonies formally declared independence and articulated principles of liberty and self-government.",
    links: {
      Wikipedia:
        "https://en.wikipedia.org/wiki/Declaration_of_Independence_(United_States)",
    },
    counteries: ["us"],
  },

  {
    id: "constitution-era",
    title: "Constitution and Early Republic",
    startDate: { year: 1787 },
    endDate: { year: 1800 },
    tags: ["history:country:us"],
    description:
      "The U.S. Constitution established a federal government and defined the nation’s legal foundation.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/United_States_Constitution",
    },
    counteries: ["us"],
  },

  {
    id: "westward-expansion",
    title: "Westward Expansion",
    startDate: { year: 1803 },
    endDate: { year: 1890 },
    tags: ["history:country:us"],
    description:
      "The United States expanded westward through settlement, conflict, and territorial acquisition.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Westward_expansion",
    },
    counteries: ["us"],
  },

  {
    id: "civil-war",
    title: "American Civil War",
    startDate: { year: 1861 },
    endDate: { year: 1865 },
    tags: ["history:country:us"],
    description:
      "A civil war fought over slavery, states’ rights, and the preservation of the Union.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/American_Civil_War",
    },
    counteries: ["us"],
  },

  {
    id: "reconstruction",
    title: "Reconstruction Era",
    startDate: { year: 1865 },
    endDate: { year: 1877 },
    tags: ["history:country:us"],
    description:
      "The post-war period focused on rebuilding the South and redefining citizenship and civil rights.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Reconstruction_era",
    },
    counteries: ["us"],
  },

  {
    id: "industrialization",
    title: "Industrialization and Gilded Age",
    startDate: { year: 1870 },
    endDate: { year: 1910 },
    tags: ["history:country:us"],
    description:
      "Rapid industrial growth transformed the economy, driving urbanization and mass immigration.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Gilded_Age",
    },
    counteries: ["us"],
  },

  {
    id: "world-war-1",
    title: "World War I",
    startDate: { year: 1917 },
    endDate: { year: 1918 },
    tags: ["history:country:us"],
    description:
      "The U.S. entered World War I, marking its rise as a significant global power.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/United_States_in_World_War_I",
    },
    counteries: ["us"],
  },

  {
    id: "great-depression",
    title: "The Great Depression",
    startDate: { year: 1929 },
    endDate: { year: 1939 },
    tags: ["history:country:us"],
    description:
      "A severe economic collapse that reshaped American society and government policy.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Great_Depression",
    },
    counteries: ["us"],
  },

  {
    id: "world-war-2",
    title: "World War II",
    startDate: { year: 1941 },
    endDate: { year: 1945 },
    tags: ["history:country:us"],
    description:
      "After Pearl Harbor, the U.S. played a decisive role in the Allied victory.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/United_States_in_World_War_II",
    },
    counteries: ["us"],
  },

  {
    id: "cold-war",
    title: "Cold War Era",
    startDate: { year: 1947 },
    endDate: { year: 1991 },
    tags: ["history:country:us"],
    description:
      "A prolonged geopolitical rivalry between the United States and the Soviet Union.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Cold_War",
    },
    counteries: ["us"],
  },

  {
    id: "civil-rights-movement",
    title: "Civil Rights Movement",
    startDate: { year: 1954 },
    endDate: { year: 1968 },
    tags: ["history:country:us"],
    description:
      "A movement that sought to end racial segregation and secure equal legal rights.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Civil_rights_movement",
    },
    counteries: ["us"],
  },

  {
    id: "moon-landing",
    title: "Apollo 11 Moon Landing",
    startDate: { year: 1969, month: 7, day: 20 },
    tags: ["history:country:us"],
    description:
      "The United States landed the first humans on the Moon, advancing space exploration.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/Apollo_11",
    },
    counteries: ["us"],
  },

  {
    id: "september-11",
    title: "September 11 Attacks",
    startDate: { year: 2001, month: 9, day: 11 },
    tags: ["history:country:us"],
    description:
      "Terrorist attacks on U.S. soil that reshaped security policy and foreign relations.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/September_11_attacks",
    },
    counteries: ["us"],
  },

  {
    id: "modern-united-states",
    title: "Modern United States",
    startDate: { year: 2001 },
    tags: ["history:country:us"],
    description:
      "A period marked by digital transformation, globalization, and political change.",
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/History_of_the_United_States",
    },
    counteries: ["us"],
  },
]

export default events
