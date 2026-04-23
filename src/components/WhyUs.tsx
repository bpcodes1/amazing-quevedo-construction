import React from 'react'
import { useInView } from '../hooks/useInView'

const POINTS = [
  {
    title: 'The owner is on every job.',
    body: "Mayra runs the crew and runs the jobs. Your project doesn't get subcontracted out to strangers you never meet. The person who gave you the estimate is the person making sure it gets done right.",
  },
  {
    title: 'Every call gets a same-day response.',
    body: "When you call, you hear back that day — not three days later when you've already moved on to the next contractor. The fastest way to lose a homeowner's trust is to go silent after the estimate. We don't.",
  },
  {
    title: 'We speak Spanish and English.',
    body: "A real portion of Willamette Valley homeowners would rather talk through a major home project in Spanish, where the details matter and nothing gets lost. That's how we operate — not as a marketing angle, as the way the business actually runs.",
  },
  {
    title: "We're licensed and insured.",
    body: "OCCB #219019. You can verify the license on the Oregon Construction Contractors Board website before we ever set foot on your property. Fully insured, so if something goes wrong on your property, you're not liable for it.",
  },
  {
    title: "We're not the cheapest. We're the fair price done right.",
    body: "Middle-of-market pricing by design. We're not trying to win the job by cutting corners, and we're not pretending to be premium. You're paying for work that lasts, from a crew that answers the phone.",
  },
]

export default function WhyUs() {
  const { ref, inView } = useInView()
  return (
    <section id="why-us" ref={ref as React.RefObject<HTMLElement>} className={`bg-[#111] text-white py-24 px-6 min-[1250px]:px-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-[1200px] mx-auto min-[900px]:grid min-[900px]:grid-cols-[2fr_3fr] min-[900px]:gap-20 min-[900px]:items-start">

        {/* Left: sticky header */}
        <div className="mb-14 min-[900px]:mb-0 min-[900px]:sticky min-[900px]:top-8">
          <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#555] mb-5">
            <span className="block w-7 h-[1.5px] bg-[#555]" />
            Why Us
          </div>
          <h2
            className="font-black uppercase text-white leading-[1.08] tracking-[-0.01em] mb-5"
            style={{ fontSize: 'clamp(22px, 2.2vw, 34px)' }}
          >
            Most Homeowners Aren't Afraid of the Project. They're Afraid of Hiring the Wrong Crew.
          </h2>
          <p className="text-[14px] text-[#666] leading-[1.75]">
            Here's what you're actually getting when you hire Amazing Quevedo Construction.
          </p>
        </div>

        {/* Right: points */}
        <div className="flex flex-col">
          {POINTS.map(({ title, body }, i) => (
            <div key={i} className="border-t border-[#222] py-8 flex items-start gap-5">
              <div
                className="flex-shrink-0 w-8 h-10 bg-[#1e1e1e] flex items-center justify-center text-[10px] font-black text-[#555]"
                style={{ borderRadius: '999px 999px 4px 4px' }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <p className="text-[15px] font-black text-white mb-2">{title}</p>
                <p className="text-[13px] text-[#777] leading-[1.8]">{body}</p>
              </div>
            </div>
          ))}

          <div className="border-t border-[#222] pt-8">
            <a
              href="tel:9717018136"
              className="inline-flex items-center gap-3 bg-white text-[#111] text-[13px] font-semibold tracking-[0.04em] no-underline px-7 py-[14px] rounded-[4px] hover:bg-[#f0f0f0] transition-colors duration-200"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              Get a Free Estimate
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
