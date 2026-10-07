import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

type Item = { quote: string; name: string; place: string; lang?: string };

/** Accessible testimonial carousel (no autoplay). Use with client:visible. */
export default function TestimonialSlider({ items }: { items: Item[] }) {
  const [[index, dir], setPage] = useState<[number, number]>([0, 1]);
  const go = (d: number) => setPage(([i]) => [(i + d + items.length) % items.length, d]);
  const item = items[index];

  const arrow = "inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink/25 text-ink transition hover:bg-ink hover:text-ivory active:scale-95";

  return (
    <MotionConfig reducedMotion="user">
      <div role="region" aria-roledescription="carousel" aria-label="Patient testimonials" className="mx-auto max-w-4xl text-center">
        <div className="flex justify-center gap-1 text-gold-deep" aria-label="5 out of 5 stars" role="img">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

        <div className="relative mt-8 min-h-[22rem] overflow-x-clip sm:min-h-[16rem]" aria-live="polite">
          <AnimatePresence mode="wait" custom={dir} initial={false}>
            <motion.figure
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <blockquote lang={item.lang} className={`font-display leading-snug text-ink ${item.quote.length > 130 ? "text-2xl sm:text-3xl lg:text-[2rem]" : "text-3xl sm:text-4xl lg:text-[2.6rem]"}`}>
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-7 text-[0.95rem] font-semibold tracking-wide text-ink">
                {item.name}
                <span className="font-normal text-mute"> · {item.place}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button type="button" className={arrow} onClick={() => go(-1)} aria-label="Previous testimonial">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
          </button>
          <div className="flex">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage([i, i > index ? 1 : -1])}
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={i === index}
                className="group flex h-11 w-8 items-center justify-center"
              >
                <span className={`h-[3px] rounded-full transition-all duration-300 ${i === index ? "w-8 bg-gold-deep" : "w-4 bg-ink/25 group-hover:bg-ink/50"}`} />
              </button>
            ))}
          </div>
          <button type="button" className={arrow} onClick={() => go(1)} aria-label="Next testimonial">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </MotionConfig>
  );
}
