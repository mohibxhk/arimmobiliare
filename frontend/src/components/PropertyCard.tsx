import { Link } from "react-router-dom";
import { Bath, BedDouble, Ruler } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { formatPrice, type Property } from "../data/properties";

export default function PropertyCard({
  property,
  aspect = "aspect-[4/3]",
}: {
  property: Property;
  aspect?: string;
}) {
  const { lang, t } = useLanguage();

  return (
    <Link
      to={`/properties/${property.slug}`}
      data-testid={`property-card-${property.slug}`}
      className="group block"
    >
      <figure className={`relative overflow-hidden bg-sand ${aspect}`}>
        <img
          src={property.images[0].src}
          alt={property.images[0].alt[lang]}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
        <figcaption className="absolute left-4 top-4 bg-ivory/95 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-ink">
          {property.contract === "vendita" ? t("common.sale") : t("common.rent")}
        </figcaption>
      </figure>
      <div className="pt-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-serif text-xl leading-snug text-ink transition-colors duration-300 group-hover:text-accent sm:text-2xl">
            {property.name[lang]}
          </h3>
        </div>
        <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted2">
          {property.zone[lang]} · {t(`type.${property.type}`)}
        </p>
        <div className="mt-3 flex items-center gap-5 text-xs text-stone2">
          <span className="flex items-center gap-1.5">
            <BedDouble size={14} strokeWidth={1.5} /> {property.rooms} {t("common.rooms")}
          </span>
          <span className="flex items-center gap-1.5">
            <Bath size={14} strokeWidth={1.5} /> {property.baths}
          </span>
          <span className="flex items-center gap-1.5">
            <Ruler size={14} strokeWidth={1.5} /> {property.area} m²
          </span>
        </div>
        <p className="mt-3 text-base font-semibold text-ink">
          {formatPrice(property, lang)}
        </p>
      </div>
    </Link>
  );
}
