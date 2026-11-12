import type { TopicContent } from './topics';

/** New, destination-specific English guides. Each route is an original topic, not a translation. */
type Guide = {
  slug: string;
  name: string;
  angle: string;
  context: string;
  visit: string;
  route: string;
  tip: string;
  place?: string;
  source?: string;
};

const park = 'https://maps.app.goo.gl/c1sbfUirS3S5eCGE8';
const search = (place: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place}, Prachuap Khiri Khan, Thailand`)}`;
const managers: Record<string, string> = {
  'nearby-suan-son-pradiphat-beach': 'Suan Son Pradiphat Beach is associated with the Royal Thai Army Infantry Centre at Pran Buri. Visitors should follow the beach-area administration’s current access and facility notices.',
  'nearby-hua-hin-railway-station': 'Hua Hin Railway Station is part of Thailand’s national railway system operated by the State Railway of Thailand. Railway safety and platform-access instructions take priority over sightseeing.',
  'nearby-pranburi-forest-park': 'Pran Buri Forest Park is a protected forest destination under Thailand’s Department of National Parks, Wildlife and Plant Conservation. Its trails and visitor facilities are managed separately from Rajabhakti Park.',
  'nearby-khao-sam-roi-yot': 'Khao Sam Roi Yot National Park is managed by Thailand’s Department of National Parks, Wildlife and Plant Conservation. Entry fees, trail access and closures are set by the national park authority.',
  'nearby-phraya-nakhon-cave': 'Phraya Nakhon Cave is inside Khao Sam Roi Yot National Park, managed by Thailand’s Department of National Parks, Wildlife and Plant Conservation. Follow instructions at the official trail entrance.',
  'nearby-sirinath-rajini-mangrove-centre': 'The Sirinath Rajini Centre is a mangrove education and restoration facility in the Pran Buri area. Its visitor programme is separate from the Royal Thai Army management of Rajabhakti Park.',
};
const photography: Record<string, string[]> = {
  'nearby-suan-son-pradiphat-beach': ['Frame the casuarina trees along the sand', 'Photograph the shoreline from a public access point in morning light'],
  'nearby-khao-takiab': ['Include the coastal headland and sea in a wide frame', 'Use a permitted temple viewpoint for the curve of the shoreline'],
  'nearby-wat-khao-takiap': ['Observe the temple roof details from the approach', 'Photograph the sea view without blocking worshippers'],
  'nearby-khao-tao': ['Look for fishing-village details from public lanes', 'Use the coast and hillside to establish the setting'],
  'nearby-sai-noi-beach': ['Frame the curved bay from the accessible beachfront', 'Use the hillside to show the cove’s scale'],
  'nearby-hua-hin-beach': ['Photograph long beach perspectives at low tide', 'Capture the changing shoreline in softer morning light'],
  'nearby-hua-hin-railway-station': ['Frame historic station roof details', 'Use a safe public viewpoint to show the station facade'],
  'nearby-cicada-market': ['Capture art and craft displays with permission', 'Try evening atmosphere images without obstructing vendors'],
  'nearby-tamarind-market': ['Photograph a dish before eating', 'Use warm stall lights to convey the evening food scene'],
  'nearby-hua-hin-night-market': ['Frame rows of lit stalls from a safe pedestrian position', 'Photograph local dishes with the vendor’s consent'],
  'nearby-pranburi-forest-park': ['Use the boardwalk as a leading line', 'Photograph mangrove roots and canopy patterns from the path'],
  'nearby-sirinath-rajini-mangrove-centre': ['Look for informative mangrove displays', 'Photograph restoration landscapes only from designated areas'],
  'nearby-wat-huay-mongkol': ['Use a wide frame to convey the Luang Phor Thuad monument', 'Photograph temple details respectfully'],
  'nearby-khao-hin-lek-fai': ['Use a clear-day panorama of Hua Hin', 'Frame the coastal skyline between foreground trees'],
  'nearby-rajasiri-golf': ['Photograph heritage clubhouse details from permitted areas', 'Keep cameras away from active play without permission'],
  'nearby-khao-sam-roi-yot': ['Photograph the limestone ridgelines from designated viewpoints', 'Look for patterns of wetland plants and reflections'],
  'nearby-phraya-nakhon-cave': ['Use the natural cave opening to frame the pavilion', 'Plan for changing shafts of natural light'],
  'nearby-vana-nava': ['Capture the park entrance or permitted water features', 'Check on-site rules before photographing other guests'],
  'nearby-bluport-hua-hin': ['Frame the shopping centre’s street-facing facade', 'Take indoor images only where the venue permits'],
  'nearby-khao-tao-reservoir': ['Use water reflections in a wide landscape', 'Keep an accessible shore path as foreground'],
};
const confirmedPhotos: Record<string, { file: string; label: string }[]> = {
  'nearby-suan-son-pradiphat-beach': [{ file: 'suan-son', label: 'Suan Son Pradiphat Beach' }],
  'nearby-khao-takiab': [{ file: 'khao-takiab', label: 'Khao Takiab coastal hill' }],
  'nearby-wat-khao-takiap': [{ file: 'wat-khao-takiap', label: 'Temple at Khao Takiab' }],
  'nearby-khao-tao': [{ file: 'khao-tao', label: 'Wat Khao Tao in the Khao Tao village area' }],
  'nearby-hua-hin-beach': [{ file: 'hua-hin-beach', label: 'Hua Hin beachfront at night' }],
  'nearby-hua-hin-railway-station': [{ file: 'hua-hin-station', label: 'Hua Hin Railway Station' }],
  'nearby-cicada-market': [{ file: 'cicada-market', label: 'Cicada Market in Hua Hin' }],
  'nearby-hua-hin-night-market': [{ file: 'hua-hin-night-market', label: 'Hua Hin Night Market' }],
  'nearby-sirinath-rajini-mangrove-centre': [{ file: 'sirinath-rajini', label: 'Sirinath Rajini mangrove study centre' }],
  'nearby-wat-huay-mongkol': [{ file: 'wat-huay-mongkol', label: 'Luang Phor Thuad monument at Wat Huay Mongkol' }],
  'nearby-khao-hin-lek-fai': [{ file: 'khao-hin-lek-fai', label: 'View from Khao Hin Lek Fai' }],
  'nearby-rajasiri-golf': [{ file: 'royal-hua-hin-golf', label: 'Royal Hua Hin Golf Course fairway' }],
  'nearby-khao-sam-roi-yot': [{ file: 'sam-roi-yot', label: 'Khao Sam Roi Yot National Park visitor centre' }],
  'nearby-phraya-nakhon-cave': [{ file: 'phraya-nakhon', label: 'Phraya Nakhon Cave' }],
  'nearby-bluport-hua-hin': [{ file: 'bluport', label: 'Bluport Hua Hin shopping centre' }],
  'nearby-tamarind-market': [{ file: 'tamarind-market', label: 'Street-food stalls at Tamarind Market' }],
  'nearby-vana-nava': [{ file: 'vana-nava', label: 'Vana Nava Water Jungle and water slides' }],
  'nearby-khao-tao-reservoir': [{ file: 'khao-tao-reservoir', label: 'Khao Tao Reservoir at dusk' }],
  'nearby-pranburi-forest-park': [{ file: 'pranburi-forest-park', label: 'Mangrove boardwalk in Pran Buri Forest Park' }],
  'nearby-sai-noi-beach': [{ file: 'sai-noi-beach', label: 'Sai Noi Beach at Khao Tao' }],
};
const photoCredit: Record<string, string> = {
  'tamarind-market': 'Wongnai',
  'vana-nava': 'Chillpainai',
  'khao-tao-reservoir': 'TrueID Travel',
  'pranburi-forest-park': 'Thai National Parks',
  'sai-noi-beach': 'Beach Lover',
};

