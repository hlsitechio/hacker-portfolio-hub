import { motion } from 'framer-motion';
import ScrambleText from './ScrambleText';
import SpaceInvaders from './SpaceInvaders';
import xLogo from '@/assets/logos/x.svg';

const links = [
  { label: 'HACKERONE', value: '@rainkode', href: 'https://hackerone.com/rainkode' },
  { label: 'X', value: 'rainkode', href: 'https://x.com/rainkode174818', isLogo: true },
  { label: 'EMAIL', value: 'rainkode@protonmail.com', href: 'mailto:rainkode@protonmail.com' },
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
          className="relative p-8 md:p-16 flex flex-col justify-center bg-primary overflow-hidden"
        >
          {/* Space Invaders game in background */}
          <SpaceInvaders />
          <div className="text-primary-foreground">
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
                className="block text-background"
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
              Open for private bug bounty programs, security consulting, and penetration testing engagements.
            </motion.p>
          </div>
        </motion.div>

        {/* Right - Links */}
        <div className="p-8 md:p-16 flex flex-col justify-center bg-background/80">
          <div className="space-y-0">
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="group block border-b border-border py-6 transition-all hover:border-primary"
              >
                <span className="text-xs text-muted-foreground tracking-widest block mb-1">
                  {link.label}
                </span>
                {link.isLogo ? (
                  <img src={xLogo} alt="X" className="h-10 md:h-14 w-auto invert group-hover:opacity-80 transition-opacity" />
                ) : (
                  <span className="text-2xl md:text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    <ScrambleText text={link.value} scrambleOnHover />
                  </span>
                )}
              </motion.a>
            ))}
          </div>

          {/* PGP Key */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 p-4 bg-card border border-border"
          >
            <span className="text-xs text-muted-foreground tracking-widest block mb-2">
              PGP_FINGERPRINT
            </span>
            <code className="text-xs text-foreground break-all font-mono">
              XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX
            </code>
          </motion.div>

          {/* QR Code for Email */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 p-4 bg-card border border-border"
          >
            <span className="text-xs text-muted-foreground tracking-widest block mb-3">
              SCAN_TO_CONTACT
            </span>
            <div className="bg-white p-3 w-fit">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=mailto:rainkode@protonmail.com"
                alt="QR Code - Scan to email rainkode@protonmail.com"
                width={140}
                height={140}
                className="block"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
