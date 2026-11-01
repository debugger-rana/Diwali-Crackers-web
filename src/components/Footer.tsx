export default function Footer() {
  return (
    <footer className="border-t border-diwali-gold/20 mt-16">
      {/* Rangoli Border */}
      <div className="rangoli-border" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Decorative Diyas */}
          <div className="flex justify-center gap-4 mb-6">
            {['🪔', '✨', '🧨', '✨', '🪔'].map((emoji, i) => (
              <span key={i} className="text-2xl animate-float" style={{ animationDelay: `${i * 0.3}s` }}>
                {emoji}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold shimmer-text mb-2">
            Diwali Crackers Shop
          </h3>
          <p className="text-diwali-cream/50 text-sm mb-4">
            Premium Quality Crackers • Best Prices • Safe Delivery
          </p>

          <div className="text-diwali-cream/30 text-xs space-y-1">
            <p>🪔 Wishing you a Happy & Safe Diwali! 🪔</p>
            <p className="mt-4">
              © {new Date().getFullYear()} Diwali Crackers Shop. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
