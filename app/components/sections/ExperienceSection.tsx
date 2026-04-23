'use client'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useState, useEffect } from 'react'

type Experience = {
  title: string
  company: string
  date: string
  bullets: string[]
}

function parseExperience(md: string): Experience[] {
  const entries = md.split('\n# ').filter(Boolean)

  return entries.map((entry) => {
    const lines = entry.trim().split('\n')
    console.log(lines)

    const title = lines[0].replace('# ', '').trim()
    const company = lines[1].replace('## ', '').trim()
    const date = lines[2].trim()

    const bullets = lines
      .filter((l) => l.startsWith('-'))
      .map((l) => l.replace('- ', '').trim())

    return { title, company, date, bullets }
  })
}

function ExperienceCard({ id, exp }: { id: number, exp: Experience }) {
  const rotation = Math.floor(Math.random() * 16) - 8
  const colors = ['#F8F8F6', '#EBDF95', '#C5DCEE', '#7CB3C5']

  return (
    <div id={`exp_${id}`} className='flex flex-col' style={{ transform: `rotate(${rotation}deg)` }}>
      <div className='relative flex flex-col p-4 pt-6 text-center max-w-60 border border-crack shadow-[-2px_6px_0px_rgba(49,48,51,0.25)] leading-4' style={{ backgroundColor: `${colors[id]}` }}>
        <div className='absolute -top-2 place-self-center shadow-[inset_2px_-2px_0px_rgba(49,48,51,0.25)] size-6 rounded-full border border-crack'
          // before:absolute before:-top-0.5 before:-right-0.5 before:size-5 before:bg-inherit before:shadow-[inset_2px_-2px_0px_rgba(49,48,51,0.25)] before:rounded-full before:border before:border-crack'
          style={{ backgroundColor: colors[(id + 1) % colors.length] }}
        />
        <p className='font-handwriting text-xl font-semibold'>{exp.title}</p>
        <p className='font-handwriting'>{exp.company}</p>
        <p className='text-sm text-crack/75'>{exp.date}</p>
        <div className='flex flex-col gap-2 mt-2'>
          {exp.bullets.map((text, i) => (
            <p key={i} className='text-sm leading-tight text-balance'>
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ExperienceSection() {
  const [data, setData] = useState<Experience[]>([]);

  useEffect(() => {
    fetch('/experience.md')
      .then((res) => res.text())
      .then((md) => setData(parseExperience(md)));
  }, []);

  useGSAP(() => {
    gsap.set('#notes', { x: -40 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#wrapper',
        start: 'center center',
        end: '+=160',
        pin: true,
        scrub: 1,
        pinSpacing: true
      }
    })

    tl.to('#notes', { x: -880, ease: 'none' })
  })

  return (
    <div id='wrapper' className='translate-x-1/2'>
      <span
        className='border-x-4 border-y font-handwriting h-fit text-3xl py-2 px-4'
        style={{
          borderImageSource: `url('/tapes/tape_7.svg')`,
          borderImageSlice: '4 10 4 10 fill',
          borderImageRepeat: 'stretch',
        }}
      >
        Experience
      </span>
      <div id='notes' className='min-h-80 mt-8 w-max flex flex-row items-center justify-center gap-12 sm:gap-12'>
        {data.map((exp, i) => (
          <ExperienceCard id={i} key={i} exp={exp} />
        ))}
      </div>
    </div>
  )
}