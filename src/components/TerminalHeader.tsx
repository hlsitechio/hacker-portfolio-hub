const TerminalHeader = () => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 border-b border-border rounded-t">
      <div className="w-3 h-3 rounded-full bg-destructive/80" />
      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
      <div className="w-3 h-3 rounded-full bg-primary/80" />
      <span className="ml-4 text-xs text-muted-foreground">~/portfolio</span>
    </div>
  );
};

export default TerminalHeader;
