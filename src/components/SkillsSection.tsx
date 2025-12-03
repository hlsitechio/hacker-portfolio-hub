const skills = [
  { name: 'Web App Security', level: 95 },
  { name: 'API Testing', level: 90 },
  { name: 'OWASP Top 10', level: 95 },
  { name: 'SQL Injection', level: 85 },
  { name: 'XSS/CSRF', level: 90 },
  { name: 'Authentication Bypass', level: 80 },
  { name: 'IDOR', level: 90 },
  { name: 'Business Logic', level: 85 },
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-glow">
          <span className="text-primary">#</span> Skills
        </h2>
        <p className="text-muted-foreground mb-12 text-sm">
          // Technical expertise
        </p>
        
        <div className="grid gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-muted overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${skill.level}%`,
                    boxShadow: '0 0 10px hsl(var(--primary) / 0.5)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
