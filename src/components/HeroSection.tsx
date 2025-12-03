import { motion } from 'framer-motion';
import ASCIIArt from './ASCIIArt';
import ScrambleText from './ScrambleText';
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
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <ASCIIArt />
          </motion.div>
          
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="text-xs text-muted-foreground block mb-1">CODENAME</span>
              <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight">
                <ScrambleText text="RAINKODE" className="text-foreground" />
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

        {/* Right side - Stats */}
        <div className="p-8 md:p-16 flex flex-col justify-center bg-card/70">
          <div className="space-y-8">
            {[
              { value: '150', suffix: '+', color: 'border-primary', label: 'Vulnerabilities Discovered' },
              { value: '$50K', suffix: '+', color: 'border-accent', label: 'Total Bounties Earned' },
              { value: '25', suffix: '+', color: 'border-secondary', label: 'Hall of Fame Features' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className={`border-l-2 ${stat.color} pl-6`}
              >
                <div className="text-6xl md:text-8xl font-display font-black text-foreground">
                  {stat.value}<span className={stat.color.replace('border-', 'text-')}>{stat.suffix}</span>
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest">
                  {stat.label}
                </div>
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
