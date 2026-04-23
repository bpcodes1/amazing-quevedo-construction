import { useInView } from '../hooks/useInView'

const GAL = '/work_images/gallery/'

const PHOTOS = [
  GAL + 'house1_before.JPEG',
  GAL + 'house1_after.JPEG',
  GAL + 'house2.jpeg',
  GAL + 'house2_after.jpeg',
  GAL + 'house3.jpeg',
  GAL + 'house4.JPEG',
  GAL + 'house5_before.jpeg',
  GAL + 'house5_after.jpeg',
  GAL + 'house7_before.jpeg',
  GAL + 'house7_after.jpeg',
  GAL + 'roof_before.JPEG',
  GAL + 'roof_after.JPEG',
]

export default function PhotoGallery() {
  const { ref, inView } = useInView()

  return (
    <section
      id="photo-gallery"
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-[#f2f2f0] py-24 px-6 min-[1250px]:px-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14 max-w-xl">
          <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#888] mb-5">
            <span className="block w-7 h-[1.5px] bg-[#888]" />
            Photo Gallery
          </div>
          <h2
            className="font-black uppercase text-[#111] leading-[1.08] tracking-[-0.01em]"
            style={{ fontSize: 'clamp(24px, 2.6vw, 38px)' }}
          >
            More From the Crew
          </h2>
        </div>

        <div className="columns-2 min-[600px]:columns-3 min-[1000px]:columns-4 gap-3 space-y-3">
          {PHOTOS.map((src, i) => (
            <div key={i} className="break-inside-avoid overflow-hidden rounded-xl group">
              <img
                src={src}
                alt={`Quevedo Construction project ${i + 1}`}
                className="w-full object-cover block transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
