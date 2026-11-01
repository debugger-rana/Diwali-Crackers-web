import { Product } from '../types';

// Google Drive CDN helper — images served directly from Google's CDN
const img = (id: string) => `https://lh3.googleusercontent.com/d/${id}=w500-h500`;

/**
 * Product IDs follow invoice numbering: NF-01 to NF-33
 * NF = Narayani Fireworks invoice reference
 *
 * Invoice Page 1: NF-01 to NF-22
 * Invoice Page 2: NF-23 to NF-28
 * Additional items: NF-29 to NF-33
 */

export const products: Product[] = [
  // ═══════════════════════════════════════════════════════════
  // INVOICE PAGE 1 (Bill items #1 – #22)
  // ═══════════════════════════════════════════════════════════

  {
    id: 'NF-01',
    name: 'Pop Pop',
    description: 'Fun throwable crackers — safe for kids! 1 Box.',
    price: 27,
    category: 'bombs',
    images: [
      img('1Rifjhl1-TaHkrkTTUTE3V6YVdM6cWy1Z'),  // yellow boxes in carton
      img('1jM6Hm4OBfVVcj__677nwRI1FNBWdQ5zr'),  // box opened with pops
    ],
    inStock: true,
  },
  {
    id: 'NF-02',
    name: 'Penta Sky',
    description: 'Five-star sky burst with multi-color effects. 6 Boxes @ ₹130.',
    price: 130,
    category: 'shots',
    images: [
      img('1ORW2T9ZjgnISua9DjxTFHK0Wj-VCi9ga'),
    ],
    inStock: true,
  },
  {
    id: 'NF-03',
    name: 'Chutput',
    description: 'Classic pull-and-pop crackers, fun for everyone! 18 Packs @ ₹30.',
    price: 30,
    category: 'bombs',
    images: [
      img('1kxZ0dN5hoIcnsZk5Xb37vzB1Jp5id0LE'),  // Chut Putu Special box opened
    ],
    inStock: true,
  },
  {
    id: 'NF-05',
    name: 'Amar Small',
    description: 'Small colorful bombs — great value! 5 Packs @ ₹40.',
    price: 40,
    category: 'bombs',
    images: [
      img('1la5h0btZgLaC5z5zToKNg9ET9ttuzlYH'),  // colored bomb bag
    ],
    inStock: true,
  },
  {
    id: 'NF-06',
    name: 'Spinner (Vinita)',
    description: 'Premium ground spinners with dazzling multi-color sparks. 5 Boxes @ ₹180.',
    price: 180,
    category: 'spinners',
    images: [
      img('1dITJEx-_dptGFeG9YLySQ5cnkFjtw3yI'),  // box angle view
      img('1M7KZRPgEtRVtXun4Bj8b0bI8cmcFhte0'),  // box front
      img('1_pobqcqi7vyG_a1BjS8SM6IhzdqKKDWz'),  // opened with items
    ],
    inStock: true,
  },
  {
    id: 'NF-07',
    name: 'Spinner (Gabbar)',
    description: 'Colorful ground spinners that spin wildly with crackling sparks. 4 Boxes @ ₹130.',
    price: 130,
    category: 'spinners',
    images: [
      img('1hZPTjwgqGLukIsyvGflRL28DOXYF-azW'),  // opened box with items
      img('1JoY3SDOWLJ-M0q9NVPQ1qQomyMsqBZMb'),
    ],
    inStock: true,
  },
  {
    id: 'NF-09',
    name: 'Lanka',
    description: 'Traditional loud crackers for Diwali celebration! 100 Pieces.',
    price: 1350,
    category: 'bombs',
    images: [
      img('16K-0GhEDlImolJZIww86B62493zOyZeR'),  // Black Cat bombs bag
      img('117zpwf4AstssU1Gn9RX4bQRfR5vocpsk'),
    ],
    inStock: true,
  },
  {
    id: 'NF-10',
    name: 'Tubri',
    description: 'Small clay fountain pots with sparkling golden spray. 60 Pieces @ ₹20.',
    price: 20,
    category: 'flower-pots',
    images: [
      img('18g4yo2yQDScaXMa3vWbrPrRckwDxVX7J'),
    ],
    inStock: true,
  },
  {
    id: 'NF-11',
    name: 'Chakkar',
    description: 'Classic spinning ground chakra with multi-color sparks. 1 Piece @ ₹340.',
    price: 340,
    category: 'ground-chakras',
    images: [
      img('11t96SI9-lqeR9HA-XzcsWuYLRRYNMhPm'),  // box with chakras
      img('1GHQLhaQK_zIB0jroCqmNnAsZz5Jpq70P'),
    ],
    inStock: true,
  },
  {
    id: 'NF-12',
    name: 'Chatkan Matchbox',
    description: 'Pull-string crackers in matchbox design. 2 Boxes @ ₹115.',
    price: 115,
    category: 'bombs',
    images: [
      img('1AjVJnDn6KstKpuDMDqLqiEQGgZR3Vuzg'),  // VK Corsair matchbox
      img('1CG2VZbKX7ggWfedhCVBj-yfKcR_KaUIe'),
    ],
    inStock: true,
  },
  {
    id: 'NF-13',
    name: '30-Shots',
    description: '30 consecutive sky shots with different colors & crackling effects! 1 Box.',
    price: 600,
    category: 'shots',
    images: [
      img('1d8ri-eXBwcGbzaoK58TG2T-my5u77mP_'),  // shot tube clown design
      img('1sVjL0-S6AQbRCFtDii7rMy8tuYhJPLn4'),
    ],
    inStock: true,
  },
  {
    id: 'NF-14',
    name: 'Helipad',
    description: 'Flies up like a helicopter with colorful sparks! 4 Pieces @ ₹140.',
    price: 140,
    category: 'fancy',
    images: [
      img('1MnRxhWQc6xTOC2k8LrCAuNyi8-0raqPX'),  // Vetri Vinayaga box
      img('1QCRHaJWdhxROURWhogzfh5t7oEk1iMfC'),  // propellers unpacked
    ],
    inStock: true,
  },
  {
    id: 'NF-15',
    name: 'Fuljari',
    description: 'Handheld sparkler sticks with bright colorful sparks. 2 Pieces @ ₹45.',
    price: 45,
    category: 'sparklers',
    images: [
      img('1_l1HO3_eOeW2z79M8HJ9k8Vpw4zkdn2b'),  // visible next to Hulk box
    ],
    inStock: true,
  },
  {
    id: 'NF-16',
    name: 'Hulk Power',
    description: 'Extra-loud celebration bombs with massive sound! 8 Boxes @ ₹220.',
    price: 220,
    category: 'bombs',
    images: [
      img('1_l1HO3_eOeW2z79M8HJ9k8Vpw4zkdn2b'),  // Hulk box + Fuljari
    ],
    inStock: true,
  },
  {
    id: 'NF-17',
    name: 'Balajiceu (Gold Bomb)',
    description: 'Premium gold-colored loud bombs with satisfying burst. 85 Pieces @ ₹60.',
    price: 60,
    category: 'bombs',
    images: [
      img('1tBQvloIJV6_syojzfzgfliNkKETYzOXy'),  // single gold egg bomb
      img('1qIe7M9a2XbptZtzRlOHsYoyYZ4az4mzv'),
    ],
    inStock: true,
  },
  {
    id: 'NF-18',
    name: 'Aanan',
    description: 'Premium multi-effect showpiece with fountains, crackle & color change. 2 Boxes @ ₹350.',
    price: 350,
    category: 'fancy',
    images: [
      img('1iEYPhvm-a5A2XK2cf-e9cqV8QRsomMX3'),
    ],
    inStock: true,
  },
  {
    id: 'NF-19',
    name: 'Blue Octopus',
    description: 'Spectacular sky-filling aerial with blue tentacle trails. 1 Box @ ₹470.',
    price: 470,
    category: 'fancy',
    images: [
      img('1XHJsNBKSXRK4EUnzGrKe9id-tD3rD5ho'),  // box front
      img('1Hhs4a-7Pfd2gwgxbWKRTlKpkigqi9T8P'),  // box side
      img('1gCrp_HcRFFogI6oZGypXdxoeCJ_GtH4f'),  // person holding box
    ],
    inStock: true,
  },
  {
    id: 'NF-20',
    name: '15-Shots',
    description: '15 rapid sky shots — colorful bursts one after another. 6 Boxes @ ₹140.',
    price: 140,
    category: 'shots',
    images: [
      img('1orQB5-XdDvKoha-X0UPNfHc2kXrW6dHj'),  // 15-Shot Sayan's tube
      img('1d8ri-eXBwcGbzaoK58TG2T-my5u77mP_'),
    ],
    inStock: true,
  },
  {
    id: 'NF-21',
    name: 'Chocolate Sparklers',
    description: 'Premium chocolate-colored sparklers. 100×10 Pack @ ₹25.',
    price: 260,
    category: 'sparklers',
    images: [
      img('1UakHuZI4HHUNp8nWEAkENPAnvQPloFNt'),
    ],
    inStock: true,
  },
  {
    id: 'NF-22',
    name: 'Chocolate Big Sparklers',
    description: 'Bigger, bolder chocolate sparklers with extra burn time. 50×2 Pack @ ₹190.',
    price: 190,
    category: 'sparklers',
    images: [
      img('1ldVwwzRfqDJ658n8HIG783dMaNittqwF'),
    ],
    inStock: true,
  },

  // ═══════════════════════════════════════════════════════════
  // INVOICE PAGE 2 (Bill items #23 – #28)
  // ═══════════════════════════════════════════════════════════

  {
    id: 'NF-23',
    name: 'Rocket',
    description: 'Classic rockets with loud whistle and color burst. 5 Boxes @ ₹70.',
    price: 70,
    category: 'rockets',
    images: [
      img('132TjXt7IbRd_wISzxQ9C3aVrNy2JkdB6'),
    ],
    inStock: true,
  },
  {
    id: 'NF-24',
    name: 'Dhumketu',
    description: 'Comet-style rockets with trailing fire effect. 2 Boxes.',
    price: 100,
    category: 'rockets',
    images: [
      img('14G_NHBVMs4yfg7rbVkpUFZ6WrRm9ESH5'),
    ],
    inStock: true,
  },
  {
    id: 'NF-25',
    name: 'Rocken (Local)',
    description: 'Budget-friendly rockets, great value! Pack of 100 pieces.',
    price: 450,
    category: 'rockets',
    images: [
      img('1BEtdSrK8B2_rXkDbWc64zf49VZb54V6V'),
    ],
    inStock: true,
  },
  {
    id: 'NF-26',
    name: 'Tubri (Grenadan)',
    description: 'Premium grenadan tubri with enhanced spark effect. 6 Pieces @ ₹65.',
    price: 65,
    category: 'flower-pots',
    images: [
      img('1RcA_VVX5JY8uKp-TU1j65esZ_Pe2Hu5d'),
    ],
    inStock: true,
  },
  {
    id: 'NF-27',
    name: 'Fountain',
    description: 'Premium fountain with multi-stage color changing effects. 5 Pieces @ ₹100.',
    price: 100,
    category: 'flower-pots',
    images: [
      img('1113YVjLu71Khd4YzPlmBsH0Or1_aSgea'),
    ],
    inStock: true,
  },
  {
    id: 'NF-28',
    name: 'Rocket Skyline',
    description: 'Small rockets with bright tail and sky burst. 5 Boxes @ ₹28.',
    price: 28,
    category: 'rockets',
    images: [
      img('1JUVuM-ld9V-x5difiAV24iWKU3KihrWX'),  // rocket packs
      img('1NxcH5aYtB-wjGgWWHWJhoFsihtJyLEMY'),  // box opened
    ],
    inStock: true,
  },

  // ═══════════════════════════════════════════════════════════
  // ADDITIONAL ITEMS (Bottom of Page 2)
  // ═══════════════════════════════════════════════════════════

  {
    id: 'NF-29',
    name: 'Lamp',
    description: 'Decorative Diwali lamp crackers with sparkling effects. 2 Pieces.',
    price: 150,
    category: 'fancy',
    images: [
      img('1QppURTHaakLJP4C3-zvtqV-3fso34c_7'),
    ],
    inStock: true,
  },
  {
    id: 'NF-30',
    name: 'Rang Masal',
    description: 'Multi-color ground display with crackling finish. 7 Pieces @ ₹40.',
    price: 40,
    category: 'fancy',
    images: [
      img('1rfoIrwPy44k9xWvQlAL7ZVv3khHBpnyX'),
    ],
    inStock: true,
  },
  {
    id: 'NF-31',
    name: 'Cell Big',
    description: 'Large cell crackers with powerful burst and bright flash. 6 Pieces.',
    price: 650,
    category: 'fancy',
    images: [
      img('1sVjL0-S6AQbRCFtDii7rMy8tuYhJPLn4'),
    ],
    inStock: true,
  },
  {
    id: 'NF-32',
    name: 'Drone Show',
    description: 'Unique drone-style aerial piece with spinning propeller effect. Amazing sky show!',
    price: 350,
    category: 'fancy',
    images: [
      img('12WF7ykV9jylOpWgSnN3pssPawM2qWj5g'),  // box front
      img('1J6epd1cLStDsJYwLW68Sv8Pv5dmBNYsE'),  // items inside
      img('144zqs794PuwA-8TN0ghUTz5cMwOAHvjx'),  // ground items
    ],
    inStock: true,
  },
  {
    id: 'NF-33',
    name: 'Colour Koti Super Deluxe',
    description: 'Beautiful multi-color cone fountains with stunning visual display.',
    price: 300,
    category: 'fancy',
    images: [
      img('1H63Bic16cdDEkZ6jUIsGF6i9gkBGA2BV'),  // box opened with cones
      img('1exUfrY-eHkjgB5QmiAleMlmMfaSuZ1PO'),
    ],
    inStock: true,
  },
  {
    id: 'NF-34',
    name: 'King Cobra Chorsa',
    description: 'Classic chorsa crackers in a long pack. Great for continuous fun!',
    price: 250,
    category: 'fancy',
    images: [
      img('13XUVgPxMjxTDRb-z8SOERaSsbeF3hkqK'),
    ],
    inStock: true,
  },
  {
    id: 'NF-35',
    name: 'Electric Sparklers',
    description: 'Bright electric sparklers with long-lasting golden sparks.',
    price: 45,
    category: 'sparklers',
    images: [
      img('11IETIlYcl-R2tiPPgVAvKIWQXT9OFdTL'),  // Rajkumari sparklers + box
      img('1sevqvg8HNy5dj93kxVqWWV39j8I_uv2w'),
    ],
    inStock: true,
  },
  {
    id: 'NF-36',
    name: 'Flower Pot Special',
    description: 'Beautiful fountain that shoots colorful sparks 6 ft high.',
    price: 100,
    category: 'flower-pots',
    images: [
      img('1rfoIrwPy44k9xWvQlAL7ZVv3khHBpnyX'),  // box opened with pots
      img('1r6OOzyyItfWP6zKqE9Q6cBbvKn8oaCBf'),
      img('1f9SP0jvhWWM4YZDR-AHVJdbg5FRXKAmp'),
    ],
    inStock: true,
  },
];
