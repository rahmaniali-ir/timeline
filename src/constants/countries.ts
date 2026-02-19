import type { Country } from "@/types/country"

export const COUNTRIES: Record<string, Country> = {
  af: {
    id: "af",
    name: "Afghanistan",
    capital: {
      id: "af-kabul",
      name: "Kabul",
      latLng: { lat: 34.5553, lng: 69.2075 },
    },
    latLngRange: { from: { lat: 19.555300000000003, lng: 54.207499999999996 }, to: { lat: 49.5553, lng: 84.2075 } },
  },
  al: {
    id: "al",
    name: "Albania",
    capital: {
      id: "al-tirana",
      name: "Tirana",
      latLng: { lat: 41.3275, lng: 19.8187 },
    },
    latLngRange: { from: { lat: 26.3275, lng: 4.8187 }, to: { lat: 56.3275, lng: 34.8187 } },
  },
  dz: {
    id: "dz",
    name: "Algeria",
    capital: {
      id: "dz-algiers",
      name: "Algiers",
      latLng: { lat: 36.7538, lng: 3.0588 },
    },
    latLngRange: { from: { lat: 21.7538, lng: -11.9412 }, to: { lat: 51.7538, lng: 18.0588 } },
  },
  as: {
    id: "as",
    name: "American Samoa",
    capital: {
      id: "as-pago-pago",
      name: "Pago Pago",
      latLng: { lat: -14.271, lng: -170.1322 },
    },
    latLngRange: { from: { lat: -29.271, lng: -185.1322 }, to: { lat: 0.7289999999999992, lng: -155.1322 } },
  },
  ad: {
    id: "ad",
    name: "Andorra",
    capital: {
      id: "ad-andorra-la-vella",
      name: "Andorra la Vella",
      latLng: { lat: 42.5063, lng: 1.5218 },
    },
    latLngRange: { from: { lat: 27.506300000000003, lng: -13.4782 }, to: { lat: 57.5063, lng: 16.5218 } },
  },
  ao: {
    id: "ao",
    name: "Angola",
    capital: {
      id: "ao-luanda",
      name: "Luanda",
      latLng: { lat: -8.8383, lng: 13.2344 },
    },
    latLngRange: { from: { lat: -23.8383, lng: -1.7655999999999992 }, to: { lat: 6.1617, lng: 28.2344 } },
  },
  ai: {
    id: "ai",
    name: "Anguilla",
    capital: {
      id: "ai-the-valley",
      name: "The Valley",
      latLng: { lat: 18.2206, lng: -63.0686 },
    },
    latLngRange: { from: { lat: 3.220600000000001, lng: -78.0686 }, to: { lat: 33.220600000000005, lng: -48.0686 } },
  },
  aq: {
    id: "aq",
    name: "Antarctica",
    capital: {
      id: "aq-mcmurdo",
      name: "McMurdo Station",
      latLng: { lat: -77.8419, lng: 166.6863 },
    },
    latLngRange: { from: { lat: -92.8419, lng: 151.6863 }, to: { lat: -62.841899999999995, lng: 181.6863 } },
  },
  ag: {
    id: "ag",
    name: "Antigua and Barbuda",
    capital: {
      id: "ag-saint-johns",
      name: "Saint John's",
      latLng: { lat: 17.1254, lng: -61.8444 },
    },
    latLngRange: { from: { lat: 2.125399999999999, lng: -76.84440000000001 }, to: { lat: 32.1254, lng: -46.8444 } },
  },
  ar: {
    id: "ar",
    name: "Argentina",
    capital: {
      id: "ar-buenos-aires",
      name: "Buenos Aires",
      latLng: { lat: -34.6037, lng: -58.3816 },
    },
    latLngRange: { from: { lat: -49.6037, lng: -73.38159999999999 }, to: { lat: -19.603700000000003, lng: -43.3816 } },
  },
  am: {
    id: "am",
    name: "Armenia",
    capital: {
      id: "am-yerevan",
      name: "Yerevan",
      latLng: { lat: 40.1811, lng: 44.5136 },
    },
    latLngRange: { from: { lat: 25.1811, lng: 29.513599999999997 }, to: { lat: 55.1811, lng: 59.5136 } },
  },
  aw: {
    id: "aw",
    name: "Aruba",
    capital: {
      id: "aw-oranjestad",
      name: "Oranjestad",
      latLng: { lat: 12.5092, lng: -70.008 },
    },
    latLngRange: { from: { lat: -2.4908, lng: -85.008 }, to: { lat: 27.5092, lng: -55.007999999999996 } },
  },
  au: {
    id: "au",
    name: "Australia",
    capital: {
      id: "au-canberra",
      name: "Canberra",
      latLng: { lat: -35.2809, lng: 149.13 },
    },
    latLngRange: { from: { lat: -50.2809, lng: 134.13 }, to: { lat: -20.280900000000003, lng: 164.13 } },
  },
  at: {
    id: "at",
    name: "Austria",
    capital: {
      id: "at-vienna",
      name: "Vienna",
      latLng: { lat: 48.2082, lng: 16.3738 },
    },
    latLngRange: { from: { lat: 33.2082, lng: 1.3737999999999992 }, to: { lat: 63.2082, lng: 31.3738 } },
  },
  az: {
    id: "az",
    name: "Azerbaijan",
    capital: {
      id: "az-baku",
      name: "Baku",
      latLng: { lat: 40.4093, lng: 49.8671 },
    },
    latLngRange: { from: { lat: 25.4093, lng: 34.8671 }, to: { lat: 55.4093, lng: 64.8671 } },
  },

  bs: {
    id: "bs",
    name: "Bahamas",
    capital: {
      id: "bs-nassau",
      name: "Nassau",
      latLng: { lat: 25.0479, lng: -77.3554 },
    },
    latLngRange: { from: { lat: 10.047899999999998, lng: -92.3554 }, to: { lat: 40.0479, lng: -62.3554 } },
  },
  bh: {
    id: "bh",
    name: "Bahrain",
    capital: {
      id: "bh-manama",
      name: "Manama",
      latLng: { lat: 26.0667, lng: 50.5577 },
    },
    latLngRange: { from: { lat: 11.0667, lng: 35.5577 }, to: { lat: 41.0667, lng: 65.5577 } },
  },
  bd: {
    id: "bd",
    name: "Bangladesh",
    capital: {
      id: "bd-dhaka",
      name: "Dhaka",
      latLng: { lat: 23.8103, lng: 90.4125 },
    },
    latLngRange: { from: { lat: 8.810300000000002, lng: 75.4125 }, to: { lat: 38.8103, lng: 105.4125 } },
  },
  bb: {
    id: "bb",
    name: "Barbados",
    capital: {
      id: "bb-bridgetown",
      name: "Bridgetown",
      latLng: { lat: 13.0975, lng: -59.6165 },
    },
    latLngRange: { from: { lat: -1.9024999999999999, lng: -74.6165 }, to: { lat: 28.0975, lng: -44.6165 } },
  },
  by: {
    id: "by",
    name: "Belarus",
    capital: {
      id: "by-minsk",
      name: "Minsk",
      latLng: { lat: 53.9045, lng: 27.5615 },
    },
    latLngRange: { from: { lat: 38.9045, lng: 12.561499999999999 }, to: { lat: 68.9045, lng: 42.561499999999995 } },
  },
  be: {
    id: "be",
    name: "Belgium",
    capital: {
      id: "be-brussels",
      name: "Brussels",
      latLng: { lat: 50.8503, lng: 4.3517 },
    },
    latLngRange: { from: { lat: 35.8503, lng: -10.648299999999999 }, to: { lat: 65.8503, lng: 19.3517 } },
  },
  bz: {
    id: "bz",
    name: "Belize",
    capital: {
      id: "bz-belmopan",
      name: "Belmopan",
      latLng: { lat: 17.2514, lng: -88.7669 },
    },
    latLngRange: { from: { lat: 2.2514000000000003, lng: -103.7669 }, to: { lat: 32.251400000000004, lng: -73.7669 } },
  },
  bj: {
    id: "bj",
    name: "Benin",
    capital: {
      id: "bj-porto-novo",
      name: "Porto-Novo",
      latLng: { lat: 6.4969, lng: 2.6289 },
    },
    latLngRange: { from: { lat: -8.5031, lng: -12.3711 }, to: { lat: 21.4969, lng: 17.6289 } },
  },
  bm: {
    id: "bm",
    name: "Bermuda",
    capital: {
      id: "bm-hamilton",
      name: "Hamilton",
      latLng: { lat: 32.2949, lng: -64.7814 },
    },
    latLngRange: { from: { lat: 17.2949, lng: -79.7814 }, to: { lat: 47.2949, lng: -49.781400000000005 } },
  },
  bt: {
    id: "bt",
    name: "Bhutan",
    capital: {
      id: "bt-thimphu",
      name: "Thimphu",
      latLng: { lat: 27.4728, lng: 89.639 },
    },
    latLngRange: { from: { lat: 12.4728, lng: 74.639 }, to: { lat: 42.4728, lng: 104.639 } },
  },
  bo: {
    id: "bo",
    name: "Bolivia",
    capital: {
      id: "bo-la-paz",
      name: "La Paz",
      latLng: { lat: -16.5, lng: -68.15 },
    },
    latLngRange: { from: { lat: -31.5, lng: -83.15 }, to: { lat: -1.5, lng: -53.150000000000006 } },
  },
  ba: {
    id: "ba",
    name: "Bosnia and Herzegovina",
    capital: {
      id: "ba-sarajevo",
      name: "Sarajevo",
      latLng: { lat: 43.8516, lng: 18.3888 },
    },
    latLngRange: { from: { lat: 28.851599999999998, lng: 3.3888 }, to: { lat: 58.8516, lng: 33.3888 } },
  },
  bw: {
    id: "bw",
    name: "Botswana",
    capital: {
      id: "bw-gaborone",
      name: "Gaborone",
      latLng: { lat: -24.6282, lng: 25.9231 },
    },
    latLngRange: { from: { lat: -39.6282, lng: 10.923100000000002 }, to: { lat: -9.6282, lng: 40.923100000000005 } },
  },
  br: {
    id: "br",
    name: "Brazil",
    capital: {
      id: "br-brasilia",
      name: "Brasília",
      latLng: { lat: -15.7942, lng: -47.8822 },
    },
    latLngRange: { from: { lat: -30.7942, lng: -62.8822 }, to: { lat: -0.7942, lng: -32.8822 } },
  },
  bn: {
    id: "bn",
    name: "Brunei",
    capital: {
      id: "bn-bandar-seri-begawan",
      name: "Bandar Seri Begawan",
      latLng: { lat: 4.9031, lng: 114.9398 },
    },
    latLngRange: { from: { lat: -10.0969, lng: 99.9398 }, to: { lat: 19.903100000000002, lng: 129.9398 } },
  },
  bg: {
    id: "bg",
    name: "Bulgaria",
    capital: {
      id: "bg-sofia",
      name: "Sofia",
      latLng: { lat: 42.6977, lng: 23.3219 },
    },
    latLngRange: { from: { lat: 27.697699999999998, lng: 8.3219 }, to: { lat: 57.6977, lng: 38.3219 } },
  },
  bf: {
    id: "bf",
    name: "Burkina Faso",
    capital: {
      id: "bf-ouagadougou",
      name: "Ouagadougou",
      latLng: { lat: 12.3714, lng: -1.5197 },
    },
    latLngRange: { from: { lat: -2.6286000000000005, lng: -16.5197 }, to: { lat: 27.3714, lng: 13.4803 } },
  },
  bi: {
    id: "bi",
    name: "Burundi",
    capital: {
      id: "bi-gitega",
      name: "Gitega",
      latLng: { lat: -3.4281, lng: 29.9253 },
    },
    latLngRange: { from: { lat: -18.4281, lng: 14.9253 }, to: { lat: 11.5719, lng: 44.9253 } },
  },

  kh: {
    id: "kh",
    name: "Cambodia",
    capital: {
      id: "kh-phnom-penh",
      name: "Phnom Penh",
      latLng: { lat: 11.5564, lng: 104.9282 },
    },
    latLngRange: { from: { lat: -3.4436, lng: 89.9282 }, to: { lat: 26.5564, lng: 119.9282 } },
  },
  cm: {
    id: "cm",
    name: "Cameroon",
    capital: {
      id: "cm-yaounde",
      name: "Yaoundé",
      latLng: { lat: 3.848, lng: 11.5021 },
    },
    latLngRange: { from: { lat: -11.152000000000001, lng: -3.4978999999999996 }, to: { lat: 18.848, lng: 26.5021 } },
  },
  ca: {
    id: "ca",
    name: "Canada",
    capital: {
      id: "ca-ottawa",
      name: "Ottawa",
      latLng: { lat: 45.4215, lng: -75.6972 },
    },
    latLngRange: { from: { lat: 30.4215, lng: -90.6972 }, to: { lat: 60.4215, lng: -60.697199999999995 } },
  },
  cv: {
    id: "cv",
    name: "Cape Verde",
    capital: {
      id: "cv-praia",
      name: "Praia",
      latLng: { lat: 14.9331, lng: -23.5133 },
    },
    latLngRange: { from: { lat: -0.0669000000000004, lng: -38.5133 }, to: { lat: 29.9331, lng: -8.513300000000001 } },
  },
  ky: {
    id: "ky",
    name: "Cayman Islands",
    capital: {
      id: "ky-george-town",
      name: "George Town",
      latLng: { lat: 19.2869, lng: -81.3674 },
    },
    latLngRange: { from: { lat: 4.286899999999999, lng: -96.3674 }, to: { lat: 34.2869, lng: -66.3674 } },
  },
  cf: {
    id: "cf",
    name: "Central African Republic",
    capital: {
      id: "cf-bangui",
      name: "Bangui",
      latLng: { lat: 4.3947, lng: 18.5582 },
    },
    latLngRange: { from: { lat: -10.6053, lng: 3.5581999999999994 }, to: { lat: 19.3947, lng: 33.5582 } },
  },
  td: {
    id: "td",
    name: "Chad",
    capital: {
      id: "td-ndjamena",
      name: "N'Djamena",
      latLng: { lat: 12.1348, lng: 15.0557 },
    },
    latLngRange: { from: { lat: -2.8651999999999997, lng: 0.05569999999999986 }, to: { lat: 27.1348, lng: 30.0557 } },
  },
  cl: {
    id: "cl",
    name: "Chile",
    capital: {
      id: "cl-santiago",
      name: "Santiago",
      latLng: { lat: -33.4489, lng: -70.6693 },
    },
    latLngRange: { from: { lat: -48.4489, lng: -85.6693 }, to: { lat: -18.448900000000002, lng: -55.66930000000001 } },
  },
  cn: {
    id: "cn",
    name: "China",
    capital: {
      id: "cn-beijing",
      name: "Beijing",
      latLng: { lat: 39.9042, lng: 116.4074 },
    },
    latLngRange: { from: { lat: 24.904200000000003, lng: 101.4074 }, to: { lat: 54.9042, lng: 131.4074 } },
  },
  co: {
    id: "co",
    name: "Colombia",
    capital: {
      id: "co-bogota",
      name: "Bogotá",
      latLng: { lat: 4.711, lng: -74.0721 },
    },
    latLngRange: { from: { lat: -10.289, lng: -89.0721 }, to: { lat: 19.711, lng: -59.072100000000006 } },
  },
  km: {
    id: "km",
    name: "Comoros",
    capital: {
      id: "km-moroni",
      name: "Moroni",
      latLng: { lat: -11.7172, lng: 43.2473 },
    },
    latLngRange: { from: { lat: -26.7172, lng: 28.247300000000003 }, to: { lat: 3.2828, lng: 58.2473 } },
  },
  cg: {
    id: "cg",
    name: "Congo",
    capital: {
      id: "cg-brazzaville",
      name: "Brazzaville",
      latLng: { lat: -4.2634, lng: 15.2429 },
    },
    latLngRange: { from: { lat: -19.2634, lng: 0.24290000000000056 }, to: { lat: 10.7366, lng: 30.2429 } },
  },
  cr: {
    id: "cr",
    name: "Costa Rica",
    capital: {
      id: "cr-san-jose",
      name: "San José",
      latLng: { lat: 9.9281, lng: -84.0907 },
    },
    latLngRange: { from: { lat: -5.071899999999999, lng: -99.0907 }, to: { lat: 24.9281, lng: -69.0907 } },
  },
  hr: {
    id: "hr",
    name: "Croatia",
    capital: {
      id: "hr-zagreb",
      name: "Zagreb",
      latLng: { lat: 45.815, lng: 15.9819 },
    },
    latLngRange: { from: { lat: 30.814999999999998, lng: 0.9818999999999996 }, to: { lat: 60.815, lng: 30.9819 } },
  },
  cu: {
    id: "cu",
    name: "Cuba",
    capital: {
      id: "cu-havana",
      name: "Havana",
      latLng: { lat: 23.1136, lng: -82.3666 },
    },
    latLngRange: { from: { lat: 8.113600000000002, lng: -97.3666 }, to: { lat: 38.113600000000005, lng: -67.3666 } },
  },
  cy: {
    id: "cy",
    name: "Cyprus",
    capital: {
      id: "cy-nicosia",
      name: "Nicosia",
      latLng: { lat: 35.1856, lng: 33.3823 },
    },
    latLngRange: { from: { lat: 20.1856, lng: 18.3823 }, to: { lat: 50.1856, lng: 48.3823 } },
  },
  cz: {
    id: "cz",
    name: "Czech Republic",
    capital: {
      id: "cz-prague",
      name: "Prague",
      latLng: { lat: 50.0755, lng: 14.4378 },
    },
    latLngRange: { from: { lat: 35.0755, lng: -0.5622000000000007 }, to: { lat: 65.0755, lng: 29.4378 } },
  },

  dk: {
    id: "dk",
    name: "Denmark",
    capital: {
      id: "dk-copenhagen",
      name: "Copenhagen",
      latLng: { lat: 55.6761, lng: 12.5683 },
    },
    latLngRange: { from: { lat: 40.6761, lng: -2.4316999999999993 }, to: { lat: 70.67609999999999, lng: 27.5683 } },
  },
  dj: {
    id: "dj",
    name: "Djibouti",
    capital: {
      id: "dj-djibouti",
      name: "Djibouti",
      latLng: { lat: 11.8251, lng: 42.5903 },
    },
    latLngRange: { from: { lat: -3.174899999999999, lng: 27.5903 }, to: { lat: 26.8251, lng: 57.5903 } },
  },
  dm: {
    id: "dm",
    name: "Dominica",
    capital: {
      id: "dm-roseau",
      name: "Roseau",
      latLng: { lat: 15.301, lng: -61.3881 },
    },
    latLngRange: { from: { lat: 0.30100000000000016, lng: -76.38810000000001 }, to: { lat: 30.301000000000002, lng: -46.3881 } },
  },
  do: {
    id: "do",
    name: "Dominican Republic",
    capital: {
      id: "do-santo-domingo",
      name: "Santo Domingo",
      latLng: { lat: 18.4861, lng: -69.9312 },
    },
    latLngRange: { from: { lat: 3.4861000000000004, lng: -84.9312 }, to: { lat: 33.4861, lng: -54.931200000000004 } },
  },

  ec: {
    id: "ec",
    name: "Ecuador",
    capital: {
      id: "ec-quito",
      name: "Quito",
      latLng: { lat: -0.1807, lng: -78.4678 },
    },
    latLngRange: { from: { lat: -15.1807, lng: -93.4678 }, to: { lat: 14.8193, lng: -63.4678 } },
  },
  eg: {
    id: "eg",
    name: "Egypt",
    capital: {
      id: "eg-cairo",
      name: "Cairo",
      latLng: { lat: 30.0444, lng: 31.2357 },
    },
    latLngRange: { from: { lat: 15.0444, lng: 16.2357 }, to: { lat: 45.044399999999996, lng: 46.2357 } },
  },
  sv: {
    id: "sv",
    name: "El Salvador",
    capital: {
      id: "sv-san-salvador",
      name: "San Salvador",
      latLng: { lat: 13.6929, lng: -89.2182 },
    },
    latLngRange: { from: { lat: -1.3071000000000002, lng: -104.2182 }, to: { lat: 28.6929, lng: -74.2182 } },
  },
  gq: {
    id: "gq",
    name: "Equatorial Guinea",
    capital: {
      id: "gq-malabo",
      name: "Malabo",
      latLng: { lat: 3.75, lng: 8.7833 },
    },
    latLngRange: { from: { lat: -11.25, lng: -6.2166999999999994 }, to: { lat: 18.75, lng: 23.7833 } },
  },
  er: {
    id: "er",
    name: "Eritrea",
    capital: {
      id: "er-asmara",
      name: "Asmara",
      latLng: { lat: 15.3229, lng: 38.9251 },
    },
    latLngRange: { from: { lat: 0.32290000000000063, lng: 23.9251 }, to: { lat: 30.3229, lng: 53.9251 } },
  },
  ee: {
    id: "ee",
    name: "Estonia",
    capital: {
      id: "ee-tallinn",
      name: "Tallinn",
      latLng: { lat: 59.437, lng: 24.7536 },
    },
    latLngRange: { from: { lat: 44.437, lng: 9.753599999999999 }, to: { lat: 74.437, lng: 39.7536 } },
  },
  et: {
    id: "et",
    name: "Ethiopia",
    capital: {
      id: "et-addis-ababa",
      name: "Addis Ababa",
      latLng: { lat: 9.145, lng: 38.7667 },
    },
    latLngRange: { from: { lat: -5.855, lng: 23.7667 }, to: { lat: 24.145, lng: 53.7667 } },
  },

  fi: {
    id: "fi",
    name: "Finland",
    capital: {
      id: "fi-helsinki",
      name: "Helsinki",
      latLng: { lat: 60.1699, lng: 24.9384 },
    },
    latLngRange: { from: { lat: 45.1699, lng: 9.938400000000001 }, to: { lat: 75.1699, lng: 39.9384 } },
  },
  fj: {
    id: "fj",
    name: "Fiji",
    capital: {
      id: "fj-suva",
      name: "Suva",
      latLng: { lat: -18.1416, lng: 178.4419 },
    },
    latLngRange: { from: { lat: -33.1416, lng: 163.4419 }, to: { lat: -3.1416000000000004, lng: 193.4419 } },
  },
  fr: {
    id: "fr",
    name: "France",
    capital: {
      id: "fr-paris",
      name: "Paris",
      latLng: { lat: 48.8566, lng: 2.3522 },
    },
    latLngRange: { from: { lat: 33.8566, lng: -12.6478 }, to: { lat: 63.8566, lng: 17.3522 } },
  },

  de: {
    id: "de",
    name: "Germany",
    capital: {
      id: "de-berlin",
      name: "Berlin",
      latLng: { lat: 52.52, lng: 13.405 },
    },
    latLngRange: { from: { lat: 37.52, lng: -1.5950000000000006 }, to: { lat: 67.52000000000001, lng: 28.405 } },
  },
  gh: {
    id: "gh",
    name: "Ghana",
    capital: {
      id: "gh-accra",
      name: "Accra",
      latLng: { lat: 5.6037, lng: -0.187 },
    },
    latLngRange: { from: { lat: -9.3963, lng: -15.187 }, to: { lat: 20.6037, lng: 14.813 } },
  },
  gr: {
    id: "gr",
    name: "Greece",
    capital: {
      id: "gr-athens",
      name: "Athens",
      latLng: { lat: 37.9838, lng: 23.7275 },
    },
    latLngRange: { from: { lat: 22.983800000000002, lng: 8.7275 }, to: { lat: 52.9838, lng: 38.7275 } },
  },
  gl: {
    id: "gl",
    name: "Greenland",
    capital: {
      id: "gl-nuuk",
      name: "Nuuk",
      latLng: { lat: 64.1814, lng: -51.6941 },
    },
    latLngRange: { from: { lat: 49.1814, lng: -66.69409999999999 }, to: { lat: 79.1814, lng: -36.6941 } },
  },
  gt: {
    id: "gt",
    name: "Guatemala",
    capital: {
      id: "gt-guatemala-city",
      name: "Guatemala City",
      latLng: { lat: 14.6349, lng: -90.5069 },
    },
    latLngRange: { from: { lat: -0.3651, lng: -105.5069 }, to: { lat: 29.634900000000002, lng: -75.5069 } },
  },

  hk: {
    id: "hk",
    name: "Hong Kong",
    capital: {
      id: "hk-hong-kong",
      name: "Hong Kong",
      latLng: { lat: 22.3193, lng: 114.1694 },
    },
    latLngRange: { from: { lat: 7.319299999999998, lng: 99.1694 }, to: { lat: 37.3193, lng: 129.1694 } },
  },
  hu: {
    id: "hu",
    name: "Hungary",
    capital: {
      id: "hu-budapest",
      name: "Budapest",
      latLng: { lat: 47.4979, lng: 19.0402 },
    },
    latLngRange: { from: { lat: 32.4979, lng: 4.040199999999999 }, to: { lat: 62.4979, lng: 34.0402 } },
  },

  is: {
    id: "is",
    name: "Iceland",
    capital: {
      id: "is-reykjavik",
      name: "Reykjavik",
      latLng: { lat: 64.1466, lng: -21.9426 },
    },
    latLngRange: { from: { lat: 49.14660000000001, lng: -36.9426 }, to: { lat: 79.1466, lng: -6.942599999999999 } },
  },
  in: {
    id: "in",
    name: "India",
    capital: {
      id: "in-new-delhi",
      name: "New Delhi",
      latLng: { lat: 28.6139, lng: 77.209 },
    },
    latLngRange: { from: { lat: 13.613900000000001, lng: 62.209 }, to: { lat: 43.6139, lng: 92.209 } },
  },
  id: {
    id: "id",
    name: "Indonesia",
    capital: {
      id: "id-jakarta",
      name: "Jakarta",
      latLng: { lat: -6.2088, lng: 106.8456 },
    },
    latLngRange: { from: { lat: -21.2088, lng: 91.8456 }, to: { lat: 8.7912, lng: 121.8456 } },
  },
  ir: {
    id: "ir",
    name: "Iran",
    capital: {
      id: "ir-tehran",
      name: "Tehran",
      latLng: { lat: 35.6892, lng: 51.389 },
    },
    latLngRange: { from: { lat: 20.6892, lng: 36.389 }, to: { lat: 50.6892, lng: 66.38900000000001 } },
  },
  iq: {
    id: "iq",
    name: "Iraq",
    capital: {
      id: "iq-baghdad",
      name: "Baghdad",
      latLng: { lat: 33.3152, lng: 44.3661 },
    },
    latLngRange: { from: { lat: 18.315199999999997, lng: 29.366100000000003 }, to: { lat: 48.3152, lng: 59.3661 } },
  },
  ie: {
    id: "ie",
    name: "Ireland",
    capital: {
      id: "ie-dublin",
      name: "Dublin",
      latLng: { lat: 53.3498, lng: -6.2603 },
    },
    latLngRange: { from: { lat: 38.3498, lng: -21.2603 }, to: { lat: 68.3498, lng: 8.7397 } },
  },
  il: {
    id: "il",
    name: "Israel",
    capital: {
      id: "il-jerusalem",
      name: "Jerusalem",
      latLng: { lat: 31.7683, lng: 35.2137 },
    },
    latLngRange: { from: { lat: 16.7683, lng: 20.213700000000003 }, to: { lat: 46.768299999999996, lng: 50.2137 } },
  },
  it: {
    id: "it",
    name: "Italy",
    capital: {
      id: "it-rome",
      name: "Rome",
      latLng: { lat: 41.9028, lng: 12.4964 },
    },
    latLngRange: { from: { lat: 26.9028, lng: -2.5036000000000005 }, to: { lat: 56.9028, lng: 27.4964 } },
  },

  jp: {
    id: "jp",
    name: "Japan",
    capital: {
      id: "jp-tokyo",
      name: "Tokyo",
      latLng: { lat: 35.6762, lng: 139.6503 },
    },
    latLngRange: { from: { lat: 20.6762, lng: 124.65029999999999 }, to: { lat: 50.6762, lng: 154.6503 } },
  },
  jo: {
    id: "jo",
    name: "Jordan",
    capital: {
      id: "jo-amman",
      name: "Amman",
      latLng: { lat: 31.9539, lng: 35.9106 },
    },
    latLngRange: { from: { lat: 16.9539, lng: 20.910600000000002 }, to: { lat: 46.953900000000004, lng: 50.9106 } },
  },

  kz: {
    id: "kz",
    name: "Kazakhstan",
    capital: {
      id: "kz-astana",
      name: "Astana",
      latLng: { lat: 51.1694, lng: 71.4491 },
    },
    latLngRange: { from: { lat: 36.1694, lng: 56.4491 }, to: { lat: 66.1694, lng: 86.4491 } },
  },
  ke: {
    id: "ke",
    name: "Kenya",
    capital: {
      id: "ke-nairobi",
      name: "Nairobi",
      latLng: { lat: -1.2921, lng: 36.8219 },
    },
    latLngRange: { from: { lat: -16.2921, lng: 21.8219 }, to: { lat: 13.7079, lng: 51.8219 } },
  },
  kr: {
    id: "kr",
    name: "South Korea",
    capital: {
      id: "kr-seoul",
      name: "Seoul",
      latLng: { lat: 37.5665, lng: 126.978 },
    },
    latLngRange: { from: { lat: 22.566499999999998, lng: 111.978 }, to: { lat: 52.5665, lng: 141.978 } },
  },

  lb: {
    id: "lb",
    name: "Lebanon",
    capital: {
      id: "lb-beirut",
      name: "Beirut",
      latLng: { lat: 33.8938, lng: 35.5018 },
    },
    latLngRange: { from: { lat: 18.8938, lng: 20.501800000000003 }, to: { lat: 48.8938, lng: 50.5018 } },
  },
  lt: {
    id: "lt",
    name: "Lithuania",
    capital: {
      id: "lt-vilnius",
      name: "Vilnius",
      latLng: { lat: 54.6872, lng: 25.2797 },
    },
    latLngRange: { from: { lat: 39.6872, lng: 10.279699999999998 }, to: { lat: 69.68719999999999, lng: 40.2797 } },
  },
  lu: {
    id: "lu",
    name: "Luxembourg",
    capital: {
      id: "lu-luxembourg",
      name: "Luxembourg",
      latLng: { lat: 49.6116, lng: 6.1319 },
    },
    latLngRange: { from: { lat: 34.6116, lng: -8.8681 }, to: { lat: 64.61160000000001, lng: 21.1319 } },
  },

  my: {
    id: "my",
    name: "Malaysia",
    capital: {
      id: "my-kuala-lumpur",
      name: "Kuala Lumpur",
      latLng: { lat: 3.139, lng: 101.6869 },
    },
    latLngRange: { from: { lat: -11.861, lng: 86.6869 }, to: { lat: 18.139, lng: 116.6869 } },
  },
  mx: {
    id: "mx",
    name: "Mexico",
    capital: {
      id: "mx-mexico-city",
      name: "Mexico City",
      latLng: { lat: 19.4326, lng: -99.1332 },
    },
    latLngRange: { from: { lat: 4.432600000000001, lng: -114.1332 }, to: { lat: 34.4326, lng: -84.1332 } },
  },
  ma: {
    id: "ma",
    name: "Morocco",
    capital: {
      id: "ma-rabat",
      name: "Rabat",
      latLng: { lat: 34.0209, lng: -6.8416 },
    },
    latLngRange: { from: { lat: 19.020899999999997, lng: -21.8416 }, to: { lat: 49.0209, lng: 8.1584 } },
  },
  mn: {
    id: "mn",
    name: "Mongolia",
    capital: {
      id: "mn-ulaanbaatar",
      name: "Ulaanbaatar",
      latLng: { lat: 47.8864, lng: 106.9057 },
    },
    latLngRange: { from: { lat: 32.8864, lng: 91.9057 }, to: { lat: 62.8864, lng: 121.9057 } },
  },

  nl: {
    id: "nl",
    name: "Netherlands",
    capital: {
      id: "nl-amsterdam",
      name: "Amsterdam",
      latLng: { lat: 52.3676, lng: 4.9041 },
    },
    latLngRange: { from: { lat: 37.3676, lng: -10.0959 }, to: { lat: 67.36760000000001, lng: 19.9041 } },
  },
  nz: {
    id: "nz",
    name: "New Zealand",
    capital: {
      id: "nz-wellington",
      name: "Wellington",
      latLng: { lat: -41.2865, lng: 174.7762 },
    },
    latLngRange: { from: { lat: -56.2865, lng: 159.7762 }, to: { lat: -26.286499999999997, lng: 189.7762 } },
  },
  ng: {
    id: "ng",
    name: "Nigeria",
    capital: {
      id: "ng-abuja",
      name: "Abuja",
      latLng: { lat: 9.0765, lng: 7.3986 },
    },
    latLngRange: { from: { lat: -5.923500000000001, lng: -7.6014 }, to: { lat: 24.0765, lng: 22.398600000000002 } },
  },
  no: {
    id: "no",
    name: "Norway",
    capital: {
      id: "no-oslo",
      name: "Oslo",
      latLng: { lat: 59.9139, lng: 10.7522 },
    },
    latLngRange: { from: { lat: 44.9139, lng: -4.2478 }, to: { lat: 74.9139, lng: 25.752200000000002 } },
  },

  pk: {
    id: "pk",
    name: "Pakistan",
    capital: {
      id: "pk-islamabad",
      name: "Islamabad",
      latLng: { lat: 33.6844, lng: 73.0479 },
    },
    latLngRange: { from: { lat: 18.684399999999997, lng: 58.0479 }, to: { lat: 48.6844, lng: 88.0479 } },
  },
  ph: {
    id: "ph",
    name: "Philippines",
    capital: {
      id: "ph-manila",
      name: "Manila",
      latLng: { lat: 14.5995, lng: 120.9842 },
    },
    latLngRange: { from: { lat: -0.4004999999999992, lng: 105.9842 }, to: { lat: 29.5995, lng: 135.9842 } },
  },
  pl: {
    id: "pl",
    name: "Poland",
    capital: {
      id: "pl-warsaw",
      name: "Warsaw",
      latLng: { lat: 52.2297, lng: 21.0122 },
    },
    latLngRange: { from: { lat: 37.2297, lng: 6.0122 }, to: { lat: 67.22970000000001, lng: 36.0122 } },
  },
  pt: {
    id: "pt",
    name: "Portugal",
    capital: {
      id: "pt-lisbon",
      name: "Lisbon",
      latLng: { lat: 38.7223, lng: -9.1393 },
    },
    latLngRange: { from: { lat: 23.722299999999997, lng: -24.1393 }, to: { lat: 53.7223, lng: 5.8607 } },
  },

  qa: {
    id: "qa",
    name: "Qatar",
    capital: {
      id: "qa-doha",
      name: "Doha",
      latLng: { lat: 25.2854, lng: 51.531 },
    },
    latLngRange: { from: { lat: 10.2854, lng: 36.531 }, to: { lat: 40.285399999999996, lng: 66.531 } },
  },

  ro: {
    id: "ro",
    name: "Romania",
    capital: {
      id: "ro-bucharest",
      name: "Bucharest",
      latLng: { lat: 44.4268, lng: 26.1025 },
    },
    latLngRange: { from: { lat: 29.4268, lng: 11.1025 }, to: { lat: 59.4268, lng: 41.1025 } },
  },
  ru: {
    id: "ru",
    name: "Russia",
    capital: {
      id: "ru-moscow",
      name: "Moscow",
      latLng: { lat: 55.7558, lng: 37.6173 },
    },
    latLngRange: { from: { lat: 40.7558, lng: 22.6173 }, to: { lat: 70.7558, lng: 52.6173 } },
  },

  sa: {
    id: "sa",
    name: "Saudi Arabia",
    capital: {
      id: "sa-riyadh",
      name: "Riyadh",
      latLng: { lat: 24.7136, lng: 46.6753 },
    },
    latLngRange: { from: { lat: 9.7136, lng: 31.6753 }, to: { lat: 39.7136, lng: 61.6753 } },
  },
  rs: {
    id: "rs",
    name: "Serbia",
    capital: {
      id: "rs-belgrade",
      name: "Belgrade",
      latLng: { lat: 44.7866, lng: 20.4489 },
    },
    latLngRange: { from: { lat: 29.7866, lng: 5.448899999999998 }, to: { lat: 59.7866, lng: 35.448899999999995 } },
  },
  sg: {
    id: "sg",
    name: "Singapore",
    capital: {
      id: "sg-singapore",
      name: "Singapore",
      latLng: { lat: 1.3521, lng: 103.8198 },
    },
    latLngRange: { from: { lat: -13.6479, lng: 88.8198 }, to: { lat: 16.3521, lng: 118.8198 } },
  },
  za: {
    id: "za",
    name: "South Africa",
    capital: {
      id: "za-cape-town",
      name: "Cape Town",
      latLng: { lat: -33.9249, lng: 18.4241 },
    },
    latLngRange: { from: { lat: -48.9249, lng: 3.4240999999999993 }, to: { lat: -18.9249, lng: 33.424099999999996 } },
  },
  es: {
    id: "es",
    name: "Spain",
    capital: {
      id: "es-madrid",
      name: "Madrid",
      latLng: { lat: 40.4168, lng: -3.7038 },
    },
    latLngRange: { from: { lat: 25.416800000000002, lng: -18.7038 }, to: { lat: 55.4168, lng: 11.296199999999999 } },
  },
  se: {
    id: "se",
    name: "Sweden",
    capital: {
      id: "se-stockholm",
      name: "Stockholm",
      latLng: { lat: 59.3293, lng: 18.0686 },
    },
    latLngRange: { from: { lat: 44.3293, lng: 3.0686 }, to: { lat: 74.3293, lng: 33.0686 } },
  },
  ch: {
    id: "ch",
    name: "Switzerland",
    capital: {
      id: "ch-berne",
      name: "Bern",
      latLng: { lat: 46.9481, lng: 7.4474 },
    },
    latLngRange: { from: { lat: 31.948099999999997, lng: -7.5526 }, to: { lat: 61.9481, lng: 22.447400000000002 } },
  },

  th: {
    id: "th",
    name: "Thailand",
    capital: {
      id: "th-bangkok",
      name: "Bangkok",
      latLng: { lat: 13.7563, lng: 100.5018 },
    },
    latLngRange: { from: { lat: -1.2437000000000005, lng: 85.5018 }, to: { lat: 28.7563, lng: 115.5018 } },
  },
  tr: {
    id: "tr",
    name: "Turkey",
    capital: {
      id: "tr-ankara",
      name: "Ankara",
      latLng: { lat: 39.9334, lng: 32.8597 },
    },
    latLngRange: { from: { lat: 24.9334, lng: 17.859699999999997 }, to: { lat: 54.9334, lng: 47.8597 } },
  },

  ua: {
    id: "ua",
    name: "Ukraine",
    capital: {
      id: "ua-kyiv",
      name: "Kyiv",
      latLng: { lat: 50.4501, lng: 30.5234 },
    },
    latLngRange: { from: { lat: 35.4501, lng: 15.523399999999999 }, to: { lat: 65.45009999999999, lng: 45.523399999999995 } },
  },
  ae: {
    id: "ae",
    name: "United Arab Emirates",
    capital: {
      id: "ae-abu-dhabi",
      name: "Abu Dhabi",
      latLng: { lat: 24.4539, lng: 54.3773 },
    },
    latLngRange: { from: { lat: 9.4539, lng: 39.3773 }, to: { lat: 39.453900000000004, lng: 69.37729999999999 } },
  },
  gb: {
    id: "gb",
    name: "United Kingdom",
    capital: {
      id: "gb-london",
      name: "London",
      latLng: { lat: 51.5074, lng: -0.1278 },
    },
    latLngRange: { from: { lat: 36.5074, lng: -15.1278 }, to: { lat: 66.50739999999999, lng: 14.8722 } },
  },
  us: {
    id: "us",
    name: "United States",
    capital: {
      id: "us-washington-dc",
      name: "Washington, D.C.",
      latLng: { lat: 38.9072, lng: -77.0369 },
    },
    latLngRange: { from: { lat: 23.907200000000003, lng: -92.0369 }, to: { lat: 53.9072, lng: -62.0369 } },
  },

  vn: {
    id: "vn",
    name: "Vietnam",
    capital: {
      id: "vn-hanoi",
      name: "Hanoi",
      latLng: { lat: 21.0285, lng: 105.8542 },
    },
    latLngRange: { from: { lat: 6.028500000000001, lng: 90.8542 }, to: { lat: 36.0285, lng: 120.8542 } },
  },

  ye: {
    id: "ye",
    name: "Yemen",
    capital: {
      id: "ye-sanaa",
      name: "Sana'a",
      latLng: { lat: 15.3694, lng: 44.191 },
    },
    latLngRange: { from: { lat: 0.3694000000000006, lng: 29.191000000000003 }, to: { lat: 30.3694, lng: 59.191 } },
  },

  zm: {
    id: "zm",
    name: "Zambia",
    capital: {
      id: "zm-lusaka",
      name: "Lusaka",
      latLng: { lat: -15.3875, lng: 28.3228 },
    },
    latLngRange: { from: { lat: -30.3875, lng: 13.3228 }, to: { lat: -0.3874999999999993, lng: 43.3228 } },
  },
  zw: {
    id: "zw",
    name: "Zimbabwe",
    capital: {
      id: "zw-harare",
      name: "Harare",
      latLng: { lat: -17.8292, lng: 31.0522 },
    },
    latLngRange: { from: { lat: -32.8292, lng: 16.0522 }, to: { lat: -2.8292, lng: 46.0522 } },
  },
}

export const COUNTRIES_LIST = Object.values(COUNTRIES).sort((a, b) =>
  a.name.localeCompare(b.name),
)
