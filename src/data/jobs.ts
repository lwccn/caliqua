export type Job = {
  id: string;
  title: string;
  subtitle?: string;
  email: string;
  phone?: string;
  tasks: string[];
  profile: string[];
  offer: string[];
  extra?: string;
};

export const jobs: Job[] = [
  {
    id: "projektleiter",
    title: "Projektleiter Heizungs-, Sanitär- oder Lüftungsanlagenbau (m/w/d)",
    subtitle: "Projektmanager für Gebäudetechnik, Schwerpunkt Heizung, Sanitär und/oder Lüftung",
    email: "karriere@caliqua-bormann.de",
    tasks: [
      "Planung und Ausführung der Montage in Ihrem Fachbereich",
      "Zusammenarbeit mit Kunden, Bauleitung, Montageleitung, CAD und kaufmännischen Abteilungen",
      "Begleitung größerer, anspruchsvoller Baustellen von der Auftragsübernahme bis zur Abnahme",
    ],
    profile: [
      "Studium Versorgungstechnik, Energie- und Gebäudetechnik oder vergleichbare Berufserfahrung als Projektmanager in einem ausführenden Unternehmen",
      "Überblick auch auf großen Baustellen",
    ],
    offer: [
      "Unbefristeter Arbeitsvertrag, 13 Gehälter, 30 Urlaubstage",
      "Flexible Arbeitszeiten, Homeoffice, Jahresarbeitszeitkonto",
      "Firmenwagen möglich, Tiefgaragenstellplatz, klimatisiertes Büro",
      "Weiterbildung, flache Hierarchien, betriebliche Altersvorsorge",
    ],
  },
  {
    id: "cad",
    title: "Technischer Systemplaner, Technischer Zeichner, CAD-Konstrukteur (m/w/d)",
    subtitle: "Versorgungstechnik – heizungs- und/oder lüftungstechnische Anlagen",
    email: "bewerbung@caliqua-bormann.de",
    extra:
      "Zuordnung zur Abteilung Heizung oder Raumlufttechnik je nach Neigung und Vorkenntnissen. Überwiegend AutoCAD, projektbezogen mit dem Projektleiter von der Auftragsannahme bis zur Abnahme, gelegentlicher Baustellenkontakt.",
    tasks: [
      "Montageplanung an CAD-Arbeitsplätzen",
      "Zusammenarbeit mit Baustelle, Kolleginnen und Kollegen und Projektleitung",
    ],
    profile: [
      "Berufserfahrung in der Montageplanung eines ausführenden Heizungs- oder Lüftungsanlagenbauers",
      "Sichere AutoCAD-Kenntnisse, Office-Anwendungen",
      "Technische Berechnungen und Materialkenntnisse (Hersteller, Produkte, Einbausituation)",
    ],
    offer: [
      "Unbefristeter Arbeitsvertrag, 13 Gehälter, 30 Urlaubstage",
      "Flexible Arbeitszeiten, Homeoffice, Jahresarbeitszeitkonto",
      "Firmenwagen möglich, Tiefgaragenstellplatz",
    ],
  },
  {
    id: "kundendienstmonteur",
    title: "Kundendienst- / Servicemonteur Heizung, Lüftung, Sanitär (m/w/d)",
    email: "bewerbung@caliqua-bormann.de",
    extra:
      "Die Kundendienstabteilung betreut Kunden nach der Projektübergabe, oft über Wartungsverträge, plus kleinere Umbauten und 24-Stunden-Notdienst für Bestandskunden.",
    tasks: [
      "Eigenverantwortliche Wartung und Reparatur an Sanitär-, Heizungs- und Klimaanlagen",
      "Kundenberatung vor Ort",
      "Regelmäßige Bereitschaft im 24-Stunden-Notdienst",
      "Kleinere Umbau- und Modernisierungsmaßnahmen",
    ],
    profile: [
      "Berufserfahrung als Kundendienstmitarbeiter in der Versorgungstechnik",
      "Gewerkeübergreifendes Fachwissen Sanitär, Heizung, Klima",
      "Bereitschaft zur Teilnahme an der Notrufbereitschaft",
    ],
    offer: [
      "Werkstattwagen von zu Hause, moderne Werkzeuge, Arbeitskleidung",
      "Übertariflicher Stundenlohn",
    ],
  },
  {
    id: "obermonteur",
    title: "Obermonteur / Bauleiter im Heizungs- oder Lüftungsanlagenbau (m/w/d)",
    email: "bewerbung@caliqua-bormann.de",
    extra:
      "Einsatz fast ausschließlich im Großraum München, in der Regel Montag bis Donnerstag, 37-Stunden-Woche mit Jahresarbeitszeitkonto.",
    tasks: [
      "Leitung größerer Baustellen inklusive eigener Monteure, Auszubildender und ggf. Fremdpersonal",
      "Ansprechpartner für Projektleiter und Auftraggeber vor Ort",
      "Warenannahme, Kleinmaterial und Werkzeug, Qualitätskontrolle, Termine, Aufmaß, Bautagebuch",
      "Arbeitssicherheit und Wirtschaftlichkeit im Montagebereich",
    ],
    profile: [
      "Erfahrung als leitender Monteur in der Branche",
      "Gewerkeübergreifendes Fachwissen, selbstständiges Arbeiten",
    ],
    offer: [
      "Unbefristete Anstellung, 13 Gehälter, 30 Urlaubstage",
      "Jahresarbeitszeitkonto, Weiterbildung intern und extern",
    ],
  },
  {
    id: "kalkulator",
    title: "Kalkulator Heizungs- oder Raumlufttechnik (m/w/d)",
    subtitle: "Technischer Kalkulator, Standort München-Schwabing / Freimann",
    email: "bertram.schaefer@caliqua-bormann.de",
    phone: "089 32361-203",
    extra: "Auch eine Kurzbewerbung reicht für das erste Kennenlernen.",
    tasks: [
      "Bepreisung und Prüfung von Kalkulationen und Angeboten",
      "Analyse von Ausschreibungen und technischen Spezifikationen",
      "Nachtragskalkulationen, Lieferantenanfragen, Pflege der Kalkulationsdatenbank",
    ],
    profile: [
      "Ausbildung als Meister SHK, Techniker SHK, Obermonteur SHK, Industriekaufmann mit Branchenkenntnis oder Quereinstieg mit Branchenkenntnis",
      "Mindestens 3 Jahre Berufserfahrung in der Kalkulation technischer Projekte",
      "MS Office / Excel, möglichst PDS, fließendes Deutsch",
    ],
    offer: [
      "Unbefristete Vollzeitstelle, betriebliche Altersvorsorge",
      "Flexible Arbeitszeiten, teilweise mobiles Arbeiten, Tiefgarage",
    ],
  },
];
