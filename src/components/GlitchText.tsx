import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = '' }: GlitchTextProps) => {
  const [glitchedText, setGlitchedText] = useState(text);
  
  useEffect(() => {
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
    let interval: NodeJS.Timeout;
    
    const glitch = () => {
      const shouldGlitch = Math.random() > 0.95;
      if (shouldGlitch) {
        const newText = text.split('').map((char, i) => {
          if (Math.random() > 0.9 && char !== ' ') {
            return chars[Math.floor(Math.random() * chars.length)];
          }
          return char;
        }).join('');
        setGlitchedText(newText);
        setTimeout(() => setGlitchedText(text), 100);
      }
    };
    
    interval = setInterval(glitch, 200);
    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{glitchedText}</span>;
};

export default GlitchText;
