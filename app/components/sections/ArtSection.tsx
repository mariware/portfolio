'use client'

import { IconArrowLeft, IconBatteryFilled, IconPaletteFilled, IconWifi, IconX } from '@tabler/icons-react';
import { useState } from 'react';

export default function ArtSection() {
  const [showModal, setShowModal] = useState(false)
  const [modalImgSrc, setModalImgSrc] = useState('/photos/icon.jpg')
  const [modalImgDesc, setModalImgDesc] = useState('Profile Icon')

  const artworks = [
    { src: '001.webp', desc: "Someday, I'll remember our memories and I know I'll be grateful." },
    { src: '002.webp', desc: 'I will selflessly share with you the things I hold sacred.' },
    { src: '003.webp', desc: 'You are my red to blue; I will give all my rainbows to you.' },
    { src: '004.webp', desc: 'If happiness is in a hug, mine is between your arms.' },
    { src: '005.webp', desc: 'You are my springtide breeze and I am a thousand cherry blossoms.' },
    { src: '006.webp', desc: 'Without you, I am a body with a severed soul.' },
    { src: '007.webp', desc: 'My adoration for aesthetics is a prelude to loving you.' },
    { src: '008.webp', desc: 'My flowers are always in bloom. I am eternal spring.' },
    { src: '009.webp', desc: 'To love you is to experience all four seasons at the same time.' },
    { src: '010.webp', desc: 'I will recognize you, even in reincarnation.' },
    { src: '011.webp', desc: 'You are the start of my good mornings and the end of my good nights.' },
    { src: '012.webp', desc: 'This is but a moment in a lifetime of loving you.' }
  ]

  const getTime = () => {
    const now = new Date()

    let hours = now.getHours()
    const minutes = now.getMinutes().toString().padStart(2, '0')
    hours = hours % 12 || 12

    return `${hours}:${minutes}`
  }

  const openModal = (src: string, desc: string) => {
    setShowModal(true)
    setModalImgSrc(src)
    setModalImgDesc(desc)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className='h-90 w-50 bg-soar rounded-4xl border border-crack flex flex-col gap-4 items-center justify-around -rotate-2 shadow-[-2px_8px_0px_rgba(49,48,51,0.25)]'>
      <div className='relative flex flex-col h-88 w-48 bg-light rounded-[28px] border-4 border-crack overflow-hidden'>
        {/* Topbar */}
        <div className='absolute z-3 h-4 bg-light/50 backdrop-blur-xs flex justify-between items-center w-full px-4 pt-4 pb-3'>
          <span className='text-[10px] font-semibold'>{getTime()}</span>
          <div className='absolute left-15 h-4 w-14 rounded-full flex justify-end bg-crack'>
            <div className='rounded-full size-1 m-1.5 bg-light/50' />
          </div>
          <div className='flex gap-px'>
            <IconWifi className='size-4' />
            <IconBatteryFilled className='size-4' />
          </div>
        </div>

        <div className='flex-1 pt-7 rounded-3xl overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
          {/* Profile Header */}
          <img
            src='/photos/banner.jpg'
            onClick={() => openModal('/photos/banner.jpg', 'Profile Banner')}
            className='cursor-pointer hover:brightness-90'
          />
          <div className='flex flex-col px-4 pb-2 bg-light'>
            <div className='h-6'>
              <img
                src='/photos/icon.jpg'
                onClick={() => openModal('/photos/icon.jpg', 'Profile Icon')}
                className='aspect-square rounded-full size-12 -translate-y-1/2 border-2 border-light cursor-pointer hover:brightness-90'
              />
            </div>
            <a
              className='text-xs font-bold mt-1 leading-none hover:text-soar'
              href="https://x.com/artistmarilag/media"
              target="_blank" rel="noopener noreferrer"
            >
              Artist Marilag
            </a>
            <p className='text-[10px] font-crack/25 leading-none'>@artchivemarilag</p>
          </div>

          {/* Media Grid */}
          <div className='flex-1 grid grid-cols-3 gap-0.5 p-1 pb-2 bg-light overflow-hidden'>
            {artworks.map((art, i) => (
              <img
                key={i} src={`/art/${art.src}`}
                onClick={() => openModal(`/art/${art.src}`, art.desc)}
                className='cursor-pointer hover:brightness-90'
              />
            ))}
          </div>
        </div>

        {/* Image Modal */}
        {showModal &&
          <div className='absolute h-full w-full z-2 flex flex-col bg-light rounded-3xl pt-7'>
            <div className='bg-light p-2 flex gap-2 items-center'>
              <IconArrowLeft className='size-4' onClick={closeModal} />
              <span className='font-semibold text-sm'>Artworks</span>
            </div>
            <div className='bg-light px-2 pb-1 flex gap-2 items-center'>
              <img src='/photos/icon.jpg' className='size-3 rounded-full' />
              <span className='font-semibold text-[10px]'>artchivemarilag</span>
            </div>
            <div className='flex flex-1 flex-col'>
              <img src={modalImgSrc} />
              <p className='text-[10px] bg-light px-2 pt-1 leading-tight'><span className='font-semibold mr-1'>artchivemarilag</span>{modalImgDesc}</p>
            </div>
          </div>
        }
      </div>
    </div>
  )
}