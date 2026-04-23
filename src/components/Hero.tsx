const IMAGE_SRC = '/logo.jpeg'

export default function Hero() {
  return (
    <section
      className="bg-[#f2f2f0] overflow-x-hidden min-[750px]:grid min-[750px]:grid-cols-2 min-[750px]:gap-6 min-[1250px]:grid-cols-[3fr_2fr] min-[750px]:px-6 min-[1250px]:px-14 min-[1250px]:overflow-hidden"
      style={{ minHeight: 'calc(100vh - 80px)', overflow: 'hidden' }}
    >

      {/* ── MOBILE ONLY (<425px): arch centered at top ── */}
      <div className="min-[750px]:hidden flex justify-center pt-10 px-6">
        <div
          className="img-arch overflow-hidden grayscale border-2 border-[#e0e0e0] bg-white"
          style={{ width: 260, height: 320, borderRadius: '999px 999px 16px 16px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
        >
          <img src={IMAGE_SRC} alt="Amazing Quevedo Construction" className="w-full h-full object-cover object-center" />
        </div>
      </div>

      {/* ── TEXT COLUMN (all sizes, left on tablet/desktop) ── */}
      <div className="flex flex-col justify-center text-center min-[750px]:text-left px-6 min-[750px]:px-0 py-10 min-[1250px]:py-16 mx-auto min-[750px]:mx-0" style={{ maxWidth: 780 }}>

        <div className="hero-tag flex items-center justify-center min-[750px]:justify-start gap-[10px] text-[11px] font-semibold tracking-[0.14em] uppercase text-[#888] mb-6 before:block before:w-7 before:h-[1.5px] before:bg-[#888]">
          Oregon's Roofing &amp; Painting Experts
        </div>

        <h1
          className="hero-headline font-black uppercase text-[#111] mb-[22px] leading-[1.08] tracking-[-0.01em]"
          style={{ fontSize: 'clamp(28px, 3.2vw, 46px)', textWrap: 'balance' } as React.CSSProperties}
        >
          Experience the<br />quality of expert<br />craftsmanship
        </h1>

        <p
          className="hero-body text-[14px] text-[#555] leading-[1.75] mb-[38px] mx-auto min-[750px]:mx-0"
          style={{ maxWidth: 380, textWrap: 'pretty' } as React.CSSProperties}
        >
          Where precision, reliability, and care are at the forefront of every project.
          Amazing Quevedo Construction LLC brings decades of roofing and painting expertise
          to your home — done right, on time, and built to last.
        </p>

        <a
          href="tel:9717018136"
          className="hero-cta inline-flex items-center gap-[10px] bg-[#111] text-white text-[13px] font-semibold tracking-[0.04em] no-underline px-7 py-[14px] rounded-[4px] self-center min-[750px]:self-start transition-all duration-200 hover:bg-[#333] hover:-translate-y-px"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
          </svg>
          Get a Free Estimate
        </a>

        {/* MOBILE ONLY (<425px): circle + rect after CTA */}
        <div className="min-[750px]:hidden flex gap-5 mt-8">
          <div
            className="img-circle relative overflow-hidden border-2 border-[#e0e0e0] bg-white"
            style={{ width: 130, height: 130, borderRadius: '50%', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
          >
            <img src={"/before_painting.jpeg"} alt="Amazing Quevedo Construction" className="w-full h-full object-cover object-center" />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#111] text-white text-[9px] font-bold tracking-[0.1em] uppercase px-2 py-[3px] rounded-full whitespace-nowrap">Before</div>
          </div>
          <div
            className="img-rect relative overflow-hidden border-2 border-[#e0e0e0] bg-white"
            style={{ width: 130, height: 165, borderRadius: '65px 65px 12px 12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
          >
            <img src={"/after_painting.jpeg"} alt="Amazing Quevedo Construction" className="w-full h-full object-cover object-center" />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#111] text-white text-[9px] font-bold tracking-[0.1em] uppercase px-2 py-[3px] rounded-full whitespace-nowrap">After</div>
          </div>
        </div>

        <div className="hero-stats flex gap-9 justify-center min-[750px]:justify-start mt-[32px] pt-6 border-t border-[#ddd] w-full">
          {[
            { num: '15+',  label: 'Years Experience' },
            { num: '500+', label: 'Projects Done' },
            { num: 'CCB',  label: '#219019' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="text-[28px] font-black text-[#111] leading-none">{num}</div>
              <div className="text-[11px] text-[#999] uppercase tracking-[0.1em] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── TABLET RIGHT COLUMN (425–1249px): arch only, centered ── */}
      <div className="hidden min-[750px]:flex min-[1250px]:hidden items-center justify-center py-10">
        <div
          className="img-arch overflow-hidden grayscale border-2 border-[#e0e0e0] bg-white"
          style={{ width: '85%', maxWidth: 300, height: 425, borderRadius: '999px 999px 16px 16px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
        >
          <img src={IMAGE_SRC} alt="Amazing Quevedo Construction" className="w-full h-full object-cover object-center" />
        </div>
      </div>

      {/* ── DESKTOP RIGHT COLUMN (1250px+): all 3 shapes ── */}
      <div className="hidden min-[1250px]:block relative" style={{ minHeight: 520 }}>

        <div
          className="img-arch absolute overflow-hidden border-2 border-[#e0e0e0] bg-white grayscale"
          style={{ top: 60, right: 30, width: 400, height: 500, borderRadius: '200px 200px 16px 16px', boxShadow: '0 4px 32px rgba(0,0,0,0.10)' }}
        >
          <img src={IMAGE_SRC} alt="Amazing Quevedo Construction" className="w-full h-full object-contain object-center" />
        </div>

        <div
          className="img-circle absolute overflow-hidden border-2 border-[#e0e0e0] bg-white"
          style={{ top: 60, right: 450, width: 225, height: 225, borderRadius: '50%', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
        >
          <img src={"/before_painting.jpeg"} alt="Amazing Quevedo Construction" className="w-full h-full object-cover object-center" />
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#111] text-white text-[9px] font-bold tracking-[0.1em] uppercase px-2 py-[3px] rounded-full whitespace-nowrap">Before</div>
        </div>

        <div
          className="img-rect absolute overflow-hidden border-2 border-[#e0e0e0] bg-white"
          style={{ top: 305, right: 450, width: 225, height: 255, borderRadius: '113px 113px 16px 16px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
        >
          <img src={"/after_painting.jpeg"} alt="Amazing Quevedo Construction" className="w-full h-full object-cover object-center" />
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#111] text-white text-[9px] font-bold tracking-[0.1em] uppercase px-2 py-[3px] rounded-full whitespace-nowrap">After</div>
        </div>

        <div
          className="img-badge absolute bg-[#111] text-white text-[10px] font-bold tracking-[0.1em] uppercase px-3 py-[6px] rounded-full"
          style={{ top: 72, right: 38 }}
        >
          Licensed &amp; Bonded
        </div>
      </div>

    </section>
  )
}
