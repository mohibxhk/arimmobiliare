import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { ASSETS, SITE } from "../data/site";
import { EASE } from "./motion/Reveal";

const NAV_KEYS = [
  { to: "/properties", key: "nav.properties" },
  { to: "/who-we-are", key: "nav.whoWeAre" },
  { to: "/services", key: "nav.services" },
  { to: "/projects", key: "nav.projects" },
  { to: "/sell", key: "nav.sell" },
  { to: "/rent", key: "nav.rent" },
  { to: "/contact", key: "nav.contact" },
];

function LangToggle({ dark }: { dark?: boolean }) {
  const { lang, setLang } = useLanguage();
  return (
    <div
      className={`flex items-center text-[11px] uppercase tracking-[0.2em] ${
        dark ? "text-ivory/70" : "text-stone2"
      }`}
      data-testid="language-toggle"
    >
      {(["it", "en"] as const).map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="mx-1.5 opacity-40">/</span>}
          <button
            data-testid={`lang-${l}-button`}
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            className={`transition-colors duration-300 ${
              lang === l
                ? dark
                  ? "text-ivory"
                  : "text-ink"
                : "hover:text-accent"
            }`}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
}

export default function Header() {
  const { t } = useLanguage();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isHome = location.pathname === "/";
  const solid = scrolled || !isHome || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        data-testid="site-header"
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-[100] transition-[background-color,border-color,box-shadow] duration-500 ${
          solid
            ? "border-b border-line bg-ivory/95 backdrop-blur-sm"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
          <Link
            to="/"
            data-testid="header-logo-link"
            aria-label="AR Immobiliare — Home"
            className="flex items-center gap-3"
          >
            <img
              src={ASSETS.logo}
              alt="AR Immobiliare logo"
              className="h-11 w-11 bg-white object-cover"
            />
            <span
              className={`hidden font-serif text-lg tracking-wide sm:block ${
                solid ? "text-ink" : "text-ivory"
              }`}
            >
              AR Immobiliare
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 lg:flex"
          >
            {NAV_KEYS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                data-testid={`nav-${item.key.split(".")[1]}-link`}
                className={({ isActive }) =>
                  `link-underline text-[12px] uppercase tracking-[0.16em] transition-colors duration-300 ${
                    solid
                      ? isActive
                        ? "text-accent"
                        : "text-body hover:text-accent"
                      : isActive
                        ? "text-white"
                        : "text-ivory/85 hover:text-white"
                  }`
                }
              >
                {t(item.key)}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <div className="hidden sm:block">
              <LangToggle dark={!solid} />
            </div>
            <Link
              to="/appointment"
              data-testid="header-appointment-cta"
              className={`hidden px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 md:block ${
                solid
                  ? "bg-ink text-ivory hover:bg-accent"
                  : "border border-ivory/70 text-ivory hover:border-ivory hover:bg-ivory hover:text-ink"
              }`}
            >
              {t("nav.appointment")}
            </Link>
            <button
              data-testid="mobile-menu-button"
              onClick={() => setOpen(true)}
              aria-label={t("nav.menu")}
              className={`p-1 lg:hidden ${solid ? "text-ink" : "text-ivory"}`}
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            className="fixed inset-0 z-[200] flex flex-col bg-ink"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <div className="flex items-center justify-between px-5 py-3 sm:px-8">
              <img
                src={ASSETS.logo}
                alt="AR Immobiliare logo"
                className="h-11 w-11 bg-white object-cover"
              />
              <button
                data-testid="mobile-menu-close"
                onClick={() => setOpen(false)}
                aria-label={t("nav.close")}
                className="p-1 text-ivory"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <nav
              aria-label="Mobile"
              className="flex flex-1 flex-col justify-center gap-1 px-8"
            >
              {NAV_KEYS.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: EASE }}
                >
                  <NavLink
                    to={item.to}
                    data-testid={`mobile-nav-${item.key.split(".")[1]}-link`}
                    className={({ isActive }) =>
                      `block py-2 font-serif text-4xl transition-colors duration-300 ${
                        isActive ? "text-accent" : "text-ivory hover:text-accent"
                      }`
                    }
                  >
                    {t(item.key)}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + NAV_KEYS.length * 0.06, duration: 0.6, ease: EASE }}
              >
                <Link
                  to="/appointment"
                  data-testid="mobile-nav-appointment-link"
                  className="mt-6 inline-block bg-accent px-6 py-3 text-[12px] uppercase tracking-[0.18em] text-ivory"
                >
                  {t("nav.appointment")}
                </Link>
              </motion.div>
            </nav>
            <motion.div
              className="flex items-center justify-between px-8 pb-8 text-ivory/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-[11px] uppercase tracking-[0.2em]">
                {SITE.address}, {SITE.city}
              </p>
              <LangToggle dark />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
