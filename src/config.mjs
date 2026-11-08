// ⚠️ Єдине місце з реальними даними. Перевірте перед публікацією.
export default {
  brand: "CBA Suites Madeira",
  short: "CBA Suites",
  // Адреса сайту без слеша в кінці — для canonical, hreflang, sitemap, соцмереж. Зараз це демо на GitHub Pages.
  siteUrl: "https://sky11astra.github.io/cba-suites-madeira",
  // true = демо для власника: сторінки закриті від індексації (noindex). Після погодження й справжнього домену поставити false.
  demo: true,
  // Контакти взято з madeirabymlv.com (сайт, вказаний у профілі CBA Suites на Google Maps). Підтвердьте з власником.
  contacts: {
    phone: "+351 917 580 072",
    whatsapp: "351917580072",
    email: "madeiraluxuryvillas@gmail.com"
  },
  operator: "Madeira Luxury Villas",
  licence: "107149/AL",
  address: { street: "Calçada da Caboqueira 54", parish: "São Pedro", postal: "9000-900", city: "Funchal", region: "Madeira", country: "PT" },
  geo: { lat: 32.648275, lon: -16.918311, region: "PT-30", place: "Funchal, Madeira", plus: "J3XJ+8M", dms: "32°38′53.8″N 16°55′05.9″W" },
  checkIn: "15:00", checkInUntil: "00:30", checkOut: "10:30",
  links: {
    booking: "https://www.booking.com/hotel/pt/cba-suits.html",
    direct: "https://madeirabymlv.com/",
    maps: "https://maps.google.com/?cid=17525596859141678166",
    directions: "https://www.google.com/maps/dir/?api=1&destination=32.648275%2C-16.918311",
    complaints: "https://www.livroreclamacoes.pt/"
  },
  // Оцінки (листопад 2026). Показуються на сайті як факти з посиланнями; у schema.org їх свідомо немає (правила Google).
  ratings: {
    booking: { score: 8.4, count: 945, subs: { clean: 9.0, comfort: 8.9, facilities: 8.7, location: 8.7, staff: 8.3, value: 8.4, wifi: 9.1 } },
    google: { score: 4.3, count: 117 }
  },
  langs: [
    { code: "en", dir: "",    hreflang: "en", label: "EN", name: "English",    ogLocale: "en_GB", locale: "en-GB" },
    { code: "uk", dir: "uk/", hreflang: "uk", label: "UA", name: "Українська", ogLocale: "uk_UA", locale: "uk-UA" },
    { code: "pt", dir: "pt/", hreflang: "pt", label: "PT", name: "Português",  ogLocale: "pt_PT", locale: "pt-PT" },
    { code: "de", dir: "de/", hreflang: "de", label: "DE", name: "Deutsch",    ogLocale: "de_DE", locale: "de-DE" }
  ]
};
