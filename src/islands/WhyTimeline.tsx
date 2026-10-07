import { useRef } from "react";
import { motion, MotionConfig, useScroll, useSpring } from "framer-motion";
import { icons } from "../lib/icons";

type Step = { icon: string; title: string; text: string };

/** Scroll-driven timeline: the gold line fills as you scroll. Use with client:visible. */
export default function WhyTimeline({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  return (
    <MotionConfig reducedMotion="user">
      <ol ref={ref} className="relative mx-auto mt-20 max-w-5xl">
        {/* dashed trail + gold progress line */}
        <span aria-hidden="true" className="absolute bottom-0 left-6 top-0 w-px border-l border-dashed border-white/20 md:left-1/2" />
        <motion.span
          aria-hidden="true"
          style={{ scaleY }}
          className="absolute bottom-0 left-6 top-0 w-[2px] origin-top -translate-x-[0.5px] bg-gold md:left-1/2"
        />

        {steps.map((s, i) => {
          const left = i % 2 === 0;
          return (
            <li key={s.title} className="relative grid grid-cols-[3rem_1fr] gap-6 pb-16 last:pb-0 md:grid-cols-[1fr_5rem_1fr] md:gap-0">
              {/* icon on the trail */}
              <span className="relative z-10 col-start-1 row-start-1 flex justify-center md:col-start-2">
                <motion.span
                  data-reveal
                  initial={{ backgroundColor: "#17254f", color: "#7dbde0" }}
                  whileInView={{ backgroundColor: "#7dbde0", color: "#0e1a3a" }}
                  viewport={{ once: true, margin: "0px 0px -45% 0px" }}
                  transition={{ duration: 0.5 }}
                  className="grid h-14 w-14 place-items-center rounded-full ring-1 ring-gold/40"
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {(icons[s.icon] ?? []).map((d) => <path key={d} d={d} />)}
                  </svg>
                </motion.span>
              </span>

              {/* big ghost number on the opposite side */}
              <span
                aria-hidden="true"
                className={`pointer-events-none row-start-1 hidden self-center font-display text-[7rem] italic leading-none text-white/[0.08] md:block ${
                  left ? "col-start-3 pl-10" : "col-start-1 pr-10 text-right"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* text card */}
              <motion.div
                data-reveal
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -15% 0px" }}
                transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
                className={`col-start-2 row-start-1 ${left ? "md:col-start-1 md:pr-10 md:text-right" : "md:col-start-3 md:pl-10"}`}
              >
                <p className="eyebrow text-gold">Step {i + 1}</p>
                <h3 className="mt-2 font-display text-[clamp(1.9rem,3vw,2.6rem)] leading-[1.05] text-ivory">{s.title}</h3>
                <p className={`mt-3 max-w-md text-mist ${left ? "md:ml-auto" : ""}`}>{s.text}</p>
              </motion.div>
            </li>
          );
        })}
      </ol>
    </MotionConfig>
  );
}
