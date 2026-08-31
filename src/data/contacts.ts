export type Contact = {
  title: string;
  note?: string;
  phone?: string;
  phoneHref?: string;
  email?: string;
};

export const contacts: Contact[] = [
  {
    title: "Zentrale",
    phone: "089 32361-0",
    phoneHref: "tel:+4989323610",
    email: "info@caliqua-bormann.de",
  },
  {
    title: "Vertrieb und Kalkulation",
    phone: "089 32361-105",
    phoneHref: "tel:+498932361105",
    email: "vertrieb@caliqua-bormann.de",
  },
  {
    title: "Technisches Büro",
    note: "Wenn Sie keine konkrete Durchwahl kennen.",
    phone: "089 32361-291",
    phoneHref: "tel:+498932361291",
    email: "technik@caliqua-bormann.de",
  },
  {
    title: "Kundendienst und Wartung",
    phone: "089 32361-102",
    phoneHref: "tel:+498932361102",
    email: "kundendienst@caliqua-bormann.de",
  },
  {
    title: "Notdienst (Bestandskunden)",
    phone: "089 32361-100",
    phoneHref: "tel:+498932361100",
  },
  {
    title: "Abrechnung Bauaufträge",
    note: "Abrechnungen aus dem Kundendienst bitte an die Kundendienstadresse.",
    phone: "089 32361-296",
    phoneHref: "tel:+498932361296",
    email: "abrechnung@caliqua-bormann.de",
  },
  {
    title: "Buchhaltung",
    phone: "089 32361-295",
    phoneHref: "tel:+498932361295",
    email: "buchhaltung@caliqua-bormann.de",
  },
  {
    title: "Einkauf, Waren und Dienstleistungen",
    note: "Werkvertragsunternehmen und Arbeitnehmerüberlassung ausschließlich hier.",
    phone: "089 32361-222",
    phoneHref: "tel:+498932361222",
    email: "einkauf@caliqua-bormann.de",
  },
  {
    title: "Bewerbungen",
    note: "Anstellung und Ausbildungsplatz. Nur per E-Mail, keine Papierunterlagen.",
    email: "bewerbung@caliqua-bormann.de",
  },
  {
    title: "Datenschutzbeauftragte",
    note: "Externe Datenschutzbeauftragte.",
    email: "datenschutz@caliqua-bormann.de",
  },
];
