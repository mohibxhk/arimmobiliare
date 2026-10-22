export type Lang = "it" | "en";

type Entry = { it: string; en: string };

const dict: Record<string, Entry> = {
  "nav.properties": { it: "Immobili", en: "Properties" },
  "nav.whoWeAre": { it: "Chi Siamo", en: "Who We Are" },
  "nav.services": { it: "Servizi", en: "Services" },
  "nav.projects": { it: "Progetti", en: "Projects" },
  "nav.sell": { it: "Vendi", en: "Sell" },
  "nav.rent": { it: "Affitta", en: "Rent" },
  "nav.contact": { it: "Contatti", en: "Contact" },
  "nav.appointment": { it: "Prenota un appuntamento", en: "Book an appointment" },
  "nav.menu": { it: "Menu", en: "Menu" },
  "nav.close": { it: "Chiudi", en: "Close" },

  "common.sale": { it: "Vendita", en: "For sale" },
  "common.rent": { it: "Affitto", en: "For rent" },
  "common.rooms": { it: "locali", en: "rooms" },
  "common.baths": { it: "bagni", en: "bathrooms" },
  "common.perMonth": { it: "/ mese", en: "/ month" },
  "common.details": { it: "Scopri", en: "View" },
  "common.send": { it: "Invia", en: "Send" },
  "common.sending": { it: "Invio in corso…", en: "Sending…" },
  "common.name": { it: "Nome e cognome", en: "Full name" },
  "common.email": { it: "Email", en: "Email" },
  "common.phone": { it: "Telefono", en: "Phone" },
  "common.message": { it: "Messaggio", en: "Message" },
  "common.optional": { it: "facoltativo", en: "optional" },
  "common.formError": {
    it: "Qualcosa non ha funzionato. Riprova o scrivici a info@arimmobiliare.it.",
    en: "Something went wrong. Please try again or write to info@arimmobiliare.it.",
  },

  "home.heroEyebrow": { it: "Agenzia immobiliare — Pavia", en: "Real estate agency — Pavia" },
  "home.heroLine1": { it: "La casa giusta,", en: "The right home," },
  "home.heroLine2": { it: "trovata con cura.", en: "found with care." },
  "home.heroSub": {
    it: "Vendita, affitto e valutazione di immobili selezionati. Vi aspettiamo a Corso Cairoli 39, nel centro di Pavia.",
    en: "Sale, rental and valuation of selected properties. Find us at Corso Cairoli 39, in the centre of Pavia.",
  },
  "home.viewProperties": { it: "Vedi gli immobili", en: "View properties" },
  "home.scroll": { it: "Scorri", en: "Scroll" },
  "home.introEyebrow": { it: "AR Immobiliare", en: "AR Immobiliare" },
  "home.introTitle": {
    it: "Un'agenzia di quartiere, con lo sguardo sulla città intera.",
    en: "A neighbourhood agency, with an eye on the whole city.",
  },
  "home.introText": {
    it: "Lavoriamo a Pavia e nel suo territorio con un metodo semplice: ascolto, conoscenza del luogo e attenzione alle persone. Ogni immobile che proponiamo è scelto, verificato e presentato per quello che è davvero.",
    en: "We work in Pavia and its surroundings with a simple method: listening, knowledge of the place and attention to people. Every property we present is chosen, verified and shown for what it truly is.",
  },
  "home.introLink": { it: "Chi siamo", en: "Who we are" },
  "home.featuredEyebrow": { it: "In evidenza", en: "Featured" },
  "home.featuredTitle": { it: "Immobili selezionati", en: "Selected properties" },
  "home.viewAll": { it: "Tutti gli immobili", en: "All properties" },
  "home.servicesEyebrow": { it: "Servizi", en: "Services" },
  "home.servicesTitle": { it: "Cosa facciamo", en: "What we do" },
  "home.servicesLink": { it: "Tutti i servizi", en: "All services" },
  "home.projectsEyebrow": { it: "Progetti", en: "Projects" },
  "home.projectsTitle": { it: "Progetti in corso", en: "Current projects" },
  "home.projectsText": {
    it: "Interventi residenziali che seguiamo da vicino, dal primo sopralluogo alla consegna.",
    en: "Residential projects we follow closely, from the first site visit to delivery.",
  },
  "home.officeTitle": { it: "Passate a trovarci.", en: "Come and see us." },
  "home.officeText": {
    it: "La nostra sede è a Corso Cairoli 39, Pavia. Riceviamo su appuntamento: raccontateci cosa cercate, al resto pensiamo noi.",
    en: "Our office is at Corso Cairoli 39, Pavia. We meet by appointment: tell us what you are looking for, we take care of the rest.",
  },
  "home.marquee": {
    it: "Pavia · Vendita · Affitto · Valutazioni · Corso Cairoli 39 · ",
    en: "Pavia · Sales · Rentals · Valuations · Corso Cairoli 39 · ",
  },

  "properties.title": { it: "Immobili", en: "Properties" },
  "properties.sub": {
    it: "Una selezione di case, spazi commerciali e dimore a Pavia e dintorni, aggiornata di continuo.",
    en: "A selection of homes, commercial spaces and period residences in and around Pavia, continuously updated.",
  },
  "properties.contract": { it: "Contratto", en: "Contract" },
  "properties.all": { it: "Tutti", en: "All" },
  "properties.type": { it: "Tipologia", en: "Type" },
  "properties.allTypes": { it: "Tutte", en: "All types" },
  "properties.minRooms": { it: "Locali minimi", en: "Min. rooms" },
  "properties.any": { it: "Qualsiasi", en: "Any" },
  "properties.maxPrice": { it: "Prezzo massimo", en: "Max. price" },
  "properties.sort": { it: "Ordina", en: "Sort by" },
  "properties.sortDefault": { it: "In evidenza", en: "Featured" },
  "properties.priceAsc": { it: "Prezzo crescente", en: "Price, low to high" },
  "properties.priceDesc": { it: "Prezzo decrescente", en: "Price, high to low" },
  "properties.areaDesc": { it: "Superficie", en: "Surface area" },
  "properties.results": { it: "immobili", en: "properties" },
  "properties.noResults": {
    it: "Nessun immobile corrisponde ai filtri. Modificate la ricerca o contattateci: spesso conosciamo immobili non ancora pubblicati.",
    en: "No property matches your filters. Adjust the search or contact us: we often know of properties not yet published.",
  },

  "type.appartamento": { it: "Appartamento", en: "Apartment" },
  "type.villa": { it: "Villa", en: "Villa" },
  "type.attico": { it: "Attico", en: "Penthouse" },
  "type.commerciale": { it: "Commerciale", en: "Commercial" },
  "type.ufficio": { it: "Ufficio", en: "Office" },

  "property.overview": { it: "Panoramica", en: "Overview" },
  "property.description": { it: "Descrizione", en: "Description" },
  "property.features": { it: "Caratteristiche", en: "Features" },
  "property.location": { it: "Posizione", en: "Location" },
  "property.contract": { it: "Contratto", en: "Contract" },
  "property.zone": { it: "Zona", en: "Area" },
  "property.rooms": { it: "Locali", en: "Rooms" },
  "property.baths": { it: "Bagni", en: "Bathrooms" },
  "property.area": { it: "Superficie", en: "Surface" },
  "property.price": { it: "Prezzo", en: "Price" },
  "property.gallery": { it: "Galleria", en: "Gallery" },
  "property.enquireTitle": { it: "Richiedi informazioni", en: "Request information" },
  "property.enquireText": {
    it: "Scriveteci per dettagli, documentazione o per fissare una visita. Rispondiamo di persona, entro un giorno lavorativo.",
    en: "Write to us for details, documentation or to arrange a visit. We reply in person, within one working day.",
  },
  "property.visitCta": { it: "Prenota una visita", en: "Book a visit" },
  "property.back": { it: "Tutti gli immobili", en: "All properties" },
  "property.similar": { it: "Potrebbe interessarvi anche", en: "You may also like" },
  "property.enquireSuccess": {
    it: "Richiesta inviata. Vi ricontatteremo a breve.",
    en: "Request sent. We will get back to you shortly.",
  },
  "property.notFound": { it: "Immobile non trovato", en: "Property not found" },

  "about.eyebrow": { it: "Chi siamo", en: "Who we are" },
  "about.title": {
    it: "Un'agenzia immobiliare a misura di Pavia.",
    en: "A real estate agency made for Pavia.",
  },
  "about.p1": {
    it: "AR Immobiliare nasce a Corso Cairoli 39, a pochi passi da Piazza della Vittoria. Siamo un'agenzia indipendente: conosciamo i quartieri, i palazzi e le persone di questa città, e lavoriamo immobile per immobile, senza cataloghi impersonali.",
    en: "AR Immobiliare is based at Corso Cairoli 39, a few steps from Piazza della Vittoria. We are an independent agency: we know the neighbourhoods, the buildings and the people of this city, and we work property by property, without impersonal catalogues.",
  },
  "about.p2": {
    it: "Crediamo che comprare o vendere casa sia prima di tutto una questione di fiducia. Per questo accompagniamo ogni cliente dall'inizio alla fine: valutazione onesta, presentazione curata, trattativa trasparente.",
    en: "We believe that buying or selling a home is above all a matter of trust. That is why we accompany every client from start to finish: honest valuation, careful presentation, transparent negotiation.",
  },
  "about.approachTitle": { it: "Il nostro metodo", en: "Our approach" },
  "about.approach1Title": { it: "Ascolto", en: "Listening" },
  "about.approach1Text": {
    it: "Prima di proporre, domandiamo. Capire come vivete — o come volete vivere — è la parte più importante del lavoro.",
    en: "Before proposing, we ask. Understanding how you live — or how you want to live — is the most important part of the job.",
  },
  "about.approach2Title": { it: "Territorio", en: "Local knowledge" },
  "about.approach2Text": {
    it: "Pavia è una città di quartieri molto diversi tra loro. Conoscerli uno a uno fa la differenza tra un prezzo giusto e uno sbagliato.",
    en: "Pavia is a city of very different neighbourhoods. Knowing them one by one is the difference between the right price and the wrong one.",
  },
  "about.approach3Title": { it: "Trasparenza", en: "Transparency" },
  "about.approach3Text": {
    it: "Niente promesse facili. Valutazioni motivate, condizioni chiare e un unico interlocutore fino all'atto.",
    en: "No easy promises. Reasoned valuations, clear terms and a single point of contact until completion.",
  },
  "about.officeTitle": { it: "La sede", en: "The office" },
  "about.officeText": {
    it: "Corso Cairoli 39, Pavia. Qui riceviamo i clienti, valutiamo gli immobili e prepariamo ogni presentazione. Le fotografie della sede saranno presto disponibili.",
    en: "Corso Cairoli 39, Pavia. This is where we meet clients, value properties and prepare every presentation. Photographs of the office will be available soon.",
  },
  "about.ctaTitle": { it: "Venite a conoscerci.", en: "Come and meet us." },
  "about.ctaText": {
    it: "Un caffè in agenzia vale più di dieci telefonate. Prenotate un appuntamento: vi aspettiamo.",
    en: "A coffee at our office is worth ten phone calls. Book an appointment: we look forward to meeting you.",
  },

  "services.title": { it: "Servizi", en: "Services" },
  "services.sub": {
    it: "Seguiamo la compravendita e la locazione dall'inizio alla fine, con un unico interlocutore.",
    en: "We follow sales and rentals from start to finish, with a single point of contact.",
  },
  "services.cta": { it: "Parliamone di persona", en: "Let's talk in person" },

  "projects.title": { it: "Progetti", en: "Projects" },
  "projects.sub": {
    it: "Interventi residenziali e ristrutturazioni che seguiamo sul territorio di Pavia.",
    en: "Residential developments and renovations we follow across Pavia.",
  },
  "projects.overview": { it: "Il progetto", en: "The project" },
  "projects.locationLabel": { it: "Dove", en: "Where" },
  "projects.statusLabel": { it: "Stato", en: "Status" },
  "projects.typeLabel": { it: "Intervento", en: "Intervention" },
  "projects.enquire": { it: "Richiedi informazioni sul progetto", en: "Enquire about this project" },
  "projects.viewProject": { it: "Vedi il progetto", en: "View project" },
  "projects.back": { it: "Tutti i progetti", en: "All projects" },
  "projects.notFound": { it: "Progetto non trovato", en: "Project not found" },

  "sell.title": { it: "Vendere casa, bene.", en: "Selling your home, properly." },
  "sell.sub": {
    it: "Un percorso chiaro in sei passi, dalla valutazione all'atto notarile. Nessuna promessa impossibile: solo un metodo.",
    en: "A clear six-step path, from valuation to the notarial deed. No impossible promises: just a method.",
  },
  "sell.processTitle": { it: "Come lavoriamo", en: "How we work" },
  "sell.valuationTitle": { it: "Richiedi una valutazione", en: "Request a valuation" },
  "sell.valuationText": {
    it: "Raccontateci il vostro immobile: vi ricontattiamo per un sopralluogo gratuito e una valutazione motivata, senza impegno.",
    en: "Tell us about your property: we will call you back for a free inspection and a reasoned valuation, with no obligation.",
  },
  "sell.propertyAddress": { it: "Indirizzo dell'immobile", en: "Property address" },
  "sell.sendRequest": { it: "Richiedi la valutazione", en: "Request valuation" },
  "sell.success": {
    it: "Richiesta ricevuta. Vi contatteremo per fissare il sopralluogo.",
    en: "Request received. We will contact you to arrange the inspection.",
  },

  "rent.title": { it: "Affitti gestiti con cura.", en: "Rentals, managed with care." },
  "rent.sub": {
    it: "Per proprietari e inquilini: selezione, contratto e assistenza fino alla consegna delle chiavi.",
    en: "For landlords and tenants: selection, contract and assistance until the keys are handed over.",
  },
  "rent.ownerTitle": { it: "Per i proprietari", en: "For landlords" },
  "rent.ownerText": {
    it: "Valutiamo il canone corretto, selezioniamo gli inquilini con referenze verificate e curiamo la parte contrattuale. Il vostro immobile resta un investimento, non un pensiero.",
    en: "We assess the right rent, select tenants with verified references and take care of the contract. Your property stays an investment, not a worry.",
  },
  "rent.tenantTitle": { it: "Per chi cerca casa", en: "For those looking" },
  "rent.tenantText": {
    it: "Proponiamo solo immobili che abbiamo visto e verificato. Diteci budget, zona e tempi: vi avvisiamo appena arriva qualcosa di adatto.",
    en: "We only offer properties we have seen and verified. Tell us your budget, area and timing: we will let you know as soon as something suitable arrives.",
  },
  "rent.ctaTitle": { it: "Parliamone", en: "Let's talk" },
  "rent.ctaText": {
    it: "Scriveteci o passate in agenzia: gli affitti migliori non restano online a lungo.",
    en: "Write to us or drop by the office: the best rentals do not stay online for long.",
  },

  "appointment.title": { it: "Prenota un appuntamento", en: "Book an appointment" },
  "appointment.sub": {
    it: "Scegliete giorno e ora: vi confermiamo l'incontro telefonicamente o via email.",
    en: "Choose a day and time: we will confirm the meeting by phone or email.",
  },
  "appointment.date": { it: "Data preferita", en: "Preferred date" },
  "appointment.time": { it: "Orario preferito", en: "Preferred time" },
  "appointment.reason": { it: "Motivo", en: "Reason" },
  "appointment.reasonVisit": { it: "Visita a un immobile", en: "Property viewing" },
  "appointment.reasonSell": { it: "Vendere un immobile", en: "Selling a property" },
  "appointment.reasonRent": { it: "Affittare un immobile", en: "Renting a property" },
  "appointment.reasonValuation": { it: "Valutazione", en: "Valuation" },
  "appointment.reasonOther": { it: "Altro", en: "Other" },
  "appointment.select": { it: "Seleziona…", en: "Select…" },
  "appointment.submit": { it: "Invia la richiesta", en: "Send request" },
  "appointment.confirmTitle": { it: "Richiesta inviata.", en: "Request sent." },
  "appointment.confirmText": {
    it: "Grazie {name}. Vi confermeremo l'appuntamento per il {date} alle {time} il prima possibile.",
    en: "Thank you {name}. We will confirm your appointment for {date} at {time} as soon as possible.",
  },
  "appointment.newRequest": { it: "Nuova richiesta", en: "New request" },
  "appointment.note": {
    it: "La richiesta non è ancora una conferma: l'appuntamento è valido dopo il nostro riscontro.",
    en: "The request is not yet a confirmation: the appointment is valid once we get back to you.",
  },

  "contact.title": { it: "Contatti", en: "Contact" },
  "contact.sub": {
    it: "Telefono, email o un caffè a Corso Cairoli: scegliete voi.",
    en: "Phone, email or a coffee on Corso Cairoli: your choice.",
  },
  "contact.office": { it: "La sede", en: "The office" },
  "contact.formTitle": { it: "Scriveteci", en: "Write to us" },
  "contact.subject": { it: "Oggetto", en: "Subject" },
  "contact.success": {
    it: "Messaggio inviato. Rispondiamo entro un giorno lavorativo.",
    en: "Message sent. We reply within one working day.",
  },
  "contact.mapCaption": { it: "Corso Cairoli 39, 27100 Pavia PV", en: "Corso Cairoli 39, 27100 Pavia PV, Italy" },

  "privacy.title": { it: "Privacy Policy", en: "Privacy Policy" },
  "cookie.title": { it: "Cookie Policy", en: "Cookie Policy" },
  "legal.updated": { it: "Ultimo aggiornamento: luglio 2026", en: "Last updated: July 2026" },

  "footer.tagline": {
    it: "Agenzia immobiliare indipendente a Pavia. Case, spazi e progetti scelti con cura.",
    en: "Independent real estate agency in Pavia. Homes, spaces and projects chosen with care.",
  },
  "footer.explore": { it: "Esplora", en: "Explore" },
  "footer.services": { it: "Servizi", en: "Services" },
  "footer.contact": { it: "Contatti", en: "Contact" },
  "footer.legal": { it: "Note legali", en: "Legal" },
  "footer.privacy": { it: "Privacy Policy", en: "Privacy Policy" },
  "footer.cookie": { it: "Cookie Policy", en: "Cookie Policy" },
  "footer.rights": { it: "Tutti i diritti riservati.", en: "All rights reserved." },
  "footer.madeBy": { it: "Made by Hub of Ecom", en: "Made by Hub of Ecom" },

  "chat.title": { it: "Assistente AR", en: "AR Assistant" },
  "chat.demo": { it: "Demo", en: "Demo" },
  "chat.subtitle": {
    it: "Risposte automatiche dimostrative",
    en: "Demonstration automated replies",
  },
  "chat.placeholder": { it: "Scrivi un messaggio…", en: "Type a message…" },
  "chat.greeting": {
    it: "Buongiorno, sono l'assistente di AR Immobiliare. Posso aiutarvi a trovare un immobile, prenotare un appuntamento o rispondere a una domanda.",
    en: "Hello, I am the AR Immobiliare assistant. I can help you find a property, book an appointment or answer a question.",
  },
  "chat.qa.buy": { it: "Cerco casa", en: "Find a home" },
  "chat.qa.sell": { it: "Vendere", en: "Sell" },
  "chat.qa.rent": { it: "Affittare", en: "Rent" },
  "chat.qa.appointment": { it: "Appuntamento", en: "Appointment" },
  "chat.qa.contact": { it: "Contatti", en: "Contact" },

  "notFound.title": { it: "Pagina non trovata", en: "Page not found" },
  "notFound.text": {
    it: "Il collegamento non esiste più o è stato spostato.",
    en: "This link no longer exists or has been moved.",
  },
  "notFound.cta": { it: "Torna alla home", en: "Back to home" },
};

export function translate(lang: Lang, key: string): string {
  const entry = dict[key];
  if (!entry) return key;
  return entry[lang];
}

export function tpl(template: string, vars: Record<string, string>): string {
  return Object.entries(vars).reduce(
    (acc, [k, v]) => acc.replaceAll(`{${k}}`, v),
    template
  );
}
