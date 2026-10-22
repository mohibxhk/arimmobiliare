import Lenis from "lenis";

let lenis: Lenis | null = null;

export function initLenis(): Lenis | null {
  if (typeof window === "undefined") return null;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return null;
  if (lenis) return lenis;
  lenis = new Lenis({
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });
  const raf = (time: number) => {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
  return lenis;
}

export function destroyLenis() {
  lenis?.destroy();
  lenis = null;
}

export function scrollToTopNow() {
  if (lenis) {
    lenis.scrollTo(0, { immediate: true });
  } else if (typeof window !== "undefined") {
    window.scrollTo(0, 0);
  }
}
