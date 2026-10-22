import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { projects } from "../data/projects";
import Seo from "../components/Seo";
import { ImageReveal, Reveal } from "../components/motion/Reveal";

export default function Projects() {
  const { lang, t } = useLanguage();

  return (
    <>
      <Seo
        title={lang === "it" ? "Progetti immobiliari a Pavia — AR Immobiliare" : "Property projects in Pavia — AR Immobiliare"}
        description={t("projects.sub")}
      />

      <section className="mx-auto max-w-[1500px] px-5 pt-32 sm:px-8 lg:px-12 lg:pt-44">
        <Reveal>
          <h1 className="font-serif text-4xl font-light tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {t("projects.title")}
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-stone2 sm:text-base">
            {t("projects.sub")}
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1500px] space-y-20 px-5 py-16 sm:px-8 lg:space-y-28 lg:px-12 lg:py-24">
        {projects.map((p, i) => (
          <Reveal key={p.slug} className={i % 2 === 1 ? "lg:ml-auto lg:w-4/5" : "lg:w-4/5"}>
            <Link
              to={`/projects/${p.slug}`}
              data-testid={`project-card-${p.slug}`}
              className="group block"
            >
              <ImageReveal
                src={p.images[0].src}
                alt={p.images[0].alt[lang]}
                className="aspect-[16/8]"
                imgClassName="transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              />
              <div className="mt-6 flex flex-wrap items-baseline justify-between gap-4">
                <div>
                  <h2 className="font-serif text-3xl text-ink transition-colors duration-300 group-hover:text-accent sm:text-4xl">
                    {p.name[lang]}
                  </h2>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-muted2">
                    {p.location[lang]} · {p.type[lang]}
                  </p>
                </div>
                <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-stone2">
                  {p.status[lang]}
                  <ArrowUpRight size={15} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </span>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone2">{p.short[lang]}</p>
            </Link>
          </Reveal>
        ))}
      </section>
    </>
  );
}
