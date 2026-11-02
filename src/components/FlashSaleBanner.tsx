import { useFlashSale, FLASH_DISCOUNT_PERCENT } from '../hooks/useFlashSale';
import { FaBolt, FaFire } from 'react-icons/fa';

export default function FlashSaleBanner() {
  const { hours, minutes, seconds, isActive } = useFlashSale();

  if (!isActive) return null;

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="bg-gradient-to-r from-red-700 via-amber-600 to-red-700 text-white py-2.5 px-3 text-center text-xs sm:text-sm font-semibold shadow-lg shadow-red-950/50 border-b-2 border-yellow-400 flex items-center justify-center gap-2 sm:gap-4 flex-wrap relative z-50">
      <div className="flex items-center gap-1.5 animate-pulse bg-red-900/60 px-2.5 py-1 rounded-full border border-yellow-300/40">
        <FaFire className="text-yellow-300 text-sm animate-bounce" />
        <span className="tracking-wider uppercase font-black text-yellow-300 text-xs sm:text-sm">
          24-HR DIWALI FLASH SALE
        </span>
      </div>

      <div className="flex items-center gap-1.5 font-bold">
        <FaBolt className="text-yellow-300 hidden sm:inline" />
        <span>
          Flat <strong className="bg-yellow-400 text-red-950 px-2 py-0.5 rounded-full font-black text-xs sm:text-sm shadow-sm">{FLASH_DISCOUNT_PERCENT}% OFF</strong> Entire Cart!
        </span>
      </div>

      <div className="flex items-center gap-1.5 bg-black/60 px-3 py-1 rounded-full font-mono text-yellow-200 text-xs border border-yellow-400/50 shadow-inner">
        <span className="text-[11px] uppercase tracking-wide text-yellow-300/80">Ends in:</span>
        <span className="font-extrabold text-white tracking-widest text-xs sm:text-sm">
          {pad(hours)}h : {pad(minutes)}m : {pad(seconds)}s
        </span>
      </div>
    </div>
  );
}


