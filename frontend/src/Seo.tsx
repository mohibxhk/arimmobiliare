import { Helmet } from "react-helmet-async";
import { useLanguage } from "../i18n/LanguageContext";

interface SeoProps {
  title: string;
  description: string;
}

export default function Seo({ title, description }: SeoProps) {
  const { lang } = useLanguage();
  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="AR Immobiliare" />
      <meta property="og:locale" content={lang === "it" ? "it_IT" : "en_GB"} />
    </Helmet>
  );
}
