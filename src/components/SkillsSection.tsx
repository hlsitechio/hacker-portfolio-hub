import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skillCategories = [
  {
    title: 'OFFENSIVE SECURITY',
    skills: [
      { name: 'Web Application Pentesting', level: 95, color: '#00ffff' },
      { name: 'API Security Testing', level: 90, color: '#00ffff' },
      { name: 'Network Penetration', level: 80, color: '#00ffff' },
      { name: 'Mobile App Security', level: 70, color: '#00ffff' },
    ]
  },
  {
    title: 'VULNERABILITY CLASSES',
    skills: [
      { name: 'XSS (Stored/Reflected/DOM)', level: 98, color: '#ff0055' },
      { name: 'SQL Injection', level: 92, color: '#ff0055' },
      { name: 'SSRF / CSRF', level: 88, color: '#ff0055' },
      { name: 'Authentication Bypass', level: 95, color: '#ff0055' },
      { name: 'IDOR / BAC', level: 90, color: '#ff0055' },
    ]
  },
  {
    title: 'TOOLS & FRAMEWORKS',
    skills: [
      { name: 'Burp Suite', level: 98, color: '#ffaa00' },
      { name: 'Nuclei / Custom Templates', level: 90, color: '#ffaa00' },
      { name: 'SQLMap / Custom Scripts', level: 88, color: '#ffaa00' },
      { name: 'Metasploit Framework', level: 82, color: '#ffaa00' },
    ]
  },
];

const SkillBar = ({ skill, delay }: { skill: Skill; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setWidth(skill.level), delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, skill.level, delay]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between text-xs mb-1">
        <span className="text-muted-foreground font-mono">{skill.name}</span>
        <span style={{ color: skill.color }} className="font-bold">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted/30 overflow-hidden">
        <motion.div
          className="h-full relative"
          style={{
            backgroundColor: skill.color,
            width: `${width}%`,
          }}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Glow effect */}
          <div
            className="absolute inset-0"
            style={{
              boxShadow: `0 0 10px ${skill.color}, 0 0 20px ${skill.color}40`
            }}
          />
          {/* Data stream effect */}
          <motion.div
            className="absolute inset-0 opacity-50"
            style={{
              background: `linear-gradient(90deg, transparent, white, transparent)`,
              backgroundSize: '200% 100%',
            }}
            animate={{
              backgroundPosition: ['200% 0', '-200% 0']
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      </div>
    </div>
  );
};

const RadarChart = () => {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [animationProgress, setAnimationProgress] = useState(0);

  const skills = [
    { name: 'Web Security', value: 95 },
    { name: 'Reconnaissance', value: 88 },
    { name: 'Exploitation', value: 90 },
    { name: 'Reporting', value: 92 },
    { name: 'Scripting', value: 85 },
    { name: 'Social Eng.', value: 78 },
  ];

  useEffect(() => {
    if (isInView) {
      const duration = 1500;
      const start = Date.now();

      const animate = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        setAnimationProgress(progress);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView]);

  const center = 150;
  const radius = 100;
  const angleStep = (2 * Math.PI) / skills.length;

  const getPoint = (index: number, value: number) => {
    const angle = angleStep * index - Math.PI / 2;
    const r = (value / 100) * radius * animationProgress;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  const points = skills.map((skill, i) => getPoint(i, skill.value));
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <div className="relative">
      <svg ref={ref} viewBox="0 0 300 300" className="w-full max-w-[300px] mx-auto">
        {/* Grid circles */}
        {[20, 40, 60, 80, 100].map((level) => (
          <circle
            key={level}
            cx={center}
            cy={center}
            r={(level / 100) * radius}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="1"
            opacity={0.3}
          />
        ))}

        {/* Axis lines */}
        {skills.map((_, i) => {
          const angle = angleStep * i - Math.PI / 2;
          const endX = center + radius * Math.cos(angle);
          const endY = center + radius * Math.sin(angle);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={endX}
              y2={endY}
              stroke="hsl(var(--border))"
              strokeWidth="1"
              opacity={0.3}
            />
          );
        })}

        {/* Data area */}
        <motion.path
          d={pathD}
          fill="hsl(180 100% 50% / 0.2)"
          stroke="hsl(180 100% 50%)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Data points */}
        {points.map((point, i) => (
          <motion.circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="hsl(180 100% 50%)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          />
        ))}

        {/* Labels */}
        {skills.map((skill, i) => {
          const angle = angleStep * i - Math.PI / 2;
          const labelRadius = radius + 25;
          const x = center + labelRadius * Math.cos(angle);
          const y = center + labelRadius * Math.sin(angle);
          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-muted-foreground text-[10px] font-mono"
            >
              {skill.name}
            </text>
          );
        })}
      </svg>

      {/* Center label */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="text-2xl font-display font-black text-primary">90%</div>
        <div className="text-[10px] text-muted-foreground">AVG</div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section className="py-24 bg-card/70 backdrop-blur-sm hex-pattern">
      <div className="px-8 md:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-end justify-between border-b border-border pb-4 mb-12"
        >
          <div>
            <span className="text-xs text-muted-foreground tracking-widest block mb-2">
              SYS://CAPABILITY_MATRIX
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black">
              SKILLS & EXPERTISE
            </h2>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Skill bars */}
          <div className="lg:col-span-2 space-y-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-background/50 border border-border p-6"
              >
                <h3 className="text-xs text-muted-foreground tracking-widest mb-6 flex items-center gap-2">
                  <span
                    className="w-2 h-2"
                    style={{ backgroundColor: category.skills[0].color }}
                  />
                  {category.title}
                </h3>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={0.1 + catIndex * 0.1 + skillIndex * 0.05}
                  />
                ))}
              </motion.div>
            ))}
          </div>

          {/* Radar chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-background/50 border border-border p-6"
          >
            <h3 className="text-xs text-muted-foreground tracking-widest mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary" />
              OVERALL ASSESSMENT
            </h3>
            <RadarChart />

            {/* Legend */}
            <div className="mt-6 grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary/20 border border-primary" />
                <span className="text-muted-foreground">Skill Coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-muted-foreground">Data Points</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
