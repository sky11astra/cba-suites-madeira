// Pakiet językowy: pl. Ta sama struktura we wszystkich językach. {brand}, {n}, {month} są podstawiane.
export default {
  meta: {
    title: "CBA Suites Madeira | Apartamenty z basenem w centrum Funchal",
    description: "Studia i apartamenty od 32 do 78 m² z aneksem kuchennym, balkonami nad zatoką Funchal i basenem zewnętrznym. 8 minut pieszo do kasyna, 16 do katedry. Ocena 8,4 na Booking.com.",
    ogTitle: "CBA Suites Madeira · Funchal za Twoim oknem",
    ogAlt: "Zatoka Funchal widziana z balkonu CBA Suites Madeira",
    keywords: "apartamenty Funchal z basenem, noclegi centrum Funchal, Madera apartamenty, CBA Suites"
  },
  ui: {
    skip: "Przejdź do treści", menu: "Menu", menuOpen: "Otwórz menu", menuClose: "Zamknij menu", lang: "Język",
    close: "Zamknij", prev: "Poprzednie", next: "Następne", book: "Rezerwuj", of: "z", scroll: "Przewiń"
  },
  nav: [["#suites", "Apartamenty"], ["#house", "Dom"], ["#location", "Lokalizacja"], ["#tours", "Wycieczki"], ["#seasons", "Kiedy jechać"], ["#reviews", "Opinie"], ["#faq", "Pytania"]],
  hero: {
    eyebrow: "Apartamenty z basenem · São Pedro, Funchal",
    h1: ["Funchal", "za Twoim oknem"],
    lead: "Studia i apartamenty od 32 do 78 m² z aneksem kuchennym, balkonami nad zatoką i basenem w ogrodzie za bazaltowym murem. Do kasyna 8 minut pieszo, do katedry 16.",
    cta: "Wybierz daty", cta2: "Zobacz apartamenty",
    capA: "Loft · okno dachowe nad zatoką",
    capB: "Apartament Superior z widokiem na morze · widok z jego balkonu",
    live: { now: "Funchal teraz", sunset: "zachód słońca", sunrise: "wschód słońca", typical: "{month}: średnio", sea: "morze" },
    bar: { in: "Przyjazd", out: "Wyjazd", guests: "Goście", go: "Sprawdź dostępność" }
  },
  marquee: { walk: "{n} min pieszo", car: "{n} min autem", airport: "Lotnisko Madera", arieiro: "Pico do Arieiro", girao: "Cabo Girão" },
  house: {
    label: "Dom",
    h2: "Miętowy dom nad zatoką",
    p: [
      "CBA Suites stoi przy Calçada da Caboqueira, spokojnej uliczce w dzielnicy São Pedro, powyżej mariny w Funchal. Za fasadą kryje się salon z aksamitnymi fotelami, stołem bilardowym i półkami z książkami oraz basen w ogrodzie otoczonym murem z ciemnego maderskiego bazaltu.",
      "Każdy apartament ma własny aneks kuchenny ze zmywarką, a większość wychodzi na balkon lub taras. Kawa i herbata w salonie są bezpłatne przez całą dobę, a zameldujesz się sam, z kodem do drzwi, w dowolnej chwili między 15:00 a 0:30."
    ],
    facts: [["8,4", "na Booking.com, 945 opinii"], ["32–78 m²", "studia i apartamenty"], ["15:00–00:30", "samodzielne zameldowanie"], ["20 km", "do lotniska na Maderze"]],
    alts: { courtyard: "Miętowa fasada i dziedziniec z basenem o zmierzchu", lounge: "Salon w holu z aksamitnymi fotelami", wine: "Wino madera i słodycze na stoliku w holu", bike: "Stary rower z koszem kwiatów w holu" }
  },
  suites: {
    label: "Apartamenty",
    h2: "Osiem apartamentów do wyboru",
    lead: "Każdy ma aneks kuchenny ze zmywarką, stół i kanapę. Wybierz według widoku, balkonu lub liczby osób.",
    filters: { all: "Wszystkie", sea: "Widok na morze", outdoor: "Balkon lub taras", four: "Dla 4 osób" },
    guests: "do {n} osób", from: "od {n} € za noc", ask: "Cena na zapytanie", open: "Zobacz apartament", photos: "Zdjęcia: {n}",
    tags: { sea: "Widok na morze", pool: "Widok na basen", city: "Widok na miasto", balcony: "Balkon", terrace: "Taras" },
    names: {
      loft: "Deluxe z balkonem · loft", superiorSea: "Apartament Superior z widokiem na morze", deluxeSea: "Apartament Deluxe z widokiem na morze",
      king: "Apartament King z balkonem", queen: "Apartament Queen", deluxe: "Apartament Deluxe", city: "Apartament z widokiem na miasto", studio: "Studio"
    },
    beds: {
      loft: "2 bardzo duże łóżka podwójne i sofa rozkładana", superiorSea: "1 bardzo duże łóżko podwójne i sofa rozkładana", deluxeSea: "1 bardzo duże łóżko podwójne i sofa rozkładana",
      king: "1 bardzo duże łóżko podwójne i sofa rozkładana", queen: "1 duże łóżko podwójne i sofa rozkładana", deluxe: "1 bardzo duże łóżko podwójne i sofa rozkładana",
      city: "1 łóżko podwójne i sofa rozkładana", studio: "1 duże łóżko podwójne"
    },
    blurbs: {
      loft: "Największy apartament, na dwóch poziomach. Salon wychodzi na balkon i taras, a schody prowadzą do sypialni pod dachem z oknem dachowym nad zatoką.",
      superiorSea: "Przeszklenia od podłogi do sufitu i balkon z widokiem na całą zatokę Funchal, ze stołem na zewnątrz. Zdjęcie na górze tej strony zrobiono właśnie tutaj.",
      deluxeSea: "Duży salon z jadalnią i oknami na morze oraz basen, a do tego osobna sypialnia.",
      king: "Sypialnia z łóżkiem king-size i widokiem na basen oraz salon z balkonem i tarasem.",
      queen: "Przestronny salon z panoramicznym oknem na miasto i zatokę, balkon i osobna sypialnia.",
      deluxe: "Przestronny apartament z osobną sypialnią, sofą rozkładaną w salonie i widokiem na morze i miasto.",
      city: "Kompaktowy apartament z osobną sypialnią i salonem z widokiem na dachy aż po Fortaleza do Pico.",
      studio: "Jasne studio typu open space z aneksem kuchennym, stołem i wyjściem na mały taras."
    },
    dialog: { size: "Powierzchnia", beds: "Łóżka", guests: "Goście", view: "Widok", outdoor: "Na zewnątrz", price: "Cena", amen: "W apartamencie", ask: "Zapytaj o termin", booking: "Zobacz na Booking.com", none: "Brak" },
    amen: {
      kitchen: "Aneks kuchenny z płytą, mikrofalówką i lodówką", dish: "Zmywarka", kettle: "Czajnik, herbata i kawa", tv: "Telewizor z kanałami satelitarnymi",
      heat: "Ogrzewanie i wentylator", dry: "Suszarka do włosów", bath: "Prywatna łazienka", privat: "Osobne wejście", lift: "Dostęp windą",
      sofa: "Sofa rozkładana", quiet: "Wyciszenie", long: "Przedłużone łóżka, ponad 2 m", iron: "Żelazko i deska do prasowania", games: "Gry planszowe", outdoorDining: "Miejsce do jedzenia na zewnątrz"
    }
  },
  pool: {
    label: "Basen",
    h2: "Pływanie między bazaltowymi murami",
    lead: "Basen zewnętrzny jest czynny przez cały rok. Wzdłuż tarasu stoją leżaki, nad jednym rogiem pochyla się palma, a mur ogrodu zbudowano z ciemnego kamienia wulkanicznego wyspy.",
    hint: "Przesuń kursor nad wodą", hintTouch: "Dotknij wody"
  },
  amen: {
    label: "W cenie",
    h2: "Drobiazgi zrobione porządnie",
    items: {
      coffee: ["Kawa i herbata całą dobę", "Bezpłatne gorące napoje w salonie, w dzień i w nocy."],
      code: ["Zameldowanie 15:00–00:30", "Własny kod do drzwi. Wystarczy podać godzinę przyjazdu."],
      wifi: ["Wi-Fi z oceną 9,1", "Bezpłatne w każdym apartamencie i w ogrodzie, według ocen gości."],
      kitchen: ["Kuchnia w każdym apartamencie", "Płyta, mikrofalówka, lodówka i zmywarka."],
      lounge: ["Salon i bilard", "Aksamitne fotele, książki, gry planszowe i stół bilardowy pod starym rowerem."],
      lift: ["Winda na każde piętro", "Na wyższe piętra wjedziesz windą."],
      transfer: ["Transfer z lotniska", "Na życzenie, płatny. Lotnisko jest około 25 minut samochodem."],
      quiet: ["Tylko dla dorosłych, ciche noce", "Goście od 18 lat. Cisza nocna od 22:00 do 10:00."],
      parking: ["Parking w pobliżu", "Miejsca przy ulicy wokół domu i publiczny parking Plaza Madeira 8 minut dalej."]
    },
    badgeAlt: "Bezpłatne gorące napoje, 24 godziny · CBA Suites Madeira"
  },
  loc: {
    label: "Lokalizacja",
    h2: "Wszystko w zasięgu spaceru",
    lead: "Dom stoi tuż nad centrum, więc do miasta idzie się w dół. Każdy czas poniżej to prawdziwa trasa piesza spod naszych drzwi, wyliczona w OpenStreetMap.",
    cats: { sight: "Zabytki i muzea", taste: "Jedzenie, wino i zakupy", green: "Parki i ogrody", sea: "Nadmorze i transport" },
    places: {
      plaza: "Centrum handlowe Plaza Madeira", casino: "Kasyno Madeira", natural: "Muzeum Historii Naturalnej", catarina: "Park Santa Catarina",
      freitas: "Dom-Muzeum Frederico de Freitas", municipal: "Ogród Miejski", pico: "Punkt widokowy Fortaleza do Pico", cr7: "Muzeum CR7",
      blandys: "Winiarnia Blandy's", marina: "Marina Funchal i rejsy", luzia: "Ogrody Santa Luzia", se: "Katedra Sé",
      magnolia: "Park Quinta Magnólia", mercado: "Targ Mercado dos Lavradores", story: "Madeira Story Centre", cablecar: "Kolejka linowa na Monte",
      almirante: "Plaża Almirante Reis", santamaria: "Rua de Santa Maria, Stare Miasto", saotiago: "Twierdza São Tiago", lido: "Baseny morskie Lido"
    },
    nearLabel: "Tuż obok",
    near: { bus: "Przystanek autobusowy", sam: "Dworzec autobusowy SAM", pharmacy: "Apteka", taxi: "Postój taksówek", pingo: "Supermarket Pingo Doce", eat: "restauracji i kawiarni w promieniu 500 m" },
    min: "{n} min", mapAria: "Mapa centrum Funchal z trasami pieszymi od CBA Suites", you: "CBA Suites", ring: "{n} min pieszo",
    ocean: "Ocean Atlantycki", osm: "Dane mapy © współtwórcy OpenStreetMap", hint: "Wybierz miejsce, aby zobaczyć trasę.",
    gmaps: "Otwórz w Google Maps", directions: "Trasa"
  },
  tours: {
    label: "Wycieczki po wyspie",
    h2: "Madera zaczyna się za drzwiami",
    lead: "Większość wycieczek po wyspie zabiera gości z centrum Funchal, a łodzie do delfinów i wielorybów wypływają z mariny, 15 minut pieszo. Czas dojazdu liczony od domu.",
    filters: { all: "Wszystkie", peaks: "Szczyty", levadas: "Lewady i las", coast: "Wybrzeże i baseny", villages: "Miasteczka", gardens: "Ogrody", sea: "Na morzu" },
    car: "≈ {n} min autem", boats: "{n} min pieszo do łodzi", ferry: "Prom z portu w Funchal",
    items: {
      arieiro: ["Pico do Arieiro", "Wschód słońca nad chmurami na wysokości 1818 m i początek grzbietowego szlaku PR1 na Pico Ruivo."],
      monte: ["Monte i sanie", "Ogrody Monte Palace, kościół Matki Bożej z Monte i zjazd w dół w wiklinowych saniach."],
      botanico: ["Ogród Botaniczny", "Tarasy z roślinami z pięciu kontynentów nad Funchal, połączone z Monte drugą kolejką linową."],
      girao: ["Skywalk Cabo Girão", "Szklana podłoga 580 m nad morzem, na jednym z najwyższych klifów Europy."],
      camara: ["Câmara de Lobos", "Wioska rybacka, którą malował Churchill, z kolorowymi łodziami i barami z ponchą."],
      curral: ["Dolina Zakonnic", "Wioska na dnie pierścienia gór, widziana z punktu widokowego Eira do Serrado."],
      balcoes: ["Lewada Balcões", "Łatwe 1,5 km wzdłuż kanału wodnego do punktu widokowego nad doliną Ribeiro Frio."],
      caldeirao: ["Caldeirão Verde", "Lewada przez las wawrzynowy i tunele do wodospadu w zielonym kotle."],
      fanal: ["Las Fanal", "Wielowiekowe wawrzyny we mgle na płaskowyżu Paul da Serra."],
      moniz: ["Baseny Porto Moniz", "Naturalne baseny z wodą morską w czarnej lawie na północno-zachodnim krańcu wyspy."],
      seixal: ["Plaża Seixal", "Czarny wulkaniczny piasek pod zielonymi klifami północnego wybrzeża."],
      veu: ["Véu da Noiva", "Wodospad Welon Panny Młodej, spadający z klifu prosto do morza."],
      santana: ["Santana", "Trójkątne domki kryte strzechą i tarasowe pola na zielonej północy."],
      lourenco: ["Ponta de São Lourenço", "Nagi, czerwono-ochrowy przylądek na wschodzie, szlak PR8."],
      pontasol: ["Ponta do Sol", "Słoneczne miasteczko na południowym wybrzeżu z małą plażą i molo na zachód słońca."],
      yacht: ["Delfiny i wieloryby", "Rejsy z mariny w Funchal. Delfiny widać przez cały rok."],
      desertas: ["Wyspy Desertas", "Całodniowy rejs do rezerwatu, w którym żyją mniszki śródziemnomorskie."],
      portosanto: ["Porto Santo", "Dziewięć kilometrów złotego piasku na sąsiedniej wyspie, około 2 godz. 15 min promem."]
    },
    mapAria: "Mapa Madery z celami wycieczek i czasem dojazdu od CBA Suites",
    funchal: "Funchal", porto: "Porto Santo", desertas: "Desertas"
  },
  seasons: {
    label: "Kiedy jechać",
    h2: "Wiosna przez cały rok",
    lead: "W dzień od 20 do 27 °C, a morze nigdy nie jest chłodniejsze niż 18 °C. Wybierz miesiąc, aby zobaczyć, co się dzieje.",
    air: "Powietrze, w dzień", sea: "Morze", table: "Pokaż jako tabelę", month: "Miesiąc",
    note: "Średnie wieloletnie dla Funchal, zaokrąglone. Pogoda różni się z roku na rok.",
    events: [
      "Najspokojniejszy miesiąc: puste szlaki i najniższe ceny w roku.",
      "Karnawał z wielką paradą na Avenida do Mar.",
      "Wiosenne kwiaty i pełne lewady po zimowych deszczach.",
      "Święto Kwiatów zwykle zaczyna się pod koniec kwietnia lub w maju.",
      "Kwietne dywany i parady w centrum Funchal.",
      "Fajerwerki nad zatoką w soboty podczas Festiwalu Atlantyku.",
      "Ciepłe morze, długie wieczory i koncerty pod gołym niebem.",
      "Najcieplejszy miesiąc. 15 sierpnia odbywa się pielgrzymka na Monte.",
      "Festiwal Wina Madera i winobranie.",
      "Festiwal Natury: wędrówki, canyoning i sporty wodne.",
      "Święto kasztanów w Curral das Freiras, 25 minut stąd.",
      "Świąteczne iluminacje, a potem jeden z największych pokazów sylwestrowych fajerwerków na świecie."
    ]
  },
  reviews: {
    label: "Opinie",
    h2: "Co piszą goście",
    lead: "945 opinii na Booking.com i 117 w Google. Oto oceny i to, o czym goście wspominają najczęściej.",
    count: "{n} opinii",
    subs: { clean: "Czystość", comfort: "Komfort", facilities: "Udogodnienia", location: "Lokalizacja", staff: "Personel", value: "Stosunek jakości do ceny", wifi: "Bezpłatne Wi-Fi" },
    themes: [
      ["Hol", "Salon, który się fotografuje: muzyka, fotele, bilard i książki."],
      ["Kieliszek na powitanie", "Wino madera i słodycze czekają w holu po przyjeździe."],
      ["Widok z balkonu", "Morze i góry z balkonów, wysoko nad miastem."],
      ["Czysto i świeżo", "Nieskazitelne apartamenty, które pięknie pachną, i wszystko pod ręką."],
      ["Łatwy przyjazd", "Samodzielne zameldowanie z kodem i szybkie odpowiedzi konsjerża."],
      ["Wszędzie pieszo", "Supermarket, kawiarnie, park i promenada w zasięgu spaceru."]
    ],
    read: "Czytaj opinie na Booking.com", readG: "Opinie w Google", note: "Oceny z listopada 2026."
  },
  gallery: {
    label: "Galeria", h2: "Rozejrzyj się", count: "Zdjęcia: {n}",
    filters: { all: "Wszystkie", suites: "Apartamenty", views: "Widoki", pool: "Basen i ogród", lounge: "Salon", details: "Detale" },
    alts: {
      "612644740": "Zatoka Funchal z balkonu apartamentu Superior z widokiem na morze", "474754100": "Basen z góry, z leżakami na tarasie",
      "240155183": "Salon w holu z aksamitnymi fotelami", "474756863": "Zatoka w oknie dachowym loftu",
      "courtyard-dusk": "Miętowa fasada i dziedziniec z basenem o zmierzchu", "612644780": "Salon apartamentu Superior z widokiem na miasto i morze",
      "599496750": "Wino madera i słodycze na stoliku w holu", "474756830": "Salon loftu ze schodami do sypialni",
      "474755098": "Salon apartamentu Queen z panoramicznym oknem na Funchal", "244741748": "Basen i bazaltowy mur ogrodu",
      "599502789": "Sypialnia apartamentu King z widokiem na basen", "599497006": "Stary rower z koszem białych róż",
      "474756817": "Sypialnia na poddaszu z oknem dachowym w lofcie", "240155229": "Sala bilardowa i stary rower w salonie",
      "599500529": "Apartament Deluxe z widokiem na morze, salon z jadalnią", "599497603": "Funchal i Fortaleza do Pico z apartamentu z widokiem na miasto",
      "facade-pool": "Dom odbity w basenie", "474755127": "Taras i aneks kuchenny apartamentu Queen",
      "599502300": "Bugenwilla na świeżych ręcznikach", "598772545": "Sypialnia apartamentu z widokiem na miasto",
      "437912696": "Palma nad rogiem basenu", "240137137": "Aneks kuchenny ze świeżymi owocami i filiżankami",
      "599502761": "Salon apartamentu King z widokiem na miasto", "240155223": "Studio z otwartymi drzwiami na taras",
      "474754710": "Łazienka z prysznicem", "612644819": "Sypialnia apartamentu Superior z widokiem na morze",
      "599497378": "Kwiaty na stoliku nocnym", "474754027": "Sypialnia apartamentu Deluxe"
    }
  },
  faq: {
    label: "Pytania",
    h2: "Dobrze wiedzieć",
    items: [
      ["O której jest zameldowanie i wymeldowanie?", "Zameldowanie od 15:00 do 0:30, wymeldowanie do 10:30. Podaj wcześniej godzinę przyjazdu, a otrzymasz kod do samodzielnego zameldowania."],
      ["Czy basen jest czynny przez cały rok?", "Tak. Basen zewnętrzny działa przez cały rok, z leżakami na tarasie i ogrodem dookoła."],
      ["Jak daleko jest centrum Funchal?", "Do kasyna 600 m (8 min pieszo), do mariny 1,1 km (15 min), do katedry Sé 1,2 km (16 min). Centrum handlowe Plaza Madeira z supermarketem Pingo Doce jest 8 minut stąd."],
      ["Czy apartamenty mają kuchnię?", "Tak. Każde studio i apartament ma aneks kuchenny z płytą, mikrofalówką, lodówką, czajnikiem i zmywarką oraz stół."],
      ["Jak dojechać z lotniska?", "Lotnisko im. Cristiano Ronaldo (FNC) jest 20 km stąd, około 25 minut samochodem. Płatny transfer można zamówić wcześniej; do centrum jeżdżą też taksówki i autobusy lotniskowe."],
      ["Czy jest parking?", "Przy domu są miejsca przy ulicy, choć nie zawsze wolne, oraz publiczny parking Plaza Madeira 8 minut pieszo."],
      ["Czy można stąd jechać na wycieczki?", "Tak. Większość wycieczek, od lewad przez wschód słońca na Pico do Arieiro po wyprawy jeepem, zabiera gości z centrum Funchal. Łodzie do delfinów i wielorybów wypływają z mariny, 15 minut pieszo."],
      ["Czy można przyjechać z dziećmi?", "CBA Suites jest dla dorosłych: minimalny wiek to 18 lat, nie ma łóżeczek ani dostawek."],
      ["Czy można przyjechać ze zwierzętami?", "Zwierzęta nie są akceptowane."],
      ["Czy jest Wi-Fi?", "Bezpłatne Wi-Fi działa w całym domu. Goście oceniają je na 9,1 z 10."],
      ["Czy przyjmowane są imprezy lub grupy?", "Nie. Cisza nocna obowiązuje od 22:00 do 10:00, a dom nie przyjmuje rezerwacji grupowych ani wieczorów kawalerskich i panieńskich."],
      ["W jakich językach mówi personel?", "Po angielsku i hiszpańsku."]
    ]
  },
  book: {
    label: "Rezerwacja",
    h2: "Zaplanuj pobyt",
    lead: "Wyślij daty, a odpowiemy, czy apartament jest wolny i ile kosztuje. Albo zarezerwuj od razu na Booking.com.",
    arrival: "Przyjazd", departure: "Wyjazd", guests: "Goście", suite: "Apartament", any: "Dowolny apartament", name: "Imię",
    msg: "Wiadomość", msgPh: "Godzina przyjazdu, pytania, życzenia…", less: "Mniej gości", more: "Więcej gości",
    card: "Twój pobyt", nights: "Noce", dates: "Daty", code: "Kod do drzwi przyjdzie przed zameldowaniem",
    wa: "Wyślij przez WhatsApp", mail: "Wyślij e-mailem", bk: "Sprawdź na Booking.com", direct: "Rezerwuj na naszej stronie",
    err: { dates: "Wybierz daty przyjazdu i wyjazdu.", order: "Wyjazd musi być po przyjeździe.", name: "Podaj imię, żebyśmy wiedzieli, kto pisze." },
    note: "Odpowiadamy osobiście. Na tej stronie nic nie jest pobierane.",
    text: { hello: "Dzień dobry, CBA Suites!", want: "Chcę zatrzymać się", from: "od", to: "do", guests: "Goście", suite: "Apartament", name: "Imię", subject: "Pobyt w CBA Suites" },
    plural: { night: { one: "noc", few: "noce", many: "nocy", other: "nocy" }, guest: { one: "gość", few: "gości", many: "gości", other: "gościa" } }
  },
  footer: {
    h2: "Do zobaczenia w Funchal",
    lead: "Napisz, zadzwoń albo po prostu wyślij daty.",
    address: "Calçada da Caboqueira 54, São Pedro, 9000-900 Funchal, Madera, Portugalia",
    l: { addr: "Adres", phone: "Telefon i WhatsApp", email: "E-mail", coords: "Współrzędne", plus: "Plus Code", licence: "Licencja zakwaterowania (AL)", operator: "Zarządza" },
    maps: "Otwórz w Google Maps", rights: "Wszelkie prawa zastrzeżone.", complaints: "Książka skarg", credits: "Autorzy zdjęć",
    creditsNote: "Zdjęcia domu i apartamentów: CBA Suites Madeira. Zdjęcia wyspy: autorzy z Wikimedia Commons, licencje poniżej."
  }
};
