'use client'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

function EnvelopeOpening() {
  return (
    <div id='opening' className='absolute -left-[0.5px] z-5'>
      <svg width='256' height='128' viewBox='0 0 256 128' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M120.611 124.968L0 5.49004L0 0L256 0V5.49004L135.389 124.968C131.308 129.01 124.691 129.01 120.611 124.968Z' fill='#C5DCEE' />
        <path d='M255.5 0.5V5.28027L135.037 124.613C131.151 128.462 124.849 128.462 120.963 124.613L0.5 5.28125L0.5 0.5L255.5 0.5Z' stroke='#313033' strokeWidth={0.8} />
      </svg>
    </div>
  )
}

function EnvelopeBody() {
  return (
    <div id='body' className='absolute top-0 -left-[0.5px] z-4 [clip-path:polygon(50%_30%,95%_0,100%_0,100%_100%,0_100%,0_0,5%_0)]'>
      <svg width='256' height='192' viewBox='0 0 256 192' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M190.793 191.5H0.5L0.5 1.20715L190.793 191.5Z' fill='#C5DCEE' stroke='#313033' strokeWidth={0.8} />
        <path d='M255.5 191.5H65.2073L255.5 1.20715V191.5Z' fill='#C5DCEE' stroke='#313033' strokeWidth={0.8} />
        <path d='M120.62 102.16C124.993 98.8802 131.007 98.8801 135.38 102.16L224.979 169.36L254.5 191.5H1.5L31.0146 169.364L31.0195 169.359L120.62 102.16Z' fill='#C5DCEE' stroke='#313033' strokeWidth={0.8} />
      </svg>
    </div>
  )
}

export default function ContactSection() {
  const isAnimating = useRef(false)
  
  const handleClick = () => {
    if (isAnimating.current) return
    isAnimating.current = true

    navigator.clipboard.writeText('offcllance@gmail.com')
    gsap.set('#alert', { zIndex: 3 })
    gsap.to('#alert', {
      y: -100,
      duration: 0.5,
      repeat: 1,
      repeatDelay: 1,
      yoyo: true,
      onComplete: () => {
        gsap.set('#alert', { zIndex: 0, y: 0 })
        isAnimating.current = false
      }
    })
  }
  useGSAP(() => {
    gsap.set('#envelope', { rotate: 4 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#envelope',
        start: 'center center',
        pin: true,
        scrub: 1,
        pinSpacing: true
      }
    })

    tl.to('#opening', { rotateX: 180, transformOrigin: '50% 0%', duration: 0.5, ease: 'none' })
      .set('#content', { zIndex: 2, delay: 0.5 }, '<')
      .set('#opening', { zIndex: 1 }, '<')
      .to('#content', { yPercent: -25, duration: 2, ease: 'none' }, '<')
  })

  return (
    <div id='envelope' className='relative flex justify-center bg-youth h-48 w-64 -rotate-4 shadow-[-2px_8px_0px_rgba(49,48,51,0.25)]'>
      <EnvelopeBody />
      <EnvelopeOpening />
      <div id='content' className='absolute top-0 left-2 w-60 h-40 bg-light border border-crack flex flex-col items-center p-4 shadow-[-2px_8px_0px_rgba(49,48,51,0.25)]'>
        <p className='font-handwriting text-2xl'> Contact Me </p>
        <div className='group' onClick={handleClick}>
          <p className='text-sm hover:text-soar cursor-pointer'> offcllance@gmail.com </p>
          <button className='text-xs block sm:hidden font-handwriting group-hover:block place-self-center cursor-pointer'> click to copy </button>
        </div>
      </div>
      <div id='alert' className='absolute bottom-4 bg-soar border border-crack px-2 font-handwriting'>
        Email Copied!
      </div>
    </div>
  )
}