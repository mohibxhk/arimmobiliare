import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { getProject } from "../data/projects";
import Seo from "../components/Seo";
import { EASE, ParallaxImage, Reveal } from "../components/motion/Reveal";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLanguage();
  const project = slug ? getProject(slug) : undefined;

  if (!project) {
    return (
      <section className="mx-auto max-w-[1500px] px-5 py-40 text-center sm:px-8">
        <h1 className="font-serif text-4xl text-ink">{t("projects.notFound")}</h1>
        <Link to="/projects" className="link-underline mt-6 inline-block text-[11px] uppercase tracking-[0.2em] text-stone2">
          {t("projects.back")}
        </Link>
      </section>
    );
  }

  const meta = [
    { label: t("projects.locationLabel"), value: project.location[lang] },
    { label: t("projects.statusLabel"), value: project.status[lang] },
    { label: t("projects.typeLabel"), value: project.type[lang] },
  ];

  return (
    <>
      <Seo title={`${project.name[lang]} — AR Immobiliare`} description={project.short[lang]} />

      <section className="relative h-[68svh] min-h-[440px] overflow-hidden bg-ink">
        <ParallaxImage
          src={project.images[0].src}
          alt={project.images[0].alt[lang]}
          className="h-full"
          speed={8}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-ink/25" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1500px] px-5 pb-12 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-ivory/80">
              {t("nav.projects")} · {project.status[lang]}
            </p>
            <h1 className="mt-4 font-serif text-4xl font-light leading-[1.08] tracking-tight text-ivory sm:text-5xl lg:text-6xl">
              {project.name[lang]}
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1500px] gap-px bg-line sm:grid-cols-3">
          {meta.map((m) => (
            <div key={m.label} className="bg-ivory px-5 py-6">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted2">{m.label}</p>
              <p className="mt-2 font-serif text-xl text-ink">{m.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1500px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-28">
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink">
              {t("projects.overview")}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-stone2">
              {project.description.map((p, i) => (
                <p key={i}>{p[lang]}</p>
              ))}
            </div>
          </Reveal>
        </div>
        <aside className="lg:col-span-4 lg:col-start-9">
          <Reveal delay={0.15}>
            <div className="border border-line bg-sand p-7 sm:p-9">
              <h2 className="font-serif text-2xl text-ink">{t("projects.enquire")}</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone2">
                {lang === "it"
                  ? "Planimetrie, disponibilità e visite: scriveteci o prenotate un appuntamento in sede."
                  : "Floor plans, availability and visits: write to us or book an appointment at our office."}
              </p>
              <div className="mt-7 space-y-3">
                <Link
                  to="/appointment"
                  data-testid="project-appointment-cta"
                  className="group flex items-center justify-between bg-ink px-6 py-4 text-[11px] uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:bg-accent"
                >
                  {t("nav.appointment")}
                  <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  data-testid="project-contact-cta"
                  className="group flex items-center justify-between border border-ink px-6 py-4 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-ink hover:text-ivory"
                >
                  {t("nav.contact")}
                  <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </aside>
      </section>

      <div className="mx-auto max-w-[1500px] px-5 pb-20 sm:px-8 lg:px-12">
        <Link
          to="/projects"
          data-testid="project-back-link"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-stone2 transition-colors duration-300 hover:text-accent"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          {t("projects.back")}
        </Link>
      </div>
    </>
  );
}
