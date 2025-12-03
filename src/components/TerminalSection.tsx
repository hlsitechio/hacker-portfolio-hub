import { motion } from 'framer-motion';

const commands = [
  { cmd: 'cat skills.txt', output: ['WEB_APP_SECURITY', 'API_TESTING', 'OWASP_TOP_10', 'SQL_INJECTION', 'XSS_CSRF', 'IDOR', 'AUTH_BYPASS', 'BUSINESS_LOGIC'] },
  { cmd: 'ls -la targets/', output: ['Fortune_500_Companies/', 'Major_Tech_Platforms/', 'Financial_Institutions/', 'E-commerce_Giants/', 'Social_Networks/'] },
  { cmd: 'whoami', output: ['root // just kidding... unless?'] },
];

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
          className="bg-card border border-border p-6 font-mono text-sm"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <div className="w-3 h-3 rounded-full bg-secondary" />
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="ml-4 text-muted-foreground text-xs">bash — 80x24</span>
          </div>

          {/* Commands */}
          <div className="space-y-6">
            {commands.map((command, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-primary">→</span>
                  <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.1 }}
                    viewport={{ once: true }}
                    className="text-foreground"
                  >
                    {command.cmd}
                  </motion.span>
                </div>
                <div className="pl-6 text-muted-foreground">
                  {command.output.map((line, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.2 + 0.2 + i * 0.05 }}
                      viewport={{ once: true }}
                      className="hover:text-primary transition-colors"
                    >
                      {line}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <span className="text-primary">→</span>
              <span className="typing-cursor" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalSection;
