import { ASSETS } from "./site";
import type { Lang } from "../i18n/translations";

export interface L {
  it: string;
  en: string;
}

export type PropertyType =
  | "appartamento"
  | "villa"
  | "attico"
  | "commerciale"
  | "ufficio";

export interface PropertyImage {
  src: string;
  alt: L;
}

export interface Property {
  slug: string;
  name: L;
  type: PropertyType;
  contract: "vendita" | "affitto";
  zone: L;
  price: number;
  rooms: number;
  baths: number;
  area: number;
  floor: L;
  energyClass: string;
  short: L;
  description: L[];
  features: L[];
  images: PropertyImage[];
  featured?: boolean;
}

export const properties: Property[] = [
  {
    slug: "bilocale-via-dei-mille",
    name: { it: "Bilocale ristrutturato — Via dei Mille", en: "Renovated two-room flat — Via dei Mille" },
    type: "appartamento",
    contract: "vendita",
    zone: { it: "Centro Storico", en: "Historic Centre" },
    price: 268000,
    rooms: 2,
    baths: 1,
    area: 68,
    floor: { it: "Secondo piano", en: "Second floor" },
    energyClass: "In fase di verifica",
    short: {
      it: "Ristrutturato di recente, con soggiorno luminoso, cucina a vista e pavimenti in cementine originali recuperate.",
      en: "Recently renovated, with a bright living room, open kitchen and original reclaimed cement tiles.",
    },
    description: [
      {
        it: "Nel cuore del centro storico di Pavia, a due passi da Piazza della Vittoria, proponiamo un bilocale appena ristrutturato. Il soggiorno conserva le cementine originali, la cucina è a vista e i serramenti sono nuovi.",
        en: "In the heart of Pavia's historic centre, a stone's throw from Piazza della Vittoria, we offer a newly renovated two-room flat. The living room keeps its original cement tiles, the kitchen is open-plan and the windows are new.",
      },
      {
        it: "Ideale come prima casa o come investimento: la zona è tra le più richieste della città, anche dal mercato universitario.",
        en: "Ideal as a first home or as an investment: the area is among the most sought-after in the city, including by the university market.",
      },
    ],
    features: [
      { it: "Ristrutturato", en: "Recently renovated" },
      { it: "Cucina a vista", en: "Open-plan kitchen" },
      { it: "Cementine originali", en: "Original cement tiles" },
      { it: "Serramenti nuovi", en: "New windows" },
      { it: "Centro storico", en: "Historic centre" },
    ],
    images: [
      { src: ASSETS.livingRoom, alt: { it: "Soggiorno con divano e cucina a vista", en: "Living room with sofa and open kitchen" } },
    ],
    featured: true,
  },
  {
    slug: "monolocale-strada-nuova",
    name: { it: "Monolocale arredato — Strada Nuova", en: "Furnished studio — Strada Nuova" },
    type: "appartamento",
    contract: "affitto",
    zone: { it: "Centro — Strada Nuova", en: "Centre — Strada Nuova" },
    price: 780,
    rooms: 1,
    baths: 1,
    area: 42,
    floor: { it: "Terzo piano con ascensore", en: "Third floor with lift" },
    energyClass: "In fase di verifica",
    short: {
      it: "Monolocale arredato e luminoso, pronto da abitare. Ideale per studenti o giovani professionisti.",
      en: "Bright, furnished studio, ready to move into. Ideal for students or young professionals.",
    },
    description: [
      {
        it: "Su Strada Nuova, il salotto pedonale di Pavia, un monolocale interamente arredato: cucina attrezzata, zona notte con letto alla francese e bagno con doccia.",
        en: "On Strada Nuova, Pavia's pedestrian promenade, a fully furnished studio: equipped kitchen, sleeping area with a small double bed and bathroom with shower.",
      },
      {
        it: "Contratto per lavoratori o studenti, referenze richieste. Disponibile da subito.",
        en: "Contract for workers or students, references required. Available immediately.",
      },
    ],
    features: [
      { it: "Arredato", en: "Furnished" },
      { it: "Ascensore", en: "Lift" },
      { it: "Zona pedonale", en: "Pedestrian area" },
      { it: "Disponibile subito", en: "Available now" },
    ],
    images: [
      { src: ASSETS.studioFlat, alt: { it: "Monolocale con cucina e zona notte", en: "Studio with kitchen and sleeping area" } },
    ],
    featured: true,
  },
  {
    slug: "studio-professionale-corso-cairoli",
    name: { it: "Studio professionale — Corso Cairoli", en: "Professional studio — Corso Cairoli" },
    type: "ufficio",
    contract: "affitto",
    zone: { it: "Centro — Corso Cairoli", en: "Centre — Corso Cairoli" },
    price: 1150,
    rooms: 3,
    baths: 1,
    area: 55,
    floor: { it: "Primo piano", en: "First floor" },
    energyClass: "In fase di verifica",
    short: {
      it: "Spazio per studio medico o professionale, con sala d'attesa e due ambienti. Già predisposto per attività sanitaria.",
      en: "Space for a medical or professional practice, with waiting room and two rooms. Already set up for healthcare use.",
    },
    description: [
      {
        it: "In posizione centrale e comoda, uno studio professionale composto da ingresso-sala d'attesa, ambulatorio principale e secondo ambiente. Impianti a norma e climatizzazione.",
        en: "In a central and convenient location, a professional studio comprising entrance-waiting room, main consulting room and a second room. Compliant systems and air conditioning.",
      },
    ],
    features: [
      { it: "Sala d'attesa", en: "Waiting room" },
      { it: "Climatizzazione", en: "Air conditioning" },
      { it: "Uso sanitario possibile", en: "Healthcare use possible" },
      { it: "Posizione centrale", en: "Central location" },
    ],
    images: [
      { src: ASSETS.officeDesk, alt: { it: "Studio professionale con scrivania", en: "Professional studio with desk" } },
    ],
  },
  {
    slug: "locale-commerciale-piazza-vittoria",
    name: { it: "Locale con travi a vista — Piazza della Vittoria", en: "Beamed commercial space — Piazza della Vittoria" },
    type: "commerciale",
    contract: "vendita",
    zone: { it: "Centro Storico", en: "Historic Centre" },
    price: 395000,
    rooms: 4,
    baths: 2,
    area: 110,
    floor: { it: "Piano terra", en: "Ground floor" },
    energyClass: "In fase di verifica",
    short: {
      it: "Locale commerciale d'atmosfera con travi in legno e pavimento in graniglia. Adatto a ristorazione o showroom.",
      en: "Atmospheric commercial space with wooden beams and terrazzo floor. Suitable for a restaurant or showroom.",
    },
    description: [
      {
        it: "A pochi metri da Piazza della Vittoria, un locale commerciale con forte carattere: travi a vista, graniglia originale e affaccio su via pedonale. Adatto a ristorazione, enoteca o showroom.",
        en: "A few metres from Piazza della Vittoria, a commercial space with strong character: exposed beams, original terrazzo and frontage on a pedestrian street. Suitable for a restaurant, wine bar or showroom.",
      },
    ],
    features: [
      { it: "Travi a vista", en: "Exposed beams" },
      { it: "Pavimento in graniglia", en: "Terrazzo floor" },
      { it: "Via pedonale", en: "Pedestrian street" },
      { it: "Adatto a ristorazione", en: "Suitable for restaurant use" },
    ],
    images: [
      { src: ASSETS.restaurant, alt: { it: "Interno del locale con travi in legno", en: "Interior of the space with wooden beams" } },
    ],
    featured: true,
  },
  {
    slug: "villa-borgo-ticino",
    name: { it: "Villa con giardino — Borgo Ticino", en: "Villa with garden — Borgo Ticino" },
    type: "villa",
    contract: "vendita",
    zone: { it: "Borgo Ticino", en: "Borgo Ticino" },
    price: 890000,
    rooms: 6,
    baths: 4,
    area: 320,
    floor: { it: "Due livelli", en: "Two levels" },
    energyClass: "In fase di verifica",
    short: {
      it: "Villa indipendente oltre il Ponte Coperto, con giardino privato e vista sul fiume.",
      en: "Detached villa beyond the Ponte Coperto, with private garden and river views.",
    },
    description: [
      {
        it: "Nel Borgo Ticino, il quartiere oltre il fiume con le case dei pescatori e le trattorie storiche, una villa indipendente su due livelli con giardino di circa 400 m².",
        en: "In Borgo Ticino, the quarter across the river with its fishermen's houses and historic trattorias, a detached villa on two levels with a garden of about 400 m².",
      },
      {
        it: "Doppi servizi, taverna, garage doppio. Il centro si raggiunge a piedi attraversando il Ponte Coperto.",
        en: "Two bathrooms, basement taverna, double garage. The centre is a walk away across the Ponte Coperto.",
      },
    ],
    features: [
      { it: "Giardino privato", en: "Private garden" },
      { it: "Garage doppio", en: "Double garage" },
      { it: "Taverna", en: "Basement taverna" },
      { it: "Vista fiume", en: "River view" },
    ],
    images: [
      { src: ASSETS.villaExterior, alt: { it: "Villa circondata dal verde", en: "Villa surrounded by greenery" } },
    ],
    featured: true,
  },
  {
    slug: "attico-lungoticino",
    name: { it: "Attico con terrazzo — Lungoticino", en: "Penthouse with terrace — Lungoticino" },
    type: "attico",
    contract: "vendita",
    zone: { it: "Lungoticino", en: "Lungoticino" },
    price: 520000,
    rooms: 3,
    baths: 2,
    area: 120,
    floor: { it: "Ultimo piano", en: "Top floor" },
    energyClass: "In fase di verifica",
    short: {
      it: "All'ultimo piano, con terrazzo abitabile affacciato sul Ticino e sui tetti della città.",
      en: "Top floor, with a liveable terrace overlooking the Ticino river and the city rooftops.",
    },
    description: [
      {
        it: "Un attico luminoso con terrazzo di 30 m² affacciato sul fiume. Zona giorno open space, due camere e doppi servizi.",
        en: "A bright penthouse with a 30 m² terrace overlooking the river. Open-plan living area, two bedrooms and two bathrooms.",
      },
    ],
    features: [
      { it: "Terrazzo 30 m²", en: "30 m² terrace" },
      { it: "Vista fiume", en: "River view" },
      { it: "Ascensore", en: "Lift" },
      { it: "Doppi servizi", en: "Two bathrooms" },
    ],
    images: [
      { src: ASSETS.waterfrontVilla, alt: { it: "Terrazzo con vista sull'acqua", en: "Terrace overlooking the water" } },
    ],
  },
  {
    slug: "dimora-storica-san-michele",
    name: { it: "Dimora storica — San Michele", en: "Period residence — San Michele" },
    type: "villa",
    contract: "vendita",
    zone: { it: "San Michele — Campagna pavese", en: "San Michele — Pavia countryside" },
    price: 1190000,
    rooms: 8,
    baths: 3,
    area: 450,
    floor: { it: "Tre livelli", en: "Three levels" },
    energyClass: "In fase di verifica",
    short: {
      it: "Dimora d'epoca con parco, pochi minuti da Pavia, da riportare al suo splendore.",
      en: "Period residence with parkland, a few minutes from Pavia, ready to be restored to its splendour.",
    },
    description: [
      {
        it: "Nella prima campagna pavese, una dimora storica con parco privato. Gli ambienti conservano soffitti affrescati e pavimenti d'epoca. Richiede un intervento di restauro.",
        en: "In the immediate Pavia countryside, a historic residence with private parkland. The rooms retain frescoed ceilings and period floors. It requires restoration.",
      },
    ],
    features: [
      { it: "Parco privato", en: "Private parkland" },
      { it: "Soffitti affrescati", en: "Frescoed ceilings" },
      { it: "Da ristrutturare", en: "To be restored" },
      { it: "Tre livelli", en: "Three levels" },
    ],
    images: [
      { src: ASSETS.mansionGarden, alt: { it: "Dimora storica con giardino", en: "Historic residence with garden" } },
    ],
  },
  {
    slug: "appartamento-corte-minerva",
    name: { it: "Appartamento in corte — Piazza Minerva", en: "Courtyard apartment — Piazza Minerva" },
    type: "appartamento",
    contract: "vendita",
    zone: { it: "Centro — Piazza Minerva", en: "Centre — Piazza Minerva" },
    price: 345000,
    rooms: 3,
    baths: 2,
    area: 96,
    floor: { it: "Piano nobile", en: "Piano nobile" },
    energyClass: "In fase di verifica",
    short: {
      it: "In una corte signorile del centro, un tre locali silenzioso affacciato sul cortile interno.",
      en: "In an elegant courtyard in the centre, a quiet three-room flat overlooking the inner courtyard.",
    },
    description: [
      {
        it: "Dietro un portone del centro storico si apre una corte tranquilla: qui si trova questo tre locali al piano nobile, con affacci sul cortile e sulle logge interne.",
        en: "Behind a doorway in the historic centre opens a quiet courtyard: here is this three-room flat on the piano nobile, overlooking the courtyard and inner loggias.",
      },
    ],
    features: [
      { it: "Corte interna", en: "Inner courtyard" },
      { it: "Silenzioso", en: "Quiet" },
      { it: "Piano nobile", en: "Piano nobile" },
      { it: "Doppi servizi", en: "Two bathrooms" },
    ],
    images: [
      { src: ASSETS.courtyardArchway, alt: { it: "Cortile visto attraverso un arco", en: "Courtyard seen through an archway" } },
    ],
  },
];

export function getProperty(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function formatPrice(p: Property, lang: Lang): string {
  const formatted = new Intl.NumberFormat(lang === "it" ? "it-IT" : "en-GB", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(p.price);
  return p.contract === "affitto" ? `${formatted}${lang === "it" ? " / mese" : " / month"}` : formatted;
}
