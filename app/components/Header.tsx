function TapeButton({ tape, children, href }: { tape: number; children: React.ReactNode, href: any }) {
  return (
    <a
      href={href}
      className="border-x-4 border-y font-handwriting"
      style={{
        borderImageSource: `url('/tapes/tape_${tape}.svg')`,
        borderImageSlice: "4 20 4 20 fill",
        borderImageRepeat: "stretch",
      }}
    >
      <div className="px-2">{children}</div>
    </a>
  )
}

export default function Header() {
  const navItems = [
    { label: "Home", href: "#top" },
    { label: "Projects", href: "#projects" },
    { label: "Art", href: "#art" },
    { label: "Contact", href: "#contact" }
  ]

  const tapeNumbers = Array.from({ length: 7 }, (_, i) => i + 1)
    .sort(() => Math.random() - 0.5)

  return (
    <nav className="flex py-4 gap-4 sm:gap-8 h-15">
      {navItems.map((item, i) => (
        <TapeButton key={item.label} tape={tapeNumbers[i]} href={item.href}>
          {item.label}
        </TapeButton>
      ))}
    </nav>
  )
}