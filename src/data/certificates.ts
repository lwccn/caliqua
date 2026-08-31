export type CertificateFile = {
  label: string;
  href: string;
};

export type CertificateGroup = {
  title: string;
  text: string;
  files: CertificateFile[];
};

export const certificates: CertificateGroup[] = [
  {
    title: "Berufsgenossenschaft",
    text: "Wir sind Mitglied der BGHM (Berufsgenossenschaft Holz und Metall), Unternehmensnummer 8883 8067 7511 001. Auftraggeber benötigen regelmäßig den Nachweis, dass Beiträge abgeführt werden.",
    files: [{ label: "Unbedenklichkeitsbescheinigung BGHM 2026", href: "/pdfs/bghm-unbedenklichkeit-2026.pdf" }],
  },
  {
    title: "Betriebshaftpflichtversicherung",
    text: "CALIQUA-BORMANN verfügt über eine Betriebs-, Produkt- und Umwelthaftpflichtversicherung mit hohen Deckungssummen bei der AXA Versicherung AG.",
    files: [{ label: "Versicherungsbestätigung AXA 2026–2027", href: "/pdfs/axa-betriebshaftpflicht-2026-2027.pdf" }],
  },
  {
    title: "Finanzamt",
    text: "Freistellungsbescheinigung zum Steuerabzug bei Bauleistungen gemäß § 48b Abs. 1 Satz 1 EStG sowie weitere finanzamtliche Nachweise für Auftraggeber.",
    files: [
      { label: "Steuerschuldnerschaft des Leistungsempfängers", href: "/pdfs/finanzamt-steuerschuldnerschaft.pdf" },
      { label: "Freistellungsbescheinigung Finanzamt", href: "/pdfs/finanzamt-freistellung.pdf" },
      { label: "Unbedenklichkeitsbescheinigung Finanzamt", href: "/pdfs/finanzamt-unbedenklichkeit.pdf" },
    ],
  },
  {
    title: "Technische Regeln für Gasinstallationen (TRGI)",
    text: "Gasinstallationen dürfen nur von Firmen ausgeführt werden, die über die persönliche Sachkunde verfügen und im Installateurverzeichnis des Versorgungsunternehmens eingetragen sind.",
    files: [
      { label: "Eintragung Installateurverzeichnis Wasser (SWM)", href: "/pdfs/swm-wasser.pdf" },
      { label: "Eintragung Installateurverzeichnis Erdgas (SWM)", href: "/pdfs/swm-erdgas.pdf" },
      { label: "Sachkundenachweis TRGI", href: "/pdfs/trgi-sachkunde.pdf" },
    ],
  },
  {
    title: "Gewerbezentralregister",
    text: "Auszug aus dem Gewerbezentralregister.",
    files: [{ label: "Gewerbezentralregister", href: "/pdfs/gewerbezentralregister.pdf" }],
  },
  {
    title: "Industrie- und Handelskammer",
    text: "Mitglied der IHK für München und Oberbayern.",
    files: [{ label: "Mitgliedsbestätigung IHK", href: "/pdfs/ihk-mitglied.pdf" }],
  },
  {
    title: "Krankenkassen",
    text: "Unbedenklichkeitsbescheinigungen der Sozialversicherungsträger.",
    files: [
      { label: "BARMER", href: "/pdfs/kk-barmer.pdf" },
      { label: "AOK", href: "/pdfs/kk-aok.pdf" },
      { label: "mhplus", href: "/pdfs/kk-mhplus.pdf" },
      { label: "Techniker Krankenkasse", href: "/pdfs/kk-techniker.pdf" },
    ],
  },
  {
    title: "Qualitätsmanagement",
    text: "Zertifiziertes Qualitätsmanagementsystem nach ISO 9001:2015, geprüft durch den TÜV SÜD.",
    files: [{ label: "QM-Zertifikat TÜV SÜD", href: "/pdfs/tuev-iso9001.pdf" }],
  },
  {
    title: "Technische Regeln für Trinkwasserinstallationen (TRWI)",
    text: "Arbeiten an Trinkwasserinstallationen nur mit persönlicher Sachkunde und Eintragung im Installateurverzeichnis. Für Trinkwasserhygiene und Legionellenbekämpfung liegen zusätzliche Qualifikationsnachweise vor.",
    files: [
      { label: "Eintragung Installateurverzeichnis Erdgas/Wasser (SWM)", href: "/pdfs/swm-erdgas-wasser.pdf" },
      { label: "VDI/DVGW 6023 Kategorie A", href: "/pdfs/vdi-6023-kat-a.pdf" },
      { label: "VDI/DVGW 6023 Kategorie B", href: "/pdfs/vdi-6023-kat-b.pdf" },
      { label: "Sachkundenachweis TRWI", href: "/pdfs/trwi-sachkunde.pdf" },
    ],
  },
  {
    title: "Wasserhaushaltsgesetz (WHG)",
    text: "TÜV-zertifizierter Fachbetrieb nach WHG.",
    files: [{ label: "WHG-Zertifikat TÜV SÜD", href: "/pdfs/whg-tuev.pdf" }],
  },
];

export const agbFiles: CertificateFile[] = [
  { label: "AGB Werkverträge – private Auftraggeber (2022)", href: "/pdfs/agb-privat-2022.pdf" },
  { label: "AGB Werkverträge – gewerbliche Auftraggeber (2022)", href: "/pdfs/agb-gewerblich-2022.pdf" },
];
