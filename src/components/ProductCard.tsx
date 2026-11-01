import { useState } from 'react';
import { FaShoppingCart, FaMinus, FaPlus } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

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

  return (
    <div className="product-card relative bg-gradient-to-br from-diwali-purple/40 to-diwali-darkBg border border-diwali-gold/20 rounded-2xl overflow-hidden group">
      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-3 right-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
          {discount}% OFF
        </div>
      )}

      {/* Product Image/Emoji */}
      <div className="relative h-44 flex items-center justify-center bg-gradient-to-br from-diwali-purple/20 to-diwali-maroon/20 overflow-hidden">
        <span className="text-7xl group-hover:scale-125 transition-transform duration-500">
          {product.image}
        </span>
        {/* Decorative glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-diwali-darkBg/80 to-transparent" />
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
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-diwali-gold">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-diwali-cream/40 line-through">
              ₹{product.originalPrice.toLocaleString('en-IN')}
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
