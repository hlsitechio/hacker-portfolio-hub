import { motion } from 'framer-motion';
import { Radar, Target, ShieldAlert, Search, Bug, Skull, Scan, Terminal, Fingerprint, Crosshair, Zap } from 'lucide-react';
import SpaceInvaders from './SpaceInvaders';
import kaliLogo from '@/assets/logos/kali.svg';
import blackarchLogo from '@/assets/logos/blackarch.svg';
import parrotLogo from '@/assets/logos/parrot.svg';

const operatingSystems = [
  { name: 'KALI LINUX', logo: kaliLogo },
  { name: 'BLACKARCH', logo: blackarchLogo },
  { name: 'PARROT OS', logo: parrotLogo },
];

const toolCategories = [
  {
    category: 'CUSTOM',
    tools: [
      { name: 'D3BUGR', icon: Terminal },
      { name: 'BOTHEAVEN', icon: Skull },
      { name: 'SKILL SCANNER', icon: Scan },
    ]
  },
  {
    category: 'RECON',
    tools: [
      { name: 'SHODAN', icon: Search },
      { name: 'NUCLEI', icon: Target },
      { name: 'NMAP', icon: Radar },
      { name: 'SUBFINDER', icon: Fingerprint },
    ]
  },
  {
    category: 'OFFENSIVE',
    tools: [
      { name: 'SQLMAP', icon: Bug },
      { name: 'BURP SUITE', icon: Crosshair },
      { name: 'FFUF', icon: Zap },
      { name: 'METASPLOIT', icon: ShieldAlert },
    ]
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col">
      {/* Top divider */}
      <div className="border-animated h-1" />
      
      <div className="flex-1 grid lg:grid-cols-2">
        {/* Left - CTA with Space Invaders background */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative p-8 md:p-16 flex flex-col justify-center bg-gradient-to-br from-card via-background to-card overflow-hidden border-r border-border"
        >
          {/* Space Invaders game in background */}
          <SpaceInvaders />
          <div className="text-foreground">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xs tracking-widest block mb-4"
            >
              INITIATE_CONTACT
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-none mb-8"
            >
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="block"
              >
                LET'S
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="block"
              >
                WORK
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="block text-primary"
              >
                TOGETHER
              </motion.span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-lg opacity-80 max-w-md"
            >
              Independent security researcher. Private bug bounty programs, penetration testing, and vulnerability research. Custom tooling. No contracts — results only.
            </motion.p>

            {/* OS & Environment Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <span className="text-xs tracking-widest block mb-4 opacity-70">OS_&_ENVIRONMENT</span>
              <div className="flex gap-3 overflow-x-auto">
                {operatingSystems.map((os, index) => (
                  <motion.div
                    key={os.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-3 px-4 py-3 bg-muted/50 border border-border hover:border-primary/40 backdrop-blur-sm transition-colors"
                  >
                    <img src={os.logo} alt={os.name} className="w-8 h-8 object-contain" />
                    <span className="text-sm tracking-wider text-foreground/90 font-mono">{os.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <span className="text-xs tracking-widest block mb-6 opacity-70">ARSENAL_</span>
              <div className="space-y-4">
                {toolCategories.map((category, catIndex) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1.1 + catIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-[10px] tracking-widest text-muted-foreground block mb-2 font-mono">
                      {'>'} {category.category}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, index) => (
                        <motion.div
                          key={tool.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: 1.2 + catIndex * 0.1 + index * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="flex items-center gap-3 px-4 py-3 bg-muted/50 border border-border hover:border-primary/40 backdrop-blur-sm transition-colors"
                        >
                          <tool.icon className="w-7 h-7 text-foreground" />
                          <span className="text-sm tracking-wider text-foreground/90 font-mono">{tool.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right - Clean Contact Links */}
        <div className="p-8 md:p-12 flex flex-col justify-center bg-background/95">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-xs text-muted-foreground tracking-widest block mb-2">CONNECT</span>
            <h3 className="text-3xl md:text-4xl font-display font-black text-foreground">
              GET IN TOUCH
            </h3>
          </motion.div>

          {/* Contact Links - Clean */}
          <div className="space-y-6">
            {/* HackerOne */}
            <motion.a
              href="https://hackerone.com/rainkode"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group block p-5 border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-muted-foreground tracking-widest mb-1">HACKERONE</div>
                  <div className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    @rainkode
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    17 Valid Reports · 2x Hall of Fame
                  </div>
                </div>
                <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.a>

            {/* Twitter/X */}
            <motion.a
              href="https://x.com/rainkode174818"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group block p-5 border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-muted-foreground tracking-widest mb-1">TWITTER / X</div>
                  <div className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    @rainkode
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    Bug Bounty · Research · Write-ups
                  </div>
                </div>
                <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:rainkode@protonmail.com"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group block p-5 border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-muted-foreground tracking-widest mb-1">EMAIL</div>
                  <div className="text-lg md:text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    rainkode@protonmail.com
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    PGP Available · Private Programs Welcome
                  </div>
                </div>
                <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.a>
          </div>

          {/* Status */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 pt-6 border-t border-border"
          >
            <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>AVAILABLE FOR WORK</span>
              </div>
              <span>RESPONSE &lt; 24H</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
