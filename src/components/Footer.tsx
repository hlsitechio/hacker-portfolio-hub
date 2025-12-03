const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-muted-foreground font-mono">
          <span className="text-primary">&lt;/&gt;</span> Built with{' '}
          <span className="text-primary">passion</span> for security
        </p>
        <p className="text-xs text-terminal-dim mt-2">
          © {new Date().getFullYear()} // All vulnerabilities responsibly disclosed
        </p>
      </div>
    </footer>
  );
};

export default Footer;
