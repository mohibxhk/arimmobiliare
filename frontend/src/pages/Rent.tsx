import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { ASSETS } from "../data/site";
import Seo from "../components/Seo";
import { ImageReveal, Reveal } from "../components/motion/Reveal";

export default function Rent() {
  const { lang, t } = useLanguage();

  return (
    <>
      <Seo
        title={lang === "it" ? "Affitti a Pavia — AR Immobiliare" : "Rentals in Pavia — AR Immobiliare"}
        description={t("rent.sub")}
      />

      <section className="mx-auto max-w-[1500px] px-5 pt-32 sm:px-8 lg:px-12 lg:pt-44">
        <Reveal>
          <h1 className="max-w-4xl font-serif text-4xl font-light leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {t("rent.title")}
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-stone2 sm:text-base">
            {t("rent.sub")}
          </p>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-[1500px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
        <div className="space-y-14 lg:col-span-7">
          <Reveal>
            <div className="border-t border-ink/15 pt-8">
              <h2 className="font-serif text-3xl font-normal tracking-tight text-ink">
                {t("rent.ownerTitle")}
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-stone2">
                {t("rent.ownerText")}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border-t border-ink/15 pt-8">
              <h2 className="font-serif text-3xl font-normal tracking-tight text-ink">
                {t("rent.tenantTitle")}
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-stone2">
                {t("rent.tenantText")}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="border border-line bg-sand p-8 sm:p-10">
              <h2 className="font-serif text-2xl text-ink">{t("rent.ctaTitle")}</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone2">{t("rent.ctaText")}</p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  data-testid="rent-contact-cta"
                  className="group inline-flex items-center gap-3 bg-ink px-7 py-3.5 text-[11px] uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:bg-accent"
                >
                  {t("nav.contact")}
                  <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/appointment"
                  data-testid="rent-appointment-cta"
                  className="link-underline self-center text-[11px] uppercase tracking-[0.2em] text-ink"
                >
                  {t("nav.appointment")}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <ImageReveal
            src={ASSETS.studioFlat}
            alt={lang === "it" ? "Monolocale arredato in affitto a Pavia" : "Furnished studio for rent in Pavia"}
            className="aspect-[4/5]"
          />
        </div>
      </section>
    </>
  );
}
