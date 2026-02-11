import { motion } from 'framer-motion';
import ScrambleText from './ScrambleText';

// Import downloaded logos
import coinbaseLogo from '@/assets/logos/coinbase.svg';
import facebookLogo from '@/assets/logos/facebook.svg';
import amazonLogo from '@/assets/logos/amazon.svg';
import netflixLogo from '@/assets/logos/netflix.svg';
import teslaLogo from '@/assets/logos/tesla.svg';
import uberLogo from '@/assets/logos/uber.svg';
import metaLogo from '@/assets/logos/meta.svg';

// Crypto.com logo SVG (official design)
const CryptoLogo = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#002D74">
    <path d="M12.0002 0C5.3732 0 .0002 5.373.0002 12s5.373 12 12 12 12-5.373 12-12S18.6272 0 12.0002 0zm5.2442 8.865v6.2632c-.0039.0878-.0168.1746-.0384.2593l-.0192.0734-.0244.0643a.9166.9166 0 0 1-.0996.2002.852.852 0 0 1-.1169.1425.7995.7995 0 0 1-.2362.1695l-4.1738 2.3967a.9659.9659 0 0 1-.2668.1169 1.0128 1.0128 0 0 1-.5765 0 .9672.9672 0 0 1-.2669-.117l-4.1786-2.4a.7823.7823 0 0 1-.2351-.1686.8535.8535 0 0 1-.1174-.1424.9193.9193 0 0 1-.1587-.5369V8.865a.9143.9143 0 0 1 .0383-.2593l.0197-.0739.0239-.0638a.9134.9134 0 0 1 .1-.2002.8573.8573 0 0 1 .1169-.1424.7823.7823 0 0 1 .2356-.1686l4.1781-2.4a.9766.9766 0 0 1 .2674-.117 1.0127 1.0127 0 0 1 .5764 0c.0932.0263.1827.0648.2664.1165l4.1786 2.4a.8.8 0 0 1 .2357.1691.8577.8577 0 0 1 .1169.1424.9179.9179 0 0 1 .0996.2002l.0244.0638.0192.0739c.0216.0847.0345.1715.0384.2593zm-1.4762 5.7354v-5.2032l-3.548-2.04v2.502l2.078 1.1978v3.5426z"/>
  </svg>
);

const activeBounties = [
  { name: 'COINBASE', color: '#0052FF', status: 'INTEREST', logo: coinbaseLogo },
  { name: 'CRYPTO.COM', color: '#002D74', status: 'INTEREST', Logo: CryptoLogo, isComponent: true },
  { name: 'FACEBOOK', color: '#1877F2', status: 'INTEREST', logo: facebookLogo },
  { name: 'AMAZON', color: '#FF9900', status: 'INTEREST', logo: amazonLogo },
  { name: 'NETFLIX', color: '#E50914', status: 'INTEREST', logo: netflixLogo },
  { name: 'TESLA', color: '#CC0000', status: 'INTEREST', logo: teslaLogo },
  { name: 'UBER', color: '#FFFFFF', status: 'INTEREST', logo: uberLogo },
  { name: 'META', color: '#0082FB', status: 'INTEREST', logo: metaLogo },
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
            <span className="text-xs text-muted-foreground tracking-widest block mb-2">FILE://TARGET_WISHLIST</span>
            <h2 className="text-3xl md:text-5xl font-display font-black">
              <ScrambleText text="PROGRAMS OF INTEREST" scrambleOnHover />
            </h2>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-xs text-muted-foreground">ON THE RADAR</span>
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
              
              {/* Logo */}
              <div className="mb-3 h-12 flex items-center">
                {bounty.isComponent ? (
                  <bounty.Logo />
                ) : (
                  <img 
                    src={bounty.logo} 
                    alt={bounty.name} 
                    className="w-10 h-10 object-contain"
                    style={{ filter: bounty.name === 'UBER' ? 'invert(1)' : 'none' }}
                  />
                )}
              </div>
              
              {/* Company name */}
              <div 
                className="text-sm md:text-base font-display font-black tracking-tight group-hover:tracking-wide transition-all duration-300"
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