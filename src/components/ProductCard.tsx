import { useState, useRef, useCallback } from 'react';
import { FaShoppingCart, FaMinus, FaPlus, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    toast.success(
      <span>
        Added <strong>{product.name}</strong> × {quantity} to cart! 🛒
      </span>
    );
    setQuantity(1);
  };

  const totalSlides = product.images.length;

  const goTo = useCallback((idx: number) => {
    setCurrentSlide((idx + totalSlides) % totalSlides);
  }, [totalSlides]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      goTo(diff > 0 ? currentSlide + 1 : currentSlide - 1);
    }
  };

  return (
    <div className="product-card relative bg-gradient-to-br from-diwali-purple/40 to-diwali-darkBg border border-diwali-gold/20 rounded-2xl overflow-hidden group">
      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-3 right-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
          {discount}% OFF
        </div>
      )}

      {/* Product Image Slider */}
      <div
        className="relative h-48 overflow-hidden bg-gradient-to-br from-diwali-purple/10 to-diwali-maroon/10"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Images */}
        <div
          className="flex h-full transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {product.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${product.name} - view ${i + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
              loading="lazy"
            />
          ))}
        </div>

        {/* Arrow buttons (show only if multiple images) */}
        {totalSlides > 1 && (
          <>
            <button
              onClick={() => goTo(currentSlide - 1)}
              className="absolute left-1 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs hover:bg-black/70"
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => goTo(currentSlide + 1)}
              className="absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs hover:bg-black/70"
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>
          </>
        )}

        {/* Dots */}
        {totalSlides > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
            {product.images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentSlide
                    ? 'bg-diwali-gold w-4'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-diwali-darkBg/60 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-diwali-cream mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-diwali-cream/50 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-baseline justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-diwali-gold">
              ₹{(product.price * quantity).toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-diwali-cream/40 line-through">
                ₹{(product.originalPrice * quantity).toLocaleString('en-IN')}
              </span>
            )}
          </div>
          {quantity > 1 && (
            <span className="text-xs text-diwali-cream/50 bg-diwali-purple/40 px-2 py-0.5 rounded">
              ₹{product.price.toLocaleString('en-IN')} each
            </span>
          )}
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-8 h-8 rounded-full bg-diwali-purple/50 text-diwali-cream flex items-center justify-center hover:bg-diwali-purple transition-colors"
          >
            <FaMinus className="text-xs" />
          </button>
          <span className="text-lg font-semibold text-diwali-cream w-8 text-center">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-8 h-8 rounded-full bg-diwali-purple/50 text-diwali-cream flex items-center justify-center hover:bg-diwali-purple transition-colors"
          >
            <FaPlus className="text-xs" />
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAdd}
          disabled={!product.inStock}
          className="glow-btn w-full py-3 rounded-xl bg-gradient-to-r from-diwali-deepOrange to-diwali-gold text-diwali-darkBg font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaShoppingCart />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
}
