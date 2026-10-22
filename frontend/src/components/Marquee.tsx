import { useLanguage } from "../i18n/LanguageContext";

export default function Marquee() {
  const { t } = useLanguage();
  const text = t("home.marquee");
  const items = Array.from({ length: 6 }, () => text);

  return (
    <section
      aria-hidden="true"
      className="group overflow-hidden border-y border-line bg-sand py-7"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center whitespace-nowrap">
            {items.map((item, i) => (
              <span
                key={i}
                className="flex items-center font-serif text-2xl italic text-stone2 sm:text-3xl"
              >
                {item.split("·").map((part, j) => (
                  <span key={j} className="flex items-center">
                    {j > 0 && <span className="mx-6 inline-block h-1.5 w-1.5 bg-accent" />}
                    {part.trim()}
                  </span>
                ))}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
