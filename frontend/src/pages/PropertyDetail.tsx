import { useState, type FormEvent } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Bath, BedDouble, Ruler } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { formatPrice, getProperty, properties } from "../data/properties";
import { SITE } from "../data/site";
import { postEnquiry } from "../lib/api";
import Seo from "../components/Seo";
import PropertyCard from "../components/PropertyCard";
import { Field, FormSuccess, SubmitButton } from "../components/FormBits";
import { EASE, ImageReveal, ParallaxImage, Reveal } from "../components/motion/Reveal";

export default function PropertyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLanguage();
  const property = slug ? getProperty(slug) : undefined;

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  if (!property) {
    return (
      <section className="mx-auto max-w-[1500px] px-5 py-40 text-center sm:px-8">
        <h1 className="font-serif text-4xl text-ink">{t("property.notFound")}</h1>
        <Link to="/properties" data-testid="property-back-link" className="link-underline mt-6 inline-block text-[11px] uppercase tracking-[0.2em] text-stone2">
          {t("property.back")}
        </Link>
      </section>
    );
  }

  const similar = properties.filter((p) => p.slug !== property.slug && p.contract === property.contract).slice(0, 2);

  const meta = [
    { label: t("property.rooms"), value: String(property.rooms) },
    { label: t("property.baths"), value: String(property.baths) },
    { label: t("property.area"), value: `${property.area} m²` },
    { label: t("property.contract"), value: property.contract === "vendita" ? t("common.sale") : t("common.rent") },
    { label: t("property.zone"), value: property.zone[lang] },
    { label: lang === "it" ? "Piano" : "Floor", value: property.floor[lang] },
  ];

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      await postEnquiry({ ...form, kind: "property", property_slug: property.slug, lang });
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Seo
        title={`${property.name[lang]} — AR Immobiliare`}
        description={property.short[lang]}
      />

      <section className="relative h-[72svh] min-h-[480px] overflow-hidden bg-ink">
        <ParallaxImage
          src={property.images[0].src}
          alt={property.images[0].alt[lang]}
          className="h-full"
          speed={8}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/30" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1500px] px-5 pb-12 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-ivory/80">
              {property.contract === "vendita" ? t("common.sale") : t("common.rent")} · {t(`type.${property.type}`)}
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl font-light leading-[1.08] tracking-tight text-ivory sm:text-5xl">
              {property.name[lang]}
            </h1>
            <p className="mt-4 text-xl font-medium text-ivory sm:text-2xl">
              {formatPrice(property, lang)}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-px bg-line sm:grid-cols-3 lg:grid-cols-6">
          {meta.map((m) => (
            <div key={m.label} className="bg-ivory px-5 py-6">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted2">{m.label}</p>
              <p className="mt-2 font-serif text-xl text-ink">{m.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1500px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-28">
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink">
              {t("property.description")}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-stone2">
              {property.description.map((p, i) => (
                <p key={i}>{p[lang]}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="mt-14 text-[11px] uppercase tracking-[0.24em] text-muted2">
              {t("property.features")}
            </h3>
            <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {property.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-body">
                  <span className="inline-block h-1.5 w-1.5 bg-accent" />
                  {f[lang]}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <aside className="lg:col-span-4 lg:col-start-9">
          <Reveal delay={0.15}>
            <div className="border border-line bg-sand p-7 sm:p-9">
              {sent ? (
                <FormSuccess
                  testId="property-enquiry-success"
                  title={t("property.enquireSuccess")}
                  text={property.name[lang]}
                />
              ) : (
                <>
                  <h2 className="font-serif text-2xl text-ink">{t("property.enquireTitle")}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-stone2">
                    {t("property.enquireText")}
                  </p>
                  <form className="mt-7 space-y-5" onSubmit={submit}>
                    <Field label={t("common.name")} htmlFor="en-name">
                      <input id="en-name" data-testid="property-enquiry-name" required className="field-input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </Field>
                    <Field label={t("common.email")} htmlFor="en-email">
                      <input id="en-email" data-testid="property-enquiry-email" type="email" required className="field-input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </Field>
                    <Field label={t("common.phone")} htmlFor="en-phone" optional>
                      <input id="en-phone" data-testid="property-enquiry-phone" type="tel" className="field-input" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    </Field>
                    <Field label={t("common.message")} htmlFor="en-message">
                      <textarea id="en-message" data-testid="property-enquiry-message" required rows={3} className="field-input resize-none" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                    </Field>
                    {error && (
                      <p data-testid="property-enquiry-error" className="text-xs text-accent">{t("common.formError")}</p>
                    )}
                    <SubmitButton loading={loading} testId="property-enquiry-submit">
                      {t("common.send")}
                    </SubmitButton>
                  </form>
                </>
              )}
            </div>
            <Link
              to="/appointment"
              data-testid="property-visit-cta"
              className="group mt-6 flex items-center justify-between border border-ink px-7 py-5 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-ink hover:text-ivory"
            >
              {t("property.visitCta")}
              <ArrowRight size={15} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </aside>
      </section>

      {property.images.length > 1 && (
        <section className="mx-auto max-w-[1500px] px-5 pb-20 sm:px-8 lg:px-12">
          <h2 className="text-[11px] uppercase tracking-[0.24em] text-muted2">{t("property.gallery")}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {property.images.slice(1).map((img, i) => (
              <ImageReveal key={i} src={img.src} alt={img.alt[lang]} className="aspect-[4/3]" />
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-[1500px] px-5 pb-24 sm:px-8 lg:px-12">
        <Reveal>
          <h2 className="text-[11px] uppercase tracking-[0.24em] text-muted2">{t("property.location")}</h2>
          <p className="mt-4 font-serif text-2xl text-ink">{property.zone[lang]} — Pavia</p>
          <div className="mt-8 overflow-hidden border border-line">
            <iframe
              title={`${t("property.location")} — ${property.zone[lang]}`}
              src={SITE.mapsEmbed}
              className="h-[340px] w-full grayscale-[0.5]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>

      {similar.length > 0 && (
        <section className="border-t border-line bg-sand/60">
          <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-12">
            <Reveal>
              <h2 className="font-serif text-3xl font-normal tracking-tight text-ink">{t("property.similar")}</h2>
            </Reveal>
            <div className="mt-10 grid gap-x-10 gap-y-14 sm:grid-cols-2">
              {similar.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.1}>
                  <PropertyCard property={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="mx-auto max-w-[1500px] px-5 pb-16 pt-10 sm:px-8 lg:px-12">
        <Link
          to="/properties"
          data-testid="property-back-bottom"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-stone2 transition-colors duration-300 hover:text-accent"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          {t("property.back")}
        </Link>
      </div>

      <div className="sr-only" aria-hidden="true">
        <BedDouble size={1} /><Bath size={1} /><Ruler size={1} />
      </div>
    </>
  );
}
