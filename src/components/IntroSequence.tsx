import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroSequenceProps {
  onComplete: () => void;
}

const IntroSequence = ({ onComplete }: IntroSequenceProps) => {
  const [lines, setLines] = useState<string[]>([]);
  const [showAccess, setShowAccess] = useState(false);
  
  const terminalLines = [
    { text: '> Initializing secure connection...', delay: 0 },
    { text: '> Bypassing firewall [████████████] 100%', delay: 400 },
    { text: '> Decrypting credentials...', delay: 800 },
    { text: '> Injecting payload...', delay: 1200 },
    { text: '> ROOT ACCESS OBTAINED', delay: 1600 },
    { text: '> Loading profile...', delay: 2000 },
  ];

  useEffect(() => {
    terminalLines.forEach((line, index) => {
      setTimeout(() => {
        setLines(prev => [...prev, line.text]);
      }, line.delay);
    });

    setTimeout(() => setShowAccess(true), 2500);
    setTimeout(onComplete, 4000);
  }, []);

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-[200] bg-background flex items-center justify-center"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-2xl px-8">
          <div className="font-mono text-sm space-y-1 mb-8">
            {lines.map((line, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`${line.includes('ROOT') ? 'text-primary' : 'text-muted-foreground'}`}
              >
                {line}
              </motion.div>
            ))}
            {lines.length > 0 && lines.length < 6 && (
              <span className="typing-cursor" />
            )}
          </div>
          
          {showAccess && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              className="text-center"
            >
              <motion.div 
                animate={{ 
                  textShadow: [
                    "0 0 20px hsl(180, 100%, 50%)",
                    "0 0 40px hsl(180, 100%, 50%)",
                    "0 0 20px hsl(180, 100%, 50%)"
                  ]
                }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-6xl md:text-8xl font-display font-black text-primary chromatic glitch" 
                data-text="ACCESS"
              >
                ACCESS
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-6xl md:text-8xl font-display font-black text-foreground chromatic glitch" 
                data-text="GRANTED"
              >
                GRANTED
              </motion.div>
            </motion.div>
          )}
        </div>
        <div className="noise" />
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroSequence;
