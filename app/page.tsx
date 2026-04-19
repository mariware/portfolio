import Image from "next/image"
import Header from "./components/Header"
import MainSection from "./components/sections/MainSection"
import ProjectsSection from "./components/sections/Projects"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-saebom text-crack font-sans">
      <Header />
      <main className="flex w-full max-w-3xl flex-col items-center justify-center p-16 gap-16">
        <MainSection />
        <ProjectsSection />
        <div></div>
      </main>
    </div>
  )
}
