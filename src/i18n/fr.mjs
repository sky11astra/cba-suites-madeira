// Pack de langue : fr. Même structure pour toutes les langues. {brand}, {n}, {month} sont remplacés.
export default {
  meta: {
    title: "CBA Suites Madeira | Suites avec piscine au centre de Funchal",
    description: "Studios et suites de 32 à 78 m² avec kitchenette, balcons sur la baie de Funchal et piscine extérieure. À 8 minutes à pied du casino, à 16 de la cathédrale. Note 8,4 sur Booking.com.",
    ogTitle: "CBA Suites Madeira · Funchal à votre fenêtre",
    ogAlt: "La baie de Funchal vue d'un balcon de CBA Suites Madeira",
    keywords: "suites avec piscine Funchal, location centre de Funchal, hébergement Madère, CBA Suites"
  },
  ui: {
    skip: "Aller au contenu", menu: "Menu", menuOpen: "Ouvrir le menu", menuClose: "Fermer le menu", lang: "Langue",
    close: "Fermer", prev: "Précédent", next: "Suivant", book: "Réserver", of: "sur", scroll: "Défiler"
  },
  nav: [["#suites", "Suites"], ["#house", "La maison"], ["#location", "Emplacement"], ["#tours", "Excursions"], ["#seasons", "Quand venir"], ["#reviews", "Avis"], ["#faq", "Questions"]],
  hero: {
    eyebrow: "Suites avec piscine · São Pedro, Funchal",
    h1: ["Funchal", "à votre fenêtre"],
    lead: "Studios et suites de 32 à 78 m² avec kitchenette, balcons sur la baie et une piscine dans un jardin aux murs de basalte. Le casino est à 8 minutes à pied, la cathédrale à 16.",
    cta: "Choisir les dates", cta2: "Voir les suites",
    capA: "Suite loft · le vasistas sur la baie",
    capB: "Suite Supérieure vue mer · la vue depuis son balcon",
    live: { now: "Funchal maintenant", sunset: "coucher du soleil", sunrise: "lever du soleil", typical: "{month} : moyenne", sea: "mer" },
    bar: { in: "Arrivée", out: "Départ", guests: "Voyageurs", go: "Voir les disponibilités" }
  },
  marquee: { walk: "{n} min à pied", car: "{n} min en voiture", airport: "Aéroport de Madère", arieiro: "Pico do Arieiro", girao: "Cabo Girão" },
  house: {
    label: "La maison",
    h2: "Une maison vert menthe au-dessus de la baie",
    p: [
      "CBA Suites se trouve Calçada da Caboqueira, une rue calme de São Pedro, au-dessus de la marina de Funchal. Derrière la façade, un salon aux fauteuils de velours, un billard et des étagères de livres, et une piscine dans un jardin ceint de basalte sombre de Madère.",
      "Chaque suite a sa kitchenette avec lave-vaisselle, et la plupart ouvrent sur un balcon ou une terrasse. Le café et le thé du salon sont offerts jour et nuit, et vous entrez seul avec un code de porte, à toute heure entre 15 h et minuit et demi."
    ],
    facts: [["8,4", "sur Booking.com, 945 avis"], ["32–78 m²", "studios et suites"], ["15:00–00:30", "arrivée autonome"], ["20 km", "jusqu'à l'aéroport de Madère"]],
    alts: { courtyard: "La façade vert menthe et la cour de la piscine au crépuscule", lounge: "Salon de la réception aux fauteuils de velours", wine: "Vin de Madère et douceurs sur la table de la réception", bike: "Une vieille bicyclette avec un panier de fleurs dans le hall" }
  },
  suites: {
    label: "Suites",
    h2: "Huit façons de séjourner",
    lead: "Chacune a une kitchenette avec lave-vaisselle, une table à manger et un coin canapé. Choisissez selon la vue, l'espace extérieur ou le nombre de voyageurs.",
    filters: { all: "Toutes", sea: "Vue mer", outdoor: "Balcon ou terrasse", four: "Pour 4 personnes" },
    guests: "jusqu'à {n} personnes", from: "à partir de {n} € la nuit", ask: "Tarif sur demande", open: "Voir la suite", photos: "{n} photos",
    tags: { sea: "Vue mer", pool: "Vue piscine", city: "Vue ville", balcony: "Balcon", terrace: "Terrasse" },
    names: {
      loft: "Deluxe avec balcon · loft", superiorSea: "Suite Supérieure vue mer", deluxeSea: "Suite Deluxe vue mer",
      king: "Suite King avec balcon", queen: "Suite Queen", deluxe: "Suite Deluxe", city: "Suite vue ville", studio: "Studio"
    },
    beds: {
      loft: "2 très grands lits doubles et un canapé-lit", superiorSea: "1 très grand lit double et un canapé-lit", deluxeSea: "1 très grand lit double et un canapé-lit",
      king: "1 très grand lit double et un canapé-lit", queen: "1 grand lit double et un canapé-lit", deluxe: "1 très grand lit double et un canapé-lit",
      city: "1 lit double et un canapé-lit", studio: "1 grand lit double"
    },
    blurbs: {
      loft: "La plus grande suite, sur deux niveaux. Le séjour ouvre sur un balcon et une terrasse, et l'escalier monte vers une chambre sous le toit avec un vasistas sur la baie.",
      superiorSea: "Des baies vitrées du sol au plafond et un balcon face à toute la baie de Funchal, avec une table dehors. La photo en haut de cette page a été prise ici.",
      deluxeSea: "Un grand séjour avec coin repas, des fenêtres vers la mer et la piscine, et une chambre séparée.",
      king: "Une chambre avec lit king-size qui donne sur la piscine, et un séjour avec balcon et terrasse.",
      queen: "Un vaste séjour avec baie panoramique sur la ville et la baie, un balcon et une chambre séparée.",
      deluxe: "Une suite spacieuse avec chambre séparée, canapé-lit au séjour et vue sur la mer et la ville.",
      city: "Une suite compacte avec chambre séparée et un séjour qui regarde les toits jusqu'à la Fortaleza do Pico.",
      studio: "Un studio lumineux et ouvert avec kitchenette, table à manger et une porte sur une petite terrasse."
    },
    dialog: { size: "Surface", beds: "Lits", guests: "Voyageurs", view: "Vue", outdoor: "Extérieur", price: "Tarif", amen: "Dans la suite", ask: "Demander des dates", booking: "Voir sur Booking.com", none: "Aucun" },
    amen: {
      kitchen: "Kitchenette avec plaque, micro-ondes et réfrigérateur", dish: "Lave-vaisselle", kettle: "Bouilloire, thé et café", tv: "TV écran plat avec chaînes satellite",
      heat: "Chauffage et ventilateur", dry: "Sèche-cheveux", bath: "Salle de bains privative", privat: "Entrée privée", lift: "Accès par ascenseur",
      sofa: "Canapé-lit", quiet: "Insonorisation", long: "Lits extra-longs, plus de 2 m", iron: "Fer et planche à repasser", games: "Jeux de société", outdoorDining: "Coin repas extérieur"
    }
  },
  pool: {
    label: "La piscine",
    h2: "Nager entre des murs de basalte",
    lead: "La piscine extérieure est ouverte toute l'année. Des transats bordent le deck, un palmier se penche sur un angle, et le mur du jardin est bâti en pierre volcanique sombre de l'île.",
    hint: "Passez sur l'eau", hintTouch: "Touchez l'eau"
  },
  amen: {
    label: "Inclus",
    h2: "Les petites choses, bien faites",
    items: {
      coffee: ["Café et thé 24 h/24", "Boissons chaudes offertes au salon, jour et nuit."],
      code: ["Arrivée 15:00–00:30", "Votre propre code de porte. Indiquez simplement votre heure d'arrivée."],
      wifi: ["Wi-Fi noté 9,1", "Gratuit dans chaque suite et au jardin, selon les notes des voyageurs."],
      kitchen: ["Une cuisine dans chaque suite", "Plaque, micro-ondes, réfrigérateur et lave-vaisselle."],
      lounge: ["Salon et billard", "Fauteuils de velours, livres, jeux de société et un billard sous la vieille bicyclette."],
      lift: ["Ascenseur à tous les étages", "Les étages supérieurs sont desservis par ascenseur."],
      transfer: ["Transfert aéroport", "Sur demande, payant. L'aéroport est à environ 25 minutes en voiture."],
      quiet: ["Adultes uniquement, nuits calmes", "Voyageurs de 18 ans et plus. Silence de 22 h à 10 h."],
      parking: ["Stationnement à proximité", "Places dans la rue autour de la maison et parking public du Plaza Madeira à 8 minutes."]
    },
    badgeAlt: "Boissons chaudes offertes, 24 heures · CBA Suites Madeira"
  },
  loc: {
    label: "Emplacement",
    h2: "Tout se fait à pied",
    lead: "La maison domine le centre, donc on descend en ville. Chaque durée ci-dessous est un vrai trajet à pied depuis notre porte, calculé sur OpenStreetMap.",
    cats: { sight: "Monuments et musées", taste: "Cuisine, vin et shopping", green: "Parcs et jardins", sea: "Bord de mer et transports" },
    places: {
      plaza: "Centre commercial Plaza Madeira", casino: "Casino de Madère", natural: "Musée d'histoire naturelle", catarina: "Parc Santa Catarina",
      freitas: "Maison-musée Frederico de Freitas", municipal: "Jardin municipal", pico: "Belvédère de la Fortaleza do Pico", cr7: "Musée CR7",
      blandys: "Blandy's Wine Lodge", marina: "Marina de Funchal et sorties en mer", luzia: "Jardins de Santa Luzia", se: "Cathédrale Sé",
      magnolia: "Parc de la Quinta Magnólia", mercado: "Marché Mercado dos Lavradores", story: "Madeira Story Centre", cablecar: "Téléphérique vers Monte",
      almirante: "Plage Almirante Reis", santamaria: "Rua de Santa Maria, vieille ville", saotiago: "Forteresse São Tiago", lido: "Piscines d'eau de mer du Lido"
    },
    nearLabel: "Juste à côté",
    near: { bus: "Arrêt de bus", sam: "Gare routière SAM", pharmacy: "Pharmacie", taxi: "Station de taxis", pingo: "Supermarché Pingo Doce", eat: "restaurants et cafés à moins de 500 m" },
    min: "{n} min", mapAria: "Carte du centre de Funchal avec les trajets à pied depuis CBA Suites", you: "CBA Suites", ring: "{n} min à pied",
    ocean: "Océan Atlantique", osm: "Données cartographiques © contributeurs OpenStreetMap", hint: "Choisissez un lieu pour voir le trajet.",
    gmaps: "Ouvrir dans Google Maps", directions: "Itinéraire"
  },
  tours: {
    label: "Excursions sur l'île",
    h2: "Madère commence à la porte",
    lead: "La plupart des excursions viennent chercher les voyageurs au centre de Funchal, et les bateaux pour les dauphins et les baleines partent de la marina, à 15 minutes à pied. Temps de trajet depuis la maison.",
    filters: { all: "Toutes", peaks: "Sommets", levadas: "Levadas et forêt", coast: "Côte et piscines", villages: "Villages", gardens: "Jardins", sea: "En mer" },
    car: "≈ {n} min en voiture", boats: "{n} min à pied jusqu'aux bateaux", ferry: "Ferry depuis le port de Funchal",
    items: {
      arieiro: ["Pico do Arieiro", "Le lever du soleil au-dessus des nuages à 1 818 m et le départ du sentier de crête PR1 vers le Pico Ruivo."],
      monte: ["Monte et les luges", "Les jardins du Monte Palace, l'église Notre-Dame du Monte et la descente en luge d'osier."],
      botanico: ["Jardin botanique", "Des terrasses de plantes des cinq continents au-dessus de Funchal, reliées à Monte par un second téléphérique."],
      girao: ["Skywalk du Cabo Girão", "Un plancher de verre à 580 m au-dessus de la mer, sur l'une des plus hautes falaises d'Europe."],
      camara: ["Câmara de Lobos", "Le village de pêcheurs que Churchill est venu peindre, avec ses barques colorées et ses bars à poncha."],
      curral: ["Vallée des Nonnes", "Un village au fond d'un cirque de montagnes, vu du belvédère d'Eira do Serrado."],
      balcoes: ["Levada dos Balcões", "Une balade facile de 1,5 km le long d'un canal jusqu'à un belvédère sur la vallée de Ribeiro Frio."],
      caldeirao: ["Caldeirão Verde", "Une levada à travers la forêt de lauriers et des tunnels jusqu'à une cascade dans un chaudron vert."],
      fanal: ["Forêt de Fanal", "Des lauriers centenaires dans la brume du plateau de Paul da Serra."],
      moniz: ["Piscines de Porto Moniz", "Des piscines naturelles d'eau de mer dans la lave noire, à la pointe nord-ouest de l'île."],
      seixal: ["Plage de Seixal", "Du sable volcanique noir sous des falaises vertes sur la côte nord."],
      veu: ["Véu da Noiva", "La cascade du Voile de la mariée, qui tombe de la falaise droit dans la mer."],
      santana: ["Santana", "Des maisons triangulaires au toit de chaume et des champs en terrasses sur la côte nord verdoyante."],
      lourenco: ["Ponta de São Lourenço", "Le cap est, nu et rouge ocre, parcouru par le sentier PR8."],
      pontasol: ["Ponta do Sol", "Une petite ville ensoleillée de la côte sud, avec une plage et une jetée pour le coucher du soleil."],
      yacht: ["Dauphins et baleines", "Sorties en bateau depuis la marina de Funchal. On voit des dauphins toute l'année."],
      desertas: ["Îles Desertas", "Une journée entière à la voile vers la réserve naturelle où vivent les phoques moines."],
      portosanto: ["Porto Santo", "Neuf kilomètres de sable doré sur l'île voisine, à environ 2 h 15 de ferry."]
    },
    mapAria: "Carte de Madère avec les excursions et les temps de trajet depuis CBA Suites",
    funchal: "Funchal", porto: "Porto Santo", desertas: "Desertas"
  },
  seasons: {
    label: "Quand venir",
    h2: "Un printemps qui dure toute l'année",
    lead: "En journée, entre 20 et 27 °C, et la mer ne descend jamais sous 18 °C. Choisissez un mois pour voir ce qui s'y passe.",
    air: "Air, maximale du jour", sea: "Mer", table: "Afficher en tableau", month: "Mois",
    note: "Moyennes à long terme pour Funchal, arrondies. La météo varie d'une année à l'autre.",
    events: [
      "Le mois le plus calme : sentiers déserts et prix les plus bas de l'année.",
      "Le carnaval et son grand défilé sur l'Avenida do Mar.",
      "Fleurs de printemps et levadas pleines après les pluies d'hiver.",
      "La Fête des fleurs commence en général fin avril ou en mai.",
      "Tapis de fleurs et défilés dans le centre de Funchal.",
      "Feux d'artifice sur la baie les samedis du Festival de l'Atlantique.",
      "Mer chaude, longues soirées et concerts en plein air.",
      "Le mois le plus chaud. Le pèlerinage de Monte a lieu le 15 août.",
      "La Fête du vin de Madère et les vendanges.",
      "Le Festival de la nature : randonnées, canyoning et sports nautiques.",
      "Fête de la châtaigne à Curral das Freiras, à 25 minutes.",
      "Illuminations de Noël, puis l'un des plus grands feux d'artifice du Nouvel An au monde."
    ]
  },
  reviews: {
    label: "Avis",
    h2: "Ce qu'écrivent les voyageurs",
    lead: "945 avis sur Booking.com et 117 sur Google. Voici les notes et ce que les voyageurs mentionnent le plus.",
    count: "{n} avis",
    subs: { clean: "Propreté", comfort: "Confort", facilities: "Équipements", location: "Situation", staff: "Personnel", value: "Rapport qualité/prix", wifi: "Wi-Fi gratuit" },
    themes: [
      ["Le hall", "Un salon qu'on photographie : musique, fauteuils, billard et livres."],
      ["Un verre de bienvenue", "Vin de Madère et douceurs vous attendent dans le hall à l'arrivée."],
      ["Vue des balcons", "La mer et les montagnes depuis les balcons, bien au-dessus de la ville."],
      ["Propre et frais", "Des suites impeccables qui sentent bon, avec tout le nécessaire."],
      ["Arrivée facile", "Arrivée autonome avec un code et réponses rapides du concierge."],
      ["Tout à pied", "Supermarché, cafés, parc et front de mer, tout à pied."]
    ],
    read: "Lire les avis sur Booking.com", readG: "Avis sur Google", note: "Notes de novembre 2026."
  },
  gallery: {
    label: "Galerie", h2: "Faites le tour", count: "{n} photos",
    filters: { all: "Toutes", suites: "Suites", views: "Vues", pool: "Piscine et jardin", lounge: "Salon", details: "Détails" },
    alts: {
      "612644740": "La baie de Funchal depuis le balcon de la Suite Supérieure vue mer", "474754100": "La piscine vue d'en haut, transats sur le deck",
      "240155183": "Salon de la réception aux fauteuils de velours", "474756863": "La baie dans le vasistas de la suite loft",
      "courtyard-dusk": "La façade vert menthe et la cour de la piscine au crépuscule", "612644780": "Séjour de la Suite Supérieure avec vue sur la ville et la mer",
      "599496750": "Vin de Madère et douceurs sur la table de la réception", "474756830": "Séjour de la suite loft avec l'escalier vers la chambre",
      "474755098": "Séjour de la Suite Queen avec baie panoramique sur Funchal", "244741748": "Piscine et mur de basalte du jardin",
      "599502789": "Chambre de la Suite King donnant sur la piscine", "599497006": "Vieille bicyclette avec un panier de roses blanches",
      "474756817": "Chambre mansardée avec vasistas dans la suite loft", "240155229": "Salle de billard et la vieille bicyclette du salon",
      "599500529": "Suite Deluxe vue mer, séjour et coin repas", "599497603": "Funchal et la Fortaleza do Pico depuis une suite vue ville",
      "facade-pool": "La maison se reflète dans la piscine", "474755127": "Terrasse et kitchenette de la Suite Queen",
      "599502300": "Bougainvillée sur des serviettes propres", "598772545": "Chambre d'une suite vue ville",
      "437912696": "Palmier au-dessus d'un angle de la piscine", "240137137": "Kitchenette avec fruits frais et tasses à café",
      "599502761": "Séjour de la Suite King avec vue sur la ville", "240155223": "Studio, porte ouverte sur la terrasse",
      "474754710": "Salle de bains avec douche", "612644819": "Chambre de la Suite Supérieure vue mer",
      "599497378": "Fleurs sur la table de chevet", "474754027": "Chambre de la Suite Deluxe"
    }
  },
  faq: {
    label: "Questions",
    h2: "Bon à savoir",
    items: [
      ["À quelle heure sont l'arrivée et le départ ?", "L'arrivée se fait de 15 h à 0 h 30 et le départ avant 10 h 30. Indiquez votre heure d'arrivée à l'avance et vous recevrez un code pour entrer seul."],
      ["La piscine est-elle ouverte toute l'année ?", "Oui. La piscine extérieure est ouverte toute l'année, avec des transats sur le deck et le jardin autour."],
      ["À quelle distance est le centre de Funchal ?", "Le casino est à 600 m (8 min à pied), la marina à 1,1 km (15 min) et la cathédrale Sé à 1,2 km (16 min). Le centre commercial Plaza Madeira, avec un supermarché Pingo Doce, est à 8 minutes."],
      ["Les suites ont-elles une cuisine ?", "Oui. Chaque studio et chaque suite a une kitchenette avec plaque, micro-ondes, réfrigérateur, bouilloire et lave-vaisselle, ainsi qu'une table à manger."],
      ["Comment venir de l'aéroport ?", "L'aéroport Cristiano Ronaldo (FNC) est à 20 km, environ 25 minutes en voiture. Un transfert payant peut être organisé sur demande ; des taxis et des bus de l'aéroport desservent aussi le centre."],
      ["Y a-t-il un parking ?", "Il y a des places dans la rue autour de la maison, pas toujours libres, et le parking public du Plaza Madeira à 8 minutes à pied."],
      ["Peut-on faire des excursions depuis ici ?", "Oui. La plupart des excursions, des levadas au lever du soleil au Pico do Arieiro en passant par les sorties en jeep, viennent chercher les voyageurs au centre de Funchal. Les bateaux pour les dauphins et les baleines partent de la marina, à 15 minutes à pied."],
      ["Peut-on venir avec des enfants ?", "CBA Suites est réservé aux adultes : l'âge minimum est de 18 ans, et il n'y a ni lits bébé ni lits d'appoint."],
      ["Les animaux sont-ils acceptés ?", "Les animaux ne sont pas acceptés."],
      ["Y a-t-il le Wi-Fi ?", "Le Wi-Fi gratuit fonctionne dans toute la maison. Les voyageurs lui donnent 9,1 sur 10."],
      ["Les fêtes ou les groupes sont-ils acceptés ?", "Non. Le silence est de rigueur de 22 h à 10 h, et la maison n'accepte ni réservations de groupe ni enterrements de vie de garçon ou de jeune fille."],
      ["Quelles langues parle l'équipe ?", "Anglais et espagnol."]
    ]
  },
  book: {
    label: "Réserver",
    h2: "Préparez votre séjour",
    lead: "Envoyez vos dates et nous vous répondrons avec la disponibilité et le tarif de votre suite. Ou réservez tout de suite sur Booking.com.",
    arrival: "Arrivée", departure: "Départ", guests: "Voyageurs", suite: "Suite", any: "Peu importe la suite", name: "Votre nom",
    msg: "Message", msgPh: "Heure d'arrivée, questions, souhaits…", less: "Moins de voyageurs", more: "Plus de voyageurs",
    card: "Votre séjour", nights: "Nuits", dates: "Dates", code: "Le code de porte arrive avant votre arrivée",
    wa: "Envoyer sur WhatsApp", mail: "Envoyer par e-mail", bk: "Voir sur Booking.com", direct: "Réserver sur notre site",
    err: { dates: "Choisissez vos dates d'arrivée et de départ.", order: "Le départ doit être après l'arrivée.", name: "Indiquez votre nom pour que nous sachions qui écrit." },
    note: "Nous répondons personnellement. Rien n'est débité sur cette page.",
    text: { hello: "Bonjour CBA Suites !", want: "Je souhaite séjourner", from: "du", to: "au", guests: "Voyageurs", suite: "Suite", name: "Nom", subject: "Séjour à CBA Suites" },
    plural: { night: { one: "nuit", other: "nuits" }, guest: { one: "voyageur", other: "voyageurs" } }
  },
  footer: {
    h2: "À bientôt à Funchal",
    lead: "Écrivez, appelez ou envoyez simplement vos dates.",
    address: "Calçada da Caboqueira 54, São Pedro, 9000-900 Funchal, Madère, Portugal",
    l: { addr: "Adresse", phone: "Téléphone et WhatsApp", email: "E-mail", coords: "Coordonnées", plus: "Plus Code", licence: "Licence d'hébergement local", operator: "Géré par" },
    maps: "Ouvrir dans Google Maps", rights: "Tous droits réservés.", complaints: "Livre de réclamations", credits: "Crédits photo",
    creditsNote: "Photos de la maison et des suites : CBA Suites Madeira. Photos de l'île : auteurs de Wikimedia Commons, sous les licences ci-dessous."
  }
};
