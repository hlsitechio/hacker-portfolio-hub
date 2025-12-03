import { useState, useEffect, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleOnHover?: boolean;
}

const ScrambleText = ({ text, className = '', scrambleOnHover = false }: ScrambleTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(!scrambleOnHover);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>[]{}';
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = () => {
    let iteration = 0;
    const originalText = text;
    
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText(
        originalText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return originalText[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      
      iteration += 1 / 3;
      
      if (iteration >= originalText.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(originalText);
      }
    }, 30);
  };

  useEffect(() => {
    if (isScrambling && !scrambleOnHover) {
      scramble();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (scrambleOnHover) {
      scramble();
    }
  };

  return (
    <span 
      className={`scramble-text ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      {displayText}
    </span>
  );
};

export default ScrambleText;
