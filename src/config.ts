export const siteConfig = {
  // attraction basics
  name: {
    th: 'อุทยานราชภักดิ์',
    en: 'Rajabhakti Park',
    zh: '拉差帕迪公园',
  },
  slug: 'rajabhakti-park',
  domain: 'https://rajabhakti.com',

  // Google Maps — ALL four on-page links point here
  mapsUrl: 'https://maps.app.goo.gl/c1sbfUirS3S5eCGE8',

  // real coordinates for the live weather / sunset API
  coords: {
    lat: 12.5016,
    lng: 99.9652,
    label: {
      th: '๑๒.๕๐°N · ๙๙.๙๖°E',
      en: '12.50°N · 99.96°E',
      zh: '北纬 12.50° · 东经 99.96°',
    },
  },

  rating: '4.4',
  reviewCount: '11,056',
  category: {
    th: 'สวนสาธารณะ',
    en: 'Park',
    zh: '公园',
  },

  // contact
  address: {
    th: 'FXX8+H8H, 8 ถนนเพชรเกษม ตำบลหนองแก อำเภอหัวหิน จังหวัดประจวบคีรีขันธ์ 77110 ประเทศไทย',
    en: 'FXX8+H8H, 8 Phet Kasem Rd, Nong Kae, Hua Hin District, Prachuap Khiri Khan 77110, Thailand',
    zh: 'FXX8+H8H, 8 Phet Kasem Rd, Nong Kae, Hua Hin District, Prachuap Khiri Khan 77110泰国',
  },
  phone: '+66649318466',
  phoneDisplay: '+66 64 931 8466',
  plusCode: 'FXX8+H8H · Hua Hin',

  hours: {
    th: 'ทุกวัน ๐๘:๐๐ – ๑๘:๐๐ น.',
    en: 'Daily 08:00 – 18:00',
    zh: '每日 08:00 – 18:00',
  },

  // JSON-LD / OG
  sameAs: [
    'https://maps.app.goo.gl/c1sbfUirS3S5eCGE8',
  ],

  // authoritative reference sources (E-E-A-T)
  sources: [
    {
      name: {
        th: 'การท่องเที่ยวแห่งประเทศไทย (ททท.) — อุทยานราชภักดิ์',
        en: 'Tourism Authority of Thailand — Rajabhakti Park',
        zh: '泰国国家旅游局（TAT）— 拉差帕迪公园',
      },
      url: 'https://www.tourismthailand.org/Attraction/rajabhakti-park',
    },
    {
      name: {
        th: 'Google Maps — ตำแหน่งที่ได้รับการยืนยัน',
        en: 'Google Maps — Verified location',
        zh: 'Google Maps — 已核实位置',
      },
      url: 'https://maps.app.goo.gl/c1sbfUirS3S5eCGE8',
    },
    {
      name: {
        th: 'วิกิพีเดีย — อุทยานราชภักดิ์',
        en: 'Wikipedia — Rajabhakti Park',
        zh: '维基百科 — 拉差帕迪公园',
      },
      url: 'https://en.wikipedia.org/wiki/Rajabhakti_Park',
    },
  ],
} as const;
