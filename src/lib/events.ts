import type { TimelineEvent } from "@/types/event"

export function getEventsCountries(events: TimelineEvent[]) {
  const countries: string[] = []

  events.forEach(event =>
    event.counteries?.forEach(c => {
      if (!countries.includes(c)) countries.push(c)
    })
  )

  return countries
}
