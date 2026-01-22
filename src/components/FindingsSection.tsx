import { motion } from 'framer-motion';
import ScrambleText from './ScrambleText';

const activeBounties = [
  { name: 'COINBASE', color: '#0052FF', status: 'HUNTING' },
  { name: 'CRYPTO.COM', color: '#002D74', status: 'ACTIVE' },
  { name: 'FACEBOOK', color: '#1877F2', status: 'HUNTING' },
  { name: 'AMAZON', color: '#FF9900', status: 'ACTIVE' },
  { name: 'NETFLIX', color: '#E50914', status: 'HUNTING' },
  { name: 'TESLA', color: '#CC0000', status: 'ACTIVE' },
  { name: 'UBER', color: '#000000', status: 'HUNTING' },
  { name: 'META', color: '#0082FB', status: 'ACTIVE' },
];

const FindingsSection = () => {
  return (
    <section className="py-24 bg-card/70 backdrop-blur-sm">
      {/* Section header */}
      <div className="px-8 md:px-16 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-end justify-between border-b border-border pb-4"
        >
          <div>
            <span className="text-xs text-muted-foreground tracking-widest block mb-2">FILE://CURRENT_TARGETS</span>
            <h2 className="text-3xl md:text-5xl font-display font-black">
              <ScrambleText text="LIVE BOUNTY ACTIVITIES" scrambleOnHover />
            </h2>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-xs text-muted-foreground">ACTIVE PROGRAMS</span>
            <div className="text-2xl font-display font-bold text-primary">{activeBounties.length}</div>
          </div>
        </motion.div>
      </div>

      {/* Bounties grid */}
      <div className="px-8 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {activeBounties.map((bounty, index) => (
            <motion.div
              key={bounty.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: `0 20px 40px ${bounty.color}30`
              }}
              className="relative group bg-background border border-border p-6 cursor-pointer overflow-hidden"
            >
              {/* Animated border glow */}
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ 
                  background: `linear-gradient(135deg, ${bounty.color}20, transparent 50%, ${bounty.color}10)`,
                }}
              />
              
              {/* Top accent line */}
              <motion.div 
                className="absolute top-0 left-0 right-0 h-1"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                style={{ backgroundColor: bounty.color, transformOrigin: 'left' }}
              />
              
              {/* Status indicator */}
              <div className="flex items-center gap-2 mb-4">
                <motion.div 
                  className="w-2 h-2 rounded-full"
                  animate={{ 
                    opacity: [1, 0.3, 1],
                    scale: [1, 0.8, 1]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{ backgroundColor: bounty.color }}
                />
                <span className="text-[10px] text-muted-foreground tracking-widest">
                  {bounty.status}
                </span>
              </div>
              
              {/* Company name */}
              <div 
                className="text-lg md:text-xl font-display font-black tracking-tight group-hover:tracking-wide transition-all duration-300"
                style={{ color: bounty.color }}
              >
                {bounty.name}
              </div>
              
              {/* Scan line effect */}
              <motion.div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(transparent 0%, ${bounty.color}10 50%, transparent 100%)`,
                  backgroundSize: '100% 8px',
                }}
              />
              
              {/* Corner decoration */}
              <div 
                className="absolute bottom-0 right-0 w-8 h-8 opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ 
                  background: `linear-gradient(135deg, transparent 50%, ${bounty.color} 50%)` 
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindingsSection;
