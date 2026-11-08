// Pacote de idioma: pt (Portugal). Mesma estrutura em todos os idiomas. {brand}, {n}, {month} são substituídos.
export default {
  meta: {
    title: "CBA Suites Madeira | Suites com piscina no centro do Funchal",
    description: "Estúdios e suites de 32 a 78 m² com kitchenette, varandas sobre a baía do Funchal e piscina exterior. A 8 minutos a pé do Casino e a 16 da Sé. Avaliação 8,4 no Booking.com.",
    ogTitle: "CBA Suites Madeira · O Funchal à sua janela",
    ogAlt: "A baía do Funchal vista de uma varanda do CBA Suites Madeira",
    keywords: "suites com piscina Funchal, alojamento centro do Funchal, alojamento local Madeira, CBA Suites"
  },
  ui: {
    skip: "Saltar para o conteúdo", menu: "Menu", menuOpen: "Abrir menu", menuClose: "Fechar menu", lang: "Idioma",
    close: "Fechar", prev: "Anterior", next: "Seguinte", book: "Reservar", of: "de", scroll: "Deslize"
  },
  nav: [["#suites", "Suites"], ["#house", "A casa"], ["#location", "Localização"], ["#tours", "Passeios"], ["#seasons", "Quando vir"], ["#reviews", "Avaliações"], ["#faq", "Perguntas"]],
  hero: {
    eyebrow: "Suites com piscina · São Pedro, Funchal",
    h1: ["O Funchal", "à sua janela"],
    lead: "Estúdios e suites de 32 a 78 m² com kitchenette, varandas sobre a baía e uma piscina num jardim de muros de basalto. O Casino fica a 8 minutos a pé, a Sé a 16.",
    cta: "Escolher datas", cta2: "Ver as suites",
    capA: "Suite loft · a claraboia sobre a baía",
    capB: "Suite Superior com Vista Mar · a vista da sua varanda",
    live: { now: "Funchal agora", sunset: "pôr do sol", sunrise: "nascer do sol", typical: "{month}: média", sea: "mar" },
    bar: { in: "Check-in", out: "Check-out", guests: "Hóspedes", go: "Ver disponibilidade" }
  },
  marquee: { walk: "{n} min a pé", car: "{n} min de carro", airport: "Aeroporto da Madeira", arieiro: "Pico do Arieiro", girao: "Cabo Girão" },
  house: {
    label: "A casa",
    h2: "Uma casa verde-menta sobre a baía",
    p: [
      "O CBA Suites fica na Calçada da Caboqueira, uma rua tranquila de São Pedro, acima da marina do Funchal. Por trás da fachada há um lounge com cadeirões de veludo, uma mesa de bilhar e estantes de livros, e uma piscina num jardim murado com o basalto escuro da Madeira.",
      "Todas as suites têm kitchenette com máquina de lavar loiça, e a maioria abre para uma varanda ou um terraço. O café e o chá no lounge são gratuitos dia e noite, e o check-in faz-se com um código de porta, a qualquer hora entre as 15:00 e a meia-noite e meia."
    ],
    facts: [["8,4", "no Booking.com, 945 avaliações"], ["32–78 m²", "estúdios e suites"], ["15:00–00:30", "check-in autónomo"], ["20 km", "até ao Aeroporto da Madeira"]],
    alts: { courtyard: "A fachada verde-menta e o pátio da piscina ao anoitecer", lounge: "Lounge da receção com cadeirões de veludo", wine: "Vinho Madeira e doces na mesa da receção", bike: "Uma bicicleta antiga com um cesto de flores na receção" }
  },
  suites: {
    label: "Suites",
    h2: "Oito maneiras de ficar",
    lead: "Todas têm kitchenette com máquina de lavar loiça, mesa de jantar e sofá. Escolha pela vista, pelo espaço exterior ou pelo número de pessoas.",
    filters: { all: "Todas", sea: "Vista mar", outdoor: "Varanda ou terraço", four: "Para 4 pessoas" },
    guests: "até {n} hóspedes", from: "desde {n} € por noite", ask: "Preço sob consulta", open: "Ver suite", photos: "{n} fotos",
    tags: { sea: "Vista mar", pool: "Vista piscina", city: "Vista cidade", balcony: "Varanda", terrace: "Terraço" },
    names: {
      loft: "Deluxe com Varanda · loft", superiorSea: "Suite Superior com Vista Mar", deluxeSea: "Suite Deluxe com Vista Mar",
      king: "Suite King com Varanda", queen: "Suite Queen", deluxe: "Suite Deluxe", city: "Suite com Vista Cidade", studio: "Estúdio"
    },
    beds: {
      loft: "2 camas de casal extra grandes e um sofá-cama", superiorSea: "1 cama de casal extra grande e um sofá-cama", deluxeSea: "1 cama de casal extra grande e um sofá-cama",
      king: "1 cama de casal extra grande e um sofá-cama", queen: "1 cama de casal grande e um sofá-cama", deluxe: "1 cama de casal extra grande e um sofá-cama",
      city: "1 cama de casal e um sofá-cama", studio: "1 cama de casal grande"
    },
    blurbs: {
      loft: "A maior suite, em dois pisos. A sala abre para uma varanda e um terraço, e as escadas sobem até um quarto sob o telhado com uma claraboia sobre a baía.",
      superiorSea: "Vidro do chão ao teto e uma varanda virada para a baía do Funchal, com mesa de refeições no exterior. A fotografia no topo desta página foi tirada aqui.",
      deluxeSea: "Uma ampla sala de estar e de jantar com janelas para o mar e para a piscina, e um quarto separado.",
      king: "Um quarto com cama king-size que dá para a piscina, e uma sala com varanda e terraço.",
      queen: "Uma sala ampla com janela panorâmica sobre a cidade e a baía, varanda e quarto separado.",
      deluxe: "Uma suite espaçosa com quarto separado, sofá-cama na sala e vista para o mar e a cidade.",
      city: "Uma suite compacta com quarto separado e uma sala com vista sobre os telhados até à Fortaleza do Pico.",
      studio: "Um estúdio luminoso em open space com kitchenette, mesa de jantar e porta para um pequeno terraço."
    },
    dialog: { size: "Área", beds: "Camas", guests: "Hóspedes", view: "Vista", outdoor: "Exterior", price: "Preço", amen: "Na suite", ask: "Perguntar por datas", booking: "Ver no Booking.com", none: "Nenhum" },
    amen: {
      kitchen: "Kitchenette com placa, micro-ondas e frigorífico", dish: "Máquina de lavar loiça", kettle: "Chaleira, chá e café", tv: "TV de ecrã plano com canais por satélite",
      heat: "Aquecimento e ventoinha", dry: "Secador de cabelo", bath: "Casa de banho privativa", privat: "Entrada privada", lift: "Acesso por elevador",
      sofa: "Sofá-cama", quiet: "Isolamento acústico", long: "Camas extra longas, com mais de 2 m", iron: "Ferro e tábua de engomar", games: "Jogos de tabuleiro", outdoorDining: "Zona de refeições exterior"
    }
  },
  pool: {
    label: "A piscina",
    h2: "Nadar entre muros de basalto",
    lead: "A piscina exterior está aberta todo o ano. Há espreguiçadeiras ao longo do deck, uma palmeira debruçada sobre um canto e o muro do jardim é feito com a pedra vulcânica escura da ilha.",
    hint: "Passe o cursor pela água", hintTouch: "Toque na água"
  },
  amen: {
    label: "Incluído",
    h2: "Os pequenos detalhes, bem feitos",
    items: {
      coffee: ["Café e chá, 24 horas", "Bebidas quentes gratuitas no lounge, dia e noite."],
      code: ["Check-in 15:00–00:30", "O seu próprio código de porta. Basta avisar a hora de chegada."],
      wifi: ["Wi-Fi com nota 9,1", "Gratuito em todas as suites e no jardim, segundo a avaliação dos hóspedes."],
      kitchen: ["Uma cozinha em cada suite", "Placa, micro-ondas, frigorífico e máquina de lavar loiça."],
      lounge: ["Lounge e bilhar", "Cadeirões de veludo, livros, jogos de tabuleiro e uma mesa de bilhar sob a bicicleta antiga."],
      lift: ["Elevador para todos os pisos", "Os pisos superiores têm acesso por elevador."],
      transfer: ["Transfer do aeroporto", "Mediante pedido e pagamento. O aeroporto fica a cerca de 25 minutos de carro."],
      quiet: ["Só adultos, noites tranquilas", "Hóspedes a partir dos 18 anos. Silêncio das 22:00 às 10:00."],
      parking: ["Estacionamento perto", "Estacionamento na rua junto à casa e o parque público do Plaza Madeira a 8 minutos."]
    },
    badgeAlt: "Bebidas quentes grátis, 24 horas · CBA Suites Madeira"
  },
  loc: {
    label: "Localização",
    h2: "Tudo a uma curta caminhada",
    lead: "A casa fica logo acima do centro, por isso o caminho para a cidade é a descer. Cada tempo abaixo é um percurso a pé real a partir da nossa porta, calculado no OpenStreetMap.",
    cats: { sight: "Monumentos e museus", taste: "Comida, vinho e compras", green: "Parques e jardins", sea: "Mar e transportes" },
    places: {
      plaza: "Centro comercial Plaza Madeira", casino: "Casino da Madeira", natural: "Museu de História Natural", catarina: "Parque de Santa Catarina",
      freitas: "Casa-Museu Frederico de Freitas", municipal: "Jardim Municipal", pico: "Miradouro da Fortaleza do Pico", cr7: "Museu CR7",
      blandys: "Blandy's Wine Lodge", marina: "Marina do Funchal e passeios de barco", luzia: "Jardins de Santa Luzia", se: "Sé do Funchal",
      magnolia: "Parque da Quinta Magnólia", mercado: "Mercado dos Lavradores", story: "Madeira Story Centre", cablecar: "Teleférico do Monte",
      almirante: "Praia do Almirante Reis", santamaria: "Rua de Santa Maria, Zona Velha", saotiago: "Fortaleza de São Tiago", lido: "Piscinas do Lido"
    },
    nearLabel: "Mesmo ao lado",
    near: { bus: "Paragem de autocarro", sam: "Terminal de autocarros SAM", pharmacy: "Farmácia", taxi: "Praça de táxis", pingo: "Supermercado Pingo Doce", eat: "restaurantes e cafés num raio de 500 m" },
    min: "{n} min", mapAria: "Mapa do centro do Funchal com percursos a pé desde o CBA Suites", you: "CBA Suites", ring: "{n} min a pé",
    ocean: "Oceano Atlântico", osm: "Dados do mapa © contribuidores do OpenStreetMap", hint: "Escolha um local para ver o percurso.",
    gmaps: "Abrir no Google Maps", directions: "Direções"
  },
  tours: {
    label: "Passeios na ilha",
    h2: "A Madeira começa à porta",
    lead: "A maioria dos passeios pela ilha recolhe os hóspedes no centro do Funchal, e os barcos para ver golfinhos e baleias saem da marina, a 15 minutos a pé. Os tempos de viagem contam a partir da casa.",
    filters: { all: "Todos", peaks: "Picos", levadas: "Levadas e floresta", coast: "Costa e piscinas", villages: "Vilas", gardens: "Jardins", sea: "No mar" },
    car: "≈ {n} min de carro", boats: "{n} min a pé até aos barcos", ferry: "Ferry desde o porto do Funchal",
    items: {
      arieiro: ["Pico do Arieiro", "O nascer do sol acima das nuvens a 1818 m e o início do trilho PR1 até ao Pico Ruivo."],
      monte: ["Monte e os carros de cesto", "Os jardins do Monte Palace, a igreja de Nossa Senhora do Monte e a descida nos carros de cesto."],
      botanico: ["Jardim Botânico", "Socalcos com plantas de cinco continentes sobre o Funchal, ligados ao Monte por outro teleférico."],
      girao: ["Skywalk do Cabo Girão", "Um piso de vidro a 580 m sobre o mar, numa das falésias mais altas da Europa."],
      camara: ["Câmara de Lobos", "A vila piscatória que Churchill veio pintar, com barcos coloridos e bares de poncha."],
      curral: ["Curral das Freiras", "Uma aldeia no fundo de um anel de montanhas, vista do miradouro da Eira do Serrado."],
      balcoes: ["Levada dos Balcões", "Um passeio fácil de 1,5 km ao longo de uma levada até um miradouro sobre o vale do Ribeiro Frio."],
      caldeirao: ["Caldeirão Verde", "Uma levada pela floresta Laurissilva e por túneis até uma cascata num caldeirão verde."],
      fanal: ["Floresta do Fanal", "Árvores centenárias no nevoeiro do planalto do Paul da Serra."],
      moniz: ["Piscinas do Porto Moniz", "Piscinas naturais de água do mar na lava negra, no extremo noroeste da ilha."],
      seixal: ["Praia do Seixal", "Areia vulcânica negra sob falésias verdes na costa norte."],
      veu: ["Véu da Noiva", "A cascata que cai da falésia diretamente para o mar."],
      santana: ["Santana", "Casas triangulares de colmo e campos em socalcos na verde costa norte."],
      lourenco: ["Ponta de São Lourenço", "O cabo leste, despido e em tons de vermelho e ocre, percorrido pelo trilho PR8."],
      pontasol: ["Ponta do Sol", "Uma vila soalheira da costa sul, com uma pequena praia e um cais para o pôr do sol."],
      yacht: ["Golfinhos e baleias", "Passeios de barco a partir da marina do Funchal. Há golfinhos durante todo o ano."],
      desertas: ["Ilhas Desertas", "Um dia inteiro à vela até à reserva natural onde vive o lobo-marinho."],
      portosanto: ["Porto Santo", "Nove quilómetros de areia dourada na ilha vizinha, a cerca de 2 h 15 min de ferry."]
    },
    mapAria: "Mapa da Madeira com os destinos dos passeios e tempos de viagem desde o CBA Suites",
    funchal: "Funchal", porto: "Porto Santo", desertas: "Desertas"
  },
  seasons: {
    label: "Quando vir",
    h2: "Uma primavera que dura o ano inteiro",
    lead: "As máximas diurnas ficam entre 20 e 27 °C e o mar nunca desce abaixo dos 18 °C. Escolha um mês para ver o que acontece.",
    air: "Ar, máxima diurna", sea: "Mar", table: "Ver em tabela", month: "Mês",
    note: "Médias de longo prazo para o Funchal, arredondadas. O tempo varia de ano para ano.",
    events: [
      "O mês mais calmo: trilhos vazios e os preços mais baixos do ano.",
      "Carnaval, com o grande cortejo na Avenida do Mar.",
      "Flores de primavera e levadas cheias depois das chuvas de inverno.",
      "A Festa da Flor costuma começar no fim de abril ou em maio.",
      "Tapetes de flores e cortejos no centro do Funchal.",
      "Fogo de artifício sobre a baía aos sábados, durante o Festival do Atlântico.",
      "Mar quente, noites longas e concertos ao ar livre.",
      "O mês mais quente. A romaria do Monte realiza-se a 15 de agosto.",
      "Festa do Vinho Madeira e a vindima.",
      "Festival da Natureza: caminhadas, canyoning e desportos náuticos.",
      "Festa da Castanha no Curral das Freiras, a 25 minutos.",
      "Iluminações de Natal e, depois, um dos maiores espetáculos de fogo de artifício de Ano Novo do mundo."
    ]
  },
  reviews: {
    label: "Avaliações",
    h2: "O que escrevem os hóspedes",
    lead: "945 avaliações no Booking.com e 117 no Google. Aqui estão as notas e o que os hóspedes mais referem.",
    count: "{n} avaliações",
    subs: { clean: "Limpeza", comfort: "Conforto", facilities: "Comodidades", location: "Localização", staff: "Funcionários", value: "Qualidade/preço", wifi: "Wi-Fi gratuito" },
    themes: [
      ["A receção", "Um lounge que se fotografa: música, cadeirões, bilhar e livros."],
      ["Um copo de boas-vindas", "Vinho Madeira e doces à espera na receção quando chega."],
      ["Vistas das varandas", "Mar e montanhas a partir das varandas, bem acima da cidade."],
      ["Limpo e fresco", "Suites impecáveis, com bom cheiro e tudo o que é preciso."],
      ["Chegada fácil", "Check-in autónomo com código e respostas rápidas do concierge."],
      ["Tudo a pé", "Supermercado, cafés, o parque e a marginal, tudo a pé."]
    ],
    read: "Ler avaliações no Booking.com", readG: "Avaliações no Google", note: "Notas de novembro de 2026."
  },
  gallery: {
    label: "Galeria", h2: "Espreite", count: "{n} fotos",
    filters: { all: "Todas", suites: "Suites", views: "Vistas", pool: "Piscina e jardim", lounge: "Lounge", details: "Detalhes" },
    alts: {
      "612644740": "A baía do Funchal vista da varanda da Suite Superior com Vista Mar", "474754100": "A piscina vista de cima, com espreguiçadeiras no deck",
      "240155183": "Lounge da receção com cadeirões de veludo", "474756863": "A baía emoldurada pela claraboia da suite loft",
      "courtyard-dusk": "A fachada verde-menta e o pátio da piscina ao anoitecer", "612644780": "Sala da Suite Superior com vista sobre a cidade e o mar",
      "599496750": "Vinho Madeira e doces na mesa da receção", "474756830": "Sala da suite loft com escadas para o quarto",
      "474755098": "Sala da Suite Queen com janela panorâmica sobre o Funchal", "244741748": "Piscina e muro de basalto do jardim",
      "599502789": "Quarto da Suite King com vista para a piscina", "599497006": "Bicicleta antiga com um cesto de rosas brancas",
      "474756817": "Quarto no sótão com claraboia na suite loft", "240155229": "Sala de bilhar e a bicicleta antiga no lounge",
      "599500529": "Suite Deluxe com Vista Mar, sala de estar e de jantar", "599497603": "O Funchal e a Fortaleza do Pico vistos de uma suite com vista cidade",
      "facade-pool": "A casa refletida na piscina", "474755127": "Terraço e kitchenette da Suite Queen",
      "599502300": "Buganvília sobre toalhas lavadas", "598772545": "Quarto de uma Suite com Vista Cidade",
      "437912696": "Palmeira sobre o canto da piscina", "240137137": "Kitchenette com fruta fresca e chávenas de café",
      "599502761": "Sala da Suite King com vista para a cidade", "240155223": "Estúdio com a porta aberta para o terraço",
      "474754710": "Casa de banho com duche", "612644819": "Quarto da Suite Superior com Vista Mar",
      "599497378": "Flores na mesa de cabeceira", "474754027": "Quarto da Suite Deluxe"
    }
  },
  faq: {
    label: "Perguntas",
    h2: "Bom saber",
    items: [
      ["A que horas são o check-in e o check-out?", "O check-in é das 15:00 às 00:30 e o check-out até às 10:30. Indique a hora de chegada com antecedência e receberá um código para entrar de forma autónoma."],
      ["A piscina está aberta todo o ano?", "Sim. A piscina exterior está aberta todo o ano, com espreguiçadeiras no deck e o jardim à volta."],
      ["A que distância fica o centro do Funchal?", "O Casino fica a 600 m (8 min a pé), a marina a 1,1 km (15 min) e a Sé a 1,2 km (16 min). O centro comercial Plaza Madeira, com um supermercado Pingo Doce, fica a 8 minutos."],
      ["As suites têm cozinha?", "Sim. Todos os estúdios e suites têm kitchenette com placa, micro-ondas, frigorífico, chaleira e máquina de lavar loiça, além de mesa de jantar."],
      ["Como chego do aeroporto?", "O Aeroporto Cristiano Ronaldo (FNC) fica a 20 km, cerca de 25 minutos de carro. Pode pedir um transfer pago; também há táxis e autocarros do aeroporto para o centro."],
      ["Há estacionamento?", "Há estacionamento na rua junto à casa, embora nem sempre haja lugar, e o parque público do Plaza Madeira a 8 minutos a pé."],
      ["Posso fazer passeios pela ilha a partir daqui?", "Sim. A maioria dos passeios, das levadas ao nascer do sol no Pico do Arieiro e aos passeios de jipe, recolhe os hóspedes no centro do Funchal. Os barcos para ver golfinhos e baleias saem da marina, a 15 minutos a pé."],
      ["Posso ficar com crianças?", "O CBA Suites é para adultos: a idade mínima é de 18 anos e não há berços nem camas extra."],
      ["São aceites animais?", "Não são aceites animais."],
      ["Há Wi-Fi?", "Há Wi-Fi gratuito em toda a casa. Os hóspedes dão-lhe nota 9,1 em 10."],
      ["Aceitam festas ou grupos?", "Não. O silêncio é das 22:00 às 10:00, e a casa não aceita reservas de grupo nem despedidas de solteiro."],
      ["Que línguas fala a equipa?", "Inglês e espanhol."]
    ]
  },
  book: {
    label: "Reservar",
    h2: "Planeie a sua estadia",
    lead: "Envie as suas datas e respondemos com a disponibilidade e o preço da sua suite. Ou reserve já no Booking.com.",
    arrival: "Chegada", departure: "Partida", guests: "Hóspedes", suite: "Suite", any: "Qualquer suite", name: "O seu nome",
    msg: "Mensagem", msgPh: "Hora de chegada, perguntas, pedidos…", less: "Menos hóspedes", more: "Mais hóspedes",
    card: "A sua estadia", nights: "Noites", dates: "Datas", code: "O código da porta chega antes do check-in",
    wa: "Enviar por WhatsApp", mail: "Enviar por email", bk: "Ver no Booking.com", direct: "Reservar no nosso site",
    err: { dates: "Escolha as datas de chegada e de partida.", order: "A partida tem de ser depois da chegada.", name: "Indique o seu nome para sabermos quem escreve." },
    note: "Respondemos pessoalmente. Nada é cobrado nesta página.",
    text: { hello: "Olá, CBA Suites!", want: "Gostaria de ficar", from: "de", to: "a", guests: "Hóspedes", suite: "Suite", name: "Nome", subject: "Estadia no CBA Suites" },
    plural: { night: { one: "noite", other: "noites" }, guest: { one: "hóspede", other: "hóspedes" } }
  },
  footer: {
    h2: "Até breve no Funchal",
    lead: "Escreva, ligue ou envie simplesmente as suas datas.",
    address: "Calçada da Caboqueira 54, São Pedro, 9000-900 Funchal, Madeira, Portugal",
    l: { addr: "Morada", phone: "Telefone e WhatsApp", email: "Email", coords: "Coordenadas", plus: "Plus Code", licence: "Registo de Alojamento Local", operator: "Gerido por" },
    maps: "Abrir no Google Maps", rights: "Todos os direitos reservados.", complaints: "Livro de Reclamações", credits: "Créditos das fotos",
    creditsNote: "Fotos da casa e das suites: CBA Suites Madeira. Fotos da ilha: autores do Wikimedia Commons, com as licenças abaixo."
  }
};
