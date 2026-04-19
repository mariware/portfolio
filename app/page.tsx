import Image from "next/image"
import Header from "./components/Header"
import MainSection from "./components/sections/MainSection"
import ProjectsSection from "./components/sections/ProjectsSection"
import ExperienceSection from "./components/sections/ExperienceSection"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-saebom text-crack font-sans">
      <Header />
      <main className="flex w-full flex-col items-center justify-center p-16 gap-16 overflow-x-hidden">
        <MainSection />
        <ExperienceSection />
        <ProjectsSection />
        <div></div>
      </main>
    </div>
  )
}
