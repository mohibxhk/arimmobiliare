import { useLanguage } from "../i18n/LanguageContext";
import Seo from "../components/Seo";
import { Reveal } from "../components/motion/Reveal";
import { SITE } from "../data/site";

interface LegalBlock {
  title?: { it: string; en: string };
  body: { it: string; en: string };
}

function LegalPage({ pageTitle, blocks }: { pageTitle: string; blocks: LegalBlock[] }) {
  const { lang, t } = useLanguage();
  return (
    <>
      <Seo title={`${pageTitle} — AR Immobiliare`} description={`${pageTitle} — AR Immobiliare, Pavia`} />
      <section className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8 lg:pt-44">
        <Reveal>
          <h1 className="font-serif text-4xl font-light tracking-tight text-ink sm:text-5xl">
            {pageTitle}
          </h1>
          <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-muted2">
            {t("legal.updated")}
          </p>
        </Reveal>
        <div className="mt-12 space-y-10">
          {blocks.map((b, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div>
                {b.title && (
                  <h2 className="font-serif text-2xl text-ink">{b.title[lang]}</h2>
                )}
                <p className="mt-3 text-sm leading-relaxed text-stone2">{b.body[lang]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export function Privacy() {
  const { t } = useLanguage();
  return (
    <LegalPage
      pageTitle={t("privacy.title")}
      blocks={[
        {
          title: { it: "Titolare del trattamento", en: "Data controller" },
          body: {
            it: `Il titolare del trattamento dei dati personali è AR Immobiliare, con sede in ${SITE.address}, ${SITE.city}. Per qualsiasi richiesta relativa ai dati personali è possibile scrivere a ${SITE.email}.`,
            en: `The data controller is AR Immobiliare, based at ${SITE.address}, ${SITE.city}. For any request regarding personal data, write to ${SITE.email}.`,
          },
        },
        {
          title: { it: "Dati raccolti", en: "Data we collect" },
          body: {
            it: "Attraverso i moduli del sito raccogliamo nome, email, numero di telefono e il contenuto dei messaggi inviati, esclusivamente per rispondere alle richieste ricevute e gestire appuntamenti, valutazioni e trattative immobiliari.",
            en: "Through the forms on this site we collect name, email, phone number and the content of messages sent, solely to reply to requests and manage appointments, valuations and property negotiations.",
          },
        },
        {
          title: { it: "Base giuridica e conservazione", en: "Legal basis and retention" },
          body: {
            it: "Il trattamento si basa sull'esecuzione di misure precontrattuali richieste dall'interessato. I dati sono conservati per il tempo necessario a gestire la richiesta e comunque non oltre 24 mesi, salvo obblighi di legge.",
            en: "Processing is based on pre-contractual measures requested by the data subject. Data is kept for the time needed to handle the request and in any case no longer than 24 months, unless required by law.",
          },
        },
        {
          title: { it: "Diritti dell'interessato", en: "Your rights" },
          body: {
            it: "In qualsiasi momento è possibile richiedere l'accesso, la rettifica, la cancellazione o la limitazione del trattamento dei propri dati scrivendo a AR Immobiliare. È inoltre possibile proporre reclamo all'autorità di controllo (Garante per la protezione dei dati personali).",
            en: "At any time you may request access, rectification, erasure or restriction of the processing of your data by writing to AR Immobiliare. You may also lodge a complaint with the supervisory authority (Garante per la protezione dei dati personali).",
          },
        },
      ]}
    />
  );
}

export function CookiePolicy() {
  const { t } = useLanguage();
  return (
    <LegalPage
      pageTitle={t("cookie.title")}
      blocks={[
        {
          title: { it: "Cosa sono i cookie", en: "What cookies are" },
          body: {
            it: "I cookie sono piccoli file di testo che i siti visitati salvano sul dispositivo dell'utente per migliorare l'esperienza di navigazione.",
            en: "Cookies are small text files that visited websites save on the user's device to improve the browsing experience.",
          },
        },
        {
          title: { it: "Cookie utilizzati da questo sito", en: "Cookies used by this site" },
          body: {
            it: "Questo sito utilizza esclusivamente cookie tecnici necessari al funzionamento (ad esempio per ricordare la lingua preferita) e strumenti di misurazione anonima del traffico. Non vengono utilizzati cookie di profilazione di terze parti a fini pubblicitari.",
            en: "This site only uses technical cookies required for operation (for example to remember your preferred language) and anonymous traffic measurement tools. No third-party profiling cookies are used for advertising purposes.",
          },
        },
        {
          title: { it: "Come gestire i cookie", en: "How to manage cookies" },
          body: {
            it: "È possibile disabilitare o cancellare i cookie in qualsiasi momento tramite le impostazioni del proprio browser. La disabilitazione dei cookie tecnici può limitare alcune funzionalità del sito.",
            en: "You can disable or delete cookies at any time through your browser settings. Disabling technical cookies may limit some site features.",
          },
        },
      ]}
    />
  );
}
