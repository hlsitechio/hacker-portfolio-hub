import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CodeRainCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
    };
    resizeCanvas();

    const chars = 'RAINKODE01アイウエオカキクケコ<>{}[]$#@&*';
    const charArray = chars.split('');
    const fontSize = 16;
    const columns = Math.floor(canvas.offsetWidth / fontSize);
    const drops: number[] = Array(columns).fill(1).map(() => Math.random() * -100);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      ctx.font = `${fontSize}px 'IBM Plex Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Dark purple gradient
        const hue = 260 + (i / columns) * 30;
        ctx.fillStyle = `hsla(${hue}, 60%, 55%, ${0.6 + Math.random() * 0.3})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `hsla(${hue}, 60%, 50%, 0.4)`;
        ctx.fillText(char, x, y);

        if (y > canvas.offsetHeight && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i] += 0.5 + Math.random() * 0.5;
      }

      requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
    />
  );
};

// Tools Arsenal - Clean monochrome
const tools = [
  { name: 'BURP SUITE', level: 95 },
  { name: 'NUCLEI', level: 90 },
  { name: 'SQLMAP', level: 88 },
  { name: 'FFUF', level: 85 },
  { name: 'NMAP', level: 80 },
  { name: 'METASPLOIT', level: 75 },
];

// Attack Vectors - Simple list
const attackVectors = ['XSS', 'SQLi', 'SSRF', 'IDOR', 'AUTH BYPASS', 'RCE', 'CSRF', 'BAC'];

// Languages
const languages = ['PYTHON', 'JAVASCRIPT', 'BASH', 'GO', 'SQL'];

const stats = [
  { label: 'BUGS', value: '23' },
  { label: 'VALID', value: '17' },
  { label: 'HOF', value: '2' },
  { label: 'BOUNTY', value: '$8K+' },
];

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex flex-col pt-16">
      {/* RAINKODE Hero - Full width dramatic section */}
      <div className="relative flex-1 flex flex-col items-center justify-center py-20 overflow-hidden">
        <CodeRainCanvas />

        {/* Glow effects */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs text-muted-foreground tracking-[0.3em] block mb-4"
          >
            SECURITY RESEARCHER // BUG BOUNTY HUNTER
          </motion.span>

          <motion.h1
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-display font-black tracking-tight leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #7c3aed 100%)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 0 80px rgba(139,92,246,0.4), 0 0 120px rgba(124,58,237,0.2)',
              animation: 'gradient-slide 3s ease-in-out infinite',
            }}
          >
            RAINKODE
          </motion.h1>

          {/* Canadian badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center justify-center gap-3 mt-6"
          >
            <span className="text-4xl">🇨🇦</span>
            <div className="text-left">
              <span className="text-lg font-display font-bold text-red-500 tracking-wider block">
                TRUE NORTH DEFENDER
              </span>
              <span className="text-xs text-muted-foreground font-mono">
                PROTECTING THE DIGITAL FRONTIER
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-xs text-muted-foreground tracking-widest"
          >
            SCROLL
          </motion.span>
          <motion.div
            animate={{ scaleY: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
          />
        </motion.div>
      </div>

      {/* Clean Minimal Dashboard */}
      <div className="bg-background/95 border-t border-border">
        {/* Stats bar - Simple */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-4 border-b border-border"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 border-r border-border last:border-r-0 text-center"
            >
              <div className="text-[10px] text-muted-foreground tracking-widest mb-2">{stat.label}</div>
              <div className="text-3xl md:text-4xl font-display font-black text-foreground">
                {stat.value}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2">
          {/* Tools - Clean bars */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 border-r border-border"
          >
            <span className="text-xs text-muted-foreground tracking-widest block mb-6">TOOLS</span>
            <div className="space-y-4">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-mono text-foreground">{tool.name}</span>
                    <span className="text-xs text-muted-foreground">{tool.level}%</span>
                  </div>
                  <div className="h-1 bg-border overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tool.level}%` }}
                      transition={{ duration: 0.8, delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="h-full bg-primary"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Vectors & Languages */}
          <div className="p-8 md:p-10">
            {/* Attack Vectors - Simple tags */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="text-xs text-muted-foreground tracking-widest block mb-4">SPECIALIZATIONS</span>
              <div className="flex flex-wrap gap-2">
                {attackVectors.map((vector, i) => (
                  <motion.span
                    key={vector}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: i * 0.03 }}
                    viewport={{ once: true }}
                    className="px-3 py-1.5 text-xs font-mono border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                  >
                    {vector}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Languages - Simple tags */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-xs text-muted-foreground tracking-widest block mb-4">LANGUAGES</span>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, i) => (
                  <motion.span
                    key={lang}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: i * 0.03 }}
                    viewport={{ once: true }}
                    className="px-3 py-1.5 text-xs font-mono border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
