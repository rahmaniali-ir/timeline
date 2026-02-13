import { AtomIcon, BrainIcon, HeartIcon, LeafIcon } from "lucide-react"
import { GithubIcon } from "../icons/github"

export function Footer() {
  return (
    <footer className='group/footer flex items-center justify-center gap-2 text-xs text-neutral-400 dark:text-neutral-500/75 mt-auto z-30 p-2 bg-background'>
      <span>Developed with</span>

      <div className='flex items-center gap-1 hover:text-neutral-500 dark:hover:text-neutral-400'>
        <div className='group relative'>
          <HeartIcon className='size-3.5 transition-colors hover:text-red-600 group-hover:scale-125' />

          <div className='surface absolute! left-1/2 -translate-x-1/2 bottom-[calc(100%+8px)] py-0.5 px-2 pointer-events-none opacity-0 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0'>
            Love
          </div>
        </div>

        <div className='group relative'>
          <BrainIcon className='size-3.5 transition-colors hover:text-yellow-600 group-hover:scale-125' />

          <div className='surface absolute! left-1/2 -translate-x-1/2 bottom-[calc(100%+8px)] py-0.5 px-2 pointer-events-none opacity-0 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0'>
            Curiosity
          </div>
        </div>

        <div className='group relative'>
          <LeafIcon className='size-3.5 transition-colors hover:text-green-600 group-hover:scale-125' />

          <div className='surface absolute! left-1/2 -translate-x-1/2 bottom-[calc(100%+8px)] py-0.5 px-2 pointer-events-none opacity-0 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0'>
            Hope
          </div>
        </div>

        <span>&</span>

        <div className='group relative'>
          <AtomIcon className='size-3.5 transition-colors hover:text-sky-600 group-hover:scale-125' />

          <div className='surface absolute! left-1/2 -translate-x-1/2 bottom-[calc(100%+8px)] py-0.5 px-2 pointer-events-none opacity-0 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0'>
            React
          </div>
        </div>
      </div>

      <span className='text-neutral-300/75 dark:text-neutral-600'>●</span>

      <a
        href='https://github.com/rahmaniali-ir/timeline?tab=readme-ov-file#contributing'
        target='_blank'
        className='flex items-center gap-1 hover:text-neutral-800 dark:hover:text-neutral-200'
      >
        <GithubIcon className='size-4' />

        <span>Contribute</span>
      </a>
    </footer>
  )
}