const guides: Guide[] = [
  {
    slug: 'nearby-suan-son-pradiphat-beach', name: 'Suan Son Pradiphat Beach', angle: 'A quieter beach after the royal statues',
    context: 'Suan Son Pradiphat is known for its long shore, casuarina trees and comparatively relaxed setting south of central Hua Hin. The beach is associated with the military recreation area, whereas Rajabhakti Park is a historical monument. They make a contrasting culture-and-coast combination.',
    visit: 'Walk the open beach, look for the pine-shaded stretches and pause at the sea rather than treating it as a quick photo stop. Conditions for swimming vary with wind, tides and weather; follow beach warnings.',
    route: 'See the seven kings in the cooler morning, leave via the signed park exit and navigate separately to Suan Son Pradiphat Beach. Allow time for security or access arrangements at military-managed areas.',
    tip: 'Sunrise light is often attractive over the Gulf of Thailand. Check actual beach access and facilities on arrival.', place: 'Suan Son Pradiphat Beach', source: 'https://thai.tourismthailand.org/Attraction/หาดสวนสนประดิพัทธ์',
  },
  {
    slug: 'nearby-khao-takiab', name: 'Khao Takiab', angle: 'Hilltop temple views near Hua Hin',
    context: 'Khao Takiab, also called Chopsticks Hill, is a coastal headland south of Hua Hin. Its temples and sea-facing viewpoints offer a very different perspective from the symmetrical bronze-statue plaza at Rajabhakti Park.',
    visit: 'Explore the temple approaches respectfully and climb only where access is open. Steps can be steep, and monkeys may be present around the hill: do not feed or approach them.',
    route: 'Visit Rajabhakti Park first, then take a local taxi or car toward Khao Takiab. Finish with a meal around the coastal district rather than returning to central town between stops.',
    tip: 'Covered shoulders, safe footwear and water are useful for both the memorial park and temple area.', place: 'Khao Takiab', source: 'https://www.tourismthailand.org/Destinations/Provinces/Samut-Prakan/240',
  },
  {
    slug: 'nearby-wat-khao-takiap', name: 'Wat Khao Takiap', angle: 'A temple visit with coastal viewpoints',
    context: 'Wat Khao Takiap occupies the well-known hill by the sea. Visitors come for religious architecture and views down the Hua Hin coastline, not for the historic bronze monuments found at Rajabhakti.',
    visit: 'Leave shoes where required, respect worshippers and look for small details in temple roofs and statues. Access to viewpoints depends on steps and the condition of paths.',
    route: 'After the park, navigate to the temple by its own map listing. Set aside extra time for stairs and a slow return to the vehicle.',
    tip: 'The temple and the wider Khao Takiab headland are related but not interchangeable navigation destinations.', place: 'Wat Khao Takiap',
  },
  {
    slug: 'nearby-khao-tao', name: 'Khao Tao Village', angle: 'A slower-paced coastal village excursion',
    context: 'Khao Tao sits farther south on the coast and is associated with fishing-community scenery, a reservoir and beaches. It works well for visitors who want a gentle local stop after the formal ceremonial space of Rajabhakti Park.',
    visit: 'Explore the publicly accessible waterfront and village streets at an unhurried pace. Observe fishing activity without blocking residents or private work areas.',
    route: 'Drive south from the memorial park and use the village name rather than a generic Hua Hin pin. Combine with one nearby beach, not every attraction in a single rushed loop.',
    tip: 'Small businesses and access routes may change; confirm the specific point you want before leaving.', place: 'Khao Tao Village',
  },
  {
    slug: 'nearby-sai-noi-beach', name: 'Sai Noi Beach', angle: 'A compact bay south of the park',
    context: 'Sai Noi Beach is a small coastal cove near Khao Tao. The enclosed bay and surrounding hills create a different shoreline experience from the long, open Hua Hin beachfront.',
    visit: 'Look at the water and weather before deciding to swim. Explore the public beachfront without entering resort-only spaces and leave adequate time to get back before dark.',
    route: 'Tour Rajabhakti Park earlier in the day, then continue toward Khao Tao and Sai Noi for a late lunch or coastal walk.',
    tip: 'The road and parking situation may be tight at busy times; check the exact entrance on a current map.', place: 'Sai Noi Beach',
  },
  {
    slug: 'nearby-hua-hin-beach', name: 'Hua Hin Beach', angle: 'The classic city beach and promenade',
    context: 'Hua Hin Beach is the resort town’s best-known long sandy shore, with accommodation and seaside activity around it. It offers a lively contrast to Rajabhakti Park’s historical and ceremonial atmosphere.',
    visit: 'Choose a public beach access point, walk along the sand and look for the changing shoreline at high and low tide. Horse-riding and water activities may operate in designated areas; ask about safety before joining.',
    route: 'The beach is generally north of the park. Travel to a named public access such as the central Hua Hin beach entrance instead of following a map pin to an arbitrary stretch of shore.',
    tip: 'Weather, tide and season affect the usable beach width and swimming conditions.', place: 'Hua Hin Beach', source: 'https://www.tourismthailand.org/Attraction/hat-hua-hin',
  },
  {
    slug: 'nearby-hua-hin-railway-station', name: 'Hua Hin Railway Station', angle: 'Historic railway architecture in town',
    context: 'Hua Hin’s railway heritage is central to its growth as a seaside destination. The station’s traditional architectural motifs make it a rewarding companion to the Thai history narrative at Rajabhakti Park.',
    visit: 'Observe the station buildings and details from permitted public areas. Keep platforms and railway operations unobstructed, and never step onto active tracks for photographs.',
    route: 'After the monument park, head north to the station near central Hua Hin and finish with a walk or meal in town.',
    tip: 'Train services and access patterns can change; use current railway announcements for travel planning.', place: 'Hua Hin Railway Station',
  },
  {
    slug: 'nearby-cicada-market', name: 'Cicada Market', angle: 'An arts-and-crafts evening pairing',
    context: 'Cicada Market is known for creative stalls, food and performance activity in Hua Hin’s Khao Takiab area. The market is a different kind of cultural experience from the statues, focusing on contemporary crafts and local leisure.',
    visit: 'Browse handmade goods, look out for exhibitions or performances and compare vendors before purchasing. Opening days and stall mix change, so do not assume it operates every evening.',
    route: 'Visit Rajabhakti Park in daylight, rest during the hottest hours, then travel to the market only if its opening schedule is confirmed.',
    tip: 'Make the market an evening stop; it is not a substitute for the park’s daytime visit.', place: 'Cicada Market',
  },
  {
    slug: 'nearby-tamarind-market', name: 'Tamarind Market', angle: 'Casual food stalls and an evening atmosphere',
    context: 'Tamarind Market is an evening food-oriented market in the Hua Hin area, often paired with the nearby arts market. It provides a casual place to eat after a historical sightseeing day.',
    visit: 'Walk through the food stalls, compare cooked-to-order dishes and bring a payment method accepted by smaller vendors. Check hygiene, ingredients and spice levels when ordering.',
    route: 'Keep Rajabhakti Park as the daytime anchor; travel to Tamarind Market in the evening after checking current operating nights.',
    tip: 'Market schedules are variable, particularly around holidays and special events.', place: 'Tamarind Market Hua Hin',
  },
  {
    slug: 'nearby-hua-hin-night-market', name: 'Hua Hin Night Market', angle: 'Street food and souvenir shopping',
    context: 'The central night market is one of Hua Hin’s familiar evening districts, associated with food, small shops and a busy walking atmosphere. It pairs conveniently with a day at the royal memorial park.',
    visit: 'Browse the main street and side lanes, check displayed food prices and watch for moving vehicles at crossings. Take your time choosing seafood or snacks.',
    route: 'Complete the memorial park before closing, return north toward Hua Hin town and head to the night market when vendors are setting up.',
    tip: 'Do not confuse Hua Hin Night Market with Cicada or Tamarind Market; each has its own map listing.', place: 'Hua Hin Night Market',
  },
  {
    slug: 'nearby-pranburi-forest-park', name: 'Pran Buri Forest Park', angle: 'A mangrove boardwalk and coastal ecology',
    context: 'Pran Buri Forest Park protects a coastal landscape with mangrove learning routes and sea views. This changes the focus from Thai royal history to natural habitats and how mangroves function.',
    visit: 'Follow the marked boardwalk where open, read ecological interpretation signs and watch for birds and mangrove roots. Avoid leaving the trail or disturbing wildlife.',
    route: 'Allow a separate southbound excursion after Rajabhakti Park, preferably in cooler hours. Use the forest park’s own entrance pin.',
    tip: 'Boardwalk access and boat activity depend on weather and management; verify locally.', place: 'Pran Buri Forest Park', source: 'https://www.tourismthailand.org/Attraction/pran-buri-forest-park',
  },
  {
    slug: 'nearby-sirinath-rajini-mangrove-centre', name: 'Sirinath Rajini Mangrove Centre', angle: 'Mangrove conservation interpretation',
    context: 'The Sirinath Rajini Centre for Mangrove Forest Studies is an educational nature destination in the Pran Buri area. It complements Rajabhakti Park by adding a conservation and environmental-learning stop.',
    visit: 'Explore any open educational exhibits and managed trails, paying attention to mangrove species, tidal influence and restoration work. Group visits may require prior coordination.',
    route: 'Travel south from the park following the centre’s specific directions, not merely the broader Pran Buri Forest Park name.',
    tip: 'Check current entry arrangements and opening information directly before the drive.', place: 'Sirinath Rajini Centre for Mangrove Forest Studies', source: 'https://www.tourismthailand.org/Attraction/sirinath-rajini-centre-for-mangrove-forest-studies',
  },
  {
    slug: 'nearby-wat-huay-mongkol', name: 'Wat Huay Mongkol', angle: 'A major Buddhist pilgrimage stop inland',
    context: 'Wat Huay Mongkol is known for its large Luang Phor Thuad monument. The site introduces religious devotion and temple practices, distinct from Rajabhakti Park’s royal history exhibits.',
    visit: 'Dress for a temple, keep voices low around worshippers and explore open courtyards and the monument at a respectful distance.',
    route: 'This is an inland detour from the coast rather than a short walk from Rajabhakti Park. Use a car or arranged transport and allocate a separate sightseeing block.',
    tip: 'Check prayer and event crowds before planning a tight schedule.', place: 'Wat Huay Mongkol',
  },
  {
    slug: 'nearby-khao-hin-lek-fai', name: 'Khao Hin Lek Fai Viewpoint', angle: 'Elevated views across Hua Hin',
    context: 'Khao Hin Lek Fai is a hill viewpoint overlooking the city and coast. It provides useful geographic context after seeing the seven statues against Hua Hin’s hills.',
    visit: 'Use marked trails and official viewing areas. Watch for uneven surfaces and high temperatures on exposed stretches.',
    route: 'After touring the park, drive toward the viewpoint west of the town centre, allowing time for winding access roads and parking.',
    tip: 'Choose a clear day; haze and rain can reduce the panorama.', place: 'Khao Hin Lek Fai Viewpoint',
  },
  {
    slug: 'nearby-rajasiri-golf', name: 'Royal Hua Hin Golf Course', angle: 'A look at Hua Hin’s golf heritage',
    context: 'Royal Hua Hin Golf Course is closely tied to the resort town’s early leisure history. It offers a different lens on Hua Hin’s growth than the royal-monument timeline at Rajabhakti Park.',
    visit: 'The course is an active sporting facility, not an open public park. Ask about bookings and visitor access before going, and do not enter playing areas without permission.',
    route: 'Combine a booked golf session or permitted visit with a morning at Rajabhakti Park; the course is closer to the central railway district.',
    tip: 'Green fees, tee times and access policies should be checked with the course directly.', place: 'Royal Hua Hin Golf Course',
  },
  {
    slug: 'nearby-khao-sam-roi-yot', name: 'Khao Sam Roi Yot National Park', angle: 'Limestone peaks and wetland landscapes',
    context: 'Khao Sam Roi Yot is a national park farther south of Hua Hin, celebrated for limestone hills, wetlands and caves. It is a substantial nature outing, not a quick stop next door to Rajabhakti Park.',
    visit: 'Select one trail or access area according to fitness and park guidance. Heat, rain and trail conditions can make hiking strenuous.',
    route: 'Treat this as an extended day trip with transport and enough time for the journey. Do not combine all national park highlights with a rushed visit to the statues.',
    tip: 'Confirm national park fees, opening conditions and seasonal closures through official park channels.', place: 'Khao Sam Roi Yot National Park',
  },
  {
    slug: 'nearby-phraya-nakhon-cave', name: 'Phraya Nakhon Cave', angle: 'A demanding cave hike and historic pavilion',
    context: 'Phraya Nakhon Cave is famed for the pavilion illuminated through the cave roof in Khao Sam Roi Yot National Park. It is culturally evocative but physically very different from the flat plaza at Rajabhakti Park.',
    visit: 'Expect steep steps and uneven ground; plan footwear, hydration and enough daylight. Light beams vary by season and time, and access may be restricted in poor weather.',
    route: 'Schedule this on a dedicated morning, ideally on a separate day from the memorial park. Navigation should target the appropriate national park trailhead.',
    tip: 'Check park opening, trail status, boats and fees directly; do not promise an easy or accessible walk.', place: 'Phraya Nakhon Cave', source: 'https://thai.tourismthailand.org/Attraction/ถ้ำพระยานคร-2',
  },
  {
    slug: 'nearby-vana-nava', name: 'Vana Nava Water Jungle', angle: 'A family-friendly water park alternative',
    context: 'Vana Nava is a commercial water park in Hua Hin with pools and slides. Families can use it as a playful counterpoint to a shorter educational visit to Rajabhakti Park.',
    visit: 'Check age and height limits for rides, sun protection and changing facilities. Admission, hours and ticket types are separate from the free memorial park.',
    route: 'Tour the bronze statues early, then book an afternoon at Vana Nava if its current schedule suits your group.',
    tip: 'Use the operator’s current ticket information; do not infer prices from older travel blogs.', place: 'Vana Nava Water Jungle',
  },
  {
    slug: 'nearby-bluport-hua-hin', name: 'Bluport Hua Hin', angle: 'An indoor break from the tropical heat',
    context: 'Bluport is a shopping and dining centre in Hua Hin. Although not a heritage attraction, it provides an air-conditioned break and a practical food stop between outdoor sightseeing locations.',
    visit: 'Use the dining area and facilities to rest, especially when visiting with children or older travellers. Shop opening hours can differ from restaurant hours.',
    route: 'Travel north from Rajabhakti Park toward Hua Hin town; treat the mall as a convenience stop rather than a historical landmark.',
    tip: 'Check individual shop availability on the day.', place: 'Bluport Hua Hin',
  },
  {
    slug: 'nearby-khao-tao-reservoir', name: 'Khao Tao Reservoir', angle: 'A tranquil water-side stroll',
    context: 'The Khao Tao reservoir area is a quiet landscape feature near the coastal village. It can offer a restful contrast after the scale and heat of the Rajabhakti ceremonial ground.',
    visit: 'Observe the water from public paths and watch for local use of the reservoir edges. Avoid restricted structures and keep children away from steep banks.',
    route: 'Use a precise Khao Tao Reservoir map pin when continuing south; it is not the same entrance as Sai Noi Beach.',
    tip: 'A short stop works best when already exploring Khao Tao.', place: 'Khao Tao Reservoir',
  },
  {
    slug: 'from-bangkok', name: 'Bangkok to Rajabhakti Park', angle: 'How to plan a journey from the capital',
    context: 'Rajabhakti Park lies south of Hua Hin in Prachuap Khiri Khan province. From Bangkok, the journey requires intercity transport followed by a local connection; it is not within the Bangkok urban transport network.',
    visit: 'Compare trains, intercity coaches and private transfers by total door-to-door time, not just the advertised departure duration. Allow extra time for traffic, holiday travel and the park’s daylight hours.',
    route: 'Travel to Hua Hin first, then arrange a taxi or other local transport to the park’s specific Google Maps listing. For a day trip, check your return service before departure.',
    tip: 'Road traffic can be particularly slow on weekends. Book a night in Hua Hin if you also plan the beaches.',
  },
  {
    slug: 'from-hua-hin-station', name: 'Hua Hin Railway Station to Rajabhakti Park', angle: 'The final leg after arriving by train',
    context: 'The railway station is in the central part of Hua Hin while the royal memorial lies to the south. There is no direct rail platform inside Rajabhakti Park.',
    visit: 'At the station, decide between a taxi, ride-hailing option or locally confirmed shared transport. Agree on the fare or check the app estimate before setting out.',
    route: 'Exit Hua Hin station, set Rajabhakti Park as the exact destination and follow the road south toward Nong Kae. Arrange pickup or a return ride in advance if visiting near closing.',
    tip: 'Do not confuse Suan Son Pradiphat railway halt with the park entrance; walking routes should be checked for safe pedestrian access.',
  },
  {
    slug: 'parking-and-entrance', name: 'Parking and Park Entrance', angle: 'Arriving by car without missing the turn',
    context: 'The park occupies a large ceremonial site off Phet Kasem Road. Its entry and vehicle arrangements may be influenced by military or event management.',
    visit: 'Follow posted security and parking instructions. Keep access roads open, never park in a restricted lane and check whether special ceremonies alter the normal entry route.',
    route: 'Use the park’s dedicated Google Maps place listing rather than its general coordinates alone. From the entrance, look for visitor parking signs before walking toward the statues.',
    tip: 'Carry water from the vehicle because the plaza can be exposed and hot.',
  },
  {
    slug: 'accessible-visit', name: 'Accessibility at Rajabhakti Park', angle: 'Planning for mobility needs and strollers',
    context: 'Rajabhakti Park has a broad, relatively level ceremonial plaza, but the sheer scale and lack of shade can be challenging even without steep steps.',
    visit: 'Ask on-site staff about the nearest drop-off point, available ramps, toilets and any shuttle provision before committing to a long walk. Surface quality and temporary barriers can vary.',
    route: 'Start with the nearest permitted arrival area, see the main statue alignment and take rest breaks before exploring the wider grounds.',
    tip: 'A companion, sun protection and a morning start may help. Do not assume every exhibit is step-free.',
  },
  {
    slug: 'family-visit', name: 'Visiting with Children', angle: 'A short, engaging Thai-history outing',
    context: 'The seven colossal kings provide a memorable introduction to Thai history, but younger visitors may tire quickly on the large, sun-exposed plaza.',
    visit: 'Set a simple challenge: find each king, identify one historical era and compare the statues’ clothing and posture. Explain the respectful nature of the site before photographs.',
    route: 'Aim for an early arrival, a gradual walk along the lineup, a shaded water break and one nearby family-friendly stop instead of an all-day history marathon.',
    tip: 'Bring hats, refillable water and age-appropriate sun protection.',
  },
  {
    slug: 'one-hour-itinerary', name: 'One-Hour Rajabhakti Park Route', angle: 'The essential monument visit in 60 minutes',
    context: 'A focused hour can cover the setting, the seven bronze kings and a few carefully chosen photographs. It is not enough for a deep study of every exhibit.',
    visit: 'Spend the first part orienting yourself in the plaza, then look at the statues in sequence and save the final moments for an unobstructed group photograph.',
    route: '1. Enter and read site notices. 2. Take a wide establishing photograph. 3. Walk the statue lineup while identifying each king. 4. Stop for details of clothing and sculpture. 5. Return to the exit without rushing.',
    tip: 'Give yourself additional time in strong heat or with children and older travellers.',
  },
  {
    slug: 'half-day-itinerary', name: 'Half-Day Hua Hin History and Coast Route', angle: 'Pair the statues with a nearby beach',
    context: 'A half day works well when the park is the main educational stop and the coast provides a relaxed second experience.',
    visit: 'Keep the memorial visit unhurried and allow separate time for transfers, a drink and a shoreline walk. Do not promise that every museum or exhibit is operating.',
    route: '1. Start at Rajabhakti Park in the morning. 2. Visit the seven-kings alignment and any open interpretation area. 3. Continue to Suan Son Pradiphat Beach or Khao Takiab. 4. End with lunch at an operating local restaurant.',
    tip: 'Check the beach or temple’s own opening arrangements and use its own Google Maps pin.',
  },
  {
    slug: 'rainy-season', name: 'Rainy-Season Visit', angle: 'Weather-aware planning for an exposed monument',
    context: 'Hua Hin has seasonal rainfall and sudden tropical showers. Because the statue plaza is open, even a brief downpour changes comfort, visibility and photography plans.',
    visit: 'Check the local forecast and thunderstorm warnings before arriving. Move to proper shelter during lightning and avoid standing beneath exposed metal structures.',
    route: 'Build a flexible itinerary: see the park in a dry window, then switch to an indoor Hua Hin stop if rain intensifies.',
    tip: 'Use non-slip footwear and protect cameras; do not treat a forecast as a guarantee of dry weather.',
  },
  {
    slug: 'sunrise-sunset-photography', name: 'Light and Photography at Rajabhakti Park', angle: 'Framing the seven statues respectfully',
    context: 'The statues’ scale, wide plaza and hill backdrop create strong opportunities for architectural-style photography. Lighting changes substantially through the day.',
    visit: 'Make one symmetrical wide frame, one diagonal composition from the plaza edge and detail studies of the bronze work. Avoid copying devotional poses or disrupting ceremonies.',
    route: 'Arrive during permitted opening hours, survey the whole plaza and photograph the full alignment before moving to individual statue details.',
    tip: 'Golden-hour expectations must be reconciled with the actual closing time; do not enter before opening or linger after closure.',
  },
  {
    slug: 'seven-kings-history-timeline', name: 'Thai History Timeline of the Seven Kings', angle: 'Sukhothai to Rattanakosin in one place',
    context: 'The sequence of Rajabhakti Park’s statues connects distinct historical eras rather than a single dynasty: Sukhothai, Ayutthaya, Thonburi and Rattanakosin.',
    visit: 'Begin with Ram Khamhaeng and Sukhothai, then compare the Ayutthaya rulers Naresuan and Narai. Follow with Taksin’s reunification of Siam and the Rattanakosin rulers Rama I, Rama IV and Rama V.',
    route: 'At each statue, pause for three questions: which era was this, what challenge did the kingdom face and what contribution is associated with this ruler?',
    tip: 'The sculptures commemorate selected interpretations of national history; a museum or historical reading can add detail and nuance.',
  },
  {
    slug: 'park-management-and-etiquette', name: 'Park Management and Visitor Etiquette', angle: 'Understanding a royal memorial managed by the army',
    context: 'The Royal Thai Army developed and manages Rajabhakti Park. It is a historical commemorative site that also hosts ceremonies, so visiting it differs from visiting a casual neighbourhood park.',
    visit: 'Dress respectfully, obey posted instructions, do not interfere with ceremonial activity and ask before using drones or professional filming equipment.',
    route: 'Read the entry notices on arrival, go to permitted viewing spaces and follow any staff direction if an event changes public access.',
    tip: 'Schedules, security and use restrictions can change; on-site staff are the final practical authority.',
  },
];

