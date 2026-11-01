import FireworkCanvas from './FireworkCanvas';

export default function LandingHero() {
  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Fireworks Background */}
      <FireworkCanvas />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-diwali-darkBg/30 via-transparent to-diwali-darkBg" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Floating Diyas */}
        <div className="flex justify-center gap-8 mb-8">
          <span className="text-5xl animate-float" style={{ animationDelay: '0s' }}>🪔</span>
          <span className="text-5xl animate-float" style={{ animationDelay: '0.5s' }}>🪔</span>
          <span className="text-5xl animate-float" style={{ animationDelay: '1s' }}>🪔</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold mb-4 shimmer-text leading-tight">
          Happy Diwali!
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl md:text-3xl text-diwali-cream/90 mb-2 font-light">
          ✨ Premium Crackers at Best Prices ✨
        </p>
        <p className="text-base sm:text-lg text-diwali-cream/60 mb-10">
          Celebrate the Festival of Lights with our handpicked collection
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToProducts}
          className="glow-btn inline-flex items-center gap-3 bg-gradient-to-r from-diwali-deepOrange to-diwali-gold text-diwali-darkBg font-bold text-lg sm:text-xl px-10 py-4 rounded-full transition-all duration-300 hover:scale-105"
        >
          🧨 Shop Now
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
