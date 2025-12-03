import { useEffect, useRef, useState } from 'react';
import ScrambleText from './ScrambleText';

const findings = [
  {
    id: '001',
    severity: 'CRITICAL',
    severityColor: 'bg-destructive',
    title: 'Authentication Bypass via JWT Manipulation',
    target: 'FORTUNE_500_CORP',
    bounty: '$10,000',
    impact: 'Full account takeover of any user including admins',
  },
  {
    id: '002',
    severity: 'HIGH',
    severityColor: 'bg-secondary',
    title: 'SQL Injection in Search Parameter',
    target: 'MAJOR_TECH_PLATFORM',
    bounty: '$5,000',
    impact: 'Database extraction, potential RCE',
  },
  {
    id: '003',
    severity: 'HIGH',
    severityColor: 'bg-secondary',
    title: 'IDOR Leading to Mass Data Exposure',
    target: 'ECOMMERCE_GIANT',
    bounty: '$7,500',
    impact: '2M+ user records accessible',
  },
  {
    id: '004',
    severity: 'CRITICAL',
    severityColor: 'bg-destructive',
    title: 'RCE via Unsafe Deserialization',
    target: 'FINTECH_STARTUP',
    bounty: '$15,000',
    impact: 'Full server compromise',
  },
];

const FindingsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-card">
      {/* Section header */}
      <div className="px-8 md:px-16 mb-12">
        <div className="flex items-end justify-between border-b border-border pb-4">
          <div>
            <span className="text-xs text-muted-foreground tracking-widest block mb-2">FILE://DISCLOSURES</span>
            <h2 className="text-3xl md:text-5xl font-display font-black">
              <ScrambleText text="NOTABLE FINDINGS" scrambleOnHover />
            </h2>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-xs text-muted-foreground">TOTAL IMPACT</span>
            <div className="text-2xl font-display font-bold text-primary">$37,500</div>
          </div>
        </div>
      </div>

      {/* Findings grid */}
      <div className="px-8 md:px-16 space-y-px">
        {findings.map((finding, index) => (
          <div
            key={finding.id}
            className={`
              group bg-background border-l-4 
              ${finding.severityColor} 
              transition-all duration-500
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
              hover:bg-muted/30
            `}
            style={{ transitionDelay: `${index * 100}ms` }}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="p-6 md:p-8 grid md:grid-cols-12 gap-4 items-center">
              {/* ID */}
              <div className="md:col-span-1 font-mono text-muted-foreground">
                #{finding.id}
              </div>
              
              {/* Severity */}
              <div className="md:col-span-2">
                <span className={`
                  inline-block px-3 py-1 text-xs font-bold tracking-wider
                  ${finding.severity === 'CRITICAL' ? 'bg-destructive/20 text-destructive' : 'bg-secondary/20 text-secondary'}
                `}>
                  {finding.severity}
                </span>
              </div>
              
              {/* Title & Impact */}
              <div className="md:col-span-5">
                <div className="font-bold text-foreground group-hover:text-primary transition-colors">
                  {finding.title}
                </div>
                <div className={`
                  text-sm text-muted-foreground mt-1
                  transition-all duration-300
                  ${activeIndex === index ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 md:opacity-100 md:max-h-20'}
                `}>
                  {finding.impact}
                </div>
              </div>
              
              {/* Target */}
              <div className="md:col-span-2 font-mono text-xs text-muted-foreground">
                {finding.target}
              </div>
              
              {/* Bounty */}
              <div className="md:col-span-2 text-right">
                <span className="text-2xl font-display font-bold text-primary">
                  {finding.bounty}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FindingsSection;
