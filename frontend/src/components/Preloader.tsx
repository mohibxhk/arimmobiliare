import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { EASE } from "./motion/Reveal";
import { ASSETS } from "../data/site";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1400;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setProgress(Math.round(p * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        window.setTimeout(onDone, 350);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <motion.div
      data-testid="preloader"
      className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-ivory"
      exit={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      <motion.img
        src={ASSETS.logo}
        alt="AR Immobiliare"
        className="h-20 w-20 object-cover"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
      />
      <motion.p
        className="mt-5 text-[11px] uppercase tracking-[0.42em] text-stone2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.6 }}
      >
        AR Immobiliare
      </motion.p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted2">
        Pavia
      </p>
      <div className="mt-8 h-px w-40 bg-line">
        <div
          className="h-px bg-accent transition-[width] duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
}
