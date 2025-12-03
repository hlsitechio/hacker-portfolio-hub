import ASCIIArt from './ASCIIArt';
import ScrambleText from './ScrambleText';
import MarqueeBar from './MarqueeBar';

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex flex-col">
      {/* Top bar */}
      <div className="border-b border-border p-4 flex justify-between items-center text-xs font-mono">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary status-pulse" />
            <span className="text-muted-foreground">ONLINE</span>
          </div>
          <span className="text-muted-foreground hidden sm:block">SYS.TIME: {new Date().toLocaleTimeString()}</span>
        </div>
        <div className="text-muted-foreground">
          LOC: <span className="text-primary">UNDISCLOSED</span>
        </div>
      </div>

      <MarqueeBar />

      {/* Main hero content */}
      <div className="flex-1 grid lg:grid-cols-2 gap-0">
        {/* Left side - Info */}
        <div className="p-8 md:p-16 flex flex-col justify-center border-r border-border">
          <div className="mb-8">
            <ASCIIArt />
          </div>
          
          <div className="space-y-6">
            <div>
              <span className="text-xs text-muted-foreground block mb-1">CODENAME</span>
              <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight">
                <ScrambleText text="RAINKODE" className="text-foreground" />
              </h1>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground block text-xs mb-1">SPECIALIZATION</span>
                <span className="text-foreground">Web Application Security</span>
              </div>
              <div>
                <span className="text-muted-foreground block text-xs mb-1">STATUS</span>
                <span className="text-primary">Available for Private Programs</span>
              </div>
              <div>
                <span className="text-muted-foreground block text-xs mb-1">RANK</span>
                <span className="text-foreground">Top 1% HackerOne</span>
              </div>
              <div>
                <span className="text-muted-foreground block text-xs mb-1">THREAT LEVEL</span>
                <span className="text-destructive">CRITICAL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Stats */}
        <div className="p-8 md:p-16 flex flex-col justify-center bg-card">
          <div className="space-y-8">
            <div className="border-l-2 border-primary pl-6">
              <div className="text-6xl md:text-8xl font-display font-black text-foreground">
                150<span className="text-primary">+</span>
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest">
                Vulnerabilities Discovered
              </div>
            </div>
            
            <div className="border-l-2 border-accent pl-6">
              <div className="text-6xl md:text-8xl font-display font-black text-foreground">
                $50K<span className="text-accent">+</span>
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest">
                Total Bounties Earned
              </div>
            </div>
            
            <div className="border-l-2 border-secondary pl-6">
              <div className="text-6xl md:text-8xl font-display font-black text-foreground">
                25<span className="text-secondary">+</span>
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest">
                Hall of Fame Features
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
