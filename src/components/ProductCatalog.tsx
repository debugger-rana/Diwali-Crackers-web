import { useState } from 'react';
import { products } from '../data/products';
import { Category, CATEGORY_LABELS, Product } from '../types';
import ProductCard from './ProductCard';
import { useFlashSale, FLASH_DISCOUNT_PERCENT } from '../hooks/useFlashSale';
import { FaFire } from 'react-icons/fa';

interface ProductCatalogProps {
  onAddToCart: (product: Product, quantity: number) => void;
}

const categories: (Category | 'all')[] = [
  'all',
  'sparklers',
  'rockets',
  'ground-chakras',
  'flower-pots',
  'bombs',
  'shots',
  'spinners',
  'fancy',
];

const categoryLabels: Record<string, string> = {
  all: '🎪 All',
  ...CATEGORY_LABELS,
};

export default function ProductCatalog({ onAddToCart }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const { isActive } = useFlashSale();

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          <span className="shimmer-text">Our Crackers Collection</span>
        </h2>
        <p className="text-diwali-cream/60 text-lg max-w-2xl mx-auto">
          Choose from our wide range of premium crackers — guaranteed quality and best prices! 🎆
        </p>
      </div>

      {/* Flash Sale Banner in Catalog */}
      {isActive && (
        <div className="bg-gradient-to-r from-red-950/80 via-amber-950/70 to-red-950/80 border-2 border-yellow-400/50 rounded-2xl p-4 sm:p-5 mb-10 text-center shadow-lg shadow-amber-950/40">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-yellow-300 font-extrabold text-sm sm:text-base">
            <FaFire className="text-amber-400 text-lg animate-bounce" />
            <span>LIMITED 24-HR FLASH SALE:</span>
            <span className="bg-yellow-400 text-red-950 font-black px-2.5 py-0.5 rounded-full text-xs sm:text-sm uppercase shadow">
              FLAT {FLASH_DISCOUNT_PERCENT}% OFF
            </span>
            <span className="text-yellow-100/90 font-medium text-xs sm:text-sm">
              — Applied automatically on every item at checkout! 💥
            </span>
          </div>
        </div>
      )}

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-diwali-deepOrange to-diwali-gold text-diwali-darkBg shadow-lg shadow-diwali-gold/20'
                : 'bg-diwali-purple/30 text-diwali-cream/80 hover:bg-diwali-purple/50 border border-diwali-gold/20'
            }`}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
          >
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-diwali-cream/50 text-xl">No products found in this category</p>
        </div>
      )}
    </section>
  );
}
