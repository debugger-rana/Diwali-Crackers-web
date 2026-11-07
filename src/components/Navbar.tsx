import { FaShoppingCart } from 'react-icons/fa';
import { GiFireworkRocket } from 'react-icons/gi';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onLogoClick: () => void;
}

export default function Navbar({ cartCount, onCartClick, onLogoClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-diwali-darkBg/95 backdrop-blur-md border-b border-diwali-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={onLogoClick}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <GiFireworkRocket className="text-diwali-gold text-2xl" />
            <span className="text-xl font-bold shimmer-text">
              Diwali Crackers
            </span>
          </button>

          {/* Cart Button */}
          <button
            onClick={onCartClick}
            className="relative p-2 rounded-full hover:bg-diwali-purple/50 transition-colors"
          >
            <FaShoppingCart className="text-diwali-gold text-xl" />
            {cartCount > 0 && (
              <span className="cart-badge absolute -top-1 -right-1 bg-diwali-deepOrange text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
