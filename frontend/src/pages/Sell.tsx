import { useState, type FormEvent } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { postEnquiry } from "../lib/api";
import Seo from "../components/Seo";
import { Field, FormSuccess, SubmitButton } from "../components/FormBits";
import { Reveal } from "../components/motion/Reveal";

const STEPS = [
  {
    title: { it: "Sopralluogo e valutazione", en: "Inspection and valuation" },
    text: {
      it: "Veniamo a vedere l'immobile, ne studiamo punti di forza e contesto, e vi consegniamo una valutazione scritta basata sul mercato reale.",
      en: "We visit the property, study its strengths and context, and deliver a written valuation based on the real market.",
    },
  },
  {
    title: { it: "Presentazione", en: "Presentation" },
    text: {
      it: "Fotografia professionale, descrizione accurata e documentazione in ordine. Un immobile ben presentato vende prima e meglio.",
      en: "Professional photography, accurate description and paperwork in order. A well-presented property sells sooner and better.",
    },
  },
  {
    title: { it: "Promozione", en: "Marketing" },
    text: {
      it: "Pubblicazione sui principali portali, sulla nostra vetrina a Corso Cairoli e presso il nostro archivio di clienti in ricerca.",
      en: "Publication on the main portals, in our Corso Cairoli window and to our archive of actively searching clients.",
    },
  },
  {
    title: { it: "Selezione degli acquirenti", en: "Buyer selection" },
    text: {
      it: "Organizziamo le visite solo con persone realmente interessate e verifichiamo la fattibilità economica prima di ogni proposta.",
      en: "We arrange viewings only with genuinely interested people and verify financial feasibility before any offer.",
    },
  },
  {
    title: { it: "Trattativa", en: "Negotiation" },
    text: {
      it: "Conduciamo la negoziazione con trasparenza, tenendovi aggiornati a ogni passaggio e tutelando il vostro interesse.",
      en: "We lead the negotiation transparently, keeping you informed at every step and protecting your interest.",
    },
  },
  {
    title: { it: "Atto e consegna", en: "Deed and handover" },
    text: {
      it: "Vi affianchiamo fino al rogito notarile e oltre: documenti, scadenze e consegna delle chiavi senza pensieri.",
      en: "We stand by you until the notarial deed and beyond: documents, deadlines and key handover without worries.",
    },
  },
];

export default function Sell() {
  const { lang, t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", phone: "", property_address: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      await postEnquiry({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        property_address: form.property_address,
        kind: "valuation",
        lang,
      });
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
        title={lang === "it" ? "Vendere casa a Pavia — AR Immobiliare" : "Selling your home in Pavia — AR Immobiliare"}
        description={t("sell.sub")}
      />

      <section className="mx-auto max-w-[1500px] px-5 pt-32 sm:px-8 lg:px-12 lg:pt-44">
        <Reveal>
          <h1 className="max-w-4xl font-serif text-4xl font-light leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {t("sell.title")}
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-stone2 sm:text-base">
            {t("sell.sub")}
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <Reveal>
          <h2 className="text-[11px] uppercase tracking-[0.24em] text-muted2">{t("sell.processTitle")}</h2>
        </Reveal>
        <div className="mt-8">
          {STEPS.map((s, i) => (
            <Reveal key={s.title.it} delay={i * 0.04}>
              <div className="grid gap-3 border-t border-line py-8 last:border-b sm:grid-cols-12 sm:gap-8">
                <h3 className="font-serif text-2xl text-ink sm:col-span-4">{s.title[lang]}</h3>
                <p className="text-sm leading-relaxed text-stone2 sm:col-span-7 sm:col-start-6">
                  {s.text[lang]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand/70">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-28">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl">
                {t("sell.valuationTitle")}
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-stone2 sm:text-base">
                {t("sell.valuationText")}
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              {sent ? (
                <FormSuccess
                  testId="sell-valuation-success"
                  title={t("sell.success")}
                  text={form.property_address}
                  onReset={() => {
                    setSent(false);
                    setForm({ name: "", email: "", phone: "", property_address: "", message: "" });
                  }}
                  resetLabel={t("appointment.newRequest")}
                />
              ) : (
                <form className="space-y-6" onSubmit={submit}>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label={t("common.name")} htmlFor="sv-name">
                      <input id="sv-name" data-testid="sell-form-name" required className="field-input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </Field>
                    <Field label={t("common.phone")} htmlFor="sv-phone">
                      <input id="sv-phone" data-testid="sell-form-phone" type="tel" required className="field-input" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    </Field>
                  </div>
                  <Field label={t("common.email")} htmlFor="sv-email">
                    <input id="sv-email" data-testid="sell-form-email" type="email" required className="field-input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </Field>
                  <Field label={t("sell.propertyAddress")} htmlFor="sv-address">
                    <input id="sv-address" data-testid="sell-form-address" required className="field-input" value={form.property_address} onChange={(e) => setForm({ ...form, property_address: e.target.value })} />
                  </Field>
                  <Field label={t("common.message")} htmlFor="sv-message" optional>
                    <textarea id="sv-message" data-testid="sell-form-message" rows={3} className="field-input resize-none" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  </Field>
                  {error && (
                    <p data-testid="sell-form-error" className="text-xs text-accent">{t("common.formError")}</p>
                  )}
                  <SubmitButton loading={loading} testId="sell-form-submit">
                    {t("sell.sendRequest")}
                  </SubmitButton>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
