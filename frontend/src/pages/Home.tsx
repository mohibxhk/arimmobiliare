function Hero() {
  const { t } = useLanguage();
  const introDone = useIntro();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[620px] overflow-hidden bg-ink">
      <motion.div style={{ y }} className="absolute inset-0">
        {/* Full Hero Background Video */}
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-center pointer-events-none"
          initial={{ scale: 1.08 }}
          animate={introDone ? { scale: 1 } : { scale: 1.08 }}
          transition={{ duration: 2.2, ease: EASE }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </motion.video>

        {/* Overlay gradient taake text clear read ho sake */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/35" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col justify-end px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12"
      >
        <motion.p
          data-testid="hero-eyebrow"
          className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-ivory/80"
          initial={{ opacity: 0 }}
          animate={introDone ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          <span className="inline-block h-px w-10 bg-accent" />
          {t("home.heroEyebrow")}
        </motion.p>

        <h1 className="max-w-4xl font-serif text-5xl font-light leading-[1.05] tracking-tight text-ivory sm:text-6xl lg:text-7xl">
          <MaskLines
            start={introDone}
            delay={0.45}
            lines={[t("home.heroLine1"), t("home.heroLine2")]}
          />
        </h1>

        <motion.p
          className="mt-7 max-w-xl text-sm leading-relaxed text-ivory/80 sm:text-base"
          initial={{ opacity: 0, y: 16 }}
          animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ delay: 0.95, duration: 0.9, ease: EASE }}
        >
          {t("home.heroSub")}
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ delay: 1.1, duration: 0.9, ease: EASE }}
        >
          <Link
            to="/properties"
            data-testid="hero-properties-cta"
            className="group inline-flex items-center gap-3 bg-ivory px-7 py-3.5 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-accent hover:text-ivory"
          >
            {t("home.viewProperties")}
            <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/appointment"
            data-testid="hero-appointment-cta"
            className="link-underline text-[11px] uppercase tracking-[0.2em] text-ivory"
          >
            {t("nav.appointment")}
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 right-6 z-10 hidden items-center gap-3 text-ivory/70 sm:flex"
        initial={{ opacity: 0 }}
        animate={introDone ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">{t("home.scroll")}</span>
        <motion.span
          className="block h-10 w-px bg-ivory/50"
          animate={{ scaleY: [0, 1, 1, 0], transformOrigin: ["top", "top", "bottom", "bottom"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
