const ITEMS = [
  'Licensed OCCB #219019',
  'Fully Insured',
  'Serving Willamette Valley Since 2020',
  'Hablamos Español',
]

export default function TrustStrip() {
  return (
    <section className="bg-[#111] text-white py-3 overflow-hidden">
      <div className="flex">
        {/* Duplicate twice for seamless loop */}
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex items-center shrink-0 animate-marquee"
            aria-hidden={copy === 1}
          >
            {ITEMS.map((item, i) => (
              <div key={i} className="flex items-center">
                <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#aaa] whitespace-nowrap px-6">
                  {item}
                </span>
                <span className="text-[#444]">•</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
