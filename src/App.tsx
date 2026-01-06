import "./App.css"
import Timeline from "./components/core/timeline"
import { TimelineOptions } from "./components/core/timelineOptions"
import YearInput from "./components/core/yearInput"
import { useTimeline } from "./contexts/timeline"

function App() {
  const { viewStart, viewEnd, setViewStart, setViewEnd } = useTimeline()

  return (
    <div className='flex flex-col flex-1'>
      <div className='relative flex flex-1 flex-col justify-center gap-4'>
        <div className='fixed top-4 left-4 flex items-center gap-4'>
          <YearInput value={viewStart} onChange={setViewStart} />
          <span className='text-sky-500 font-bold text-2xl'>–</span>
          <YearInput value={viewEnd} onChange={setViewEnd} />
        </div>

        <Timeline />

        {/* <MiniTimeline className='absolute top-4 right-4' /> */}
        <TimelineOptions className='fixed top-4 right-4' />
      </div>
    </div>
  )
}

export default App
