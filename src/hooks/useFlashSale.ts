import { useState, useEffect } from 'react';

// Default: 24 hours from first launch
const FLASH_SALE_DURATION_MS = 24 * 60 * 60 * 1000;
const STORAGE_KEY = 'diwali_crackers_flash_sale_deadline';

export const FLASH_DISCOUNT_PERCENT = 10;

export function getFlashSaleDeadline(): number {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = parseInt(stored, 10);
      if (!isNaN(parsed)) return parsed;
    }
    const newDeadline = Date.now() + FLASH_SALE_DURATION_MS;
    localStorage.setItem(STORAGE_KEY, newDeadline.toString());
    return newDeadline;
  } catch {
    return Date.now() + FLASH_SALE_DURATION_MS;
  }
}

export interface TimeRemaining {
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
  isActive: boolean;
}

export function useFlashSale(): TimeRemaining {
  const [deadline] = useState<number>(getFlashSaleDeadline);
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(() => calculateTime(deadline));

  function calculateTime(target: number): TimeRemaining {
    const totalMs = target - Date.now();
    if (totalMs <= 0) {
      return { hours: 0, minutes: 0, seconds: 0, totalMs: 0, isActive: false };
    }
    const hours = Math.floor(totalMs / (1000 * 60 * 60));
    const minutes = Math.floor((totalMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((totalMs % (1000 * 60)) / 1000);
    return { hours, minutes, seconds, totalMs, isActive: true };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTime(deadline));
    }, 1000);
    return () => clearInterval(interval);
  }, [deadline]);

  return timeRemaining;
}
