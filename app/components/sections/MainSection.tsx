import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';

export default function MainSection() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-12">
      {/* Profile Image */}
      <div className="border border-crack shadow-[-2px_8px_0px_rgba(49,48,51,0.25)] -rotate-4">
        <img src="/photos/profile.jpg" className="w-fit max-h-64 aspect-3/4 border-8 border-light" />
      </div>

      {/* Name Tag */}
      <div className="flex flex-col h-fit bg-youth w-64 border border-crack divide-y divide-crack text-center shadow-[-2px_8px_0px_rgba(49,48,51,0.25)] rotate-4">
        <div className="py-0.5 tracking-[0.5em] font-bold uppercase">Hello, I am</div>
        <div className="bg-light font-handwriting text-5xl py-4">Lance</div>
        <div className="flex justify-between px-2 py-0.5 gap-4">
          <span className="uppercase font-bold">Role</span>
          <span className="font-handwriting">Software Developer</span>
        </div>
        <div className="flex justify-between px-2 py-0.5">
          <span className="uppercase font-bold">Location</span>
          <span className="font-handwriting">Pangasinan, PH</span>
        </div>
      </div>

      {/* Pins */}
      <div className="flex sm:flex-col gap-4">
        <a
          className="bg-[#0077B5] rounded-full p-2 border border-crack shadow-[inset_2px_-2px_0px_rgba(49,48,51,0.25),-2px_4px_0px_rgba(49,48,51,0.25)]"
          href="http://linkedin.com/in/offcllance"
          target="_blank" rel="noopener noreferrer"
        >
          <IconBrandLinkedin stroke={2} className="stroke-light size-8 rotate-16" />
        </a>
        <a
          className="bg-[#8534F3] rounded-full p-2 border border-crack shadow-[inset_2px_-2px_0px_rgba(49,48,51,0.25),-2px_4px_0px_rgba(49,48,51,0.25)] sm:translate-x-[25%]"
          href="https://github.com/mariware/"
          target="_blank" rel="noopener noreferrer"
        >
          <IconBrandGithub stroke={2} className="stroke-light size-8 -rotate-16" />
        </a>
        <a
          className="bg-[#34A853] rounded-full p-2 border border-crack shadow-[inset_2px_-2px_0px_rgba(49,48,51,0.25),-2px_4px_0px_rgba(49,48,51,0.25)] sm:-translate-x-[25%]"
          href="mailto:offcllance@gmail.com"
          target="_blank" rel="noopener noreferrer"
        >
          <IconMail stroke={2} className="stroke-light size-8 rotate-8" />
        </a>
      </div>
    </div>
  )
}