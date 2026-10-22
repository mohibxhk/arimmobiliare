import type { Lang } from "../i18n/translations";

export interface ChatReply {
  text: string;
  link?: { label: string; href: string };
}

// Demo assistant: structured, rule-based replies for the concept phase.
// Swap this function for a real AI backend call later — the ChatAssistant
// component only depends on this async interface.
export async function getChatReply(input: string, lang: Lang): Promise<ChatReply> {
  const s = input.toLowerCase();
  const has = (...words: string[]) => words.some((w) => s.includes(w));

  if (has("ciao", "buongiorno", "salve", "hello", "hi", "hey")) {
    return {
      text:
        lang === "it"
          ? "Buongiorno. Come posso aiutarvi? Potete chiedermi degli immobili in vendita o in affitto, oppure prenotare un appuntamento in agenzia."
          : "Hello. How can I help? You can ask about properties for sale or rent, or book an appointment at our office.",
    };
  }
  if (has("vend", "sell", "vendo")) {
    return {
      text:
        lang === "it"
          ? "Per vendere, partiamo da una valutazione gratuita e senza impegno: sopralluogo, analisi del mercato e una stima scritta e motivata. Trovate tutto nella pagina Vendi."
          : "To sell, we start with a free, no-obligation valuation: a site visit, market analysis and a written, reasoned estimate. Everything is on the Sell page.",
      link: { label: lang === "it" ? "Vendi il tuo immobile" : "Sell your property", href: "/sell" },
    };
  }
  if (has("affitt", "rent", "locaz")) {
    return {
      text:
        lang === "it"
          ? "Per gli affitti seguiamo proprietari e inquilini: selezione con referenze, contratto e registrazione. Alcuni immobili in affitto sono già online."
          : "For rentals we assist landlords and tenants: referenced selection, contract and registration. Some rental properties are already online.",
      link: { label: lang === "it" ? "Vedi gli affitti" : "See rentals", href: "/properties" },
    };
  }
  if (has("appuntament", "appointment", "visit", "visitare", "incontr")) {
    return {
      text:
        lang === "it"
          ? "Potete prenotare un appuntamento in sede a Corso Cairoli 39: scegliete giorno e ora, vi confermiamo noi."
          : "You can book an appointment at our office, Corso Cairoli 39: choose a day and time and we will confirm.",
      link: { label: lang === "it" ? "Prenota un appuntamento" : "Book an appointment", href: "/appointment" },
    };
  }
  if (has("dove", "indirizzo", "telefono", "email", "contatt", "where", "phone", "contact", "orari")) {
    return {
      text:
        lang === "it"
          ? "La sede è a Corso Cairoli 39, 27100 Pavia. Telefono +39 0382 000000, email info@arimmobiliare.it. Riceviamo su appuntamento."
          : "Our office is at Corso Cairoli 39, 27100 Pavia. Phone +39 0382 000000, email info@arimmobiliare.it. We meet by appointment.",
      link: { label: lang === "it" ? "Pagina contatti" : "Contact page", href: "/contact" },
    };
  }
  if (has("casa", "compr", "buy", "cerco", "immobile", "appartament", "villa", "attico")) {
    return {
      text:
        lang === "it"
          ? "Nella pagina Immobili trovate la selezione aggiornata: case, attici e spazi commerciali a Pavia, con filtri per prezzo, zona e tipologia."
          : "On the Properties page you will find the updated selection: homes, penthouses and commercial spaces in Pavia, with filters for price, area and type.",
      link: { label: lang === "it" ? "Vedi gli immobili" : "View properties", href: "/properties" },
    };
  }
  if (has("prezzo", "valutaz", "quanto vale", "price", "valuation", "worth")) {
    return {
      text:
        lang === "it"
          ? "Le valutazioni sono gratuite e motivate: analizziamo zona, stato e mercato reale, non stime automatiche. Potete richiederla dalla pagina Vendi."
          : "Valuations are free and reasoned: we analyse area, condition and the real market, not automated estimates. You can request one from the Sell page.",
      link: { label: lang === "it" ? "Richiedi una valutazione" : "Request a valuation", href: "/sell" },
    };
  }
  return {
    text:
      lang === "it"
        ? "Sono un assistente dimostrativo: posso aiutarvi con immobili, vendita, affitto e appuntamenti. Per tutto il resto, scriveteci a info@arimmobiliare.it."
        : "I am a demonstration assistant: I can help with properties, selling, renting and appointments. For anything else, write to info@arimmobiliare.it.",
    link: { label: lang === "it" ? "Contattaci" : "Contact us", href: "/contact" },
  };
}
