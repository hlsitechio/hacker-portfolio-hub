const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="px-8 md:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} // ALL_VULNERABILITIES_RESPONSIBLY_DISCLOSED
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary status-pulse" />
          <span className="text-xs text-muted-foreground">SYSTEM_OPERATIONAL</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
