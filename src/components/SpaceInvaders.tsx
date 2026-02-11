import { useEffect, useRef } from 'react';

interface Invader {
  x: number;
  y: number;
  alive: boolean;
}

interface Bullet {
  x: number;
  y: number;
  dy: number;
}

const SpaceInvaders = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Game state
    let playerX = canvas.width / 2;
    let playerDirection = 1;
    const playerSpeed = 2;
    const playerWidth = 40;
    const playerHeight = 20;

    // Invaders
    const invaderRows = 4;
    const invaderCols = 8;
    const invaderWidth = 30;
    const invaderHeight = 20;
    const invaderPadding = 15;
    let invaders: Invader[] = [];
    let invaderDirection = 1;
    let invaderSpeed = 0.5;
    let invaderDropAmount = 20;

    // Bullets
    let playerBullets: Bullet[] = [];
    let invaderBullets: Bullet[] = [];
    const bulletSpeed = 4;

    // Initialize invaders
    const initInvaders = () => {
      invaders = [];
      const startX = (canvas.width - (invaderCols * (invaderWidth + invaderPadding))) / 2;
      const startY = 50;

      for (let row = 0; row < invaderRows; row++) {
        for (let col = 0; col < invaderCols; col++) {
          invaders.push({
            x: startX + col * (invaderWidth + invaderPadding),
            y: startY + row * (invaderHeight + invaderPadding),
            alive: true,
          });
        }
      }
    };

    initInvaders();

    // Auto-play AI
    let lastShot = 0;
    const shootInterval = 800;
    let lastInvaderShot = 0;
    const invaderShootInterval = 1500;

    // Draw pixel art invader
    const drawInvader = (x: number, y: number, type: number) => {
      ctx.fillStyle = type % 2 === 0 ? '#a78bfa' : '#c4b5fd';
      const pixelSize = 3;
      
      // Classic space invader pattern
      const pattern = [
        [0,0,1,0,0,0,0,0,1,0,0],
        [0,0,0,1,0,0,0,1,0,0,0],
        [0,0,1,1,1,1,1,1,1,0,0],
        [0,1,1,0,1,1,1,0,1,1,0],
        [1,1,1,1,1,1,1,1,1,1,1],
        [1,0,1,1,1,1,1,1,1,0,1],
        [1,0,1,0,0,0,0,0,1,0,1],
        [0,0,0,1,1,0,1,1,0,0,0],
      ];

      pattern.forEach((row, py) => {
        row.forEach((pixel, px) => {
          if (pixel) {
            ctx.fillRect(
              x + px * pixelSize - (pattern[0].length * pixelSize) / 2,
              y + py * pixelSize - (pattern.length * pixelSize) / 2,
              pixelSize,
              pixelSize
            );
          }
        });
      });
    };

    // Draw player ship
    const drawPlayer = (x: number, y: number) => {
      ctx.fillStyle = '#8b5cf6';
      const pixelSize = 3;
      
      const pattern = [
        [0,0,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,1,1,1,0,0,0,0],
        [0,0,0,0,1,1,1,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,1,0],
        [1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1],
      ];

      pattern.forEach((row, py) => {
        row.forEach((pixel, px) => {
          if (pixel) {
            ctx.fillRect(
              x + px * pixelSize - (pattern[0].length * pixelSize) / 2,
              y + py * pixelSize,
              pixelSize,
              pixelSize
            );
          }
        });
      });
    };

    // Game loop
    const gameLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Auto-move player
      playerX += playerSpeed * playerDirection;
      if (playerX > canvas.width - 50 || playerX < 50) {
        playerDirection *= -1;
      }

      // Auto-shoot
      const now = Date.now();
      if (now - lastShot > shootInterval) {
        playerBullets.push({ x: playerX, y: canvas.height - 60, dy: -bulletSpeed });
        lastShot = now;
      }

      // Invader auto-shoot
      if (now - lastInvaderShot > invaderShootInterval) {
        const aliveInvaders = invaders.filter(inv => inv.alive);
        if (aliveInvaders.length > 0) {
          const shooter = aliveInvaders[Math.floor(Math.random() * aliveInvaders.length)];
          invaderBullets.push({ x: shooter.x, y: shooter.y + invaderHeight, dy: bulletSpeed * 0.7 });
          lastInvaderShot = now;
        }
      }

      // Move invaders
      let shouldDrop = false;
      invaders.forEach(inv => {
        if (inv.alive) {
          inv.x += invaderSpeed * invaderDirection;
          if (inv.x > canvas.width - 30 || inv.x < 30) {
            shouldDrop = true;
          }
        }
      });

      if (shouldDrop) {
        invaderDirection *= -1;
        invaders.forEach(inv => {
          inv.y += invaderDropAmount;
          // Reset if invaders reach bottom
          if (inv.y > canvas.height - 100) {
            initInvaders();
          }
        });
      }

      // Update and draw player bullets
      playerBullets = playerBullets.filter(bullet => {
        bullet.y += bullet.dy;
        
        // Check collision with invaders
        invaders.forEach(inv => {
          if (inv.alive &&
              bullet.x > inv.x - invaderWidth/2 &&
              bullet.x < inv.x + invaderWidth/2 &&
              bullet.y > inv.y - invaderHeight/2 &&
              bullet.y < inv.y + invaderHeight/2) {
            inv.alive = false;
            bullet.y = -100; // Remove bullet
          }
        });

        // Draw bullet
        ctx.fillStyle = '#a78bfa';
        ctx.fillRect(bullet.x - 2, bullet.y, 4, 12);

        return bullet.y > 0;
      });

      // Update and draw invader bullets
      invaderBullets = invaderBullets.filter(bullet => {
        bullet.y += bullet.dy;

        // Draw bullet
        ctx.fillStyle = '#7c3aed';
        ctx.fillRect(bullet.x - 2, bullet.y, 4, 12);
        
        return bullet.y < canvas.height;
      });

      // Draw invaders
      invaders.forEach((inv, index) => {
        if (inv.alive) {
          drawInvader(inv.x, inv.y, index);
        }
      });

      // Check if all invaders are dead - reset
      if (invaders.every(inv => !inv.alive)) {
        initInvaders();
        invaderSpeed += 0.1;
      }

      // Draw player
      drawPlayer(playerX, canvas.height - 50);

      requestAnimationFrame(gameLoop);
    };

    const animationId = requestAnimationFrame(gameLoop);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
      style={{ imageRendering: 'pixelated' }}
    />
  );
};

export default SpaceInvaders;