export const expansionTopics: TopicContent[] = guides.map((g, index) => {
  const location = g.place ? search(g.place) : park;
  const nearby = Boolean(g.place);
  const related = [
    { title: 'Rajabhakti Park Visitor Guide', url: '/en/visitor-guide/', desc: 'Opening hours, entrance and respectful visiting.' },
    { title: 'Seven Great Kings', url: '/en/seven-kings/', desc: 'The monarchs commemorated by the bronze statues.' },
    { title: 'How to Get There', url: '/en/how-to-get-there/', desc: 'Transport and the park’s exact location.' },
  ];
  return {
    lang: 'en', slug: g.slug,
    title: `${g.name} | Rajabhakti Park & Hua Hin Travel Guide`,
    description: `${g.angle}. Explore what to see, how to combine ${g.name} with Rajabhakti Park, practical visitor tips and its dedicated map location.`,
    h1: g.name, intro: `${g.angle}. ${g.context}`,
    sections: [
      { heading: `About ${g.name}`, body: [g.context] },
      { heading: 'What to See and Do', body: [g.visit] },
      { heading: 'Suggested Route', body: [g.route] },
      { heading: 'Before You Go', body: [g.tip, nearby ? 'This is a separate destination from Rajabhakti Park. Confirm its latest admission, opening and access information before setting out.' : 'For the latest park hours, access and arrangements, follow the notices at the entrance and any instructions from park staff.'] },
      { heading: 'Location and Navigation', body: [`Open the dedicated map for ${g.name}: ${location}`, nearby ? 'The route does not point to the Rajabhakti Park entrance; verify you selected the intended attraction before departing.' : 'The Rajabhakti Park map pin is the destination for this visitor guide.'] },
      { heading: 'Official Information and Further Reading', body: [g.source ? `Tourism reference: ${g.source}` : 'Use the destination’s current operator or local visitor information for access details. The Tourism Authority of Thailand publishes wider Hua Hin travel guidance at https://www.tourismthailand.org/.'] },
    ],
    faq: [
      { q: `Is ${g.name} the same place as Rajabhakti Park?`, a: nearby ? `No. ${g.name} is a separate Hua Hin-area destination; use its own map listing for directions.` : 'This guide concerns Rajabhakti Park itself and its visitor experience.' },
      { q: `How should I include ${g.name} in my trip?`, a: g.route },
      { q: 'What should I check before leaving?', a: g.tip },
    ],
    breadcrumb: [{ name: 'Home', url: '/en/' }, { name: nearby ? 'Nearby attractions' : 'Travel guides', url: '/en/#topics' }, { name: g.name, url: `/en/${g.slug}/` }],
    related: [related[index % related.length], ...related.filter((_, i) => i !== index % related.length)],
    updated: 'Editorial review November 2026', mapUrl: location,
    management: managers[g.slug] ?? (nearby
      ? `${g.name} is a separate destination with its own site operator or local management arrangements, not a facility managed as part of Rajabhakti Park. Follow the posted instructions and identify the current local contact before arranging special access or filming.`
      : 'Rajabhakti Park was developed and is managed by the Royal Thai Army as a memorial to seven influential Thai kings. As the grounds may host military or commemorative ceremonies, park staff and posted notices determine current visitor access.'),
    photoTips: photography[g.slug] ?? ['Take a wide view of the seven bronze kings against the hills', 'Look for sculpture detail and changing shadows on the ceremonial plaza'],
    images: (confirmedPhotos[g.slug] ?? (!nearby ? [{ file: 'park', label: 'The seven bronze statues at Rajabhakti Park' }] : [])).map((photo) => ({
      src: photo.file === 'park' ? '/gallery/rajabhakti-park-1.jpg' : `/nearby/${photo.file}.jpg`,
      alt: photo.label,
      credit: photo.file === 'park' ? 'Existing site photograph' : (photoCredit[photo.file] ?? 'Wikimedia Commons'),
    })),
    routeSteps: g.route.match(/\d+\.\s*[^.]+(?:\.|$)/g)?.map((step) => step.replace(/^\d+\.\s*/, '').trim()) ?? [
      nearby ? `Begin at Rajabhakti Park, then navigate separately to ${g.name}.` : `Enter Rajabhakti Park through the signed visitor access.`,
      g.visit,
      g.tip,
    ],
  };
});
