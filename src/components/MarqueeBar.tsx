import { useState, useEffect } from 'react';

interface HNItem {
  title: string;
  link: string;
}

const MarqueeBar = () => {
  const [headlines, setHeadlines] = useState<HNItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const fallbackText = "SECURITY RESEARCHER • BUG BOUNTY HUNTER • PENETRATION TESTER • ETHICAL HACKER • ";

  useEffect(() => {
    const fetchHNFeed = async () => {
      try {
        // Using a CORS proxy to fetch Hacker News RSS
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://news.ycombinator.com/rss&count=15');
        const data = await response.json();
        
        if (data.status === 'ok' && data.items) {
          const items: HNItem[] = data.items.map((item: { title: string; link: string }) => ({
            title: item.title,
            link: item.link,
          }));
          setHeadlines(items);
        }
      } catch (error) {
        console.error('Failed to fetch HN feed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHNFeed();
    // Refresh every 5 minutes
    const interval = setInterval(fetchHNFeed, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const marqueeContent = isLoading || headlines.length === 0
    ? fallbackText.repeat(10)
    : headlines.map(item => `📰 ${item.title}`).join(' • ') + ' • ';

  return (
    <div className="w-full overflow-hidden bg-primary py-2 group cursor-pointer">
      <div className="marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
        <span className="text-primary-foreground font-display font-bold text-sm tracking-widest">
          {isLoading || headlines.length === 0 
            ? marqueeContent 
            : marqueeContent.repeat(3)
          }
        </span>
      </div>
      
      {/* HN indicator */}
      {!isLoading && headlines.length > 0 && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-background/90 px-2 py-1 text-xs font-mono">
          <span className="text-primary">HN</span>
          <span className="text-muted-foreground">LIVE</span>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      )}
    </div>
  );
};

export default MarqueeBar;