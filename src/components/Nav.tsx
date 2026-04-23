const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 min-[1250px]:px-14 py-2 border-b border-[#e0e0e0] bg-[#f2f2f0]">
      <img src="/navbar_logo.jpeg" alt="Amazing Quevedo Construction" className="h-16 w-auto object-contain" />

      <ul className="hidden min-[1250px]:flex gap-9 list-none">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="text-[13px] font-medium text-[#111] no-underline tracking-[0.01em] transition-opacity duration-200 hover:opacity-45"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-[14px]">
        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden min-[1250px]:inline-flex items-center gap-2 bg-[#111] text-white text-[12px] font-semibold tracking-[0.04em] no-underline px-5 py-[10px] rounded-[4px] hover:bg-[#333] transition-colors duration-200"
        >
          Get a Free Estimate
        </a>

        {/* Phone icon (mobile/tablet) */}
        <a href="tel:9717018136" title="Call us" className="min-[1250px]:hidden text-[#111] flex items-center transition-opacity duration-200 hover:opacity-45">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
        </a>

        {/* Hamburger (mobile/tablet) */}
        <a href="#" title="Menu" className="min-[1250px]:hidden text-[#111] flex items-center transition-opacity duration-200 hover:opacity-45">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </a>
      </div>
    </nav>
  )
}
