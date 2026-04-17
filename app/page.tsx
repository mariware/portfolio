import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-saebom text-crack font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <h1 className="font-handwriting text-5xl">Test Header 1</h1>
        <h2 className="font-handwriting text-3xl">Test Header 2</h2>
        <h3 className="font-handwriting text-xl">Test Header 3</h3>
        <p>May your flowers always be in bloom.</p>
      </main>
    </div>
  );
}
