export type Reference = {
  name: string;
  gewerke: string;
  client?: string;
};

export type ReferenceGroup = {
  title: string;
  items: Reference[];
};

export const references: ReferenceGroup[] = [
  {
    title: "Büro und Verwaltung",
    items: [
      { name: "Klinikum Freising, Neubau Küche und Verwaltung", gewerke: "Raumlufttechnik", client: "Klinikum Freising GmbH" },
      { name: "Europäisches Patentamt, Bauabschnitt 9, München", gewerke: "Heizung, Lüftung, Kälte" },
      { name: "E.ON Verwaltungsgebäude, Zolling", gewerke: "Heizung, Lüftung, Kälte, MSR", client: "E.ON Kraftwerke" },
      { name: "BMW Hochhaus, Neubau Heizung und Komplettsanierung Raumlufttechnik", gewerke: "Heizung, Raumlufttechnik", client: "BMW AG" },
      { name: "Technologiecenter Knorr-Bremse, München", gewerke: "Heizung, Kälte, Kühldecken, Raumlufttechnik" },
      { name: "Europäisches Patentamt, Bauabschnitt 7 (Pschorrhöfe)", gewerke: "Heizung, Kälte, Raumlufttechnik", client: "Bayerische Hausbau" },
      { name: "Mercedes-Benz Niederlassung Arnulfstraße, München", gewerke: "Heizung, Kälte, Kühldecken", client: "DaimlerChrysler" },
      { name: "Baureferat München, Friedenstraße", gewerke: "Heizung, Raumlufttechnik" },
      { name: "Büroneubau Karl-Scharnagl-Ring, München", gewerke: "Heizung, Kälte, Kühldecken, Sanitär, Sprinkler, Raumlufttechnik" },
      { name: "Allianz-Hauptniederlassung München", gewerke: "Heizung, Kälte, Kühldecken, Betonkernaktivierung" },
      { name: "Danner’sche Kunstgewerbestiftung, Landshuter Allee", gewerke: "Heizung, Sanitär, Raumlufttechnik" },
      { name: "Unternehmenszentrale O2, Georg-Brauchle-Ring", gewerke: "Heizung, Kälte" },
      { name: "Swiss Re Unternehmenszentrale, Unterföhring", gewerke: "Heizung, Kälte" },
      { name: "HypoVereinsbank Hochhaus, Erweiterungsneubau", gewerke: "Heizung, Kälte, Kühldecken, Staubsauganlagen" },
      { name: "Bauten der Bayerischen Landesbank, Stadtzentrum München", gewerke: "mehrere Gewerke" },
    ],
  },
  {
    title: "Industrie",
    items: [
      { name: "BMW Energietechnisches Versuchszentrum (EVZ)", gewerke: "Heizung, Kälte, Lüftung, Sprinkler, Sanitär, Außenanlagen", client: "BMW AG" },
      { name: "Agfa-Gevaert Werk, Peißenberg", gewerke: "Heizung, Kälte, Lüftung, Sanitär, Sprinkler", client: "Agfa HealthCare" },
      { name: "BMW Niederlassung München", gewerke: "Heizung, Lüftung, Kälte", client: "BMW AG" },
      { name: "Audi Vorseriencenter, Ingolstadt", gewerke: "Heizung, Kälte, Kühldecken", client: "AUDI AG" },
      { name: "BMW Werk 6.1, Sprinkleranlage Halle 50.9/50.4", gewerke: "Sprinklertechnik" },
      { name: "DLR, Raumlufttechnik", gewerke: "Raumlufttechnik" },
      { name: "Flughafen München Terminal II, Gepäcksortierhalle", gewerke: "Heizung", client: "Flughafen München" },
      { name: "Neue Messe München, acht Messehallen", gewerke: "Heizung, Kälte" },
      { name: "Audi-Werk Ingolstadt, neue Lackiererei (ARGE, Federführer)", gewerke: "Heizung, Kälte, Lüftung, Medien" },
      { name: "Formel-1-Motorenprüfstand BMW AG", gewerke: "Heizung, Gegenluftsimulation" },
    ],
  },
  {
    title: "Krankenhäuser und Labore",
    items: [
      { name: "OP-Zentrum Klinikum Großhadern, LOS 1 und 2", gewerke: "Raumlufttechnik, OP-Decken", client: "Staatliches Bauamt München 2" },
      { name: "Isar Klinik, Bauabschnitte 1 und 2", gewerke: "Heizung, Lüftung, Kälte, Sanitär", client: "Isar Klinik II AG" },
      { name: "Klinikum Bogenhausen, Erweiterung Klimakaltwasser", gewerke: "Kältetechnik" },
      { name: "Haunersche Kinderklinik, Sanierung Kälteversorgung", gewerke: "Kältetechnik" },
      { name: "Klinikum Neuperlach Haus A, Sprinkler", gewerke: "Sprinkler" },
      { name: "Unfallklinik Murnau, diverse Baumaßnahmen", gewerke: "mehrere Gewerke" },
      { name: "Chemiegebäude Universität München, Garching", gewerke: "Lüftung", client: "Staatliches Bauamt München 2" },
      { name: "TÜV-Laborumbau Ridlerstraße", gewerke: "Lüftung", client: "TÜV Süddeutschland" },
      { name: "Süd-Chemie Katalysatorgebäude, Bruckmühl", gewerke: "Anlagenbau", client: "Süd-Chemie AG" },
    ],
  },
  {
    title: "Kältezentralen und Rechenzentren",
    items: [
      { name: "Bayerischer Rundfunk, Kälteverbund Freimann", gewerke: "Kältetechnik" },
      { name: "Stadtsparkasse München, Zentrale Ungererstraße", gewerke: "Kältetechnik" },
      { name: "Leibniz-Rechenzentrum, Garching (mehrere Bauabschnitte)", gewerke: "Heizung, Kälte, Lüftung" },
      { name: "BMW Forschungs- und Energieversuchszentrum, Sanierung Haupt-Rechenzentralen", gewerke: "Kältetechnik", client: "BMW AG" },
    ],
  },
  {
    title: "Hotels, Museen, Schulen, Wohnungsbau",
    items: [
      { name: "Hotel Vier Jahreszeiten, Sanierung Sprinkleranlage", gewerke: "Sprinkler", client: "Hotel Vier Jahreszeiten GmbH" },
      { name: "Arabella Hotel Bogenhausen, Kälteversorgung", gewerke: "Kältetechnik" },
      { name: "Museum Brandhorst, München", gewerke: "Heizung, Kälte", client: "Staatliches Bauamt München 1" },
      { name: "Pinakothek der Moderne, Sammlung Brandhorst", gewerke: "Heizung" },
      { name: "Glyptothek am Königsplatz, Erneuerung Heizungsanlage", gewerke: "Heizung" },
      { name: "Deutsches Museum, Verkehrszentrum Hallen 1 und 2", gewerke: "Raumlufttechnik" },
      { name: "Kultur- und Freizeitzentrum Fürstenfeldbruck", gewerke: "Heizung, Kälte, Raumlufttechnik", client: "Stadt Fürstenfeldbruck" },
      { name: "Einkaufspassage Kaufinger Tor", gewerke: "Heizung, Kälte, Raumlufttechnik" },
      { name: "Europäische Schule München, Baustufe 3", gewerke: "Raumlufttechnik" },
      { name: "24 Reihenhäuser Messestadt Riem, Nahwärmeverbund", gewerke: "Heizung, Sanitär" },
      { name: "Apian Studentenwohnheim, München", gewerke: "Heizung, Lüftung" },
      { name: "Arnulfpark und Karlshöfe, München", gewerke: "Heizung, Lüftung/Klima", client: "Bayerische Hausbau" },
    ],
  },
];

export const featuredProjects = [
  {
    name: "BMW Hochhaus",
    place: "München",
    gewerke: "Heizung, Raumlufttechnik",
    src: "/images/refs/bmw-hochhaus.jpg",
    alt: "BMW-Vierzylinder, München. Stimmung, keine Projektdokumentation.",
  },
  {
    name: "Flughafen München",
    place: "Terminal II",
    gewerke: "Heizung",
    src: "/images/refs/flughafen-t2.jpg",
    alt: "Flughafen München, Terminal II. Stimmung, keine Projektdokumentation.",
  },
  {
    name: "Neue Messe München",
    place: "Riem",
    gewerke: "Heizung, Kälte",
    src: "/images/refs/messe-muenchen.jpg",
    alt: "Neue Messe München. Stimmung, keine Projektdokumentation.",
  },
  {
    name: "Museum Brandhorst",
    place: "München",
    gewerke: "Heizung, Kälte",
    src: "/images/refs/brandhorst.jpg",
    alt: "Museum Brandhorst, München. Stimmung, keine Projektdokumentation.",
  },
] as const;
