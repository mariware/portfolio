'use client'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function ProjectsSection() {
  const stickers = ['html5.svg', 'css3.svg', 'javascript.svg', 'typescript.svg', 'sql.svg', 'mongodb.svg', 'npm.svg', 'nodejs.svg', 'react.svg', 'svelte.svg', 'tailwind.svg', 'nextjs.svg', 'vercel.svg', 'redux.svg', 'python.svg']
  const pages = [
    { front: '#cover', back: '#cover-b', shadow: '#cover-shadow' },
    { front: '#page-1', back: '#page-1-b', shadow: '#page-shadow' },
    { front: '#page-2', back: '#page-2-b', shadow: '#page-shadow' },
  ]

  // Flip Animation
  const flip = (tl: any, front: any, back: any, shadow: any, position: number) => {
    tl.to(front, {
      skewY: -10,
      rotateY: 90,
      transformOrigin: '0% 50%',
      ease: 'none',
      duration: 1,
    })
      .to(back, {
        skewY: 0,
        rotateY: 180,
        transformOrigin: '0% 50%',
        ease: 'none',
        duration: 1,
      })
      .to(shadow, {
        keyframes: [
          { rotateY: 90, skewY: 10 },
          { rotateY: 180, skewY: 0 },
        ],
        transformOrigin: '0% 50%',
        ease: 'none',
        duration: 2,
      }, position)
      .set('#page-shadow', { rotateY: 0 })
  }

  useGSAP(() => {
    // Setters
    gsap.set('#booklet', { rotateX: -8 })
    gsap.set(['#cover-b', '#page-1-b', '#page-2-b'], {
      skewY: -10,
      rotateY: 90,
    })

    // ScrollTrigger Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#booklet',
        start: 'center center',
        end: '+=400',
        pin: true,
        scrub: 1,
        pinSpacing: true
      }
    })

    // Page Flip
    flip(tl, pages[0].front, pages[0].back, pages[0].shadow, 0)
    flip(tl, pages[1].front, pages[1].back, pages[1].shadow, 2)
    flip(tl, pages[2].front, pages[2].back, pages[2].shadow, 4)
  })

  return (
    <div id='booklet' className='flex flex-col relative sm:flex-row items-center justify-center gap-12 sm:gap-12 -rotate-8'>

      {/* Cover */}
      <div id='cover' className='z-1 absolute top-0 left-0 h-100 w-75 bg-memory border border-crack flex flex-col items-center justify-between px-8 py-12 rounded-xl shadow-[inset_4px_-4px_0px_rgba(49,48,51,0.25)]'>
        <span
          className='border-x-4 border-y font-handwriting h-fit text-3xl py-2 px-4'
          style={{
            borderImageSource: `url('/tapes/tape_8.svg')`,
            borderImageSlice: '4 10 4 10 fill',
            borderImageRepeat: 'stretch',
          }}
        >
          Projects
        </span>
        <div className='grid grid-cols-5 gap-2'>
          {stickers.map((file) => (
            <div key={file} className='flex items-center justify-center h-fit'>
              <img
                src={`/stickers/${file}`}
                alt={file}
                className='size-10'
              />
            </div>
          ))}
        </div>
      </div>
      <div id='cover-b' className='z-0 absolute top-0 left-0 h-100 w-75 bg-memory border border-crack flex flex-col items-center justify-between px-8 py-12 rounded-xl shadow-[inset_-4px_-4px_0px_rgba(49,48,51,0.25)]' />

      {/* Page 1 */}
      <div id='page-1' className='-z-1 absolute top-3 left-0 h-94 w-72 bg-light border border-crack'>
        <div className='absolute right-0 translate-x-full translate-y-4 flex items-center justify-center bg-[#7B9D84] size-10'>
          <img src='/photos/pao.png' className='size-8' />
        </div>
      </div>
      <div id='page-1-b' className='z-2 absolute top-3 left-0 h-94 w-72 bg-light border border-crack'>
        <div className='absolute right-0 translate-x-full translate-y-4 flex items-center justify-center bg-[#7B9D84] size-10' />
      </div>

      {/* Page 2 */}
      <div id='page-2' className='-z-2 absolute top-3 left-0 h-94 w-72 bg-light border border-crack'>
        <div className='absolute right-0 translate-x-full translate-y-16 flex items-center justify-center bg-[#6A1B1D] size-10'>
          <img src='/photos/dmcs.jpg' className='size-8' />
        </div>
      </div>
      <div id='page-2-b' className='z-3 absolute top-3 left-0 h-94 w-72 bg-light border border-crack'>
        <div className='absolute right-0 translate-x-full translate-y-16 flex items-center justify-center bg-[#6A1B1D] size-10' />
      </div>

      {/* Back and Shadow */}
      <div className='-z-3 h-100 w-75 bg-memory border border-crack rounded-xl' />
      <div id='cover-shadow' className='-z-100 absolute top-0 left-0 h-100 w-75 bg-[#CBC6B3] rounded-xl -translate-x-1 translate-y-2' />
      <div id='page-shadow' className='-z-100 absolute top-3 left-0 h-94 w-72 bg-[#CBC6B3] -translate-x-1 translate-y-2' />
      <div className='-z-100 absolute top-0 left-0 h-100 w-75 bg-[#CBC6B3] rounded-xl -translate-x-1 translate-y-2' />
    </div>
  )
}