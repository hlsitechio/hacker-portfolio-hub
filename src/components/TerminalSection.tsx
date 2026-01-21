import { motion } from 'framer-motion';
import hackerTerminalVideo from '@/assets/hacker-terminal.mp4';

const TerminalSection = () => {
  return (
    <section className="py-24 px-8 md:px-16 bg-background/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground tracking-widest">TERMINAL_OUTPUT</span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative bg-black border border-primary/30 overflow-hidden rounded-lg shadow-[0_0_30px_rgba(0,255,0,0.1),inset_0_0_60px_rgba(0,0,0,0.8)]"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 p-4 border-b border-primary/20 bg-black/90 backdrop-blur-sm z-10 relative">
            <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            <span className="ml-4 text-primary/60 text-xs font-mono">root@rainkode:~</span>
          </div>

          {/* Video container */}
          <div className="relative aspect-video">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{
                filter: 'brightness(0.8) contrast(1.2) saturate(1.1)',
              }}
            >
              <source 
                src={hackerTerminalVideo} 
                type="video/mp4" 
              />
            </video>
            
            {/* Scanline overlay */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)',
              }}
            />
            
            {/* Vignette effect */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)',
              }}
            />
            
            {/* Green glow overlay */}
            <div 
              className="absolute inset-0 pointer-events-none mix-blend-overlay"
              style={{
                background: 'linear-gradient(135deg, rgba(0,255,100,0.05) 0%, transparent 50%, rgba(0,200,255,0.05) 100%)',
              }}
            />
          </div>

          {/* Bottom terminal bar */}
          <div className="p-3 bg-black/95 border-t border-primary/20 font-mono text-xs">
            <div className="flex items-center gap-2 text-primary/80">
              <span className="text-primary animate-pulse">▶</span>
              <span className="text-muted-foreground">executing payload...</span>
              <span className="typing-cursor ml-1" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalSection;
