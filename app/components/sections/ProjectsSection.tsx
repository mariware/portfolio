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
    { front: '#page-3', back: '#page-3-b', shadow: '#page-shadow' },
    { front: '#page-4', back: '#page-4-b', shadow: '#page-shadow' }
  ]

  // Flip Animation
  const flip = (tl: any, front: any, back: any, shadow: any, position: number) => {
    tl.to(front, {
      skewY: -10,
      rotateY: 90,
      transformOrigin: '0% 50%',
      ease: 'none',
      duration: 1,
      delay: 1,
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
      }, (position + 1))
      .set('#page-shadow', { rotateY: 0 })
  }

  useGSAP(() => {
    // Setters
    gsap.set('#booklet', { rotateX: -8 })
    gsap.set(['#cover-b', '#page-1-b', '#page-2-b', '#page-3-b', '#page-4-b'], {
      skewY: -10,
      rotateY: 90,
    })

    // ScrollTrigger Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#booklet',
        start: 'center center',
        end: '+=1200',
        pin: true,
        scrub: 1,
        pinSpacing: true
      }
    })

    // Page Flip
    flip(tl, pages[0].front, pages[0].back, pages[0].shadow, 0)
    flip(tl, pages[1].front, pages[1].back, pages[1].shadow, 3)
    flip(tl, pages[2].front, pages[2].back, pages[2].shadow, 6)
    flip(tl, pages[3].front, pages[3].back, pages[3].shadow, 9)
    flip(tl, pages[4].front, pages[4].back, pages[4].shadow, 12)
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
      <div id='page-1' className='-z-1 absolute top-3 left-0 h-94 w-72 bg-light border border-crack px-8 py-4'>
        <div className='absolute right-0 translate-x-full translate-y-0 flex items-center justify-center bg-[#7B9D84] size-10'>
          <img src='/photos/pao.png' className='size-8' />
        </div>
        <p className='font-handwriting text-xl font-semibold'>PAO-ERS</p>
        <p>Client: <span className='font-handwriting'>Public Attorney's Office</span></p>
        <p className='text-xs mt-2 text-justify'>The Public Attorney's Office Electronic Records System  or PAO-ERS is a web application that modernizes how the Public Attorney's Office manages records and case data by digitizing forms and automating report generation.</p>
        <div className='relative border border-crack mt-8 -rotate-4 place-self-center w-fit shadow-[-2px_4px_0px_rgba(49,48,51,0.25)]'>
          <div className="border-x-4 border-y font-handwriting absolute h-4 w-20 -top-2 place-self-center opacity-80 rotate-4"
            style={{
              borderImageSource: `url('/tapes/tape_2.svg')`,
              borderImageSlice: "4 20 4 20 fill",
              borderImageRepeat: "stretch",
            }} />
          <img src="/photos/pao-ers.png" className="border-4 border-[#7B9D84] h-36" />
        </div>
      </div>
      <div id='page-1-b' className='z-2 absolute top-3 left-0 h-94 w-72 bg-light border border-crack'>
        <div className='absolute right-0 translate-x-full translate-y-4 flex items-center justify-center bg-[#7B9D84] size-10' />
      </div>

      {/* Page 2 */}
      <div id='page-2' className='-z-2 absolute top-3 left-0 h-94 w-72 bg-light border border-crack px-8 py-4'>
        <div className='absolute right-0 translate-x-full translate-y-10 flex items-center justify-center bg-[#6A1B1D] size-10'>
          <img src='/photos/dmcs.jpg' className='size-8' />
        </div>
        <a
          className='font-handwriting text-xl font-semibold hover:text-[#6A1B1D] after:content-["_↗"] sm:after:content-[""] hover:after:content-["_↗"]'
          href='https://upb-dmcs.vercel.app/'
          target='_blank' rel='noopener noreferrer'
        >
          DMCS Website Redesign
        </a>
        <p>Client: <span className='font-handwriting'>DMCS - UP Baguio</span></p>
        <p className='text-xs mt-2 text-justify'>This is a study and redesign of the Department of Mathematics and Computer Science website, rebuilt with React and modern UI libraries to enhance user experience while preserving existing content.</p>
        <div className='relative border border-crack mt-8 -rotate-2 place-self-center w-fit shadow-[-2px_4px_0px_rgba(49,48,51,0.25)]'>
          <div className="border-x-4 border-y font-handwriting absolute h-4 w-20 -top-2 place-self-center opacity-80 rotate-4"
            style={{
              borderImageSource: `url('/tapes/tape_1.svg')`,
              borderImageSlice: "4 20 4 20 fill",
              borderImageRepeat: "stretch",
            }} />
          <img src="/photos/dmcsweb.jpeg" className="border-4 border-[#6A1B1D] h-36" />
        </div>
      </div>
      <div id='page-2-b' className='z-3 absolute top-3 left-0 h-94 w-72 bg-light border border-crack'>
        <div className='absolute right-0 translate-x-full translate-y-14 flex items-center justify-center bg-[#6A1B1D] size-10' />
      </div>

      {/* Page 3 */}
      <div id='page-3' className='-z-3 absolute top-3 left-0 h-94 w-72 bg-light border border-crack px-8 py-4'>
        <div className='absolute right-0 translate-x-full translate-y-20 flex items-center justify-center bg-[#FB7185] size-10'>
          <img src='/photos/pi100.png' className='size-8' />
        </div>
        <a
          className='font-handwriting text-xl font-semibold hover:text-[#FB7185] after:content-["_↗"] sm:after:content-[""] hover:after:content-["_↗"]'
          href='https://pag-ibig-100.vercel.app/'
          target='_blank' rel='noopener noreferrer'
        >
          Pag-ibig 100
        </a>
        <p className='font-handwriting'>Personal Project</p>
        <p className='text-xs mt-2 text-justify'>This is a website developed for the PI 100 (Life and Works of Rizal) course that narrates the romantic and filial relationships of José Rizal, inspired by modern dating apps.</p>
        <div className='relative border border-crack mt-8 place-self-center w-fit shadow-[-2px_4px_0px_rgba(49,48,51,0.25)]'>
          <div className="border-x-4 border-y font-handwriting absolute h-4 w-20 -top-2 place-self-center opacity-80 rotate-4"
            style={{
              borderImageSource: `url('/tapes/tape_3.svg')`,
              borderImageSlice: "4 20 4 20 fill",
              borderImageRepeat: "stretch",
            }} />
          <img src="/photos/pagibig100.jpeg" className="border-4 border-light h-36" />
        </div>
      </div>
      <div id='page-3-b' className='z-4 absolute top-3 left-0 h-94 w-72 bg-light border border-crack'>
        <div className='absolute right-0 translate-x-full translate-y-24 flex items-center justify-center bg-[#FB7185] size-10' />
      </div>

      {/* Page 4 */}
      <div id='page-4' className='-z-4 absolute top-3 left-0 h-94 w-72 bg-light border border-crack px-8 py-4'>
        <div className='absolute right-0 translate-x-full translate-y-30 flex items-center justify-center bg-[#51A2FF] size-10'>
          <img src='/photos/resumed.png' className='size-8' />
        </div>
        <a
          className='font-handwriting text-xl font-semibold hover:text-[#51A2FF] hover:after:content-["_↗"]'
          href='https://resumed-by-mariware.vercel.app/'
          target='_blank' rel='noopener noreferrer'
        >
          resuméd
        </a>
        <p className='font-handwriting'>Personal Project</p>
        <p className='text-xs mt-2 text-justify'>resuméd is a lightweight tool designed to help individuals quickly create their own resume, featuring a guided form and real-time preview for a simple and accessible experience.</p>
        <div className='relative border border-crack mt-8 rotate-2 place-self-center w-fit shadow-[-2px_4px_0px_rgba(49,48,51,0.25)]'>
          <div className="border-x-4 border-y font-handwriting absolute h-4 w-20 -top-2 place-self-center opacity-80 rotate-4"
            style={{
              borderImageSource: `url('/tapes/tape_4.svg')`,
              borderImageSlice: "4 20 4 20 fill",
              borderImageRepeat: "stretch",
            }} />
          <img src="/photos/resumed.jpeg" className="border-4 border-[#51A2FF] h-36" />
        </div>
      </div>
      <div id='page-4-b' className='z-5 absolute top-3 left-0 h-94 w-72 bg-light border border-crack'>
        <div className='absolute right-0 translate-x-full translate-y-34 flex items-center justify-center bg-[#51A2FF] size-10' />
      </div>

      {/* Back and Shadow */}
      <div className='-z-99 h-100 w-75 bg-memory border border-crack rounded-xl'>
        <div className='absolute top-3 left-0 h-94 w-72 flex flex-col items-center justify-center gap-4 bg-light border border-crack'>
          <span className='font-handwriting'>more projects in progress...</span>
          <a
            className='bg-[#8534F3] text-light border border-crack px-2 font-handwriting shadow-[-2px_4px_0px_rgba(49,48,51,0.25)] hover:scale-110 hover:rotate-4'
            href="https://github.com/mariware/"
            target="_blank" rel="noopener noreferrer"
          >
            Check my GitHub!
          </a>
        </div>
      </div>
      <div id='cover-shadow' className='-z-100 absolute top-0 left-0 h-100 w-75 bg-[#CBC6B3] rounded-xl -translate-x-1 translate-y-2' />
      <div id='page-shadow' className='-z-100 absolute top-3 left-0 h-94 w-72 bg-[#CBC6B3] -translate-x-1 translate-y-2' />
      <div className='-z-100 absolute top-0 left-0 h-100 w-75 bg-[#CBC6B3] rounded-xl -translate-x-1 translate-y-2' />
    </div>
  )
}