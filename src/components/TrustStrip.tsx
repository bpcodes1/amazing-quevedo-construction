export default function TrustStrip() {
  const items = [
    'Licensed OCCB #219019',
    'Fully Insured',
    'Serving Willamette Valley Since 2020',
    'Hablamos Español',
  ]
  return (
    <section className="bg-[#111] text-white py-3 overflow-x-auto">
      <div className="flex items-center justify-start min-[900px]:justify-center gap-0 px-6 whitespace-nowrap">
        {items.map((item, i) => (
          <div key={item} className="flex items-center">
            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#aaa]">{item}</span>
            {i < items.length - 1 && <span className="text-[#444] mx-5">•</span>}
          </div>
        ))}
      </div>
    </section>
  )
}
