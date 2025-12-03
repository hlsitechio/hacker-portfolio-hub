import ScrambleText from './ScrambleText';

const links = [
  { label: 'HACKERONE', value: '@rainkode', href: 'https://hackerone.com/rainkode' },
  { label: 'GITHUB', value: '@hlsitechio', href: 'https://github.com/hlsitechio' },
  { label: 'EMAIL', value: 'rainkode@protonmail.com', href: 'mailto:rainkode@protonmail.com' },
];

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col">
      {/* Top divider */}
      <div className="border-animated h-1" />
      
      <div className="flex-1 grid lg:grid-cols-2">
        {/* Left - CTA */}
        <div className="p-8 md:p-16 flex flex-col justify-center bg-primary">
          <div className="text-primary-foreground">
            <span className="text-xs tracking-widest block mb-4">INITIATE_CONTACT</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-none mb-8">
              LET'S<br />
              WORK<br />
              <span className="text-background">TOGETHER</span>
            </h2>
            <p className="text-lg opacity-80 max-w-md">
              Open for private bug bounty programs, security consulting, and penetration testing engagements.
            </p>
          </div>
        </div>

        {/* Right - Links */}
        <div className="p-8 md:p-16 flex flex-col justify-center bg-background">
          <div className="space-y-0">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b border-border py-6 transition-all hover:pl-4 hover:border-primary"
              >
                <span className="text-xs text-muted-foreground tracking-widest block mb-1">
                  {link.label}
                </span>
                <span className="text-2xl md:text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                  <ScrambleText text={link.value} scrambleOnHover />
                </span>
              </a>
            ))}
          </div>

          {/* PGP Key */}
          <div className="mt-12 p-4 bg-card border border-border">
            <span className="text-xs text-muted-foreground tracking-widest block mb-2">
              PGP_FINGERPRINT
            </span>
            <code className="text-xs text-foreground break-all font-mono">
              XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX XXXX
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
