import { useState } from "react"
import "./App.css"
import MiniTimeline from "./components/core/miniTimeline"
import Timeline from "./components/core/timeline"
import YearInput from "./components/core/yearInput"
import { BIG_BANG_YEAR } from "./constants/events"
import { TimelineOptions } from "./components/core/timelineOptions"

function App() {
  const [startYear, setStartYear] = useState(BIG_BANG_YEAR)
  const [endYear, setEndYear] = useState(new Date().getFullYear())

  return (
    <div className='flex flex-col flex-1'>
      <div className='relative flex flex-1 flex-col justify-center gap-4'>
        <div className='fixed top-4 left-4 flex items-center gap-4'>
          <YearInput value={startYear} onChange={setStartYear} />
          <span className='text-sky-500 font-bold text-2xl'>–</span>
          <YearInput value={endYear} onChange={setEndYear} />
        </div>

        <Timeline
          start={startYear}
          end={endYear}
          onStartChange={setStartYear}
          onEndChange={setEndYear}
        />

        {/* <MiniTimeline className='absolute top-4 right-4' /> */}
        <TimelineOptions className='fixed top-4 right-4' />
      </div>
    </div>
  )
}

export default App
