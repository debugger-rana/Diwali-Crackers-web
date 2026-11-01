import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
  decay: number;
}

interface Firework {
  x: number;
  y: number;
  targetY: number;
  speed: number;
  color: string;
  exploded: boolean;
  particles: Particle[];
}

const COLORS = [
  '#FFD700', '#FF6B00', '#FF0000', '#FF69B4',
  '#00FF00', '#00BFFF', '#FF00FF', '#FFFF00',
  '#FFA500', '#7FFF00', '#00FFFF', '#FF1493',
];

export default function FireworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const fireworksRef = useRef<Firework[]>([]);
  const lastLaunchRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const createParticles = (x: number, y: number, color: string): Particle[] => {
      const particles: Particle[] = [];
      const count = 60 + Math.random() * 40;
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
        const speed = 1 + Math.random() * 4;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color,
          size: 1.5 + Math.random() * 1.5,
          decay: 0.008 + Math.random() * 0.012,
        });
      }
      return particles;
    };

    const launchFirework = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      fireworksRef.current.push({
        x: w * 0.15 + Math.random() * w * 0.7,
        y: h,
        targetY: h * 0.1 + Math.random() * h * 0.4,
        speed: 3 + Math.random() * 2,
        color,
        exploded: false,
        particles: [],
      });
    };

    const animate = (timestamp: number) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      ctx.fillStyle = 'rgba(26, 10, 46, 0.15)';
      ctx.fillRect(0, 0, w, h);

      // Launch new fireworks
      if (timestamp - lastLaunchRef.current > 800 + Math.random() * 1200) {
        launchFirework();
        if (Math.random() > 0.5) launchFirework();
        lastLaunchRef.current = timestamp;
      }

      fireworksRef.current = fireworksRef.current.filter(fw => {
        if (!fw.exploded) {
          // Draw trail
          ctx.beginPath();
          ctx.arc(fw.x, fw.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = fw.color;
          ctx.fill();

          // Faint trail
          ctx.beginPath();
          ctx.moveTo(fw.x, fw.y);
          ctx.lineTo(fw.x + (Math.random() - 0.5) * 2, fw.y + 10);
          ctx.strokeStyle = fw.color + '66';
          ctx.lineWidth = 1;
          ctx.stroke();

          fw.y -= fw.speed;

          if (fw.y <= fw.targetY) {
            fw.exploded = true;
            fw.particles = createParticles(fw.x, fw.y, fw.color);
          }
          return true;
        }

        // Update particles
        fw.particles = fw.particles.filter(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.04; // gravity
          p.alpha -= p.decay;

          if (p.alpha <= 0) return false;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color + Math.floor(p.alpha * 255).toString(16).padStart(2, '0');
          ctx.fill();
          return true;
        });

        return fw.particles.length > 0;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Initial launches
    launchFirework();
    launchFirework();
    animationRef.current = requestAnimationFrame(animate);

    // Visibility API
    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationRef.current);
      } else {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
}
