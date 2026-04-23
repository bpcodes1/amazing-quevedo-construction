import React from 'react'
import { useInView } from '../hooks/useInView'

const SERVICES = [
  {
    tag: 'Roofing',
    headline: 'When the Ceiling Starts Showing What the Roof Has Been Hiding',
    body: 'If your roof has been patched one too many times, or if the last storm finally pushed water through the ceiling, the repair window is already closing. We handle full replacements and targeted repairs — and for homeowners getting ready to list, we work with the timeline your realtor needs.',
    cta: 'Get a Free Roof Estimate',
  },
  {
    tag: 'Painting',
    headline: "When the House Hasn't Been Painted in Ten Years and the Neighbors' Homes Have",
    body: "Peeling trim, faded siding, a front door that looks tired from the street. If your home has been waiting a decade for fresh paint, we handle full exterior and interior painting on real homeowner timelines — before you list, before the next winter, or just because it's time.",
    cta: 'Get a Free Painting Estimate',
  },
  {
    tag: 'Siding',
    headline: 'Before the Damage Behind the Siding Costs More Than the Siding',
    body: "Cracked, warped, or missing siding lets Oregon weather do slow damage behind the wall. We replace damaged sections and full exteriors, and we catch the moisture issues most crews miss until it's too late.",
    cta: 'Get a Free Siding Estimate',
  },
  {
    tag: 'Concrete',
    headline: "Driveways, Walkways, and Patios That Don't Embarrass the Rest of the House",
    body: 'Cracked driveways, sunken walkways, patios that have outlived their concrete. We handle new pours, replacements, and repairs — including the work your listing agent flagged before the photos go up.',
    cta: 'Get a Free Concrete Estimate',
  },
  {
    tag: 'Gutters',
    headline: 'Before the Water Overflowing Your Gutters Becomes a Foundation Problem',
    body: 'If water is spilling over the edges every time it rains, your fascia, siding, and foundation are already paying for it. We clean, repair, and maintain gutters across the Willamette Valley — usually in a single visit.',
    cta: 'Schedule Gutter Service',
  },
  {
    tag: 'Moss Removal',
    headline: 'The Moss Is Shortening the Life of a Roof You Paid a Lot For',
    body: 'Years of Oregon rain turn roofs into moss gardens. That moss holds moisture against your shingles and takes years off the roof. We remove it safely — no pressure washing, no damage — and treat the roof to slow it coming back.',
    cta: 'Get a Free Moss Removal Estimate',
  },
  // {
  //   tag: 'Cleanup',
  //   headline: 'One Crew, One Truck, One Day — Instead of a Dumpster and a Weekend',
  //   body: "Post-project debris, years of accumulation, or a move that left more than you can haul yourself. We take it all out in one visit so you don't have to rent a truck, pay dump fees, or make three trips.",
  //   cta: 'Schedule a Cleanup',
  // },
]

export default function Services() {
  const { ref, inView } = useInView()
  return (
    <section id="services" ref={ref as React.RefObject<HTMLElement>} className={`bg-[#f2f2f0] py-24 px-6 min-[1250px]:px-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16 max-w-xl">
          <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#888] mb-5">
            <span className="block w-7 h-[1.5px] bg-[#888]" />
            Services
          </div>
          <h2
            className="font-black uppercase text-[#111] leading-[1.08] tracking-[-0.01em] mb-4"
            style={{ fontSize: 'clamp(24px, 2.6vw, 38px)' }}
          >
            Everything Your Home Needs — Handled by One Crew
          </h2>
          <p className="text-[14px] text-[#555] leading-[1.75]">
            One call. One licensed contractor. Seven services most Willamette Valley homeowners eventually need.
          </p>
        </div>

        <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[1000px]:grid-cols-3 gap-5">
          {SERVICES.map(({ tag, headline, body, cta }, i) => (
            <div
              key={tag}
              className="bg-white border border-[#e0e0e0] flex flex-col p-7 hover:border-[#111] hover:shadow-sm transition-all duration-200"
              style={{ borderRadius: '80px 80px 12px 12px' }}
            >
              <div className="flex items-center gap-3 mb-5 mt-4">
                <div className="w-8 h-8 bg-[#111] text-white text-[11px] font-black rounded-full flex items-center justify-center flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#888]">{tag}</span>
              </div>

              <h3
                className="font-black text-[#111] leading-[1.2] mb-4"
                style={{ fontSize: 'clamp(15px, 1.1vw, 18px)' }}
              >
                {headline}
              </h3>
              <p className="text-[13px] text-[#555] leading-[1.75] mb-6 flex-1">{body}</p>

              <a
                href="tel:9717018136"
                className="self-start inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.05em] uppercase text-[#111] border border-[#111] px-5 py-3 rounded-full hover:bg-[#111] hover:text-white transition-all duration-200"
              >
                {cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
