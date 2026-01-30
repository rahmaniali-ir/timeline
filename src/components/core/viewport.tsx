import Timeline from "./timeline"
import { TimelineOptions } from "./timelineOptions"
import { WorldMap } from "./worldMap"

export function Viewport() {
  return (
    <div className='fixed inset-0 flex flex-col pt-16 p-4'>
      <div className='relative flex-2'>
        <WorldMap className='absolute inset-0 text-neutral-200' />
      </div>

      <Timeline className='flex-1 z-30' />

      <TimelineOptions className='fixed top-4 right-4 z-10' />
    </div>
  )
}
