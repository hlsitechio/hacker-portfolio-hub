import { AlertTriangle, AlertCircle, Info } from 'lucide-react';

const findings = [
  {
    severity: 'Critical',
    icon: AlertTriangle,
    color: 'text-red-500 border-red-500/30',
    title: 'Authentication Bypass',
    target: 'Fortune 500 Company',
    bounty: '$10,000',
  },
  {
    severity: 'High',
    icon: AlertCircle,
    color: 'text-orange-500 border-orange-500/30',
    title: 'SQL Injection',
    target: 'Major Tech Platform',
    bounty: '$5,000',
  },
  {
    severity: 'High',
    icon: AlertCircle,
    color: 'text-orange-500 border-orange-500/30',
    title: 'IDOR Leading to Data Leak',
    target: 'E-commerce Giant',
    bounty: '$7,500',
  },
  {
    severity: 'Medium',
    icon: Info,
    color: 'text-yellow-500 border-yellow-500/30',
    title: 'Stored XSS',
    target: 'Social Media App',
    bounty: '$2,500',
  },
];

const FindingsSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-glow">
          <span className="text-primary">#</span> Notable Findings
        </h2>
        <p className="text-muted-foreground mb-12 text-sm">
          // Selected vulnerability disclosures
        </p>
        
        <div className="space-y-4">
          {findings.map((finding, index) => (
            <div 
              key={index}
              className={`p-4 bg-card border ${finding.color} hover:bg-muted/50 transition-all group`}
            >
              <div className="flex items-start gap-4">
                <finding.icon className={`w-5 h-5 mt-1 ${finding.color.split(' ')[0]}`} />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`text-xs px-2 py-0.5 ${finding.color} border`}>
                      {finding.severity}
                    </span>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {finding.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Target: {finding.target}
                  </p>
                </div>
                <span className="text-primary font-mono font-bold">
                  {finding.bounty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindingsSection;
