import { motion } from 'framer-motion';
import MarqueeBar from './MarqueeBar';

// Import platform logos
import hackeroneLogo from '@/assets/logos/hackerone.svg';
import bugcrowdLogo from '@/assets/logos/bugcrowd.svg';
import intigritiLogo from '@/assets/logos/intigriti.svg';

// Immunefi logo SVG component (not available in SimpleIcons)
const ImmunefiLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#5865F2">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zm0 3.6a6 6 0 100 12 6 6 0 000-12zm0 2.4a3.6 3.6 0 110 7.2 3.6 3.6 0 010-7.2z"/>
  </svg>
);

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
          <div className="flex flex-col gap-3">
            {[
              { name: 'HACKERONE', color: 'from-[#494649] to-[#1a1a1a]', accent: '#00b81a', logo: hackeroneLogo },
              { name: 'BUGCROWD', color: 'from-[#f26722] to-[#1a1a1a]', accent: '#f26722', logo: bugcrowdLogo },
              { name: 'IMMUNEFI', color: 'from-[#5865F2] to-[#1a1a1a]', accent: '#5865F2', Logo: ImmunefiLogo, isComponent: true },
              { name: 'INTIGRITI', color: 'from-[#00c2b8] to-[#1a1a1a]', accent: '#00c2b8', logo: intigritiLogo },
            ].map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.8 + index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ scale: 1.02, x: -8, boxShadow: `0 0 30px ${platform.accent}40` }}
                className={`relative group bg-gradient-to-br ${platform.color} border border-border/50 p-4 cursor-pointer overflow-hidden flex items-center gap-4`}
              >
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ background: `radial-gradient(circle at center, ${platform.accent}, transparent 70%)` }}
                />
                
                {/* Logo */}
                <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                  {platform.isComponent ? (
                    <platform.Logo />
                  ) : (
                    <img 
                      src={platform.logo} 
                      alt={platform.name} 
                      className="w-8 h-8 object-contain"
                    />
                  )}
                </div>
                
                {/* Name */}
                <div className="text-sm font-mono text-foreground tracking-wider flex-1">
                  {platform.name}
                </div>
                
                {/* Status indicator */}
                <div className="flex items-center gap-2">
                  <div 
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: platform.accent }}
                  />
                  <span className="text-xs text-muted-foreground">ACTIVE</span>
                </div>
                
                {/* Slide-in accent bar */}
                <motion.div 
                  className="absolute left-0 top-0 bottom-0 w-1"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.3, delay: 1.1 + index * 0.2 }}
                  style={{ backgroundColor: platform.accent, transformOrigin: 'top' }}
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
