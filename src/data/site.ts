export const site = {
  name: "CALIQUA-BORMANN GmbH & Co. KG",
  shortName: "Caliqua-Bormann",
  tagline: "Gebäudetechnik im Großraum München",
  url: "https://www.caliqua-bormann.de",
  intranetUrl: "https://intranet.caliqua-bormann.de",
  email: "info@caliqua-bormann.de",
  phone: "089 32361-0",
  phoneHref: "tel:+4989323610",
  phoneDisplay: "089 / 32 36 10",
  emergencyPhone: "089 32361-100",
  emergencyHref: "tel:+498932361100",
  fax: "089 32361-200",
  address: {
    street: "Frankfurter Ring 222",
    zip: "80807",
    city: "München",
    country: "Deutschland",
  },
  hours: [
    "Mo–Fr 08:00–12:00 Uhr",
    "Mo–Do 13:00–16:30 Uhr",
  ],
  transit: [
    "U-Bahn Linie 6: Haltestelle Studentenstadt (ca. 8 Minuten Fußweg)",
    "Bus Linie 177: Haltestelle Autobahn Nord (wenige Meter vor dem Büro)",
  ],
  linkedin: "https://www.linkedin.com/company/caliqua-bormann-gmbh",
  kununu: "https://www.kununu.com/de/caliqua-bormann2",
  sway: "https://sway.com/LeG17UrCCFHN6niR",
  facts: {
    years: "seit 1935 in München",
    staff: "ca. 70 Beschäftigte",
    revenue: "ca. 13 Mio. Euro Jahresumsatz",
    iso: "ISO 9001 seit 1995, jährlich TÜV SÜD",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; note?: string }[];
};

export const headerNav: NavItem[] = [
  {
    label: "Leistungen",
    href: "/leistungen",
    children: [
      { label: "Heizungstechnik", href: "/leistungen/heizungstechnik", note: "Kessel, Fernwärme, BHKW, Vorfertigung" },
      { label: "Raumlufttechnik", href: "/leistungen/raumlufttechnik", note: "Behaglichkeit, Reinluft, Entrauchung" },
      { label: "Sanitär, Gas, Medien", href: "/leistungen/sanitaer-gas-medien", note: "Trinkwasser, Erdgas, VDI 6023" },
      { label: "Kältetechnik", href: "/leistungen/kaeltetechnik", note: "Klimakaltwasser, Rückkühlung, Splitt" },
    ],
  },
  { label: "Kundendienst", href: "/kundendienst" },
  { label: "Referenzen", href: "/referenzen" },
  {
    label: "Karriere",
    href: "/karriere",
    children: [
      { label: "Arbeiten bei uns", href: "/karriere" },
      { label: "Stellenangebote", href: "/karriere/stellenangebote" },
      { label: "Ausbildung", href: "/karriere/ausbildung" },
    ],
  },
  {
    label: "Unternehmen",
    href: "/unternehmen",
    children: [
      { label: "Über uns", href: "/unternehmen" },
      { label: "Historie", href: "/unternehmen/historie" },
      { label: "Zertifikate", href: "/unternehmen/zertifikate" },
      { label: "AGB", href: "/unternehmen/agb" },
    ],
  },
  { label: "Kontakt", href: "/kontakt" },
];

export const footerLegal = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/unternehmen/agb" },
  { label: "Mitarbeiter", href: "https://intranet.caliqua-bormann.de" },
] as const;
