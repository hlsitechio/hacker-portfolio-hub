import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t border-border"
    >
      <div className="px-8 md:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} // ALL_VULNERABILITIES_RESPONSIBLY_DISCLOSED
        </div>
        <motion.div 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center gap-2"
        >
          <div className="w-2 h-2 bg-primary status-pulse" />
          <span className="text-xs text-muted-foreground">SYSTEM_OPERATIONAL</span>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
