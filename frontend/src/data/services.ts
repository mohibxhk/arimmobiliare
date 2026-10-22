import type { L } from "./properties";
import { ASSETS } from "./site";

export interface Service {
  id: string;
  title: L;
  text: L;
  image?: string;
}

export const services: Service[] = [
  {
    id: "vendita",
    title: { it: "Vendita", en: "Selling" },
    text: {
      it: "Valutazione motivata, fotografia professionale, pubblicazione sui canali giusti e trattativa condotta da chi conosce il mercato pavese. Un solo interlocutore, dalla stima all'atto.",
      en: "Reasoned valuation, professional photography, publication on the right channels and negotiation led by someone who knows the Pavia market. One point of contact, from valuation to completion.",
    },
    image: ASSETS.livingRoom,
  },
  {
    id: "acquisto",
    title: { it: "Acquisto", en: "Buying" },
    text: {
      it: "Vi accompagniamo nella scelta: selezione degli immobili, visite mirate, verifica documentale e supporto nella proposta d'acquisto, fino al rogito.",
      en: "We accompany you in your choice: property selection, targeted viewings, document checks and support with the purchase offer, through to the deed.",
    },
  },
  {
    id: "valutazione",
    title: { it: "Valutazione immobiliare", en: "Property valuation" },
    text: {
      it: "Un prezzo giusto vende: analizziamo zona, stato, metrature e mercato reale — non le stime automatiche — e vi consegniamo una valutazione scritta e motivata.",
      en: "The right price sells: we analyse location, condition, size and the real market — not automated estimates — and deliver a written, reasoned valuation.",
    },
    image: ASSETS.courtyardArchway,
  },
  {
    id: "affitti",
    title: { it: "Locazioni", en: "Rentals" },
    text: {
      it: "Per proprietari e inquilini: canone corretto, selezione con referenze verificate, contratto e registrazione. Affitti gestiti bene, non lasciati al caso.",
      en: "For landlords and tenants: the right rent, selection with verified references, contract and registration. Rentals managed properly, not left to chance.",
    },
  },
  {
    id: "ricerca",
    title: { it: "Ricerca personalizzata", en: "Personal search" },
    text: {
      it: "Cercate qualcosa di preciso? Ce lo raccontate una volta e lo cerchiamo noi, anche tra immobili non ancora pubblicati. Vi avvisiamo solo quando vale la pena.",
      en: "Looking for something specific? Tell us once and we search for you, including properties not yet published. We only call you when it is worth it.",
    },
  },
  {
    id: "consulenza",
    title: { it: "Consulenza per investimenti", en: "Investment advisory" },
    text: {
      it: "Pavia è una città universitaria con un mercato stabile. Vi aiutiamo a leggere rendimenti, zone e tipologie prima di investire, con numeri alla mano.",
      en: "Pavia is a university city with a stable market. We help you read yields, areas and property types before you invest, with real numbers.",
    },
    image: ASSETS.studioFlat,
  },
];
