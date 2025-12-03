const MarqueeBar = () => {
  const text = "SECURITY RESEARCHER • BUG BOUNTY HUNTER • PENETRATION TESTER • ETHICAL HACKER • ";
  
  return (
    <div className="w-full overflow-hidden bg-primary py-2">
      <div className="marquee whitespace-nowrap">
        <span className="text-primary-foreground font-display font-bold text-sm tracking-widest">
          {text.repeat(10)}
        </span>
      </div>
    </div>
  );
};

export default MarqueeBar;
