import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useIntro } from "../App";
import { ASSETS, SITE } from "../data/site";
import { properties } from "../data/properties";
import { projects } from "../data/projects";
import { services } from "../data/services";
import Seo from "../components/Seo";
import Marquee from "../components/Marquee";
import PropertyCard from "../components/PropertyCard";
import { EASE, ImageReveal, MaskLines, Reveal } from "../components/motion/Reveal";

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
        <motion.img
          src={ASSETS.courtyardArchway}
          alt="Cortile storico a Pavia visto attraverso un arco"
          className="h-full w-full object-cover"
          initial={{ scale: 1.18 }}
          animate={introDone ? { scale: 1 } : { scale: 1.18 }}
          transition={{ duration: 2.2, ease: EASE }}
        />
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

export default function Home() {
  const { lang, t } = useLanguage();
  const featured = properties.filter((p) => p.featured).slice(0, 3);
  const spans = ["lg:col-span-7", "lg:col-span-5 lg:mt-24", "lg:col-span-5", "lg:col-span-7 lg:-mt-24"];
  const aspects = ["aspect-[16/10]", "aspect-[4/5]", "aspect-[4/5]", "aspect-[16/10]"];

  return (
    <>
      <Seo
        title={lang === "it" ? "AR Immobiliare — Agenzia immobiliare a Pavia" : "AR Immobiliare — Real estate agency in Pavia"}
        description={t("home.heroSub")}
      />
      <Hero />

      <section className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted2">
                <span className="inline-block h-px w-10 bg-accent" />
                {t("home.introEyebrow")}
              </p>
              <h2 className="mt-6 font-serif text-3xl font-normal leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
                {t("home.introTitle")}
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.15}>
              <p className="text-base leading-relaxed text-stone2 sm:text-lg">
                {t("home.introText")}
              </p>
              <Link
                to="/who-we-are"
                data-testid="home-intro-link"
                className="link-underline mt-7 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-ink"
              >
                {t("home.introLink")}
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 pb-24 sm:px-8 lg:px-12 lg:pb-36">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 border-t border-line pt-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted2">
                {t("home.featuredEyebrow")}
              </p>
              <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                {t("home.featuredTitle")}
              </h2>
            </div>
            <Link
              to="/properties"
              data-testid="home-all-properties-link"
              className="link-underline text-[11px] uppercase tracking-[0.2em] text-ink"
            >
              {t("home.viewAll")}
            </Link>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-12">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1} className={`sm:col-span-1 ${spans[i]}`}>
              <PropertyCard property={p} aspect={aspects[i]} />
            </Reveal>
          ))}
        </div>
      </section>

      <Marquee />

      <section className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted2">
                {t("home.servicesEyebrow")}
              </p>
              <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                {t("home.servicesTitle")}
              </h2>
            </div>
            <Link
              to="/services"
              data-testid="home-services-link"
              className="link-underline text-[11px] uppercase tracking-[0.2em] text-ink"
            >
              {t("home.servicesLink")}
            </Link>
          </div>
        </Reveal>
        <div className="mt-12">
          {services.slice(0, 4).map((s, i) => (
            <Reveal key={s.id} delay={i * 0.06}>
              <Link
                to="/services"
                data-testid={`home-service-${s.id}`}
                className="group grid gap-3 border-t border-line py-8 transition-colors duration-300 last:border-b hover:bg-sand/60 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:px-4"
              >
                <h3 className="font-serif text-2xl text-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 sm:col-span-4 sm:text-3xl">
                  {s.title[lang]}
                </h3>
                <p className="text-sm leading-relaxed text-stone2 sm:col-span-7">
                  {s.text[lang]}
                </p>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.25}
                  className="hidden text-muted2 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent sm:col-span-1 sm:block sm:justify-self-end"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 pb-24 sm:px-8 lg:px-12 lg:pb-36">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted2">
                {t("home.projectsEyebrow")}
              </p>
              <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                {t("home.projectsTitle")}
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-stone2 sm:text-base">
                {t("home.projectsText")}
              </p>
              <Link
                to="/projects"
                data-testid="home-projects-link"
                className="link-underline mt-7 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-ink"
              >
                {t("nav.projects")}
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8">
            {projects.slice(0, 2).map((pr, i) => (
              <Reveal key={pr.slug} delay={i * 0.12} className={i === 1 ? "sm:mt-16" : ""}>
                <Link
                  to={`/projects/${pr.slug}`}
                  data-testid={`home-project-${pr.slug}`}
                  className="group block"
                >
                  <div className="overflow-hidden">
                    <ImageReveal
                      src={pr.images[0].src}
                      alt={pr.images[0].alt[lang]}
                      className="aspect-[4/3]"
                      imgClassName="transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl text-ink transition-colors duration-300 group-hover:text-accent">
                    {pr.name[lang]}
                  </h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted2">
                    {pr.location[lang]}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-ivory">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-36">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-serif text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                {t("home.officeTitle")}
              </h2>
              <p className="mt-7 max-w-lg text-sm leading-relaxed text-ivory/70 sm:text-base">
                {t("home.officeText")}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/appointment"
                  data-testid="home-office-appointment-cta"
                  className="inline-flex items-center gap-3 bg-ivory px-7 py-3.5 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-accent hover:text-ivory"
                >
                  {t("nav.appointment")}
                  <ArrowRight size={14} strokeWidth={1.5} />
                </Link>
                <Link
                  to="/contact"
                  data-testid="home-office-contact-cta"
                  className="link-underline self-center text-[11px] uppercase tracking-[0.2em] text-ivory"
                >
                  {t("nav.contact")}
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="flex flex-col justify-end lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.15}>
              <p className="text-[11px] uppercase tracking-[0.3em] text-ivory/40">AR Immobiliare</p>
              <p className="mt-4 font-serif text-2xl leading-snug text-ivory/90">
                {SITE.address}
                <br />
                {SITE.city}
              </p>
              <a href={SITE.phoneHref} className="mt-4 block text-sm text-ivory/70 transition-colors duration-300 hover:text-ivory">
                {SITE.phone}
              </a>
              <a href={SITE.emailHref} className="mt-1 block text-sm text-ivory/70 transition-colors duration-300 hover:text-ivory">
                {SITE.email}
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
