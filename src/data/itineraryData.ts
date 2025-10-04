import { ItineraryItem } from '@/components/DayCard';

export const day1Items: ItineraryItem[] = [
  {
    id: 'd1-1',
    time: '07:00 AM',
    title: 'Arrival at Delhi Cantt Metro Station',
    description: 'Start your Delhi adventure! Travel to Saket Metro via Pink Line and Yellow Line.',
    transport: {
      mode: 'Metro',
      route: 'Pink Line → INA → Yellow Line → Saket Metro',
      duration: '~45 min',
      fare: '40',
      metroLine: 'pink'
    },
    category: 'transport',
  },
  {
    id: 'd1-2',
    time: '08:00 AM',
    title: 'Quick Breakfast',
    description: 'Fuel up with classic Indian breakfast at a local dhaba near Saket Metro',
    cost: '100-150',
    category: 'food',
    skipNote: 'You can grab breakfast later if you prefer to reach hotel first',
  },
  {
    id: 'd1-3',
    time: '08:30 AM',
    title: 'India Gate & Kartavya Path',
    description: 'Walk around India Gate lawns, visit Amar Jawan Jyoti, and enjoy morning photo opportunities at National War Memorial.',
    transport: {
      mode: 'Metro',
      route: 'Saket → Central Secretariat (Yellow Line)',
      duration: '35-40 min',
      fare: '20',
      metroLine: 'yellow'
    },
    category: 'landmark',
    isOptional: true,
    skipNote: 'If tired after travel, reduce time here to 1 hour',
  },
  {
    id: 'd1-4',
    time: '11:30 AM',
    title: 'Hotel Check-in & Freshen Up',
    description: 'Return to hotel, complete check-in, and relax before exploring more.',
    transport: {
      mode: 'Metro',
      route: 'Central Secretariat → Saket',
      duration: '~40 min',
      fare: '20',
      metroLine: 'yellow'
    },
    category: 'rest',
  },
  {
    id: 'd1-5',
    time: '12:30 PM',
    title: 'Lunch near Saket',
    description: 'Light meal at budget eatery - South Indian thali or North Indian meals',
    cost: '150-200',
    category: 'food',
  },
  {
    id: 'd1-6',
    time: '02:00 PM',
    title: 'Qutub Minar',
    description: 'Explore the UNESCO World Heritage Site - iconic Qutub Minar tower, Iron Pillar, Alai Darwaza, and Quwwat-ul-Islam mosque ruins.',
    transport: {
      mode: 'Metro',
      route: 'Saket → Qutub Minar Station (Yellow Line)',
      duration: '10 min',
      fare: '20',
      metroLine: 'yellow'
    },
    cost: '35',
    category: 'landmark',
    skipNote: 'If low on energy, skip Alai Darwaza and focus only on main tower',
  },
  {
    id: 'd1-7',
    time: '04:30 PM',
    title: 'Hauz Khas Village & Fort',
    description: 'Explore historic Hauz Khas Fort, scenic lake area, ancient ruins, and vibrant street art & murals.',
    transport: {
      mode: 'Metro',
      route: 'Qutub Minar → Hauz Khas (via Malviya Nagar)',
      duration: '~25 min',
      fare: '20',
      metroLine: 'pink'
    },
    category: 'landmark',
    isOptional: true,
    skipNote: 'Café visit optional - focus on fort and lake if tight on time',
  },
  {
    id: 'd1-8',
    time: '07:30 PM',
    title: 'Dinner at Saket',
    description: 'Budget-friendly North Indian Thali or South Indian meals',
    cost: '200-300',
    category: 'food',
  },
];

