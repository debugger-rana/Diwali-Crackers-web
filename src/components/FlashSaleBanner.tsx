import { useFlashSale, FLASH_DISCOUNT_PERCENT } from '../hooks/useFlashSale';
import { FaBolt } from 'react-icons/fa';

export default function FlashSaleBanner() {
  const { hours, minutes, seconds, isActive } = useFlashSale();

  if (!isActive) return null;

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="bg-gradient-to-r from-red-600 via-amber-600 to-red-600 text-white py-2 px-3 text-center text-xs sm:text-sm font-semibold shadow-md flex items-center justify-center gap-2 flex-wrap relative z-50">
      <div className="flex items-center gap-1.5 animate-pulse">
        <FaBolt className="text-yellow-300" />
        <span className="tracking-wide uppercase font-bold text-yellow-200">
          Last 24-Hour Deal:
        </span>
      </div>
      <span>
        Flat <strong className="text-yellow-300 underline font-extrabold">{FLASH_DISCOUNT_PERCENT}% OFF</strong> on your entire cart!
      </span>
      <div className="flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-full font-mono text-yellow-200 text-xs border border-yellow-400/30">
        <span>Ends in:</span>
        <span className="font-bold text-white">
          {pad(hours)}h : {pad(minutes)}m : {pad(seconds)}s
        </span>
      </div>
    </div>
  );
}
