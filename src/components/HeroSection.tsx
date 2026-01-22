import { motion } from 'framer-motion';
import MarqueeBar from './MarqueeBar';

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex flex-col bg-background/80 backdrop-blur-sm">
      {/* Top bar */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="border-b border-border p-4 flex justify-between items-center text-xs font-mono"
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary status-pulse" />
            <span className="text-muted-foreground">ONLINE</span>
          </div>
          <span className="text-muted-foreground hidden sm:block">SYS.TIME: {new Date().toLocaleTimeString()}</span>
        </div>
        <div className="text-muted-foreground">
          LOC: <span className="text-primary">UNDISCLOSED</span>
        </div>
      </motion.div>

      <MarqueeBar />

      {/* Main hero content */}
      <div className="flex-1 grid lg:grid-cols-2 gap-0">
        {/* Left side - Info */}
        <div className="p-8 md:p-16 flex flex-col justify-center border-r border-border">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="text-xs text-muted-foreground block mb-2">CODENAME</span>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight cyberpunk-gradient-text">
                RAINKODE
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-2 gap-4 text-sm"
            >
              <div>
                <span className="text-muted-foreground block text-xs mb-1">SPECIALIZATION</span>
                <span className="text-foreground">Web Application Security</span>
              </div>
              <div>
                <span className="text-muted-foreground block text-xs mb-1">STATUS</span>
                <span className="text-primary">Available for Private Programs</span>
              </div>
              <div>
                <span className="text-muted-foreground block text-xs mb-1">RANK</span>
                <span className="text-foreground">Top 1% HackerOne</span>
              </div>
              <div>
                <span className="text-muted-foreground block text-xs mb-1">THREAT LEVEL</span>
                <span className="text-destructive">CRITICAL</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right side - Platforms */}
        <div className="p-8 md:p-16 flex flex-col justify-center bg-card/70">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-6"
          >
            <span className="text-xs text-muted-foreground tracking-widest uppercase">Active On</span>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'HACKERONE', color: 'from-[#494649] to-[#1a1a1a]', accent: '#00b81a', icon: 'H1' },
              { name: 'BUGCROWD', color: 'from-[#f26722] to-[#1a1a1a]', accent: '#f26722', icon: 'BC' },
              { name: 'IMMUNEFI', color: 'from-[#5865F2] to-[#1a1a1a]', accent: '#5865F2', icon: 'IM' },
              { name: 'INTIGRITI', color: 'from-[#00c2b8] to-[#1a1a1a]', accent: '#00c2b8', icon: 'IG' },
            ].map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.15 }}
                whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${platform.accent}40` }}
                className={`relative group bg-gradient-to-br ${platform.color} border border-border/50 p-6 cursor-pointer overflow-hidden`}
              >
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ background: `radial-gradient(circle at center, ${platform.accent}, transparent 70%)` }}
                />
                
                {/* Icon */}
                <div 
                  className="text-3xl md:text-4xl font-display font-black mb-2"
                  style={{ color: platform.accent }}
                >
                  {platform.icon}
                </div>
                
                {/* Name */}
                <div className="text-xs font-mono text-foreground tracking-wider">
                  {platform.name}
                </div>
                
                {/* Status indicator */}
                <div className="absolute top-3 right-3 flex items-center gap-1">
                  <div 
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ backgroundColor: platform.accent }}
                  />
                  <span className="text-[10px] text-muted-foreground">ACTIVE</span>
                </div>
                
                {/* Corner accent */}
                <div 
                  className="absolute bottom-0 right-0 w-12 h-12 opacity-10"
                  style={{ 
                    background: `linear-gradient(135deg, transparent 50%, ${platform.accent} 50%)` 
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

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
    </section>
  );
};

export default HeroSection;
