import TypewriterText from './TypewriterText';
import GlitchText from './GlitchText';
import { Shield, Bug, Lock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Floating icons */}
      <div className="absolute top-20 right-20 opacity-10">
        <Shield className="w-32 h-32 text-primary animate-pulse" />
      </div>
      <div className="absolute bottom-40 left-10 opacity-10">
        <Bug className="w-24 h-24 text-secondary animate-pulse" />
      </div>
      
      <div className="relative z-10 max-w-4xl">
        <p className="text-muted-foreground mb-2 text-sm md:text-base">
          <span className="text-primary">$</span> whoami
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-glow">
          <GlitchText text="HACKER" />
        </h1>
        
        <div className="text-lg md:text-xl text-muted-foreground mb-8 h-8">
          <TypewriterText 
            text="Security Researcher • Bug Bounty Hunter • Penetration Tester" 
            delay={40}
          />
        </div>
        
        <div className="flex flex-col gap-4 text-sm md:text-base font-mono">
          <p className="text-terminal-dim">
            <span className="text-primary">→</span> Specializing in web application security
          </p>
          <p className="text-terminal-dim">
            <span className="text-secondary">→</span> Finding vulnerabilities since 2020
          </p>
          <p className="text-terminal-dim">
            <span className="text-primary">→</span> Top 1% on HackerOne
          </p>
        </div>
        
        <div className="mt-12 flex gap-4 flex-wrap">
          <a 
            href="#contact" 
            className="px-6 py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all border-glow"
          >
            &gt; CONTACT_ME
          </a>
          <a 
            href="#stats" 
            className="px-6 py-3 border border-border text-foreground hover:border-primary hover:text-primary transition-all"
          >
            &gt; VIEW_STATS
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
