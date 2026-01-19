import type { Country } from "@/types/country"

export const COUNTRIES: Record<string, Country> = {
  af: {
    id: "af",
    name: "Afghanistan",
  },
  ca: {
    id: "ca",
    name: "Canada",
  },
  cn: {
    id: "cn",
    name: "China",
  },
  de: {
    id: "de",
    name: "Germany",
  },
  eg: {
    id: "eg",
    name: "Egypt",
  },
  gb: {
    id: "gb",
    name: "United Kingdom",
  },
  in: {
    id: "in",
    name: "India",
  },
  il: {
    id: "il",
    name: "Israil",
  },
  ir: {
    id: "ir",
    name: "Iran",
  },
  it: {
    id: "it",
    name: "Italy",
  },
  iq: {
    id: "iq",
    name: "Iraq",
  },
  fr: {
    id: "fr",
    name: "France",
  },
  hu: {
    id: "hu",
    name: "Hungarian",
  },
  kz: {
    id: "kz",
    name: "Kazakistan",
  },
  jp: {
    id: "jp",
    name: "Japan",
  },
  no: {
    id: "no",
    name: "Norway",
  },
  pk: {
    id: "pk",
    name: "Pakistan",
  },
  ru: {
    id: "ru",
    name: "Russa",
  },
  sa: {
    id: "sa",
    name: "Saudi Arabia",
  },
  sy: {
    id: "sy",
    name: "Syria",
  },
  tm: {
    id: "tm",
    name: "Tajikestan",
  },
  tr: {
    id: "tr",
    name: "Turkey",
  },
  ua: {
    id: "ua",
    name: "Ukrain",
  },
  us: {
    id: "us",
    name: "United States",
  },
}

export const COUNTRIES_LIST = Object.values(COUNTRIES).sort((a, b) =>
  a.name.localeCompare(b.name)
)
