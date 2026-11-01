export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: Category;
  image: string;
  inStock: boolean;
}

export type Category =
  | 'sparklers'
  | 'rockets'
  | 'ground-chakras'
  | 'flower-pots'
  | 'bombs'
  | 'combos';

export const CATEGORY_LABELS: Record<Category, string> = {
  'sparklers': '✨ Sparklers',
  'rockets': '🚀 Rockets',
  'ground-chakras': '🌀 Chakras',
  'flower-pots': '🌸 Flower Pots',
  'bombs': '💥 Bombs',
  'combos': '🎁 Combo Packs',
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
