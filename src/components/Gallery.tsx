import React, { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

type SingleItem      = { type: 'single'; src: string; caption: string }
type PairItem        = { type: 'pair'; before: string; after: string; caption: string }
type CycleItem       = { type: 'cycle'; images: string[]; caption: string }
type PlaceholderItem = { type: 'placeholder'; caption: string }
type GalleryItem = SingleItem | PairItem | CycleItem | PlaceholderItem

const BASE = '/work_images/'

const ITEMS: GalleryItem[] = [
  { type: 'pair',  before: BASE + 'roof_repair_before.JPEG', after: BASE + 'roof_repair_after.JPEG', caption: 'Roof Repair · Salem, 2024' },
  { type: 'pair',  before: BASE + 'siding_before.JPEG',      after: BASE + 'siding_after.JPEG',      caption: 'Siding Work · Portland, 2024' },
  { type: 'cycle', images: [BASE + 'roofing_project1.JPEG',  BASE + 'roofing_project2.JPEG'],         caption: 'Roofing Project · Willamette Valley, 2024' },
  { type: 'single', src: BASE + 'shed_painting.jpeg',                                                  caption: 'Shed Painting · Turner, 2025' },
  { type: 'cycle', images: [BASE + 'completed_project1.JPEG', BASE + 'completed_project2.JPEG'],       caption: 'Completed Project · Willamette Valley, 2025' },
  { type: 'placeholder',                                                                                caption: 'Concrete Work · Coming Soon' },
]

function BeforeAfterCard({ before, after, caption }: { before: string; after: string; caption: string }) {
  const [showAfter, setShowAfter] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setShowAfter(prev => !prev), 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="overflow-hidden border border-[#e0e0e0]" style={{ borderRadius: '120px 120px 12px 12px' }}>
      <div className="relative h-64">
        <img src={before} alt="Before" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${showAfter ? 'opacity-0' : 'opacity-100'}`} />
        <img src={after}  alt="After"  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${showAfter ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 text-white text-[9px] font-bold tracking-[0.1em] uppercase px-3 py-[4px] rounded-full whitespace-nowrap transition-colors duration-700 ${showAfter ? 'bg-[#111]' : 'bg-[#555]'}`}>
          {showAfter ? 'After' : 'Before'}
        </div>
      </div>
      <div className="bg-white px-5 py-4 border-t border-[#e0e0e0]">
        <p className="text-[11px] text-[#888] font-semibold tracking-[0.07em] uppercase">{caption}</p>
      </div>
    </div>
  )
}

function CycleCard({ images, caption }: { images: string[]; caption: string }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex(prev => (prev + 1) % images.length), 2800)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <div className="overflow-hidden border border-[#e0e0e0]" style={{ borderRadius: '120px 120px 12px 12px' }}>
      <div className="relative h-64">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${caption} ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 text-white text-[9px] font-bold tracking-[0.1em] uppercase px-3 py-[4px] rounded-full whitespace-nowrap transition-colors duration-700 ${index === 0 ? 'bg-[#555]' : 'bg-[#111]'}`}>
          {index === 0 ? 'Before' : 'After'}
        </div>
      </div>
      <div className="bg-white px-5 py-4 border-t border-[#e0e0e0]">
        <p className="text-[11px] text-[#888] font-semibold tracking-[0.07em] uppercase">{caption}</p>
      </div>
    </div>
  )
}

function PlaceholderCard({ caption }: { caption: string }) {
  return (
    <div className="overflow-hidden border border-[#e0e0e0] border-dashed" style={{ borderRadius: '120px 120px 12px 12px' }}>
      <div className="h-64 bg-[#f2f2f0] flex items-center justify-center">
        <span className="text-[11px] font-semibold text-[#bbb] uppercase tracking-[0.1em] text-center px-6 leading-[2]">
          Photo<br />Coming Soon
        </span>
      </div>
      <div className="bg-white px-5 py-4 border-t border-[#e0e0e0]">
        <p className="text-[11px] text-[#bbb] font-semibold tracking-[0.07em] uppercase">{caption}</p>
      </div>
    </div>
  )
}

function SingleCard({ src, caption }: { src: string; caption: string }) {
  return (
    <div className="overflow-hidden border border-[#e0e0e0]" style={{ borderRadius: '120px 120px 12px 12px' }}>
      <div className="relative h-64 overflow-hidden group">
        <img src={src} alt={caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="bg-white px-5 py-4 border-t border-[#e0e0e0]">
        <p className="text-[11px] text-[#888] font-semibold tracking-[0.07em] uppercase">{caption}</p>
      </div>
    </div>
  )
}

export default function Gallery() {
  const { ref, inView } = useInView()

  return (
    <section
      id="gallery"
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-white py-24 px-6 min-[1250px]:px-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16 max-w-xl">
          <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#888] mb-5">
            <span className="block w-7 h-[1.5px] bg-[#888]" />
            Our Work
          </div>
          <h2
            className="font-black uppercase text-[#111] leading-[1.08] tracking-[-0.01em] mb-4"
            style={{ fontSize: 'clamp(24px, 2.6vw, 38px)' }}
          >
            Real Homes. Real Projects. Real Willamette Valley Homeowners.
          </h2>
          <p className="text-[14px] text-[#555] leading-[1.75]">
            Every project below was completed by Mayra and the Amazing Quevedo crew — no subcontractors, no stock photos.
          </p>
        </div>

        <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[1000px]:grid-cols-3 gap-5">
          {ITEMS.map((item, i) => {
            if (item.type === 'pair')        return <BeforeAfterCard key={i} before={item.before} after={item.after} caption={item.caption} />
            if (item.type === 'cycle')       return <CycleCard key={i} images={item.images} caption={item.caption} />
            if (item.type === 'placeholder') return <PlaceholderCard key={i} caption={item.caption} />
            return <SingleCard key={i} src={item.src} caption={item.caption} />
          })}
        </div>
      </div>
    </section>
  )
}
