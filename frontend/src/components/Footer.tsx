import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { ASSETS, SITE } from "../data/site";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const explore = [
    { to: "/properties", label: t("nav.properties") },
    { to: "/projects", label: t("nav.projects") },
    { to: "/who-we-are", label: t("nav.whoWeAre") },
    { to: "/appointment", label: t("nav.appointment") },
  ];
  const services = [
    { to: "/services", label: t("nav.services") },
    { to: "/sell", label: t("nav.sell") },
    { to: "/rent", label: t("nav.rent") },
    { to: "/contact", label: t("nav.contact") },
  ];
  const legal = [
    { to: "/privacy", label: t("footer.privacy") },
    { to: "/cookie-policy", label: t("footer.cookie") },
  ];

  return (
    <footer data-testid="site-footer" className="bg-ink text-ivory">
      <div className="mx-auto max-w-[1500px] px-5 pb-10 pt-16 sm:px-8 lg:px-12 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <img
                src={ASSETS.logo}
                alt="AR Immobiliare logo"
                className="h-14 w-14 bg-white object-cover"
              />
              <p className="font-serif text-2xl">AR Immobiliare</p>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/60">
              {t("footer.tagline")}
            </p>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram-link"
              aria-label="Instagram"
              className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-ivory/60 transition-colors duration-300 hover:text-ivory"
            >
              <Instagram size={14} strokeWidth={1.5} /> Instagram
            </a>
          </div>

          <nav aria-label="Footer explore" className="lg:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.24em] text-ivory/40">
              {t("footer.explore")}
            </p>
            <ul className="mt-5 space-y-3">
              {explore.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    data-testid={`footer-link-${l.to.replace("/", "")}`}
                    className="link-underline text-sm text-ivory/75 transition-colors duration-300 hover:text-ivory"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer services" className="lg:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.24em] text-ivory/40">
              {t("footer.services")}
            </p>
            <ul className="mt-5 space-y-3">
              {services.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="link-underline text-sm text-ivory/75 transition-colors duration-300 hover:text-ivory"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.24em] text-ivory/40">
              {t("footer.contact")}
            </p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/75">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                <span>
                  {SITE.address}
                  <br />
                  {SITE.city}
                </span>
              </li>
              <li>
                <a
                  href={SITE.phoneHref}
                  data-testid="footer-phone-link"
                  className="flex items-center gap-2.5 transition-colors duration-300 hover:text-ivory"
                >
                  <Phone size={14} strokeWidth={1.5} /> {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  data-testid="footer-email-link"
                  className="flex items-center gap-2.5 transition-colors duration-300 hover:text-ivory"
                >
                  <Mail size={14} strokeWidth={1.5} /> {SITE.email}
                </a>
              </li>
            </ul>
            <ul className="mt-6 space-y-2">
              {legal.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    data-testid={`footer-${l.to.replace("/", "")}-link`}
                    className="text-[11px] uppercase tracking-[0.18em] text-ivory/45 transition-colors duration-300 hover:text-ivory"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-ivory/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-[11px] tracking-wide text-ivory/40">
            © {year} AR Immobiliare — {t("footer.rights")}
          </p>
          <p
            data-testid="footer-made-by"
            className="text-[11px] tracking-wide text-ivory/40"
          >
            {t("footer.madeBy")}
          </p>
        </div>
      </div>
    </footer>
  );
}
