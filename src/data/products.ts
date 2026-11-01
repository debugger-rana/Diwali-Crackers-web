import { Product } from '../types';

// Google Drive CDN helper
const img = (id: string) => `https://lh3.googleusercontent.com/d/${id}=w500-h500`;

export const products: Product[] = [
  // ── Spinners ──────────────────────────────────────────────
  {
    id: 'spin-1',
    name: 'Spinner Club (Vinita)',
    description: 'Premium ground spinners with dazzling multi-color sparks. Box of 5.',
    price: 180,
    category: 'spinners',
    images: [
      img('1M7KZRPgEtRVtXun4Bj8b0bI8cmcFhte0'),
      img('1_pobqcqi7vyG_a1BjS8SM6IhzdqKKDWz'),
    ],
    inStock: true,
  },
  {
    id: 'spin-2',
    name: 'Spinner (Gabbar)',
    description: 'Colorful ground spinners that spin wildly with crackling sparks. Box of 4.',
    price: 130,
    category: 'spinners',
    images: [
      img('1hZPTjwgqGLukIsyvGflRL28DOXYF-azW'),
      img('1JoY3SDOWLJ-M0q9NVPQ1qQomyMsqBZMb'),
    ],
    inStock: true,
  },

  // ── Fancy Items ───────────────────────────────────────────
  {
    id: 'fan-1',
    name: 'Blue Octopus',
    description: 'Spectacular sky-filling octopus-shaped aerial with blue tentacle trails. 1 Box.',
    price: 470,
    category: 'fancy',
    images: [
      img('1XHJsNBKSXRK4EUnzGrKe9id-tD3rD5ho'),
      img('1Hhs4a-7Pfd2gwgxbWKRTlKpkigqi9T8P'),
      img('1gCrp_HcRFFogI6oZGypXdxoeCJ_GtH4f'),
    ],
    inStock: true,
  },
  {
    id: 'fan-2',
    name: 'Drone Show',
    description: 'Unique drone-style aerial piece with spinning propeller effect. Amazing sky show!',
    price: 350,
    category: 'fancy',
    images: [
      img('12WF7ykV9jylOpWgSnN3pssPawM2qWj5g'),
      img('1J6epd1cLStDsJYwLW68Sv8Pv5dmBNYsE'),
      img('144zqs794PuwA-8TN0ghUTz5cMwOAHvjx'),
    ],
    inStock: true,
  },
  {
    id: 'fan-3',
    name: 'Helipad',
    description: 'Flies up like a helicopter with colorful sparks! Pack of 4 pieces.',
    price: 140,
    category: 'fancy',
    images: [
      img('1MnRxhWQc6xTOC2k8LrCAuNyi8-0raqPX'),
      img('1QCRHaJWdhxROURWhogzfh5t7oEk1iMfC'),
    ],
    inStock: true,
  },
  {
    id: 'fan-4',
    name: 'Aanan',
    description: 'Premium multi-effect showpiece with fountains, crackle and color change. 2 Box.',
    price: 350,
    category: 'fancy',
    images: [
      img('1iEYPhvm-a5A2XK2cf-e9cqV8QRsomMX3'),
    ],
    inStock: true,
  },
  {
    id: 'fan-5',
    name: 'Colour Koti',
    description: 'Beautiful multi-color flower pot arrangement with stunning visual display.',
    price: 300,
    category: 'fancy',
    images: [
      img('1H63Bic16cdDEkZ6jUIsGF6i9gkBGA2BV'),
      img('1exUfrY-eHkjgB5QmiAleMlmMfaSuZ1PO'),
    ],
    inStock: true,
  },
  {
    id: 'fan-6',
    name: 'King Cobra Chorsa',
    description: 'Snake-shaped ground cracker that expands dramatically when lit!',
    price: 60,
    category: 'fancy',
    images: [
      img('13XUVgPxMjxTDRb-z8SOERaSsbeF3hkqK'),
    ],
    inStock: true,
  },

  // ── Shots ─────────────────────────────────────────────────
  {
    id: 'sh-1',
    name: '30-Shots Box',
    description: '30 consecutive sky shots with different colors and crackling effects! 1 Box.',
    price: 600,
    category: 'shots',
    images: [
      img('1sVjL0-S6AQbRCFtDii7rMy8tuYhJPLn4'),
      img('1QppURTHaakLJP4C3-zvtqV-3fso34c_7'),
    ],
    inStock: true,
  },
  {
    id: 'sh-2',
    name: '15-Shots Box',
    description: '15 rapid sky shots — colorful bursts one after another. Box of 6.',
    price: 140,
    category: 'shots',
    images: [
      img('1orQB5-XdDvKoha-X0UPNfHc2kXrW6dHj'),
      img('1d8ri-eXBwcGbzaoK58TG2T-my5u77mP_'),
    ],
    inStock: true,
  },
  {
    id: 'sh-3',
    name: 'Penta Sky',
    description: 'Five-star sky burst with multi-color effects. Box of 6.',
    price: 130,
    category: 'shots',
    images: [
      img('1ORW2T9ZjgnISua9DjxTFHK0Wj-VCi9ga'),
    ],
    inStock: true,
  },

  // ── Rockets ───────────────────────────────────────────────
  {
    id: 'rk-1',
    name: 'Skyline Rockets',
    description: 'Small rockets with bright tail and sky burst. Box of 5.',
    price: 28,
    category: 'rockets',
    images: [
      img('1JUVuM-ld9V-x5difiAV24iWKU3KihrWX'),
      img('1NxcH5aYtB-wjGgWWHWJhoFsihtJyLEMY'),
    ],
    inStock: true,
  },
  {
    id: 'rk-2',
    name: 'Rocket (Standard)',
    description: 'Classic rockets with loud whistle and color burst. Box of 5.',
    price: 70,
    category: 'rockets',
    images: [
      img('132TjXt7IbRd_wISzxQ9C3aVrNy2JkdB6'),
    ],
    inStock: true,
  },
  {
    id: 'rk-3',
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
    id: 'rk-4',
    name: 'Dhumketu',
    description: 'Comet-style rockets with trailing fire effect. 2 Box.',
    price: 100,
    category: 'rockets',
    images: [
      img('14G_NHBVMs4yfg7rbVkpUFZ6WrRm9ESH5'),
    ],
    inStock: true,
  },

  // ── Bombs & Crackers ──────────────────────────────────────
  {
    id: 'bm-1',
    name: 'Hulk Power',
    description: 'Extra-loud celebration bombs with massive sound! Box of 8.',
    price: 220,
    category: 'bombs',
    images: [
      img('1_l1HO3_eOeW2z79M8HJ9k8Vpw4zkdn2b'),
    ],
    inStock: true,
  },
  {
    id: 'bm-2',
    name: 'Pop Pop',
    description: 'Fun throwable crackers — safe for kids! 1 Box.',
    price: 27,
    category: 'bombs',
    images: [
      img('1dITJEx-_dptGFeG9YLySQ5cnkFjtw3yI'),
    ],
    inStock: true,
  },
  {
    id: 'bm-3',
    name: 'Chutput',
    description: 'Classic matchbox crackers — pull and pop! Pack of 18.',
    price: 30,
    category: 'bombs',
    images: [
      img('1Rifjhl1-TaHkrkTTUTE3V6YVdM6cWy1Z'),
      img('1jM6Hm4OBfVVcj__677nwRI1FNBWdQ5zr'),
    ],
    inStock: true,
  },
  {
    id: 'bm-4',
    name: 'Lanka (Atom Bomb)',
    description: 'Traditional loud crackers for the Diwali celebration! 100 pieces.',
    price: 1350,
    category: 'bombs',
    images: [
      img('1kxZ0dN5hoIcnsZk5Xb37vzB1Jp5id0LE'),
    ],
    inStock: true,
  },
  {
    id: 'bm-5',
    name: 'Chatkan Matchbox',
    description: 'Pull-string crackers in a matchbox design. Pack of 2 boxes.',
    price: 115,
    category: 'bombs',
    images: [
      img('1AjVJnDn6KstKpuDMDqLqiEQGgZR3Vuzg'),
      img('1CG2VZbKX7ggWfedhCVBj-yfKcR_KaUIe'),
    ],
    inStock: true,
  },
  {
    id: 'bm-6',
    name: 'Gold Bomb',
    description: 'Premium gold-colored loud bombs with satisfying burst.',
    price: 60,
    category: 'bombs',
    images: [
      img('1tBQvloIJV6_syojzfzgfliNkKETYzOXy'),
      img('1qIe7M9a2XbptZtzRlOHsYoyYZ4az4mzv'),
    ],
    inStock: true,
  },
  {
    id: 'bm-7',
    name: 'Black Cat',
    description: 'Classic black cat bombs — an all-time Diwali favourite!',
    price: 250,
    category: 'bombs',
    images: [
      img('16K-0GhEDlImolJZIww86B62493zOyZeR'),
      img('117zpwf4AstssU1Gn9RX4bQRfR5vocpsk'),
      img('1la5h0btZgLaC5z5zToKNg9ET9ttuzlYH'),
    ],
    inStock: true,
  },

  // ── Sparklers ─────────────────────────────────────────────
  {
    id: 'sp-1',
    name: 'Electric Sparklers',
    description: 'Bright electric sparklers with long-lasting golden sparks. Multiple sticks per box.',
    price: 45,
    category: 'sparklers',
    images: [
      img('11IETIlYcl-R2tiPPgVAvKIWQXT9OFdTL'),
      img('1sevqvg8HNy5dj93kxVqWWV39j8I_uv2w'),
    ],
    inStock: true,
  },
  {
    id: 'sp-2',
    name: 'Chocolate Sparklers',
    description: 'Premium chocolate-colored sparklers. 100×10 pack — great value!',
    price: 260,
    category: 'sparklers',
    images: [
      img('1UakHuZI4HHUNp8nWEAkENPAnvQPloFNt'),
    ],
    inStock: true,
  },
  {
    id: 'sp-3',
    name: 'Chocolate Big Sparklers',
    description: 'Bigger, bolder chocolate sparklers with extra burn time. 50×2 pack.',
    price: 190,
    category: 'sparklers',
    images: [
      img('1ldVwwzRfqDJ658n8HIG783dMaNittqwF'),
    ],
    inStock: true,
  },

  // ── Ground Chakras ────────────────────────────────────────
  {
    id: 'gc-1',
    name: 'Ground Chakkar',
    description: 'Classic spinning ground chakra with multi-color sparks. 1 piece.',
    price: 340,
    category: 'ground-chakras',
    images: [
      img('11t96SI9-lqeR9HA-XzcsWuYLRRYNMhPm'),
      img('1GHQLhaQK_zIB0jroCqmNnAsZz5Jpq70P'),
    ],
    inStock: true,
  },

  // ── Flower Pots ───────────────────────────────────────────
  {
    id: 'fp-1',
    name: 'Flower Pot Special',
    description: 'Beautiful fountain that shoots colorful sparks 6 ft high. Sampurna brand.',
    price: 100,
    category: 'flower-pots',
    images: [
      img('1rfoIrwPy44k9xWvQlAL7ZVv3khHBpnyX'),
      img('1r6OOzyyItfWP6zKqE9Q6cBbvKn8oaCBf'),
      img('1f9SP0jvhWWM4YZDR-AHVJdbg5FRXKAmp'),
    ],
    inStock: true,
  },
  {
    id: 'fp-2',
    name: 'Fountain',
    description: 'Premium fountain with multi-stage color changing effects. Pack of 5.',
    price: 100,
    category: 'flower-pots',
    images: [
      img('1113YVjLu71Khd4YzPlmBsH0Or1_aSgea'),
    ],
    inStock: true,
  },
  {
    id: 'fp-3',
    name: 'Tubri',
    description: 'Small clay fountain pots with sparkling golden spray. 60 pieces.',
    price: 20,
    category: 'flower-pots',
    images: [
      img('18g4yo2yQDScaXMa3vWbrPrRckwDxVX7J'),
    ],
    inStock: true,
  },
  {
    id: 'fp-4',
    name: 'Tubri (Grenadan)',
    description: 'Premium grenadan tubri with enhanced spark effect. Pack of 6.',
    price: 65,
    category: 'flower-pots',
    images: [
      img('1RcA_VVX5JY8uKp-TU1j65esZ_Pe2Hu5d'),
    ],
    inStock: true,
  },
  {
    id: 'fp-5',
    name: 'Fuljari',
    description: 'Handheld flower stick crackers with sparkling effects. 2 pieces.',
    price: 45,
    category: 'flower-pots',
    images: [
      img('1_l1HO3_eOeW2z79M8HJ9k8Vpw4zkdn2b'),
    ],
    inStock: true,
  },

  // ── Bonus Items ───────────────────────────────────────────
  {
    id: 'fan-7',
    name: 'Amar Small',
    description: 'Small amar crackers for continuous fun! Pack of 5.',
    price: 40,
    category: 'bombs',
    images: [
      img('1dITJEx-_dptGFeG9YLySQ5cnkFjtw3yI'),
    ],
    inStock: true,
  },
  {
    id: 'fan-8',
    name: 'Rang Masal',
    description: 'Multi-color ground display with crackling finish. Pack of 7 pieces.',
    price: 40,
    category: 'fancy',
    images: [
      img('1rfoIrwPy44k9xWvQlAL7ZVv3khHBpnyX'),
    ],
    inStock: true,
  },
];
