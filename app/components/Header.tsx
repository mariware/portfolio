function TapeButton({ tape, children }: { tape: number; children: React.ReactNode }) {
  return (
    <button
      className="border-x-4 border-y font-handwriting"
      style={{
        borderImageSource: `url('/tapes/tape_${tape}.svg')`,
        borderImageSlice: "4 20 4 20 fill",
        borderImageRepeat: "stretch",
      }}
    >
      <div className="px-2">{children}</div>
    </button>
  )
}

export default function Header() {
  const navItems = ["Home", "Projects", "Art", "Contact"]
  const tapeNumbers = Array.from({ length: 7 }, (_, i) => i + 1).sort(() => Math.random() - 0.5)

  return (
    <nav className="flex py-4 gap-4 sm:gap-8">
      {navItems.map((label, i) => (
        <TapeButton key={label} tape={tapeNumbers[i]}>
          {label}
        </TapeButton>
      ))}
    </nav>
  )
}