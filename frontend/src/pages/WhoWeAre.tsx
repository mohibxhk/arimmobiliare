import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { ASSETS } from "../data/site";
import Seo from "../components/Seo";
import ReplaceableImage from "../components/ReplaceableImage";
import { ImageReveal, ParallaxImage, Reveal } from "../components/motion/Reveal";

export default function WhoWeAre() {
  const { lang, t } = useLanguage();

  const approach = [
    { title: t("about.approach1Title"), text: t("about.approach1Text") },
    { title: t("about.approach2Title"), text: t("about.approach2Text") },
    { title: t("about.approach3Title"), text: t("about.approach3Text") },
  ];

  return (
    <>
      <Seo
        title={lang === "it" ? "Chi siamo — AR Immobiliare Pavia" : "Who we are — AR Immobiliare Pavia"}
        description={t("about.p1")}
      />

      <section className="mx-auto max-w-[1500px] px-5 pt-32 sm:px-8 lg:px-12 lg:pt-44">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted2">
            <span className="inline-block h-px w-10 bg-accent" />
            {t("about.eyebrow")}
          </p>
          <h1 className="mt-6 max-w-4xl font-serif text-4xl font-light leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {t("about.title")}
          </h1>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-[1500px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="text-base leading-relaxed text-stone2 sm:text-lg">{t("about.p1")}</p>
            <p className="mt-6 text-base leading-relaxed text-stone2 sm:text-lg">{t("about.p2")}</p>
          </Reveal>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <ImageReveal
            src={ASSETS.mansionGarden}
            alt={lang === "it" ? "Dimora storica con giardino nel territorio pavese" : "Period residence with garden near Pavia"}
            className="aspect-[4/5]"
          />
        </div>
      </section>

      <section className="bg-sand/70">
        <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Reveal>
            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              {t("about.approachTitle")}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {approach.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.1}>
                <div className="border-t border-ink/15 pt-6">
                  <h3 className="font-serif text-2xl text-ink">{a.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-stone2">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1500px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-32">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
              {t("about.officeTitle")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-stone2">{t("about.officeText")}</p>
            <p className="mt-6 text-[11px] uppercase tracking-[0.24em] text-muted2">
              Corso Cairoli 39 — Pavia
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.1}>
            <ReplaceableImage
              alt={lang === "it" ? "La sede di AR Immobiliare a Corso Cairoli 39" : "The AR Immobiliare office at Corso Cairoli 39"}
              className="aspect-[16/10] w-full"
              placeholderLabel={lang === "it" ? "Foto della sede in arrivo" : "Office photo coming soon"}
            />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-ivory">
        <ParallaxImage
          src={ASSETS.villaExterior}
          alt={lang === "it" ? "Villa nel verde in Lombardia" : "Villa surrounded by greenery in Lombardy"}
          className="absolute inset-0 opacity-30"
          speed={6}
        />
        <div className="relative mx-auto max-w-[1500px] px-5 py-24 text-center sm:px-8 lg:px-12 lg:py-32">
          <Reveal>
            <h2 className="font-serif text-4xl font-light tracking-tight sm:text-5xl">
              {t("about.ctaTitle")}
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-ivory/75 sm:text-base">
              {t("about.ctaText")}
            </p>
            <Link
              to="/appointment"
              data-testid="about-appointment-cta"
              className="mt-9 inline-flex items-center gap-3 bg-ivory px-7 py-3.5 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-accent hover:text-ivory"
            >
              {t("nav.appointment")}
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
