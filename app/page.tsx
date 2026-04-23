import Image from "next/image"
import Header from "./components/Header"
import MainSection from "./components/sections/MainSection"
import ProjectsSection from "./components/sections/ProjectsSection"
import ExperienceSection from "./components/sections/ExperienceSection"
import ContactSection from "./components/sections/ContactSection"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-saebom text-crack font-sans">
      <Header />
      <main className="flex w-full flex-col items-center justify-center gap-8 overflow-x-hidden pt-12 sm:pt-0">
        <MainSection />
        <br id='experience' />
        <ExperienceSection />
        <br id='projects' />
        <ProjectsSection />
        <br id='contact' />
        <ContactSection />
        <Header />
      </main>
    </div>
  )
}
