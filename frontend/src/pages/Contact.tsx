import { useState, type FormEvent } from "react";
import { Mail, Phone } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { SITE } from "../data/site";
import { postContact } from "../lib/api";
import Seo from "../components/Seo";
import { Field, FormSuccess, SubmitButton } from "../components/FormBits";
import { Reveal } from "../components/motion/Reveal";

export default function Contact() {
  const { lang, t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      await postContact({ ...form, lang });
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
        title={lang === "it" ? "Contatti — AR Immobiliare, Corso Cairoli 39 Pavia" : "Contact — AR Immobiliare, Corso Cairoli 39 Pavia"}
        description={t("contact.sub")}
      />

      <section className="mx-auto max-w-[1500px] px-5 pt-32 sm:px-8 lg:px-12 lg:pt-44">
        <Reveal>
          <h1 className="font-serif text-4xl font-light tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {t("contact.title")}
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-stone2 sm:text-base">
            {t("contact.sub")}
          </p>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-[1500px] gap-14 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-24">
        <div className="lg:col-span-4">
          <Reveal>
            <h2 className="text-[11px] uppercase tracking-[0.24em] text-muted2">{t("contact.office")}</h2>
            <p className="mt-5 font-serif text-3xl leading-snug text-ink">
              {SITE.address}
              <br />
              {SITE.city}
            </p>
            <div className="mt-8 space-y-3">
              <a
                href={SITE.phoneHref}
                data-testid="contact-phone-cta"
                className="group flex items-center gap-3 border border-line px-5 py-4 text-sm text-body transition-colors duration-300 hover:border-ink"
              >
                <Phone size={16} strokeWidth={1.5} className="text-accent" />
                {SITE.phone}
              </a>
              <a
                href={SITE.emailHref}
                data-testid="contact-email-cta"
                className="group flex items-center gap-3 border border-line px-5 py-4 text-sm text-body transition-colors duration-300 hover:border-ink"
              >
                <Mail size={16} strokeWidth={1.5} className="text-accent" />
                {SITE.email}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl font-normal tracking-tight text-ink">{t("contact.formTitle")}</h2>
            {sent ? (
              <div className="mt-8">
                <FormSuccess
                  testId="contact-success"
                  title={t("contact.success")}
                  text={form.email}
                  onReset={() => {
                    setSent(false);
                    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
                  }}
                  resetLabel={t("appointment.newRequest")}
                />
              </div>
            ) : (
              <form className="mt-8 space-y-6" onSubmit={submit}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label={t("common.name")} htmlFor="ct-name">
                    <input id="ct-name" data-testid="contact-form-name" required className="field-input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </Field>
                  <Field label={t("common.email")} htmlFor="ct-email">
                    <input id="ct-email" data-testid="contact-form-email" type="email" required className="field-input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </Field>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label={t("common.phone")} htmlFor="ct-phone" optional>
                    <input id="ct-phone" data-testid="contact-form-phone" type="tel" className="field-input" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </Field>
                  <Field label={t("contact.subject")} htmlFor="ct-subject" optional>
                    <input id="ct-subject" data-testid="contact-form-subject" className="field-input" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                  </Field>
                </div>
                <Field label={t("common.message")} htmlFor="ct-message">
                  <textarea id="ct-message" data-testid="contact-form-message" required rows={4} className="field-input resize-none" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </Field>
                {error && (
                  <p data-testid="contact-form-error" className="text-xs text-accent">{t("common.formError")}</p>
                )}
                <SubmitButton loading={loading} testId="contact-form-submit">
                  {t("common.send")}
                </SubmitButton>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 pb-24 sm:px-8 lg:px-12">
        <Reveal>
          <div className="overflow-hidden border border-line">
            <iframe
              title={t("contact.mapCaption")}
              src={SITE.mapsEmbed}
              data-testid="contact-map"
              className="h-[420px] w-full grayscale-[0.55]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-muted2">
            {t("contact.mapCaption")}
          </p>
        </Reveal>
      </section>
    </>
  );
}
