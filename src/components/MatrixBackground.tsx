import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>{}[]=/\\|@#$%^&*';
    const charArray = chars.split('');
    
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(0).map(() => Math.random() * -100);

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const yPos = drops[i] * fontSize;

        // Varying opacity for depth - very subtle
        const alpha = Math.random() * 0.3 + 0.05;
        ctx.fillStyle = `hsla(142, 100%, 50%, ${alpha})`;
        ctx.fillText(char, x, yPos);

        // Add glow effect to some characters
        if (Math.random() > 0.995) {
          ctx.shadowColor = 'hsl(142, 100%, 50%)';
          ctx.shadowBlur = 15;
          ctx.fillStyle = 'hsla(142, 100%, 70%, 0.6)';
          ctx.fillText(char, x, yPos);
          ctx.shadowBlur = 0;
        }

        if (yPos > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i] += 0.5 + Math.random() * 0.5;
      }
    };

    const interval = setInterval(draw, 45);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.canvas
        ref={canvasRef}
        style={{ y }}
        className="w-full h-[120vh] opacity-[0.12]"
      />
    </div>
  );
};

export default MatrixBackground;
