import { useMemo, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { properties, type PropertyType } from "../data/properties";
import Seo from "../components/Seo";
import PropertyCard from "../components/PropertyCard";
import { Reveal } from "../components/motion/Reveal";

type Contract = "all" | "vendita" | "affitto";
type Sort = "featured" | "priceAsc" | "priceDesc" | "areaDesc";

const PRICE_CAPS = [300000, 600000, 1000000];

export default function Properties() {
  const { lang, t } = useLanguage();
  const [contract, setContract] = useState<Contract>("all");
  const [type, setType] = useState<"all" | PropertyType>("all");
  const [minRooms, setMinRooms] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [sort, setSort] = useState<Sort>("featured");

  const filtered = useMemo(() => {
    let list = properties.filter((p) => {
      if (contract !== "all" && p.contract !== contract) return false;
      if (type !== "all" && p.type !== type) return false;
      if (p.rooms < minRooms) return false;
      if (maxPrice > 0 && p.contract === "vendita" && p.price > maxPrice) return false;
      return true;
    });
    if (sort === "priceAsc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "priceDesc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "areaDesc") list = [...list].sort((a, b) => b.area - a.area);
    if (sort === "featured") list = [...list].sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false));
    return list;
  }, [contract, type, minRooms, maxPrice, sort]);

  const selectClass = "field-input cursor-pointer text-sm";

  return (
    <>
      <Seo
        title={lang === "it" ? "Immobili in vendita e in affitto a Pavia — AR Immobiliare" : "Properties for sale and rent in Pavia — AR Immobiliare"}
        description={t("properties.sub")}
      />
      <section className="mx-auto max-w-[1500px] px-5 pb-24 pt-32 sm:px-8 lg:px-12 lg:pt-40">
        <Reveal>
          <h1 className="font-serif text-4xl font-light tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {t("properties.title")}
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-stone2 sm:text-base">
            {t("properties.sub")}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            data-testid="property-filters"
            className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-line py-7 md:grid-cols-3 lg:grid-cols-6"
          >
            <div>
              <label htmlFor="f-contract" className="mb-1 block text-[10px] uppercase tracking-[0.18em] text-muted2">
                {t("properties.contract")}
              </label>
              <select
                id="f-contract"
                data-testid="filter-contract"
                className={selectClass}
                value={contract}
                onChange={(e) => setContract(e.target.value as Contract)}
              >
                <option value="all">{t("properties.all")}</option>
                <option value="vendita">{t("common.sale")}</option>
                <option value="affitto">{t("common.rent")}</option>
              </select>
            </div>
            <div>
              <label htmlFor="f-type" className="mb-1 block text-[10px] uppercase tracking-[0.18em] text-muted2">
                {t("properties.type")}
              </label>
              <select
                id="f-type"
                data-testid="filter-type"
                className={selectClass}
                value={type}
                onChange={(e) => setType(e.target.value as "all" | PropertyType)}
              >
                <option value="all">{t("properties.allTypes")}</option>
                {(["appartamento", "villa", "attico", "commerciale", "ufficio"] as const).map((ty) => (
                  <option key={ty} value={ty}>{t(`type.${ty}`)}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="f-rooms" className="mb-1 block text-[10px] uppercase tracking-[0.18em] text-muted2">
                {t("properties.minRooms")}
              </label>
              <select
                id="f-rooms"
                data-testid="filter-rooms"
                className={selectClass}
                value={minRooms}
                onChange={(e) => setMinRooms(Number(e.target.value))}
              >
                <option value={0}>{t("properties.any")}</option>
                {[1, 2, 3, 4].map((r) => (
                  <option key={r} value={r}>{r}+</option>
                ))}
              </select>
            </div>
            {contract !== "affitto" && (
              <div>
                <label htmlFor="f-price" className="mb-1 block text-[10px] uppercase tracking-[0.18em] text-muted2">
                  {t("properties.maxPrice")}
                </label>
                <select
                  id="f-price"
                  data-testid="filter-price"
                  className={selectClass}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                >
                  <option value={0}>{t("properties.any")}</option>
                  {PRICE_CAPS.map((c) => (
                    <option key={c} value={c}>
                      ≤ {new Intl.NumberFormat(lang === "it" ? "it-IT" : "en-GB", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(c)}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div>
              <label htmlFor="f-sort" className="mb-1 block text-[10px] uppercase tracking-[0.18em] text-muted2">
                {t("properties.sort")}
              </label>
              <select
                id="f-sort"
                data-testid="filter-sort"
                className={selectClass}
                value={sort}
                onChange={(e) => setSort(e.target.value as Sort)}
              >
                <option value="featured">{t("properties.sortDefault")}</option>
                <option value="priceAsc">{t("properties.priceAsc")}</option>
                <option value="priceDesc">{t("properties.priceDesc")}</option>
                <option value="areaDesc">{t("properties.areaDesc")}</option>
              </select>
            </div>
            <div className="flex items-end justify-end">
              <p data-testid="property-results-count" className="text-[11px] uppercase tracking-[0.18em] text-muted2">
                {filtered.length} {t("properties.results")}
              </p>
            </div>
          </div>
        </Reveal>

        {filtered.length === 0 ? (
          <p data-testid="properties-empty" className="mt-20 max-w-lg font-serif text-2xl leading-relaxed text-stone2">
            {t("properties.noResults")}
          </p>
        ) : (
          <div className="mt-16 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08} className={i % 3 === 1 ? "lg:mt-16" : ""}>
                <PropertyCard property={p} />
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
