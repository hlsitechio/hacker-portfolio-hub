import { useState, useEffect } from 'react';

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
    <div className="fixed inset-0 z-[200] bg-background flex items-center justify-center">
      <div className="w-full max-w-2xl px-8">
        <div className="font-mono text-sm space-y-1 mb-8">
          {lines.map((line, i) => (
            <div 
              key={i} 
              className={`${line.includes('ROOT') ? 'text-primary' : 'text-muted-foreground'}`}
            >
              {line}
            </div>
          ))}
          {lines.length > 0 && lines.length < 6 && (
            <span className="typing-cursor" />
          )}
        </div>
        
        {showAccess && (
          <div className="text-center animate-pulse">
            <div className="text-6xl md:text-8xl font-display font-black text-primary chromatic glitch" data-text="ACCESS">
              ACCESS
            </div>
            <div className="text-6xl md:text-8xl font-display font-black text-foreground chromatic glitch" data-text="GRANTED">
              GRANTED
            </div>
          </div>
        )}
      </div>
      <div className="noise" />
    </div>
  );
};

export default IntroSequence;
