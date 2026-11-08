// Sprachpaket: de. Gleiche Struktur in allen Sprachen. {brand}, {n}, {month} werden ersetzt.
export default {
  meta: {
    title: "CBA Suites Madeira | Suiten mit Pool im Zentrum von Funchal",
    description: "Studios und Suiten von 32 bis 78 m² mit Küchenzeile, Balkonen über der Bucht von Funchal und Außenpool. 8 Gehminuten zum Casino, 16 zur Kathedrale. Bewertung 8,4 auf Booking.com.",
    ogTitle: "CBA Suites Madeira · Funchal vor Ihrem Fenster",
    ogAlt: "Die Bucht von Funchal vom Balkon der CBA Suites Madeira",
    keywords: "Ferienwohnung Funchal mit Pool, Unterkunft Zentrum Funchal, Madeira Suiten, CBA Suites"
  },
  ui: {
    skip: "Zum Inhalt springen", menu: "Menü", menuOpen: "Menü öffnen", menuClose: "Menü schließen", lang: "Sprache",
    close: "Schließen", prev: "Zurück", next: "Weiter", book: "Buchen", of: "von", scroll: "Scrollen"
  },
  nav: [["#suites", "Suiten"], ["#house", "Das Haus"], ["#location", "Lage"], ["#tours", "Ausflüge"], ["#seasons", "Reisezeit"], ["#reviews", "Bewertungen"], ["#faq", "FAQ"]],
  hero: {
    eyebrow: "Suiten mit Pool · São Pedro, Funchal",
    h1: ["Funchal", "vor Ihrem Fenster"],
    lead: "Studios und Suiten von 32 bis 78 m² mit Küchenzeile, Balkonen über der Bucht und einem Pool im Garten hinter Basaltmauern. Zum Casino sind es 8 Gehminuten, zur Kathedrale 16.",
    cta: "Termin wählen", cta2: "Suiten ansehen",
    capA: "Loft-Suite · das Dachfenster über der Bucht",
    capB: "Superior Suite mit Meerblick · der Blick von ihrem Balkon",
    live: { now: "Funchal jetzt", sunset: "Sonnenuntergang", sunrise: "Sonnenaufgang", typical: "Mittel im {month}", sea: "Meer" },
    bar: { in: "Anreise", out: "Abreise", guests: "Gäste", go: "Verfügbarkeit prüfen" }
  },
  marquee: { walk: "{n} Min. zu Fuß", car: "{n} Min. mit dem Auto", airport: "Flughafen Madeira", arieiro: "Pico do Arieiro", girao: "Cabo Girão" },
  house: {
    label: "Das Haus",
    h2: "Ein mintgrünes Haus über der Bucht",
    p: [
      "Die CBA Suites liegen an der Calçada da Caboqueira, einer ruhigen Gasse in São Pedro oberhalb der Marina von Funchal. Hinter der Fassade warten eine Lounge mit Samtsesseln, Billardtisch und Bücherregalen sowie ein Pool in einem Garten mit Mauern aus dunklem Madeira-Basalt.",
      "Jede Suite hat eine eigene Küchenzeile mit Geschirrspüler, die meisten öffnen sich auf einen Balkon oder eine Terrasse. Kaffee und Tee in der Lounge sind rund um die Uhr gratis, und Sie checken mit einem Türcode selbst ein, jederzeit zwischen 15:00 und 0:30 Uhr."
    ],
    facts: [["8,4", "auf Booking.com, 945 Bewertungen"], ["32–78 m²", "Studios und Suiten"], ["15:00–00:30", "Self-Check-in"], ["20 km", "zum Flughafen Madeira"]],
    alts: { courtyard: "Die mintgrüne Fassade und der Poolhof in der Dämmerung", lounge: "Lobby-Lounge mit Samtsesseln", wine: "Madeirawein und Süßes auf dem Lobbytisch", bike: "Ein altes Fahrrad mit Blumenkorb in der Lobby" }
  },
  suites: {
    label: "Suiten",
    h2: "Acht Arten zu wohnen",
    lead: "Jede hat eine Küchenzeile mit Geschirrspüler, einen Esstisch und eine Sofaecke. Wählen Sie nach Aussicht, Außenbereich oder Personenzahl.",
    filters: { all: "Alle", sea: "Meerblick", outdoor: "Balkon oder Terrasse", four: "Für 4 Gäste" },
    guests: "bis zu {n} Gäste", from: "ab {n} € pro Nacht", ask: "Preis auf Anfrage", open: "Suite ansehen", photos: "{n} Fotos",
    tags: { sea: "Meerblick", pool: "Poolblick", city: "Stadtblick", balcony: "Balkon", terrace: "Terrasse" },
    names: {
      loft: "Deluxe mit Balkon · Loft", superiorSea: "Superior Suite mit Meerblick", deluxeSea: "Deluxe Suite mit Meerblick",
      king: "King Suite mit Balkon", queen: "Queen Suite", deluxe: "Deluxe Suite", city: "Suite mit Stadtblick", studio: "Studio"
    },
    beds: {
      loft: "2 extragroße Doppelbetten und ein Schlafsofa", superiorSea: "1 extragroßes Doppelbett und ein Schlafsofa", deluxeSea: "1 extragroßes Doppelbett und ein Schlafsofa",
      king: "1 extragroßes Doppelbett und ein Schlafsofa", queen: "1 großes Doppelbett und ein Schlafsofa", deluxe: "1 extragroßes Doppelbett und ein Schlafsofa",
      city: "1 Doppelbett und ein Schlafsofa", studio: "1 großes Doppelbett"
    },
    blurbs: {
      loft: "Die größte Suite, auf zwei Ebenen. Das Wohnzimmer öffnet sich auf Balkon und Terrasse, die Treppe führt hinauf in ein Schlafzimmer unter dem Dach mit einem Dachfenster über der Bucht.",
      superiorSea: "Bodentiefe Fenster und ein Balkon mit Blick über die ganze Bucht von Funchal, mit Esstisch im Freien. Das Foto oben auf dieser Seite wurde hier aufgenommen.",
      deluxeSea: "Ein großer Wohn- und Essbereich mit Fenstern zum Meer und zum Pool sowie ein separates Schlafzimmer.",
      king: "Ein Schlafzimmer mit Kingsize-Bett und Blick auf den Pool, dazu ein Wohnzimmer mit Balkon und Terrasse.",
      queen: "Ein weites Wohnzimmer mit Panoramafenster über Stadt und Bucht, ein Balkon und ein separates Schlafzimmer.",
      deluxe: "Eine geräumige Suite mit separatem Schlafzimmer, Schlafsofa im Wohnzimmer und Blick auf Meer und Stadt.",
      city: "Eine kompakte Suite mit separatem Schlafzimmer und einem Wohnzimmer mit Blick über die Dächer bis zur Fortaleza do Pico.",
      studio: "Ein helles, offenes Studio mit Küchenzeile, Esstisch und einer Tür auf eine kleine Terrasse."
    },
    dialog: { size: "Größe", beds: "Betten", guests: "Gäste", view: "Aussicht", outdoor: "Außenbereich", price: "Preis", amen: "In der Suite", ask: "Nach Terminen fragen", booking: "Auf Booking.com ansehen", none: "Keiner" },
    amen: {
      kitchen: "Küchenzeile mit Kochfeld, Mikrowelle und Kühlschrank", dish: "Geschirrspüler", kettle: "Wasserkocher, Tee und Kaffee", tv: "Flachbild-TV mit Satellitenprogrammen",
      heat: "Heizung und Ventilator", dry: "Haartrockner", bath: "Eigenes Bad", privat: "Separater Eingang", lift: "Mit dem Aufzug erreichbar",
      sofa: "Schlafsofa", quiet: "Schallisolierung", long: "Extralange Betten, über 2 m", iron: "Bügeleisen und Bügelbrett", games: "Brettspiele", outdoorDining: "Essbereich im Freien"
    }
  },
  pool: {
    label: "Der Pool",
    h2: "Schwimmen zwischen Basaltmauern",
    lead: "Der Außenpool ist das ganze Jahr geöffnet. Liegen säumen das Deck, eine Palme neigt sich über eine Ecke, und die Gartenmauer ist aus dem dunklen Vulkangestein der Insel gebaut.",
    hint: "Fahren Sie über das Wasser", hintTouch: "Berühren Sie das Wasser"
  },
  amen: {
    label: "Inklusive",
    h2: "Die kleinen Dinge, richtig gemacht",
    items: {
      coffee: ["Kaffee und Tee, 24 Stunden", "Kostenlose Heißgetränke in der Lounge, Tag und Nacht."],
      code: ["Check-in 15:00–00:30", "Ihr eigener Türcode. Sagen Sie uns einfach, wann Sie ankommen."],
      wifi: ["WLAN mit Note 9,1", "Kostenlos in jeder Suite und im Garten, bewertet von den Gästen."],
      kitchen: ["Eine Küche in jeder Suite", "Kochfeld, Mikrowelle, Kühlschrank und Geschirrspüler."],
      lounge: ["Lounge und Billard", "Samtsessel, Bücher, Brettspiele und ein Billardtisch unter dem alten Fahrrad."],
      lift: ["Aufzug in alle Etagen", "Die oberen Etagen erreichen Sie mit dem Aufzug."],
      transfer: ["Flughafentransfer", "Auf Anfrage und gegen Gebühr. Der Flughafen ist etwa 25 Autominuten entfernt."],
      quiet: ["Nur für Erwachsene, ruhige Nächte", "Gäste ab 18 Jahren. Nachtruhe von 22:00 bis 10:00 Uhr."],
      parking: ["Parken in der Nähe", "Straßenparkplätze rund ums Haus und das öffentliche Parkhaus der Plaza Madeira, 8 Minuten entfernt."]
    },
    badgeAlt: "Kostenlose Heißgetränke, 24 Stunden · CBA Suites Madeira"
  },
  loc: {
    label: "Lage",
    h2: "Alles zu Fuß erreichbar",
    lead: "Das Haus liegt direkt oberhalb des Zentrums, in die Stadt geht es also bergab. Jede Zeit unten ist eine echte Fußroute ab unserer Tür, berechnet mit OpenStreetMap.",
    cats: { sight: "Sehenswürdigkeiten und Museen", taste: "Essen, Wein und Einkaufen", green: "Parks und Gärten", sea: "Meer und Verkehr" },
    places: {
      plaza: "Einkaufszentrum Plaza Madeira", casino: "Casino da Madeira", natural: "Naturkundemuseum", catarina: "Park Santa Catarina",
      freitas: "Museum Casa Frederico de Freitas", municipal: "Stadtgarten", pico: "Aussichtspunkt Fortaleza do Pico", cr7: "CR7-Museum",
      blandys: "Blandy's Wine Lodge", marina: "Marina von Funchal und Bootstouren", luzia: "Gärten von Santa Luzia", se: "Kathedrale Sé",
      magnolia: "Park Quinta Magnólia", mercado: "Markthalle Mercado dos Lavradores", story: "Madeira Story Centre", cablecar: "Seilbahn nach Monte",
      almirante: "Strand Almirante Reis", santamaria: "Rua de Santa Maria, Altstadt", saotiago: "Festung São Tiago", lido: "Meerwasserpools am Lido"
    },
    nearLabel: "Gleich nebenan",
    near: { bus: "Bushaltestelle", sam: "Busbahnhof SAM", pharmacy: "Apotheke", taxi: "Taxistand", pingo: "Supermarkt Pingo Doce", eat: "Restaurants und Cafés im Umkreis von 500 m" },
    min: "{n} Min.", mapAria: "Karte des Zentrums von Funchal mit Fußwegen ab den CBA Suites", you: "CBA Suites", ring: "{n} Min. zu Fuß",
    ocean: "Atlantischer Ozean", osm: "Kartendaten © OpenStreetMap-Mitwirkende", hint: "Wählen Sie einen Ort, um die Route zu sehen.",
    gmaps: "In Google Maps öffnen", directions: "Route"
  },
  tours: {
    label: "Ausflüge",
    h2: "Madeira beginnt vor der Tür",
    lead: "Die meisten Inseltouren holen Gäste im Zentrum von Funchal ab, und die Boote zu Delfinen und Walen starten an der Marina, 15 Gehminuten entfernt. Fahrzeiten gelten ab dem Haus.",
    filters: { all: "Alle", peaks: "Gipfel", levadas: "Levadas und Wald", coast: "Küste und Pools", villages: "Orte", gardens: "Gärten", sea: "Auf dem Meer" },
    car: "≈ {n} Min. mit dem Auto", boats: "{n} Min. zu Fuß zu den Booten", ferry: "Fähre ab dem Hafen von Funchal",
    items: {
      arieiro: ["Pico do Arieiro", "Sonnenaufgang über den Wolken auf 1818 m und Start des Gratwegs PR1 zum Pico Ruivo."],
      monte: ["Monte und die Korbschlitten", "Die Gärten des Monte Palace, die Kirche Nossa Senhora do Monte und die Abfahrt im Korbschlitten."],
      botanico: ["Botanischer Garten", "Terrassen mit Pflanzen aus fünf Kontinenten über Funchal, mit Monte durch eine zweite Seilbahn verbunden."],
      girao: ["Skywalk Cabo Girão", "Ein Glasboden 580 m über dem Meer, an einer der höchsten Klippen Europas."],
      camara: ["Câmara de Lobos", "Das Fischerdorf, das Churchill malte, mit bunten Booten und Poncha-Bars."],
      curral: ["Nonnental", "Ein Dorf tief in einem Ring aus Bergen, gesehen vom Aussichtspunkt Eira do Serrado."],
      balcoes: ["Levada dos Balcões", "Ein leichter Weg von 1,5 km entlang eines Wasserkanals zu einem Aussichtspunkt über dem Tal von Ribeiro Frio."],
      caldeirao: ["Caldeirão Verde", "Eine Levada durch Lorbeerwald und Tunnel zu einem Wasserfall in einem grünen Kessel."],
      fanal: ["Fanal-Wald", "Jahrhundertealte Lorbeerbäume im Nebel auf der Hochebene Paul da Serra."],
      moniz: ["Pools von Porto Moniz", "Natürliche Meerwasserbecken im schwarzen Lavagestein an der Nordwestspitze der Insel."],
      seixal: ["Strand von Seixal", "Schwarzer Vulkansand unter grünen Klippen an der Nordküste."],
      veu: ["Véu da Noiva", "Der Brautschleier-Wasserfall, der von der Klippe direkt ins Meer stürzt."],
      santana: ["Santana", "Dreieckige Strohdachhäuser und Terrassenfelder an der grünen Nordküste."],
      lourenco: ["Ponta de São Lourenço", "Das kahle, rot-ockerfarbene Ostkap, erwandert auf dem Weg PR8."],
      pontasol: ["Ponta do Sol", "Ein sonniger Ort an der Südküste mit kleinem Strand und einer Mole für den Sonnenuntergang."],
      yacht: ["Delfine und Wale", "Bootstouren ab der Marina von Funchal. Delfine sieht man das ganze Jahr."],
      desertas: ["Ilhas Desertas", "Ein ganzer Segeltag zum Naturreservat, in dem Mönchsrobben leben."],
      portosanto: ["Porto Santo", "Neun Kilometer goldener Sandstrand auf der Nachbarinsel, etwa 2 Std. 15 Min. mit der Fähre."]
    },
    mapAria: "Karte von Madeira mit Ausflugszielen und Fahrzeiten ab den CBA Suites",
    funchal: "Funchal", porto: "Porto Santo", desertas: "Desertas"
  },
  seasons: {
    label: "Reisezeit",
    h2: "Ein Frühling, der das ganze Jahr dauert",
    lead: "Tagsüber 20 bis 27 °C, und das Meer wird nie kälter als 18 °C. Wählen Sie einen Monat, um zu sehen, was los ist.",
    air: "Luft, Tageshöchstwert", sea: "Meer", table: "Als Tabelle anzeigen", month: "Monat",
    note: "Langjährige Mittelwerte für Funchal, gerundet. Das Wetter schwankt von Jahr zu Jahr.",
    events: [
      "Der ruhigste Monat: leere Wanderwege und die niedrigsten Preise des Jahres.",
      "Karneval mit dem großen Umzug auf der Avenida do Mar.",
      "Frühlingsblumen und volle Levadas nach dem Winterregen.",
      "Das Blumenfest beginnt meist Ende April oder im Mai.",
      "Blumenteppiche und Umzüge im Zentrum von Funchal.",
      "Feuerwerk über der Bucht an den Samstagen des Atlantik-Festivals.",
      "Warmes Meer, lange Abende und Konzerte unter freiem Himmel.",
      "Der wärmste Monat. Am 15. August findet die Wallfahrt nach Monte statt.",
      "Das Madeira-Weinfest und die Weinlese.",
      "Das Naturfestival: Wandern, Canyoning und Wassersport.",
      "Kastanienfest in Curral das Freiras, 25 Minuten entfernt.",
      "Weihnachtsbeleuchtung, dann eines der größten Silvesterfeuerwerke der Welt."
    ]
  },
  reviews: {
    label: "Bewertungen",
    h2: "Was Gäste schreiben",
    lead: "945 Bewertungen auf Booking.com und 117 bei Google. Hier sind die Noten und das, was Gäste am häufigsten erwähnen.",
    count: "{n} Bewertungen",
    subs: { clean: "Sauberkeit", comfort: "Komfort", facilities: "Ausstattung", location: "Lage", staff: "Personal", value: "Preis-Leistung", wifi: "Kostenloses WLAN" },
    themes: [
      ["Die Lobby", "Eine Lounge, die man fotografiert: Musik, Sessel, Billard und Bücher."],
      ["Ein Glas zur Begrüßung", "Madeirawein und Süßes warten bei der Ankunft in der Lobby."],
      ["Blick vom Balkon", "Meer und Berge von den Balkonen, hoch über der Stadt."],
      ["Sauber und frisch", "Makellose Suiten, die gut riechen, mit allem, was man braucht."],
      ["Einfache Ankunft", "Self-Check-in mit Türcode und schnelle Antworten vom Concierge."],
      ["Alles zu Fuß", "Supermarkt, Cafés, Park und Uferpromenade, alles zu Fuß."]
    ],
    read: "Bewertungen auf Booking.com lesen", readG: "Bewertungen bei Google", note: "Stand: November 2026."
  },
  gallery: {
    label: "Galerie", h2: "Schauen Sie sich um", count: "{n} Fotos",
    filters: { all: "Alle", suites: "Suiten", views: "Ausblicke", pool: "Pool und Garten", lounge: "Lounge", details: "Details" },
    alts: {
      "612644740": "Die Bucht von Funchal vom Balkon der Superior Suite mit Meerblick", "474754100": "Der Pool von oben, mit Liegen auf dem Deck",
      "240155183": "Lobby-Lounge mit Samtsesseln", "474756863": "Die Bucht im Dachfenster der Loft-Suite",
      "courtyard-dusk": "Die mintgrüne Fassade und der Poolhof in der Dämmerung", "612644780": "Wohnzimmer der Superior Suite mit Blick über Stadt und Meer",
      "599496750": "Madeirawein und Süßes auf dem Lobbytisch", "474756830": "Wohnzimmer der Loft-Suite mit Treppe zum Schlafzimmer",
      "474755098": "Wohnzimmer der Queen Suite mit Panoramafenster über Funchal", "244741748": "Pool und Basaltmauer des Gartens",
      "599502789": "Schlafzimmer der King Suite mit Blick auf den Pool", "599497006": "Altes Fahrrad mit einem Korb weißer Rosen",
      "474756817": "Dachschlafzimmer mit Dachfenster in der Loft-Suite", "240155229": "Billardzimmer und das alte Fahrrad in der Lounge",
      "599500529": "Deluxe Suite mit Meerblick, Wohn- und Essbereich", "599497603": "Funchal und die Fortaleza do Pico von einer Suite mit Stadtblick",
      "facade-pool": "Das Haus spiegelt sich im Pool", "474755127": "Terrasse und Küchenzeile der Queen Suite",
      "599502300": "Bougainvillea auf frischen Handtüchern", "598772545": "Schlafzimmer einer Suite mit Stadtblick",
      "437912696": "Palme über der Ecke des Pools", "240137137": "Küchenzeile mit frischem Obst und Kaffeetassen",
      "599502761": "Wohnzimmer der King Suite mit Blick auf die Stadt", "240155223": "Studio mit offener Tür zur Terrasse",
      "474754710": "Bad mit Dusche", "612644819": "Schlafzimmer der Superior Suite mit Meerblick",
      "599497378": "Blumen auf dem Nachttisch", "474754027": "Schlafzimmer der Deluxe Suite"
    }
  },
  faq: {
    label: "Fragen",
    h2: "Gut zu wissen",
    items: [
      ["Wann sind Check-in und Check-out?", "Check-in ist von 15:00 bis 0:30 Uhr, Check-out bis 10:30 Uhr. Teilen Sie uns Ihre Ankunftszeit vorher mit, dann erhalten Sie einen Türcode für den Self-Check-in."],
      ["Ist der Pool das ganze Jahr geöffnet?", "Ja. Der Außenpool ist das ganze Jahr geöffnet, mit Liegen auf dem Deck und dem Garten ringsum."],
      ["Wie weit ist es ins Zentrum von Funchal?", "Zum Casino sind es 600 m (8 Min. zu Fuß), zur Marina 1,1 km (15 Min.) und zur Kathedrale Sé 1,2 km (16 Min.). Das Einkaufszentrum Plaza Madeira mit einem Pingo-Doce-Supermarkt liegt 8 Minuten entfernt."],
      ["Haben die Suiten eine Küche?", "Ja. Jedes Studio und jede Suite hat eine Küchenzeile mit Kochfeld, Mikrowelle, Kühlschrank, Wasserkocher und Geschirrspüler sowie einen Esstisch."],
      ["Wie komme ich vom Flughafen hierher?", "Der Flughafen Cristiano Ronaldo (FNC) ist 20 km entfernt, etwa 25 Minuten mit dem Auto. Ein kostenpflichtiger Transfer lässt sich auf Anfrage organisieren; außerdem fahren Taxis und Flughafenbusse ins Zentrum."],
      ["Gibt es Parkplätze?", "Rund ums Haus gibt es Straßenparkplätze, die aber nicht immer frei sind, und das öffentliche Parkhaus der Plaza Madeira 8 Gehminuten entfernt."],
      ["Kann ich von hier aus Inseltouren machen?", "Ja. Die meisten Touren, von Levada-Wanderungen über den Sonnenaufgang am Pico do Arieiro bis zu Jeep-Touren, holen Gäste im Zentrum von Funchal ab. Boote zur Delfin- und Walbeobachtung starten an der Marina, 15 Gehminuten entfernt."],
      ["Können Kinder mitkommen?", "Die CBA Suites sind für Erwachsene: Das Mindestalter beträgt 18 Jahre, Kinderbetten und Zustellbetten gibt es nicht."],
      ["Sind Haustiere erlaubt?", "Haustiere sind nicht erlaubt."],
      ["Gibt es WLAN?", "Kostenloses WLAN gibt es im ganzen Haus. Gäste bewerten es mit 9,1 von 10."],
      ["Sind Partys oder Gruppen erlaubt?", "Nein. Die Nachtruhe gilt von 22:00 bis 10:00 Uhr, und das Haus nimmt weder Gruppenbuchungen noch Junggesellenabschiede an."],
      ["Welche Sprachen spricht das Team?", "Englisch und Spanisch."]
    ]
  },
  book: {
    label: "Buchen",
    h2: "Planen Sie Ihren Aufenthalt",
    lead: "Senden Sie uns Ihre Daten, und wir antworten mit Verfügbarkeit und Preis für Ihre Suite. Oder buchen Sie sofort auf Booking.com.",
    arrival: "Anreise", departure: "Abreise", guests: "Gäste", suite: "Suite", any: "Beliebige Suite", name: "Ihr Name",
    msg: "Nachricht", msgPh: "Ankunftszeit, Fragen, Wünsche…", less: "Weniger Gäste", more: "Mehr Gäste",
    card: "Ihr Aufenthalt", nights: "Nächte", dates: "Daten", code: "Der Türcode kommt vor dem Check-in",
    wa: "Per WhatsApp senden", mail: "Per E-Mail senden", bk: "Auf Booking.com prüfen", direct: "Auf unserer Website buchen",
    err: { dates: "Wählen Sie An- und Abreisedatum.", order: "Die Abreise muss nach der Anreise liegen.", name: "Geben Sie Ihren Namen an, damit wir wissen, wer schreibt." },
    note: "Wir antworten persönlich. Auf dieser Seite wird nichts berechnet.",
    text: { hello: "Hallo CBA Suites!", want: "Ich möchte übernachten", from: "vom", to: "bis", guests: "Gäste", suite: "Suite", name: "Name", subject: "Aufenthalt in den CBA Suites" },
    plural: { night: { one: "Nacht", other: "Nächte" }, guest: { one: "Gast", other: "Gäste" } }
  },
  footer: {
    h2: "Bis bald in Funchal",
    lead: "Schreiben Sie, rufen Sie an oder schicken Sie einfach Ihre Daten.",
    address: "Calçada da Caboqueira 54, São Pedro, 9000-900 Funchal, Madeira, Portugal",
    l: { addr: "Adresse", phone: "Telefon und WhatsApp", email: "E-Mail", coords: "Koordinaten", plus: "Plus Code", licence: "Lizenz für Ferienunterkunft (AL)", operator: "Betrieben von" },
    maps: "In Google Maps öffnen", rights: "Alle Rechte vorbehalten.", complaints: "Beschwerdebuch", credits: "Bildnachweise",
    creditsNote: "Fotos von Haus und Suiten: CBA Suites Madeira. Inselfotos: Autoren auf Wikimedia Commons, Lizenzen unten."
  }
};
