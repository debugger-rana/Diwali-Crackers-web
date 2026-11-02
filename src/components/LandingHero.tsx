import FireworkCanvas from './FireworkCanvas';
import { useFlashSale, FLASH_DISCOUNT_PERCENT } from '../hooks/useFlashSale';
import { FaBolt, FaFire } from 'react-icons/fa';

export default function LandingHero() {
  const { hours, minutes, seconds, isActive } = useFlashSale();
  const pad = (n: number) => n.toString().padStart(2, '0');

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-12">
      {/* Fireworks Background */}
      <FireworkCanvas />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-diwali-darkBg/30 via-transparent to-diwali-darkBg" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Floating Diyas */}
        <div className="flex justify-center gap-8 mb-6">
          <span className="text-5xl animate-float" style={{ animationDelay: '0s' }}>🪔</span>
          <span className="text-5xl animate-float" style={{ animationDelay: '0.5s' }}>🪔</span>
          <span className="text-5xl animate-float" style={{ animationDelay: '1s' }}>🪔</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold mb-3 shimmer-text leading-tight">
          Happy Diwali!
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl md:text-3xl text-diwali-cream/90 mb-3 font-light">
          ✨ Premium Crackers at Best Prices ✨
        </p>

        {/* FLASH SALE HERO CARD */}
        {isActive && (
          <div className="my-6 mx-auto max-w-2xl bg-gradient-to-r from-red-950/90 via-amber-950/90 to-red-950/90 border-2 border-yellow-400/80 rounded-2xl p-4 sm:p-5 shadow-[0_0_35px_rgba(255,215,0,0.35)] backdrop-blur-md transition-all hover:scale-[1.02]">
            <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
              <span className="flex items-center gap-1.5 text-xs sm:text-sm font-extrabold uppercase bg-red-600 text-white px-3 py-1 rounded-full shadow">
                <FaFire className="text-yellow-300 animate-bounce" />
                LIMITED 24-HOUR DEAL
              </span>
              <span className="flex items-center gap-1 bg-yellow-400 text-red-950 font-black px-3.5 py-1 rounded-full text-sm sm:text-base shadow">
                <FaBolt />
                FLAT {FLASH_DISCOUNT_PERCENT}% OFF
              </span>
            </div>

            <p className="text-yellow-100 font-medium text-sm sm:text-base mb-3">
              Special Festive Discount automatically applied to your entire cart! 🎆
            </p>

            <div className="inline-flex items-center gap-2 bg-black/60 px-4 py-1.5 rounded-full border border-yellow-400/40 font-mono text-yellow-300 text-xs sm:text-sm">
              <span className="text-yellow-200/80 uppercase font-sans text-xs">Deal Ends In:</span>
              <span className="font-extrabold text-white tracking-widest text-sm sm:text-base">
                {pad(hours)}h : {pad(minutes)}m : {pad(seconds)}s
              </span>
            </div>
          </div>
        )}

        <p className="text-base sm:text-lg text-diwali-cream/60 mb-8">
          Celebrate the Festival of Lights with our handpicked collection
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToProducts}
          className="glow-btn inline-flex items-center gap-3 bg-gradient-to-r from-diwali-deepOrange to-diwali-gold text-diwali-darkBg font-bold text-lg sm:text-xl px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-diwali-gold/30"
        >
          🧨 Grab Diwali Deals
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>

        {/* Decorative sparkles */}
        <div className="mt-12 flex justify-center gap-4">
          {['🎆', '🎇', '✨', '🎇', '🎆'].map((emoji, i) => (
            <span
              key={i}
              className="text-2xl animate-sparkle"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>

      {/* Rangoli Border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 rangoli-border" />
    </section>
  );
}
