import { useEffect, useRef, useState } from 'react';

const commands = [
  { cmd: 'cat skills.txt', output: ['WEB_APP_SECURITY', 'API_TESTING', 'OWASP_TOP_10', 'SQL_INJECTION', 'XSS_CSRF', 'IDOR', 'AUTH_BYPASS', 'BUSINESS_LOGIC'] },
  { cmd: 'ls -la targets/', output: ['Fortune_500_Companies/', 'Major_Tech_Platforms/', 'Financial_Institutions/', 'E-commerce_Giants/', 'Social_Networks/'] },
  { cmd: 'whoami', output: ['root // just kidding... unless?'] },
];

const TerminalSection = () => {
  const [visibleCommands, setVisibleCommands] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger commands sequentially
            commands.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCommands(prev => [...prev, index]);
              }, index * 800);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-8 md:px-16 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground tracking-widest">TERMINAL_OUTPUT</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="bg-card border border-border p-6 font-mono text-sm">
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
              <div 
                key={index}
                className={`transition-all duration-500 ${visibleCommands.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-primary">→</span>
                  <span className="text-foreground">{command.cmd}</span>
                </div>
                <div className="pl-6 text-muted-foreground">
                  {command.output.map((line, i) => (
                    <div key={i} className="hover:text-primary transition-colors">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            {visibleCommands.length === commands.length && (
              <div className="flex items-center gap-2">
                <span className="text-primary">→</span>
                <span className="typing-cursor" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalSection;
