import React from 'react'
import { useInView } from '../hooks/useInView'

export default function About() {
  const { ref, inView } = useInView()
  return (
    <section id="about" ref={ref as React.RefObject<HTMLElement>} className={`bg-white py-24 px-6 min-[1250px]:px-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-[1200px] mx-auto min-[900px]:grid min-[900px]:grid-cols-2 min-[900px]:gap-16 min-[900px]:items-center">

        {/* Arch photo placeholder */}
        <div className="flex justify-center mb-14 min-[900px]:mb-0">
          <div
            className="overflow-hidden border-2 border-[#e0e0e0] relative"
            style={{
              width: 300,
              height: 380,
              borderRadius: '999px 999px 16px 16px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
            }}
          >
            <img
              src="/mayra.webp"
              alt="Mayra, Owner & Operator"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#111] text-white text-[9px] font-bold tracking-[0.1em] uppercase px-3 py-[4px] rounded-full whitespace-nowrap">
              Owner &amp; Operator
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#888] mb-5">
            <span className="block w-7 h-[1.5px] bg-[#888]" />
            About
          </div>
          <h2
            className="font-black uppercase text-[#111] leading-[1.08] tracking-[-0.01em] mb-6"
            style={{ fontSize: 'clamp(28px, 2.8vw, 44px)' }}
          >
            Meet Mayra
          </h2>
          <p className="text-[14px] text-[#555] leading-[1.8] mb-5">
            Mayra Maria Arteaga started Amazing Quevedo Construction in 2020 with one principle: if her name is on the company, she's on the job. Five years and hundreds of Willamette Valley homes later, that's still how it runs.
          </p>
          <p className="text-[14px] text-[#555] leading-[1.8] mb-9">
            She personally answers the calls, walks the estimates, and makes sure every project gets finished the way it was promised — in Spanish or English, for the homeowners staying put and the ones getting ready to sell.
          </p>

          <div className="flex flex-wrap gap-3">
            {['Licensed OCCB #219019', 'Fully Insured', 'Based in Salem', 'Est. 2020'].map((badge) => (
              <span
                key={badge}
                className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#111] border border-[#ddd] px-4 py-2 rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
