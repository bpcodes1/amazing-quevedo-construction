export default function StickyFooter() {
  return (
    <div className="min-[750px]:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#e0e0e0] px-4 py-3 flex gap-3">
      <a
        href="tel:9717018136"
        className="flex-1 flex items-center justify-center gap-2 border border-[#111] text-[#111] text-[13px] font-bold py-3 rounded-full"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
        </svg>
        Call Now
      </a>
      <a
        href="#contact"
        className="flex-1 flex items-center justify-center bg-[#111] text-white text-[13px] font-bold py-3 rounded-full"
      >
        Free Estimate
      </a>
    </div>
  )
}
