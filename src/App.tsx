import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useCart } from './hooks/useCart';
import Navbar from './components/Navbar';
import LandingHero from './components/LandingHero';
import ProductCatalog from './components/ProductCatalog';
import CartDrawer from './components/CartDrawer';
import CheckoutForm from './components/CheckoutForm';
import Footer from './components/Footer';
import { Product } from './types';

type AppView = 'shop' | 'checkout';

function App() {
  const cart = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentView, setCurrentView] = useState<AppView>('shop');

  const handleAddToCart = (product: Product, quantity: number) => {
    cart.addItem(product, quantity);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCurrentView('checkout');
  };

  const handleBackToShop = () => {
    setCurrentView('shop');
  };

  const handleOrderComplete = () => {
    cart.clearCart();
    setCurrentView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-diwali-darkBg">
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 2000,
          style: {
            background: '#4A0E4E',
            color: '#FFF8E1',
            border: '1px solid #FFD700',
          },
        }}
      />

      <Navbar
        cartCount={cart.totalItems}
        onCartClick={() => setIsCartOpen(true)}
        onLogoClick={handleBackToShop}
      />

      {currentView === 'shop' ? (
        <>
          <LandingHero />
          <ProductCatalog onAddToCart={handleAddToCart} />
        </>
      ) : (
        <CheckoutForm
          cartItems={cart.items}
          totalPrice={cart.totalPrice}
          onBack={handleBackToShop}
          onOrderComplete={handleOrderComplete}
        />
      )}

      <CartDrawer
        isOpen={isCartOpen}
        items={cart.items}
        totalPrice={cart.totalPrice}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={cart.updateQuantity}
        onRemoveItem={cart.removeItem}
        onCheckout={handleCheckout}
      />

      <Footer />
    </div>
  );
}

export default App;
