import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroSequenceProps {
  onComplete: () => void;
}

const IntroSequence = ({ onComplete }: IntroSequenceProps) => {
  const [lines, setLines] = useState<string[]>([]);
  const [showAccess, setShowAccess] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentIP, setCurrentIP] = useState('192.168.1.1');
  const [showGlitch, setShowGlitch] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const terminalLines = [
    { text: '> ssh -i ~/.ssh/id_rsa root@target.sys', delay: 0 },
    { text: '> Establishing encrypted tunnel...', delay: 300 },
    { text: '> [CRYPTO] AES-256-GCM handshake complete', delay: 600 },
    { text: '> Scanning network topology...', delay: 900 },
    { text: '> [FOUND] 147 active hosts on subnet', delay: 1200 },
    { text: '> Initiating vulnerability assessment...', delay: 1500 },
    { text: '> [CVE-2024-XXXX] Critical RCE detected', delay: 1800 },
    { text: '> Exploiting privilege escalation vector...', delay: 2100 },
    { text: '> [PAYLOAD] Injecting shellcode...', delay: 2400 },
    { text: '> ROOT ACCESS OBTAINED', delay: 2700 },
    { text: '> Loading RAINKODE profile...', delay: 3000 },
  ];

  // Fake IP cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      const octets = [
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
      ];
      setCurrentIP(octets.join('.'));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Progress bar animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 3;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Terminal line typing effect
  useEffect(() => {
    terminalLines.forEach((line, index) => {
      setTimeout(() => {
        setLines((prev) => [...prev, line.text]);
      }, line.delay);
    });

    setTimeout(() => {
      setShowGlitch(true);
      setTimeout(() => setShowAccess(true), 300);
    }, 3300);
    setTimeout(onComplete, 5000);
  }, []);

  // Canvas glitch effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !showGlitch) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let frame = 0;
    const animate = () => {
      if (frame > 30) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Random glitch blocks - purple tones
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const w = Math.random() * 200 + 50;
        const h = Math.random() * 20 + 5;

        ctx.fillStyle = `rgba(139, 92, 246, ${Math.random() * 0.3})`;
        ctx.fillRect(x, y, w, h);
      }

      // Horizontal scan lines - deep purple
      for (let i = 0; i < canvas.height; i += 4) {
        if (Math.random() > 0.7) {
          ctx.fillStyle = `rgba(124, 58, 237, ${Math.random() * 0.1})`;
          ctx.fillRect(0, i, canvas.width, 2);
        }
      }

      frame++;
      if (frame < 30) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [showGlitch]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] bg-background flex items-center justify-center overflow-hidden"
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Glitch canvas overlay */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none z-10"
        />

        {/* Scan line effect */}
        <div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
          }}
        />

        <div className="w-full max-w-3xl px-8 relative z-30">
          {/* Terminal header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-4 text-xs font-mono"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-muted-foreground/50" />
              <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
              <div className="w-3 h-3 rounded-full bg-muted-foreground/20" />
            </div>
            <span className="text-muted-foreground">root@rainkode:~</span>
            <span className="text-primary ml-auto">
              TARGET: {currentIP}
            </span>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6"
          >
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-muted-foreground">EXPLOIT PROGRESS</span>
              <span className="text-primary">{Math.min(100, Math.floor(progress))}%</span>
            </div>
            <div className="h-1 bg-muted overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent to-primary"
                style={{ width: `${Math.min(100, progress)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </motion.div>

          {/* Terminal output */}
          <div className="font-mono text-sm space-y-1 mb-8 bg-black/50 p-4 border border-primary/20">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={`${
                  line.includes('ROOT') || line.includes('CVE') || line.includes('Critical')
                    ? 'text-primary font-bold'
                    : line.includes('[')
                    ? 'text-accent'
                    : 'text-muted-foreground'
                }`}
              >
                {line}
              </motion.div>
            ))}
            {lines.length > 0 && lines.length < terminalLines.length && (
              <span className="typing-cursor" />
            )}
          </div>

          {/* ACCESS GRANTED reveal */}
          {showAccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{
                duration: 0.6,
                type: 'spring',
                stiffness: 200,
                damping: 15,
              }}
              className="text-center perspective-1000"
            >
              <motion.div
                animate={{
                  textShadow: [
                    '0 0 20px hsl(270, 60%, 55%), 0 0 40px hsl(270, 60%, 55%)',
                    '0 0 60px hsl(270, 60%, 55%), 0 0 80px hsl(270, 60%, 55%)',
                    '0 0 20px hsl(270, 60%, 55%), 0 0 40px hsl(270, 60%, 55%)',
                  ],
                }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-primary glitch"
                data-text="ACCESS"
              >
                ACCESS
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-foreground glitch"
                data-text="GRANTED"
              >
                GRANTED
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="h-px w-64 mx-auto mt-6 bg-gradient-to-r from-transparent via-primary to-transparent"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xs text-muted-foreground mt-4 font-mono tracking-widest"
              >
                WELCOME TO THE SYSTEM
              </motion.p>
            </motion.div>
          )}
        </div>

        {/* Background noise */}
        <div className="noise" />

        {/* Corner decorations */}
        <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-primary/30" />
        <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-primary/30" />
        <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-primary/30" />
        <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-primary/30" />
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroSequence;