export const day2Items: ItineraryItem[] = [
  {
    id: 'd2-1',
    time: '07:00 AM',
    title: 'Travel to Lal Qila (Red Fort)',
    description: 'Begin your Old Delhi exploration journey',
    transport: {
      mode: 'Metro',
      route: 'Saket → Lajpat Nagar (Pink) → Violet Line → Lal Qila',
      duration: '~1 hr',
      fare: '40',
      metroLine: 'violet'
    },
    category: 'transport',
  },
  {
    id: 'd2-2',
    time: '08:30 AM',
    title: 'Red Fort Visit',
    description: 'Explore the magnificent Mughal fort - Diwan-i-Aam (Hall of Public Audience), Rang Mahal (Palace of Colors), museums, and optional Hayat Bakhsh Bagh gardens.',
    cost: '35',
    category: 'landmark',
    skipNote: 'Hayat Bakhsh Bagh & Museum optional if rushed',
  },
  {
    id: 'd2-3',
    time: '11:00 AM',
    title: 'Jama Masjid',
    description: "One of India's largest mosques with stunning Mughal architecture. Free entry, modest dress required.",
    category: 'landmark',
  },
  {
    id: 'd2-4',
    time: '11:30 AM',
    title: "Aslam's Chicken - Lunch",
    description: 'Famous Old Delhi food spot! Try their legendary butter chicken and kebabs.',
    cost: '250-300',
    category: 'food',
    isOptional: true,
    skipNote: 'If not hungry, save this for later',
  },
  {
    id: 'd2-5',
    time: '01:00 PM',
    title: 'Chandni Chowk & Paranthe Wali Gali',
    description: 'Explore narrow lanes, spice markets, cloth bazaars. Must try parathas and jalebis at the iconic food lane!',
    cost: '100-200',
    category: 'food',
    skipNote: 'If too crowded, limit to just Paranthe Wali Gali',
  },
  {
    id: 'd2-6',
    time: '03:30 PM',
    title: 'Sarojini Nagar Market',
    description: "Delhi's most famous budget shopping destination! Clothes, shoes, accessories at bargain prices.",
    transport: {
      mode: 'Metro',
      route: 'Chandni Chowk → Rajiv Chowk (Yellow) → South Extension → Sarojini',
      duration: '~45 min',
      fare: '40',
      metroLine: 'yellow'
    },
    cost: '200-500',
    category: 'landmark',
    isOptional: true,
    skipNote: 'If too tired, skip or reduce shopping time',
  },
  {
    id: 'd2-7',
    time: '06:00 PM',
    title: 'Connaught Place (CP)',
    description: "Delhi's iconic circular market - explore Central Park, visit Wenger's Bakery for snacks, enjoy street food and colonial architecture.",
    transport: {
      mode: 'Metro',
      route: 'Sarojini → Rajiv Chowk',
      duration: '~20 min',
      fare: '30',
      metroLine: 'yellow'
    },
    cost: '200-300',
    category: 'landmark',
    skipNote: 'If exhausted, just see CP and skip eating out',
  },
];

export const day3Items: ItineraryItem[] = [
  {
    id: 'd3-1',
    time: '07:30 AM',
    title: 'Lodhi Garden',
    description: 'Morning walk through historic garden with ancient tombs, lush greenery, and peaceful jogger vibes. Free entry!',
    transport: {
      mode: 'Metro',
      route: 'Saket → JLN Stadium (Yellow Line)',
      duration: '20 min',
      fare: '20',
      metroLine: 'yellow'
    },
    category: 'landmark',
    isOptional: true,
    skipNote: 'If running late, you can skip this',
  },
  {
    id: 'd3-2',
    time: '09:00 AM',
    title: 'Aerocity / Worldmark Mall',
    description: 'Budget-friendly brunch at local cafés in modern Aerocity area',
    transport: {
      mode: 'Metro',
      route: 'JLN Stadium → Dhaula Kuan → Aerocity (Airport Line)',
      duration: '~35 min',
      fare: '30',
      metroLine: 'yellow'
    },
    cost: '200-300',
    category: 'food',
    isOptional: true,
    skipNote: 'If not hungry or low on time, skip',
  },
  {
    id: 'd3-3',
    time: '10:30 AM',
    title: 'Hotel Checkout',
    description: 'Return to hotel, pack up, and complete checkout process.',
    category: 'rest',
  },
];
