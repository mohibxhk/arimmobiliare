import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { services } from "../data/services";
import Seo from "../components/Seo";
import { ImageReveal, Reveal } from "../components/motion/Reveal";

export default function Services() {
  const { lang, t } = useLanguage();

  return (
    <>
      <Seo
        title={lang === "it" ? "Servizi immobiliari a Pavia — AR Immobiliare" : "Real estate services in Pavia — AR Immobiliare"}
        description={t("services.sub")}
      />

      <section className="mx-auto max-w-[1500px] px-5 pt-32 sm:px-8 lg:px-12 lg:pt-44">
        <Reveal>
          <h1 className="font-serif text-4xl font-light tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {t("services.title")}
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-stone2 sm:text-base">
            {t("services.sub")}
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        {services.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <article
              key={s.id}
              data-testid={`service-${s.id}`}
              className="grid items-center gap-10 border-t border-line py-14 last:border-b lg:grid-cols-12 lg:py-20"
            >
              <div className={flip ? "lg:col-span-5 lg:order-2 lg:col-start-8" : "lg:col-span-5"}>
                {s.image ? (
                  <ImageReveal
                    src={s.image}
                    alt={s.title[lang]}
                    className="aspect-[4/3]"
                  />
                ) : (
                  <Reveal className="hidden aspect-[4/3] items-center justify-center bg-sand lg:flex">
                    <span className="font-serif text-7xl italic text-line2">{s.title[lang].charAt(0)}</span>
                  </Reveal>
                )}
              </div>
              <div className={flip ? "lg:col-span-6 lg:order-1 lg:col-start-1" : "lg:col-span-6 lg:col-start-7"}>
                <Reveal>
                  <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                    {s.title[lang]}
                  </h2>
                  <p className="mt-6 max-w-lg text-base leading-relaxed text-stone2">
                    {s.text[lang]}
                  </p>
                  <Link
                    to={s.id === "vendita" || s.id === "valutazione" ? "/sell" : s.id === "affitti" ? "/rent" : "/contact"}
                    data-testid={`service-${s.id}-cta`}
                    className="group mt-7 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:text-accent"
                  >
                    {t("services.cta")}
                    <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
