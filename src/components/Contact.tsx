import React, { useState } from 'react'
import { useInView } from '../hooks/useInView'

const SHEET_URL = 'https://script.google.com/macros/s/AKfycby_D-WuMB27iTKcThcxTZ0NIe9hbSrrZNE8eJYLKBjLnJdb-IXoszoijYSTDJe62R_DqQ/exec'

export default function Contact() {
  const { ref, inView } = useInView()
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', city: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(form),
      })
    } catch {}
    setStatus('sent')
    setForm({ name: '', phone: '', email: '', service: '', city: '', message: '' })
  }

  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>} className={`bg-[#111] text-white py-24 px-6 min-[1250px]:px-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-[1200px] mx-auto min-[900px]:grid min-[900px]:grid-cols-2 min-[900px]:gap-16">

        {/* Left: contact details */}
        <div className="mb-12 min-[900px]:mb-0">
          <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#555] mb-5">
            <span className="block w-7 h-[1.5px] bg-[#555]" />
            Contact
          </div>
          <h2
            className="font-black uppercase text-white leading-[1.08] tracking-[-0.01em] mb-4"
            style={{ fontSize: 'clamp(28px, 2.8vw, 44px)' }}
          >
            Get a Free Estimate
          </h2>
          <p className="text-[14px] text-[#777] leading-[1.75] mb-10" style={{ maxWidth: 380 }}>
            Same-day callbacks. No obligation. Serving Salem, Woodburn, Portland, Dallas, Albany, Turner, and surrounding Willamette Valley communities.
          </p>

          <div className="flex flex-col gap-6 mb-8">
            <a href="tel:9717018136" className="flex items-center gap-4 group">
              <div className="w-10 h-10 bg-[#1e1e1e] rounded-full flex items-center justify-center group-hover:bg-[#2a2a2a] transition-colors">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] text-[#555] uppercase tracking-[0.08em] font-semibold mb-[2px]">Call Us</p>
                <p className="text-[15px] font-bold text-white">(971) 701-8136</p>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#1e1e1e] rounded-full flex items-center justify-center">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] text-[#555] uppercase tracking-[0.08em] font-semibold mb-[2px]">Hours</p>
                <p className="text-[15px] font-bold text-white">Monday – Friday</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#1e1e1e] rounded-full flex items-center justify-center">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] text-[#555] uppercase tracking-[0.08em] font-semibold mb-[2px]">License</p>
                <p className="text-[15px] font-bold text-white">OCCB #219019</p>
              </div>
            </div>
          </div>

          <p className="text-[13px] text-[#555] font-semibold mb-6">Se habla español.</p>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#555] mb-3">Follow Us</p>
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a href="https://www.facebook.com/share/1CZeqZXM24/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" title="Facebook" className="w-10 h-10 bg-[#1e1e1e] rounded-full flex items-center justify-center hover:bg-[#2a2a2a] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/amazingquevedo" target="_blank" rel="noopener noreferrer" title="Instagram" className="w-10 h-10 bg-[#1e1e1e] rounded-full flex items-center justify-center hover:bg-[#2a2a2a] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* TikTok */}
              <a href="https://www.tiktok.com/@amazingquevedollc" target="_blank" rel="noopener noreferrer" title="TikTok" className="w-10 h-10 bg-[#1e1e1e] rounded-full flex items-center justify-center hover:bg-[#2a2a2a] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.78a4.85 4.85 0 01-1.02-.09z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="bg-[#181818] rounded-2xl p-8">
          {status === 'sent' ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
              <div className="w-14 h-14 rounded-full bg-[#1e1e1e] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-white font-black uppercase text-[18px] tracking-tight">We got it!</h3>
              <p className="text-[#666] text-[14px] leading-[1.7]">Thanks for reaching out. We'll call you back the same day.</p>
              <button onClick={() => setStatus('idle')} className="mt-2 text-[12px] font-semibold tracking-[0.08em] uppercase text-[#555] hover:text-white transition-colors">
                Submit another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} action="#" className="flex flex-col gap-5">
              <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-[#555] mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-[#222] text-white placeholder-[#444] text-[14px] px-4 py-3 rounded-lg border border-[#2e2e2e] focus:outline-none focus:border-[#444] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-[#555] mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="(503) 000-0000"
                    className="w-full bg-[#222] text-white placeholder-[#444] text-[14px] px-4 py-3 rounded-lg border border-[#2e2e2e] focus:outline-none focus:border-[#444] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-[#555] mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-[#222] text-white placeholder-[#444] text-[14px] px-4 py-3 rounded-lg border border-[#2e2e2e] focus:outline-none focus:border-[#444] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-[#555] mb-2">Service Needed</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-[#222] text-white text-[14px] px-4 py-3 rounded-lg border border-[#2e2e2e] focus:outline-none focus:border-[#444] transition-colors appearance-none"
                >
                  <option value="">Select a service...</option>
                  {['Roofing', 'Painting', 'Siding', 'Concrete', 'Gutters', 'Moss Removal', 'Cleanup', 'Not sure yet'].map((s) => (
                    <option key={s} value={s.toLowerCase()}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-[#555] mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                  placeholder="Your city"
                  className="w-full bg-[#222] text-white placeholder-[#444] text-[14px] px-4 py-3 rounded-lg border border-[#2e2e2e] focus:outline-none focus:border-[#444] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-[#555] mb-2">
                  Project Description <span className="text-[#333] normal-case tracking-normal">(optional)</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Brief description of what you need..."
                  className="w-full bg-[#222] text-white placeholder-[#444] text-[14px] px-4 py-3 rounded-lg border border-[#2e2e2e] focus:outline-none focus:border-[#444] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-white text-[#111] text-[13px] font-black tracking-[0.06em] uppercase py-4 rounded-lg hover:bg-[#f0f0f0] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Get My Free Estimate'}
              </button>
              <p className="text-center text-[11px] text-[#444] italic">We respond the same day. Every time.</p>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
