import { motion, MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/** Fade + rise when scrolled into view. Use with client:visible. */
export default function Reveal({ children, delay = 0, y = 28, className }: Props) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        data-reveal
        className={className}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.8, delay, ease: [0.22, 0.61, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
