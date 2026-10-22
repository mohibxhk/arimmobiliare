import { ASSETS } from "./site";
import type { L } from "./properties";

export interface Project {
  slug: string;
  name: L;
  location: L;
  status: L;
  type: L;
  short: L;
  description: L[];
  images: { src: string; alt: L }[];
}

export const projects: Project[] = [
  {
    slug: "residenza-ticino",
    name: { it: "Residenza Ticino", en: "Residenza Ticino" },
    location: { it: "Lungoticino, Pavia", en: "Lungoticino, Pavia" },
    status: { it: "In vendita", en: "Now selling" },
    type: { it: "Ristrutturazione residenziale", en: "Residential renovation" },
    short: {
      it: "Un edificio sul fiume trasformato in poche unità abitative con terrazzi affacciati sul Ticino.",
      en: "A riverside building transformed into a few residential units with terraces overlooking the Ticino.",
    },
    description: [
      {
        it: "Affacciata sul Lungoticino, Residenza Ticino è un intervento di ristrutturazione che restituisce alla città un edificio storico: poche unità, molta luce, terrazzi verso il fiume.",
        en: "Overlooking the Lungoticino, Residenza Ticino is a renovation project that returns a historic building to the city: few units, abundant light, terraces facing the river.",
      },
      {
        it: "Seguiamo la vendita direttamente in agenzia: planimetrie, capitolato e visite in cantiere su appuntamento.",
        en: "We handle sales directly from our office: floor plans, specifications and site visits by appointment.",
      },
    ],
    images: [
      { src: ASSETS.waterfrontVilla, alt: { it: "Affaccio sul fiume Ticino", en: "View over the Ticino river" } },
    ],
  },
  {
    slug: "corte-minerva",
    name: { it: "Corte Minerva", en: "Corte Minerva" },
    location: { it: "Centro Storico, Pavia", en: "Historic Centre, Pavia" },
    status: { it: "In fase di lancio", en: "Launching soon" },
    type: { it: "Restauro conservativo", en: "Conservative restoration" },
    short: {
      it: "Restauro di una corte del centro storico: appartamenti affacciati su logge e giardini interni.",
      en: "Restoration of a historic centre courtyard: apartments overlooking loggias and internal gardens.",
    },
    description: [
      {
        it: "Corte Minerva è il recupero di una corte signorile a pochi passi da Piazza della Vittoria: restauro conservativo delle parti comuni e nuove unità abitative silenziose, affacciate sul verde interno.",
        en: "Corte Minerva is the recovery of an elegant courtyard a few steps from Piazza della Vittoria: conservative restoration of the common areas and new quiet residential units overlooking the internal greenery.",
      },
    ],
    images: [
      { src: ASSETS.courtyardArchway, alt: { it: "Cortile interno con arco", en: "Inner courtyard with arch" } },
    ],
  },
  {
    slug: "borgo-alto",
    name: { it: "Borgo Alto", en: "Borgo Alto" },
    location: { it: "Borgo Ticino, Pavia", en: "Borgo Ticino, Pavia" },
    status: { it: "Concept", en: "Concept" },
    type: { it: "Nuova costruzione", en: "New build" },
    short: {
      it: "Studio di fattibilità per piccole residenze nel Borgo Ticino, tra le case storiche del quartiere.",
      en: "Feasibility study for small residences in Borgo Ticino, among the quarter's historic houses.",
    },
    description: [
      {
        it: "Borgo Alto è un progetto in fase di studio: piccole residenze nel tessuto storico del Borgo Ticino, pensate per dialogare con le case basse e i giardini del quartiere.",
        en: "Borgo Alto is a project under study: small residences within the historic fabric of Borgo Ticino, designed to dialogue with the quarter's low houses and gardens.",
      },
    ],
    images: [
      { src: ASSETS.villaExterior, alt: { it: "Edificio residenziale nel verde", en: "Residential building in greenery" } },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
