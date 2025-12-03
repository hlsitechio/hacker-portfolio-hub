import { Terminal, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'Stats', href: '#stats' },
    { label: 'Findings', href: '#findings' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-primary hover:text-glow transition-all">
          <Terminal className="w-5 h-5" />
          <span className="font-bold font-mono">hacker@portfolio</span>
        </a>
        
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              ./{link.label.toLowerCase()}
            </a>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-6 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                onClick={() => setIsOpen(false)}
              >
                ./{link.label.toLowerCase()}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
