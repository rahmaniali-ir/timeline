import "./App.css"
import Timeline from "./components/core/timeline"
import { TimelineOptions } from "./components/core/timelineOptions"
import { Footer } from "./components/layout/footer"
import { Navbar } from "./components/layout/navbar"

function App() {
  return (
    <div className='flex flex-col flex-1'>
      <div className='relative flex flex-1 flex-col gap-4'>
        <Navbar className='fixed top-4 left-4 z-10' />

        <Timeline className='flex-1' />

        <TimelineOptions className='fixed top-4 right-4 z-10' />

        <Footer />
      </div>
    </div>
  )
}

export default App
