export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: Category;
  images: string[];
  inStock: boolean;
}

export type Category =
  | 'sparklers'
  | 'rockets'
  | 'ground-chakras'
  | 'flower-pots'
  | 'bombs'
  | 'shots'
  | 'spinners'
  | 'fancy';

export const CATEGORY_LABELS: Record<Category, string> = {
  'sparklers': '✨ Sparklers',
  'rockets': '🚀 Rockets',
  'ground-chakras': '🌀 Chakras',
  'flower-pots': '🌸 Flower Pots',
  'bombs': '💥 Bombs & Crackers',
  'shots': '🎯 Shots',
  'spinners': '🌪️ Spinners',
  'fancy': '🎆 Fancy Items',
};

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface DeliveryDetails {
  name: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
  notes: string;
}
