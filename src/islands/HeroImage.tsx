import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type Props = { src: string; alt: string; width: number; height: number };

/** Hero photo that drifts slowly as you scroll. Use with client:load. */
export default function HeroImage({ src, alt, width, height }: Props) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 60]);

  return (
    <motion.div style={{ y }} className="absolute inset-x-0 -top-[10%] h-[120%]">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        fetchPriority="high"
        decoding="async"
        className="h-full w-full object-cover object-[70%_center]"
      />
    </motion.div>
  );
}
