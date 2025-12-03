import { Github, Twitter, Mail, ExternalLink } from 'lucide-react';
import TerminalHeader from './TerminalHeader';

const socials = [
  { icon: Github, label: 'GitHub', href: '#', username: '@yourusername' },
  { icon: Twitter, label: 'Twitter', href: '#', username: '@yourusername' },
  { icon: Mail, label: 'Email', href: 'mailto:you@email.com', username: 'you@email.com' },
  { icon: ExternalLink, label: 'HackerOne', href: '#', username: '@yourusername' },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-muted/20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-glow">
          <span className="text-primary">#</span> Contact
        </h2>
        <p className="text-muted-foreground mb-12 text-sm">
          // Get in touch
        </p>
        
        <div className="bg-card border border-border overflow-hidden">
          <TerminalHeader />
          <div className="p-6 font-mono text-sm">
            <p className="text-muted-foreground mb-4">
              <span className="text-primary">$</span> cat contact.txt
            </p>
            
            <div className="space-y-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                  <span className="text-muted-foreground">{social.label}:</span>
                  <span className="text-foreground group-hover:text-primary">{social.username}</span>
                </a>
              ))}
            </div>
            
            <p className="mt-8 text-terminal-dim">
              <span className="text-primary">$</span> echo "Open for private programs and collaborations"
            </p>
            <p className="text-foreground mt-2">
              Open for private programs and collaborations
            </p>
            
            <p className="mt-4 text-muted-foreground">
              <span className="text-primary">$</span> <span className="animate-cursor-blink">█</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
