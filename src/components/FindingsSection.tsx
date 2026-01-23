import { motion } from 'framer-motion';
import ScrambleText from './ScrambleText';

// Import downloaded logos
import coinbaseLogo from '@/assets/logos/coinbase.svg';
import facebookLogo from '@/assets/logos/facebook.svg';
import netflixLogo from '@/assets/logos/netflix.svg';
import teslaLogo from '@/assets/logos/tesla.svg';
import uberLogo from '@/assets/logos/uber.svg';

// Inline SVG components for logos we couldn't download
const CryptoLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6c4.64 0 8.4 3.76 8.4 8.4 0 4.64-3.76 8.4-8.4 8.4-4.64 0-8.4-3.76-8.4-8.4 0-4.64 3.76-8.4 8.4-8.4zm0 2.4a6 6 0 100 12 6 6 0 000-12z"/>
  </svg>
);

const AmazonLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595.379-.144.734-.36.92.044.187.404-.117.696-.424.907-2.882 1.98-6.189 2.97-9.928 2.97-4.376 0-8.347-1.392-11.896-4.175-.16-.127-.192-.247-.097-.363zm12.82-2.04c-.384-.476-1.196-.69-2.44-.645-1.226.045-2.096.184-2.608.417-.168.076-.176.15-.025.22.162.075.47.206.92.393.45.187.708.32.772.396.064.077.03.2-.1.367-.518.665-.778 1.653-.778 2.96 0 .283.014.507.04.67.027.163.083.337.17.52.086.183.16.32.223.411.064.09.183.2.358.33.175.13.3.216.37.258.073.043.23.105.47.188l.53.18c.305.1.491.162.56.182.069.02.19.04.364.06.174.02.293.03.356.03.24 0 .474-.02.704-.064.23-.043.458-.125.686-.247.228-.122.424-.276.59-.46.165-.186.274-.39.325-.615.05-.224.075-.422.075-.594 0-.45-.11-.877-.328-1.282-.22-.404-.458-.79-.72-1.154l-.448-.605c-.146-.2-.22-.343-.22-.433 0-.2.18-.474.54-.823.36-.35.822-.666 1.386-.95.563-.285.955-.51 1.176-.68.22-.168.33-.306.33-.412 0-.088-.058-.196-.174-.323-.116-.126-.27-.237-.46-.333-.19-.096-.365-.17-.522-.223-.158-.052-.366-.092-.626-.12-.26-.027-.444-.04-.553-.04-.687 0-1.335.103-1.94.31z"/>
  </svg>
);

const MetaLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973.327 1.395.938 2.533 1.834 3.31.889.772 1.95 1.159 3.098 1.159 1.237 0 2.354-.395 3.407-1.162.17-.124.34-.258.508-.403.186.149.38.291.58.423 1.063.702 2.196 1.075 3.381 1.075 1.153 0 2.213-.39 3.1-1.16.892-.772 1.503-1.907 1.832-3.308.14-.604.21-1.267.21-1.973 0-2.566-.703-5.241-2.044-7.303C14.952 5.31 13.237 4.03 11.27 4.03c-1.283 0-2.405.427-3.427 1.234a9.093 9.093 0 0 0-.928.877 9.1 9.1 0 0 0-.928-.877C4.965 4.457 3.843 4.03 2.56 4.03zM9 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm12 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  </svg>
);

const activeBounties = [
  { name: 'COINBASE', color: '#0052FF', status: 'HUNTING', logo: coinbaseLogo, isImage: true },
  { name: 'CRYPTO.COM', color: '#002D74', status: 'ACTIVE', Logo: CryptoLogo, isImage: false },
  { name: 'FACEBOOK', color: '#1877F2', status: 'HUNTING', logo: facebookLogo, isImage: true },
  { name: 'AMAZON', color: '#FF9900', status: 'ACTIVE', Logo: AmazonLogo, isImage: false },
  { name: 'NETFLIX', color: '#E50914', status: 'HUNTING', logo: netflixLogo, isImage: true },
  { name: 'TESLA', color: '#CC0000', status: 'ACTIVE', logo: teslaLogo, isImage: true },
  { name: 'UBER', color: '#000000', status: 'HUNTING', logo: uberLogo, isImage: true },
  { name: 'META', color: '#0082FB', status: 'ACTIVE', Logo: MetaLogo, isImage: false },
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
              
              {/* Logo */}
              <div className="mb-3 h-10 flex items-center">
                {bounty.isImage ? (
                  <img 
                    src={bounty.logo} 
                    alt={bounty.name} 
                    className="w-10 h-10 object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <div style={{ color: bounty.color }} className="opacity-80 group-hover:opacity-100 transition-opacity">
                    {bounty.Logo && <bounty.Logo />}
                  </div>
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