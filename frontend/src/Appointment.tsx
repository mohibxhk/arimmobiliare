import { useState, type FormEvent } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { SITE } from "../data/site";
import { postAppointment } from "../lib/api";
import { tpl } from "../i18n/translations";
import Seo from "../components/Seo";
import { Field, FormSuccess, SubmitButton } from "../components/FormBits";
import { Reveal } from "../components/motion/Reveal";

const TIMES = ["09:00", "10:00", "11:00", "12:00", "15:00", "16:00", "17:00", "18:00"];

export default function Appointment() {
  const { lang, t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    reason: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const reasons = [
    { value: "visita", label: t("appointment.reasonVisit") },
    { value: "vendita", label: t("appointment.reasonSell") },
    { value: "affitto", label: t("appointment.reasonRent") },
    { value: "valutazione", label: t("appointment.reasonValuation") },
    { value: "altro", label: t("appointment.reasonOther") },
  ];

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      await postAppointment({ ...form, lang });
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
        title={lang === "it" ? "Prenota un appuntamento — AR Immobiliare Pavia" : "Book an appointment — AR Immobiliare Pavia"}
        description={t("appointment.sub")}
      />

      <section className="mx-auto grid max-w-[1500px] gap-14 px-5 pb-24 pt-32 sm:px-8 lg:grid-cols-12 lg:px-12 lg:pt-44">
        <div className="lg:col-span-5">
          <Reveal>
            <h1 className="font-serif text-4xl font-light leading-[1.08] tracking-tight text-ink sm:text-5xl">
              {t("appointment.title")}
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-stone2 sm:text-base">
              {t("appointment.sub")}
            </p>
            <div className="mt-10 border-t border-line pt-8">
              <p className="text-[11px] uppercase tracking-[0.24em] text-muted2">AR Immobiliare</p>
              <p className="mt-3 font-serif text-2xl text-ink">
                {SITE.address}
                <br />
                {SITE.city}
              </p>
              <a href={SITE.phoneHref} className="mt-4 block text-sm text-stone2 transition-colors duration-300 hover:text-accent">
                {SITE.phone}
              </a>
              <a href={SITE.emailHref} className="mt-1 block text-sm text-stone2 transition-colors duration-300 hover:text-accent">
                {SITE.email}
              </a>
            </div>
            <p className="mt-8 text-xs leading-relaxed text-muted2">{t("appointment.note")}</p>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.12}>
            {sent ? (
              <FormSuccess
                testId="appointment-success"
                title={t("appointment.confirmTitle")}
                text={tpl(t("appointment.confirmText"), {
                  name: form.name,
                  date: form.date,
                  time: form.time,
                })}
                onReset={() => {
                  setSent(false);
                  setForm({ name: "", email: "", phone: "", date: "", time: "", reason: "", message: "" });
                }}
                resetLabel={t("appointment.newRequest")}
              />
            ) : (
              <form className="space-y-6" onSubmit={submit}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label={t("common.name")} htmlFor="ap-name">
                    <input id="ap-name" data-testid="appointment-name" required className="field-input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </Field>
                  <Field label={t("common.phone")} htmlFor="ap-phone">
                    <input id="ap-phone" data-testid="appointment-phone" type="tel" required className="field-input" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </Field>
                </div>
                <Field label={t("common.email")} htmlFor="ap-email">
                  <input id="ap-email" data-testid="appointment-email" type="email" required className="field-input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </Field>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label={t("appointment.date")} htmlFor="ap-date">
                    <input
                      id="ap-date"
                      data-testid="appointment-date"
                      type="date"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="field-input"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                    />
                  </Field>
                  <Field label={t("appointment.time")} htmlFor="ap-time">
                    <select id="ap-time" data-testid="appointment-time" required className="field-input cursor-pointer" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })}>
                      <option value="" disabled>{t("appointment.select")}</option>
                      {TIMES.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field label={t("appointment.reason")} htmlFor="ap-reason">
                  <select id="ap-reason" data-testid="appointment-reason" required className="field-input cursor-pointer" value={form.reason} onChange={(e) => setForm({ ...form, reason: e.target.value })}>
                    <option value="" disabled>{t("appointment.select")}</option>
                    {reasons.map((r) => (
                      <option key={r.value} value={r.value}>{r.label}</option>
                    ))}
                  </select>
                </Field>
                <Field label={t("common.message")} htmlFor="ap-message" optional>
                  <textarea id="ap-message" data-testid="appointment-message" rows={3} className="field-input resize-none" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </Field>
                {error && (
                  <p data-testid="appointment-error" className="text-xs text-accent">{t("common.formError")}</p>
                )}
                <SubmitButton loading={loading} testId="appointment-submit">
                  {t("appointment.submit")}
                </SubmitButton>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
