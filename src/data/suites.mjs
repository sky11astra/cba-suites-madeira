// Типи номерів — з Booking.com (CBA Suites Madeira, листопад 2026): площа, ліжка, вигляд, зручності й фото кожного типу.
// bk — ID типу номера на Booking. price — «від €… за ніч» із madeirabymlv.com (null = «ціна за запитом»).
// Назви, ліжка й описи кожною мовою — у src/i18n/<мова>.mjs → suites.
const ALL = ["kitchen", "dish", "kettle", "tv", "heat", "dry", "bath", "privat", "lift"];
export const suites = [
  { id: "loft", bk: [612531701], m2: 78, guests: 4, view: ["sea", "city"], outdoor: ["balcony", "terrace"], price: null,
    amen: [...ALL, "sofa", "quiet", "long", "iron", "games", "outdoorDining"],
    photos: ["474756830", "474756863", "474756817", "474756844", "474756839", "474756925", "474756822", "244741712", "474754710"] },
  { id: "superiorSea", bk: [612531706], m2: 45, guests: 4, view: ["sea", "pool", "city"], outdoor: ["balcony", "terrace"], price: null,
    amen: [...ALL, "sofa", "quiet", "long", "iron", "games", "outdoorDining"],
    photos: ["612644780", "612644740", "612644819", "599497360"] },
  { id: "deluxeSea", bk: [612531704], m2: 56, guests: 4, view: ["sea", "pool", "city"], outdoor: [], price: null,
    amen: [...ALL, "sofa", "quiet", "long", "iron", "games"],
    photos: ["599500529", "599499988", "599500588", "599502300", "599501606", "599501607", "599501605", "474754043"] },
  { id: "king", bk: [612531705], m2: 43, guests: 4, view: ["pool", "city"], outdoor: ["balcony", "terrace"], price: null,
    amen: [...ALL, "sofa", "quiet", "long", "iron", "games"],
    photos: ["599502789", "599502761", "474757360", "599502767", "599503599", "599503622", "599504083", "474754100"] },
  { id: "queen", bk: [612531707], m2: 56, guests: 3, view: ["sea", "city"], outdoor: ["balcony"], price: null,
    amen: [...ALL, "sofa", "iron"],
    photos: ["474755098", "474755085", "474755127", "240155162", "474755077"] },
  { id: "deluxe", bk: [612531708], m2: 56, guests: 4, view: ["sea", "city"], outdoor: [], price: null,
    amen: [...ALL, "sofa"],
    photos: ["474754043", "474754027", "599501605", "474754100"] },
  { id: "city", bk: [612531703, 612531709], m2: 34, guests: 3, view: ["city"], outdoor: [], price: 90,
    amen: [...ALL, "sofa"],
    photos: ["598772545", "599291975", "598772543", "240155238", "599497603", "240155247", "599497448", "599502391"] },
  { id: "studio", bk: [612531702], m2: 32, guests: 2, view: ["city"], outdoor: ["terrace"], price: 75,
    amen: [...ALL, "quiet", "long", "games"],
    photos: ["240155223", "599495933", "599495426", "599494779", "599496100"] }
];
