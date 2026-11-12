import type { Lang } from './ui';
import { expansionTopics } from './expansions';

export interface TopicKing {
  name: string;
  period: string;
  contribution: string;
}

export interface TopicSection {
  heading: string;
  body: string[];
}

export interface TopicLink {
  title: string;
  url: string;
  desc: string;
}

export interface TopicContent {
  lang: 'en' | 'th' | 'zh';
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: TopicSection[];
  kings?: TopicKing[];
  faq: { q: string; a: string }[];
  breadcrumb: { name: string; url: string }[];
  related: TopicLink[];
  updated?: string;
  mapUrl?: string;
  management?: string;
  photoTips?: string[];
  images?: { src: string; alt: string; credit?: string }[];
  routeSteps?: string[];
}

export const topics: TopicContent[] = [
  {
    lang: 'en',
    slug: 'visitor-guide',
    title: 'Rajabhakti Park Visitor Guide: Hours, Free Entry & Dress Code',
    description:
      'Plan your visit to Rajabhakti Park in Hua Hin. Find opening hours, free admission, dress code, parking, tram service, the best time to visit and on-site facilities.',
    h1: 'Rajabhakti Park Visitor Guide',
    intro:
      'Rajabhakti Park (อุทยานราชภักดิ์) is a monumental historical park about 8 km south of central Hua Hin in Prachuap Khiri Khan. Entry is free and the grounds are built around a ceremonial plaza flanked by seven larger-than-life bronze statues of great Thai kings. This guide covers the practical details you need before you go.',
    sections: [
      {
        heading: 'Opening Hours & the Best Time to Visit',
        body: [
          'The park is open every day from 08:00 to 18:00. The on-site museum and exhibition hall keep shorter hours, typically 09:00 to 16:00.',
          'The most comfortable and photogenic time to visit is late afternoon, roughly 16:00–18:00. Temperatures ease, the low sun lights the bronze statues with warm golden tones, and you avoid the midday heat. Because the main plaza is open with little shade, mornings and midday can be very hot — bring water, a hat and sunscreen.',
          'Note: the golden light peaks close to closing time, so arrive by mid-afternoon to explore before sunset.',
        ],
      },
      {
        heading: 'Admission & Fees',
        body: [
          'Entry to the park is completely free for all visitors; there is no ticket office or gate fee.',
          'Parking on site is free. A small tram or shuttle runs through the grounds for visitors who prefer not to walk, for a modest charge. Voluntary donations are accepted to help with park maintenance.',
        ],
      },
      {
        heading: 'Dress Code & Visitor Etiquette',
        body: [
          'Rajabhakti Park is a place of deep respect honoring the monarchy. As a visitor tip, please dress modestly — sleeveless tops, short skirts and shorts above the knee are discouraged. Keep a respectful demeanor, especially when taking photos.',
          'In front of the statues, avoid frivolous poses such as imitating the kings’ gestures or making jokes. Quietly admiring or paying respect is the most appropriate behaviour.',
          'Guidance can change; please confirm the latest dress and conduct rules with on-site staff before your visit.',
        ],
      },
      {
        heading: 'Getting There & Parking',
        body: [
          'The park sits on Phet Kasem Road (Highway 4), about 8 km south of Hua Hin town centre, with free on-site parking.',
          'Green songthaews (shared taxis) run from Hua Hin to Khao Takiab; from there you can take a taxi or walk the remaining distance. Suan Son Pradiphat Railway Halt is about 790 metres east of the park. From Hua Hin Airport, a taxi takes roughly 20–30 minutes.',
        ],
      },
      {
        heading: 'Facilities & Accessibility',
        body: [
          'Facilities include a visitor centre with historical exhibits, clean public restrooms, refreshment stalls near the parking area, and a souvenir shop with official park merchandise and local handicrafts.',
          'The park is spacious and flat, with ramps, so wheelchairs and strollers are welcome.',
        ],
      },
    ],
    faq: [
      {
        q: 'What are the opening hours of Rajabhakti Park?',
        a: 'Daily 08:00–18:00. The museum and exhibition hall are usually open 09:00–16:00.',
      },
      {
        q: 'Is there an entrance fee?',
        a: 'No. Entry is free for everyone, and on-site parking is also free.',
      },
      {
        q: 'What is the best time to visit?',
        a: 'Late afternoon, about 16:00–18:00, for cooler weather and golden light on the statues. The park closes at 18:00.',
      },
      {
        q: 'Is there a tram or shuttle?',
        a: 'A small tram or shuttle runs through the grounds for a modest fee; walking is also easy as the park is flat.',
      },
      {
        q: 'What should I wear?',
        a: 'Dress modestly out of respect for the monarchy — avoid sleeveless tops, short skirts and shorts above the knee. Confirm on-site before your visit.',
      },
      {
        q: 'Can I fly a drone?',
        a: 'Unauthorized drone flights are generally not permitted because the park is managed by the Royal Thai Army next to a military area. Contact the park administration in advance if you need aerial footage.',
      },
    ],
    breadcrumb: [
      { name: 'Home', url: '/en/' },
      { name: 'Visitor Guide', url: '/en/visitor-guide/' },
    ],
    related: [
      { title: 'The Seven Great Kings', url: '/en/seven-kings/', desc: 'Who the seven bronze statues honour and why.' },
      { title: 'Photography Guide', url: '/en/photos/', desc: 'Best spots and golden-hour tips.' },
      { title: 'How to Get There', url: '/en/how-to-get-there/', desc: 'Directions from Hua Hin town.' },
    ],
    updated: 'Visitor guide updated October 2026',
  },
  {
    lang: 'en',
    slug: 'seven-kings',
    title: 'The Seven Great Kings of Rajabhakti Park: Who They Were',
    description:
      'Meet the seven Thai kings honoured by bronze statues at Rajabhakti Park — Ram Khamhaeng, Naresuan, Narai, Taksin, Rama I, Mongkut and Chulalongkorn — and why they shaped Thailand.',
    h1: 'The Seven Great Kings of Rajabhakti Park',
    intro:
      'Rajabhakti Park honours seven monarchs widely regarded as "The Great" kings of Siam and Thailand, spanning from the 13th to the 20th century. Their bronze statues form a memorial corridor through the country’s cultural and historical story. Here is who each king was and why they were chosen.',
    sections: [
      {
        heading: 'Why these seven kings?',
        body: [
          'The seven were selected as pivotal leaders who defended, reunified or modernised the kingdom at turning points in its history. Together they represent the Sukhothai, Ayutthaya, Thonburi and Rattanakosin eras.',
          'The name "Rajabhakti" was graciously bestowed by King Bhumibol Adulyadej (Rama IX), signifying the people’s deep loyalty and devotion to the monarchy.',
        ],
      },
      {
        heading: 'The statues & the artistry',
        body: [
          'Each statue stands about 13.9 metres high and is cast in bronze, with facial features, clothing and regalia verified against court documents and period art.',
          'Design was led by the Fine Arts Department, with casting shared among leading Thai foundries. From design to assembly, the entire park was completed in about 10 months (November 2014 – August 2015).',
        ],
      },
    ],
    kings: [
      {
        name: 'King Ram Khamhaeng the Great',
        period: 'Sukhothai Dynasty (reigned 1279–1298)',
        contribution: 'Created the Thai script and established Theravada Buddhism as the state religion.',
      },
      {
        name: 'King Naresuan the Great',
        period: 'Ayutthaya Dynasty (reigned 1590–1605)',
        contribution: 'Won independence from Burmese rule; his 1593 elephant-back duel is commemorated as Royal Thai Armed Forces Day.',
      },
      {
        name: 'King Narai the Great',
        period: 'Ayutthaya Dynasty (reigned 1656–1688)',
        contribution: 'Opened Siam to the world, sending envoys to the court of Louis XIV in France.',
      },
      {
        name: 'King Taksin the Great',
        period: 'Thonburi Dynasty (reigned 1767–1782)',
        contribution: 'Reunified Siam after the fall of Ayutthaya in 1767.',
      },
      {
        name: 'King Rama I',
        period: 'Chakri Dynasty (reigned 1782–1809)',
        contribution: 'Founded the Chakri dynasty and built Bangkok, the Grand Palace and the Temple of the Emerald Buddha.',
      },
      {
        name: 'King Mongkut (Rama IV)',
        period: 'Chakri Dynasty (reigned 1851–1868)',
        contribution: 'The father of Siamese science; accurately predicted the 1868 total solar eclipse.',
      },
      {
        name: 'King Chulalongkorn (Rama V)',
        period: 'Chakri Dynasty (reigned 1868–1910)',
        contribution: 'Abolished slavery and modernised Siam, keeping the country independent amid colonial pressures.',
      },
    ],
    faq: [
      {
        q: 'Who are the Seven Great Kings?',
        a: 'Ram Khamhaeng, Naresuan, Narai, Taksin, Rama I, Mongkut (Rama IV) and Chulalongkorn (Rama V).',
      },
      {
        q: 'How tall are the statues?',
        a: 'Each bronze statue is about 13.9 metres high.',
      },
      {
        q: 'When was Rajabhakti Park built?',
        a: 'Construction ran from November 2014 to August 2015, completed in roughly 10 months.',
      },
      {
        q: 'Why were these kings chosen?',
        a: 'They are seen as the great kings who founded, defended, reunified or modernised Thailand across the Sukhothai, Ayutthaya, Thonburi and Rattanakosin periods.',
      },
      {
        q: 'Is the park an official royal site?',
        a: 'It is a royally initiated historical park honouring the monarchy; day-to-day management is by the Royal Thai Army. It is not a ticketed commercial attraction.',
      },
    ],
    breadcrumb: [
      { name: 'Home', url: '/en/' },
      { name: 'Seven Kings', url: '/en/seven-kings/' },
    ],
    related: [
      { title: 'Visitor Guide', url: '/en/visitor-guide/', desc: 'Hours, free entry and facilities.' },
      { title: 'Photography Guide', url: '/en/photos/', desc: 'Best spots and golden-hour tips.' },
      { title: 'How to Get There', url: '/en/how-to-get-there/', desc: 'Directions from Hua Hin town.' },
    ],
    updated: 'History content updated October 2026',
  },
  {
    lang: 'en',
    slug: 'photos',
    title: 'Rajabhakti Park Photos: Best Spots & Golden-Hour Tips',
    description:
      'Where to photograph the seven bronze kings at Rajabhakti Park, the best golden-hour timing (16:00–18:00), and respectful photo etiquette.',
    h1: 'Photography Guide to Rajabhakti Park',
    intro:
      'The seven bronze statues against the Hua Hin mountains make Rajabhakti Park one of the most photogenic monuments near Hua Hin. Here are the best vantage points, timing and etiquette for memorable, respectful photos.',
    sections: [
      {
        heading: 'Best vantage points',
        body: [
          'For the full lineup, step back about 50 metres from the centre of the plaza so all seven statues sit beneath the hills behind them.',
          'For a portrait of a single king, move close to the pedestal and frame from below to emphasise the 13.9 m height.',
          'The wide ceremonial plaza, the entrance gateway and the mountains forming the backdrop all make strong compositions.',
        ],
      },
      {
        heading: 'Golden hour & light',
        body: [
          'The best light is late afternoon, roughly 17:00–18:00, when the low sun rakes across the bronze and gives a warm golden sheen. Arrive by mid-afternoon to set up before the 18:00 closing.',
          'Night and blue-hour shots are possible from outside the grounds after closing, but the statues are not lit for public access after 18:00.',
        ],
      },
      {
        heading: 'What to bring',
        body: [
          'A hat, water and sunscreen for the open, shadeless plaza; a standard or wide lens for the lineup; a telephoto for statue details.',
        ],
      },
      {
        heading: 'Etiquette & image rights',
        body: [
          'Keep poses respectful in front of the statues — no mimicking the kings or silly gestures. Tripods are fine in open areas but avoid blocking the walkways.',
          'Photos on this site are shown for non-profit educational reference; copyright and any licence belong to the original photographers. For publication, seek permission from the rights holders.',
        ],
      },
    ],
    faq: [
      {
        q: 'When is the best light for photos?',
        a: 'Late afternoon, about 16:00–18:00, for warm golden light. The park closes at 18:00.',
      },
      {
        q: 'Can I use a drone?',
        a: 'Generally not without prior approval; the park is managed by the Royal Thai Army next to a military area.',
      },
      {
        q: 'Can I take photos of the statues?',
        a: 'Yes, personal photography is welcome. Please stay respectful in front of the monuments.',
      },
      {
        q: 'Who owns the photos on this page?',
        a: 'They are shown for educational reference; copyright belongs to the original photographers, not this site.',
      },
    ],
    breadcrumb: [
      { name: 'Home', url: '/en/' },
      { name: 'Photography Guide', url: '/en/photos/' },
    ],
    related: [
      { title: 'Visitor Guide', url: '/en/visitor-guide/', desc: 'Hours, free entry and facilities.' },
      { title: 'The Seven Great Kings', url: '/en/seven-kings/', desc: 'Who the seven bronze statues honour.' },
      { title: 'How to Get There', url: '/en/how-to-get-there/', desc: 'Directions from Hua Hin town.' },
    ],
    updated: 'Photography guide updated October 2026',
  },
  {
    lang: 'en',
    slug: 'how-to-get-there',
    title: 'How to Get to Rajabhakti Park from Hua Hin (Transport Guide)',
    description:
      'Directions to Rajabhakti Park from Hua Hin town — by car, songthaew, train (Suan Son Pradiphat Halt), taxi and from Hua Hin Airport.',
    h1: 'How to Get to Rajabhakti Park',
    intro:
      'Rajabhakti Park is about 8 km south of Hua Hin town centre on Phet Kasem Road (Highway 4), Prachuap Khiri Khan. Here are the practical ways to reach it.',
    sections: [
      {
        heading: 'By car / taxi',
        body: [
          'From Hua Hin town, head south on Phet Kasem Road (Highway 4) for about 8 km. Free parking is available on site.',
          'A private taxi or ride-hailing car from Hua Hin costs a modest fare and drops you at the entrance.',
        ],
      },
      {
        heading: 'By public transport',
        body: [
          'Green songthaews (shared taxis) run regularly from Hua Hin to Khao Takiab. From Khao Takiab you can take a taxi or walk the remaining stretch to the park.',
          'Suan Son Pradiphat Railway Halt is about 790 metres east of the park — a scenic option if you are travelling by train along the coast.',
        ],
      },
      {
        heading: 'From Hua Hin Airport',
        body: [
          'Hua Hin Airport is roughly 20–30 minutes away by taxi or airport shuttle.',
        ],
      },
      {
        heading: 'Nearby stops to combine',
        body: [
          'Pair your visit with Khao Takiab (Chopsticks Mountain) and the historic Hua Hin Railway Station, both a short drive away.',
        ],
      },
    ],
    faq: [
      {
        q: 'How far is Rajabhakti Park from Hua Hin?',
        a: 'About 8 km south of Hua Hin town centre, roughly 15–20 minutes by car.',
      },
      {
        q: 'Is there public transport?',
        a: 'Green songthaews run to Khao Takiab; from there take a taxi or walk. The Suan Son Pradiphat Railway Halt is about 790 m east of the park.',
      },
      {
        q: 'Is parking free?',
        a: 'Yes, free on-site parking is available.',
      },
      {
        q: 'Can I visit by train?',
        a: 'Yes — Suan Son Pradiphat Railway Halt is about 790 m east of the park.',
      },
    ],
    breadcrumb: [
      { name: 'Home', url: '/en/' },
      { name: 'How to Get There', url: '/en/how-to-get-there/' },
    ],
    related: [
      { title: 'Visitor Guide', url: '/en/visitor-guide/', desc: 'Hours, free entry and facilities.' },
      { title: 'Photography Guide', url: '/en/photos/', desc: 'Best spots and golden-hour tips.' },
      { title: 'The Seven Great Kings', url: '/en/seven-kings/', desc: 'Who the seven bronze statues honour.' },
    ],
    updated: 'Transport guide updated October 2026',
  },
  {
    lang: 'th',
    slug: 'history',
    title: 'อุทยานราชภักดิ์: แหล่งเรียนรู้ประวัติศาสตร์และวัฒนธรรม',
    description:
      'อุทยานราชภักดิ์คือแหล่งเรียนรู้กลางแจ้งเกี่ยวกับประวัติศาสตร์ชาติไทยและสถาบันพระมหากษัตริย์ เหมาะสำหรับนักเรียน นักท่องเที่ยว และผู้สนใจประวัติศาสตร์',
    h1: 'อุทยานราชภักดิ์เป็นแหล่งเรียนรู้ประเภทใด',
    intro:
      'อุทยานราชภักดิ์เป็นทั้งอนุสาวรีย์และแหล่งเรียนรู้กลางแจ้ง (outdoor learning resource) ที่นำเสนอประวัติศาสตร์ชาติไทยและสถาบันพระมหากษัตริย์ผ่านอนุสาวรีย์สำริดของกษัตริย์เจ็ดพระองค์ หน้านี้ตอบคำถามที่พบบ่อยในกลุ่มผู้ค้นหาเรื่องการศึกษา: อุทยานราชภักดิ์จัดอยู่ในแหล่งเรียนรู้ประเภทใด',
    sections: [
      {
        heading: 'แหล่งเรียนรู้กลางแจ้ง (Outdoor Learning Resource)',
        body: [
          'อุทยานจัดอยู่ในประเภทแหล่งเรียนรู้ทางประวัติศาสตร์และวัฒนธรรมแบบกลางแจ้ง มีทางเดิน ลานพระราชพิธี และอนุสาวรีย์ที่เข้าชมได้โดยไม่เสียค่าเข้าชม เหมาะสำหรับการจัดทัศนศึกษาและการเรียนรู้นอกห้องเรียน',
          'เนื้อหาประวัติศาสตร์ถูกนำเสนอผ่านป้ายประวัติศาสตร์ อาคารพิพิธภัณฑ์ และการจัดแสดง ไม่ใช่สถาบันการศึกษาในรูปแบบโรงเรียน',
        ],
      },
      {
        heading: 'เจ็ดพระมหากษัตริย์ที่ได้รับการยกยอง',
        body: [
          'อุทยานถวายผ่านอนุสาวรีย์กษัตริย์เจ็ดพระองค์ที่ถือเป็น "มหาราช" ของสยามและไทย ได้แก่ พ่อขุนรามคำแหงมหาราช (สุโขทัย) สมเด็จพระนเรศวรมหาราช (อยุธยา) สมเด็จพระนารายณ์มหาราช (อยุธยา) สมเด็จพระเจ้าตากสินมหาราช (ธนบุรี) พระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลก (รัตนโกสินทร์ รัชกาลที่ 1) พระบาทสมเด็จพระจอมเกล้าเจ้าอยู่หัว (รัตนโกสินทร์ รัชกาลที่ 4) และพระบาทสมเด็จพระจุลจอมเกล้าเจ้าอยู่หัว (รัตนโกสินทร์ รัชกาลที่ 5)',
          'แต่ละพระองค์ทรงมีผลงานสำคัญ ทั้งการสร้างอักษรไทย ปกป้องเอกราช การรวมชาติ และการปฏิรูปประเทศให้ทันสมัย',
        ],
      },
      {
        heading: 'ความหมายของ "ราชภักดิ์"',
        body: [
          'พระนาม "ราชภักดิ์" ได้รับพระราชทานจากพระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดช (รัชกาลที่ 9) หมายถึงความจงรักภักดีและเทิดทูนของประชาชนที่มีต่อสถาบันพระมหากษัตริย์',
        ],
      },
      {
        heading: 'ศิลปะและวิศวกรรม',
        body: [
          'อนุสาวรีย์แต่ละองค์สูงประมาณ 13.9 เมตร หล่อด้วยสำริด จัดสร้างโดยกรมศิลปากรและโรงหล่อชั้นนำ ใช้วเวลาเพียงประมาณ 10 เดือน (พฤศจิกายน 2014 – สิงหาคม 2015)',
        ],
      },
      {
        heading: 'การเข้าชมสำหรับกลุ่มนักเรียนและศึกษา',
        body: [
          'การเข้าชมฟรี และพื้นที่กว้างขวาง เหมาะสำหรับการจัดกลุ่มทัศนศึกษา สามารถเดินชมด้วยตนเองหรือใช้คู่มือเสียงฟรีที่จัดไว้ให้',
        ],
      },
    ],
    faq: [
      {
        q: 'อุทยานราชภักดิ์เป็นแหล่งเรียนรู้ประเภทใด?',
        a: 'เป็นแหล่งเรียนรู้ทางประวัติศาสตร์และวัฒนธรรมแบบกลางแจ้ง (outdoor historical & cultural learning resource) ไม่ใช่โรงเรียนหรือพิพิธภัณฑ์ในอาคารเพียงอย่างเดียว',
      },
      {
        q: 'เจ็ดพระมหากษัตริย์คือใคร?',
        a: 'พ่อขุนรามคำแหงมหาราช สมเด็จพระนเรศวรมหาราช สมเด็จพระนารายณ์มหาราช สมเด็จพระเจ้าตากสินมหาราช พระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลก รัชกาลที่ 4 (มงกุฎ) และรัชกาลที่ 5 (จุลจอมเกล้า)',
      },
      {
        q: 'สร้างเมื่อใด?',
        a: 'จัดสร้างระหว่าง พฤศจิกายน 2014 ถึง สิงหาคม 2015 ใช้เวลาประมาณ 10 เดือน',
      },
      {
        q: 'เข้าชมฟรีหรือไม่?',
        a: 'ฟรีสำหรับทุกคน รวมถึงที่จอดรถ',
      },
      {
        q: 'เหมาะกับเด็กนักเรียนหรือไม่?',
        a: 'เหมาะมาก สามารถจัดเป็นทัศนศึกษาได้ และมีป้ายประวัติศาสตร์และคู่มือเสียงให้เรียนรู้',
      },
    ],
    breadcrumb: [
      { name: 'หน้าแรก', url: '/th/' },
      { name: 'ประวัติ', url: '/th/history/' },
    ],
    related: [
      { title: 'The Seven Great Kings (English)', url: '/en/seven-kings/', desc: 'Who the seven bronze statues honour.' },
      { title: 'Visitor Guide (English)', url: '/en/visitor-guide/', desc: 'Hours, free entry and facilities.' },
    ],
    updated: 'เนื้อหาประวัติศาสตร์ปรับปรุงตุลาคม 2026',
  },
  ...expansionTopics,
];

export const getTopic = (lang: Lang, slug: string): TopicContent | undefined =>
  topics.find((t) => t.lang === lang && t.slug === slug);
