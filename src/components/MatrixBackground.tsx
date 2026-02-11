import { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters - mix of katakana, numbers, and hacker symbols
    const matrixChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>{}[]!@#$%^&*()_+-=~`|\\/:;"\',.?';
    const chars = matrixChars.split('');

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    // Array to track y position of each column
    const drops: number[] = Array(columns).fill(1);

    // Array to track speed multiplier for each column
    const speeds: number[] = Array(columns).fill(0).map(() => 0.5 + Math.random() * 1.5);

    // Array to track brightness for each column
    const brightness: number[] = Array(columns).fill(0).map(() => 0.3 + Math.random() * 0.7);

    // Deep purple color palette
    const colors = [
      'rgba(139, 92, 246, ', // Primary purple
      'rgba(124, 58, 237, ', // Deep purple
      'rgba(167, 139, 250, ', // Light purple
      'rgba(109, 40, 217, ', // Dark purple
      'rgba(168, 85, 247, ', // Violet accent
    ];

    let animationId: number;

    const draw = () => {
      // Semi-transparent black to create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'IBM Plex Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)];

        // Calculate position
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Leading character is brightest
        const isLeading = Math.random() > 0.7;
        const colorIndex = Math.random() > 0.95 ? 4 : Math.floor(Math.random() * 4); // Rare magenta
        const alpha = isLeading ? 1 : brightness[i] * 0.6;

        ctx.fillStyle = colors[colorIndex] + alpha + ')';

        // Add glow effect for leading characters
        if (isLeading) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = 'rgba(139, 92, 246, 0.8)';
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillText(char, x, y);

        // Reset drop if it reaches bottom or randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
          speeds[i] = 0.5 + Math.random() * 1.5;
          brightness[i] = 0.3 + Math.random() * 0.7;
        }

        // Move drop down at its speed
        drops[i] += speeds[i];
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-[0.18]"
        style={{ filter: 'contrast(1.1)' }}
      />
      {/* Subtle vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
        }}
      />
    </div>
  );
};

export default MatrixBackground;
