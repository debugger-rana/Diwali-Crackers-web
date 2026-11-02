import { FaTimes, FaMinus, FaPlus, FaTrash, FaTag } from 'react-icons/fa';
import { CartItem } from '../types';
import { useFlashSale, FLASH_DISCOUNT_PERCENT } from '../hooks/useFlashSale';

interface CartDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  totalPrice: number;
  onClose: () => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export default function CartDrawer({
  isOpen,
  items,
  totalPrice,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: CartDrawerProps) {
  const { isActive } = useFlashSale();
  if (!isOpen) return null;

  const discountAmount = isActive ? Math.round(totalPrice * (FLASH_DISCOUNT_PERCENT / 100)) : 0;
  const finalPrice = totalPrice - discountAmount;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/60 cart-overlay"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[420px] bg-diwali-darkBg border-l border-diwali-gold/20 shadow-2xl animate-slideInRight flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-diwali-gold/20">
          <h2 className="text-xl font-bold text-diwali-gold flex items-center gap-2">
            🛒 Your Cart
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-diwali-purple/50 transition-colors text-diwali-cream/60 hover:text-diwali-cream"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <span className="text-6xl block mb-4">🛒</span>
              <p className="text-diwali-cream/50 text-lg">Your cart is empty</p>
              <p className="text-diwali-cream/30 text-sm mt-2">
                Add some crackers to get started! 🧨
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 bg-diwali-purple/20 rounded-xl p-4 border border-diwali-gold/10"
              >
                {/* Product thumbnail */}
                <div className="w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden bg-diwali-purple/30">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h3 className="text-sm font-semibold text-diwali-cream truncate">
                      {item.product.name}
                    </h3>
                    <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-diwali-gold/15 text-diwali-gold/90 shrink-0">
                      #{item.product.id}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between mt-1">
                    <p className="text-diwali-gold font-bold text-base">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </p>
                    {item.quantity > 1 && (
                      <span className="text-xs text-diwali-cream/40">
                        (₹{item.product.price.toLocaleString('en-IN')} × {item.quantity})
                      </span>
                    )}
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="w-6 h-6 rounded-full bg-diwali-purple/50 text-diwali-cream flex items-center justify-center hover:bg-diwali-purple text-xs"
                    >
                      <FaMinus />
                    </button>
                    <span className="text-sm font-semibold text-diwali-cream w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="w-6 h-6 rounded-full bg-diwali-purple/50 text-diwali-cream flex items-center justify-center hover:bg-diwali-purple text-xs"
                    >
                      <FaPlus />
                    </button>
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="ml-auto p-1.5 rounded-full hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-colors"
                    >
                      <FaTrash className="text-xs" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-diwali-gold/20 p-5 space-y-3">
            {isActive && discountAmount > 0 && (
              <div className="space-y-1.5 pb-2 border-b border-diwali-gold/10">
                <div className="flex justify-between items-center text-sm text-diwali-cream/70">
                  <span>Subtotal:</span>
                  <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center text-sm text-green-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <FaTag className="text-xs" /> 10% Flash Discount:
                  </span>
                  <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>
            )}

            <div className="flex justify-between items-center">
              <span className="text-diwali-cream/80 text-lg font-medium">Total to Pay:</span>
              <div className="text-right">
                <span className="text-2xl font-bold text-diwali-gold">
                  ₹{finalPrice.toLocaleString('en-IN')}
                </span>
                {isActive && discountAmount > 0 && (
                  <span className="block text-[11px] text-green-300 font-semibold">
                    You save ₹{discountAmount.toLocaleString('en-IN')}!
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={onCheckout}
              className="glow-btn w-full py-4 rounded-xl bg-gradient-to-r from-diwali-deepOrange to-diwali-gold text-diwali-darkBg font-bold text-lg flex items-center justify-center gap-2 mt-2"
            >
              Proceed to Checkout 🪔
            </button>
          </div>
        )}
      </div>
    </>
  );
}
