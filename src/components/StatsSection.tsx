import { Bug, Trophy, DollarSign, Target } from 'lucide-react';

const stats = [
  { icon: Bug, label: 'Bugs Found', value: '150+', color: 'text-primary' },
  { icon: Trophy, label: 'Hall of Fames', value: '25+', color: 'text-secondary' },
  { icon: DollarSign, label: 'Total Bounties', value: '$50K+', color: 'text-primary' },
  { icon: Target, label: 'Programs', value: '40+', color: 'text-secondary' },
];

const StatsSection = () => {
  return (
    <section id="stats" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-glow">
          <span className="text-primary">#</span> Stats
        </h2>
        <p className="text-muted-foreground mb-12 text-sm">
          // Bug bounty achievements
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="p-6 bg-card border border-border hover:border-primary transition-all group animate-pulse-glow"
            >
              <stat.icon className={`w-8 h-8 mb-4 ${stat.color} group-hover:scale-110 transition-transform`} />
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
