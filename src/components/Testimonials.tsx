import React from 'react'
import { useInView } from '../hooks/useInView'

const TESTIMONIALS = [
  {
    quote: "Real review coming soon. We're collecting testimonials from past clients — ask us about our recent roofing work in the Willamette Valley.",
    name: '[Name L.]',
    city: 'Salem',
    year: '2024',
    service: 'Roofing',
  },
  {
    quote: "Real review coming soon. If you've worked with us on an exterior painting or siding project, we'd love to share your experience.",
    name: '[Name L.]',
    city: 'Woodburn',
    year: '2024',
    service: 'Painting',
  },
  {
    quote: 'Testimonio real próximamente. Real review coming soon — including Spanish-language testimonials from clients who prefer working in Spanish.',
    name: '[Nombre L.]',
    city: 'Portland',
    year: '2025',
    service: 'Siding',
  },
]

export default function Testimonials() {
  const { ref, inView } = useInView()
  return (
    <section id="testimonials" ref={ref as React.RefObject<HTMLElement>} className={`bg-[#f2f2f0] py-24 px-6 min-[1250px]:px-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16 max-w-xl">
          <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#888] mb-5">
            <span className="block w-7 h-[1.5px] bg-[#888]" />
            Testimonials
          </div>
          <h2
            className="font-black uppercase text-[#111] leading-[1.08] tracking-[-0.01em]"
            style={{ fontSize: 'clamp(24px, 2.6vw, 38px)' }}
          >
            What Willamette Valley Homeowners Say After the Job Is Done
          </h2>
        </div>

        <div className="grid grid-cols-1 min-[750px]:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ quote, name, city, year, service }, i) => (
            <div
              key={i}
              className="bg-white border border-[#e0e0e0] p-8 flex flex-col"
              style={{ borderRadius: '80px 80px 12px 12px' }}
            >
              <div className="flex justify-center mb-5 mt-2">
                <div
                  className="w-14 h-9 bg-[#f2f2f0] flex items-center justify-center"
                  style={{ borderRadius: '0 0 999px 999px' }}
                >
                  <span className="text-[22px] text-[#ccc] font-serif leading-none">"</span>
                </div>
              </div>

              <p className="text-[13px] text-[#777] leading-[1.8] flex-1 italic mb-6">{quote}</p>

              <div className="border-t border-[#eee] pt-5 flex items-center justify-between">
                <div>
                  <p className="text-[13px] font-black text-[#111]">{name}</p>
                  <p className="text-[11px] text-[#999]">{city}, {year}</p>
                </div>
                <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#888] bg-[#f2f2f0] px-3 py-[5px] rounded-full">
                  {service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
