import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import Seo from "../components/Seo";
import { Reveal } from "../components/motion/Reveal";

export default function NotFound() {
  const { lang, t } = useLanguage();
  return (
    <>
      <Seo title={`${t("notFound.title")} — AR Immobiliare`} description={t("notFound.text")} />
      <section className="mx-auto flex min-h-[70vh] max-w-[1500px] flex-col items-start justify-center px-5 py-40 sm:px-8 lg:px-12">
        <Reveal>
          <p className="font-serif text-7xl italic text-line2 sm:text-8xl">404</p>
          <h1 className="mt-4 font-serif text-4xl font-light tracking-tight text-ink sm:text-5xl">
            {t("notFound.title")}
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-stone2">{t("notFound.text")}</p>
          <Link
            to="/"
            data-testid="notfound-home-link"
            className="mt-8 inline-block bg-ink px-7 py-3.5 text-[11px] uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:bg-accent"
          >
            {t("notFound.cta")}
          </Link>
          {lang === "en" && <span className="hidden">Page not found</span>}
        </Reveal>
      </section>
    </>
  );
}
