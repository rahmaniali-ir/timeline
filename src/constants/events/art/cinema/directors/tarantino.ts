import type { TimelineEvent } from "@/types/event"

const tarantino: Partial<TimelineEvent> = {
  tags: ["art:movie:director:tarantino"],
  counteries: ["us"],
}

const events: TimelineEvent[] = [
  {
    ...tarantino,
    id: "tarantino-once-upon-a-time",
    title: "Once Upon A Time In Hollywood",
    startDate: { year: 2020 },
  },
]

export default events
