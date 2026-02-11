import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Bug, Award, Target, Zap, Clock } from 'lucide-react';

interface StatProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  color: string;
  delay: number;
}

const AnimatedCounter = ({
  value,
  suffix = '',
  prefix = '',
  duration = 2000
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const endValue = value;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeOutQuart * endValue);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}{suffix === '' && count > 1000 ? count : count.toLocaleString()}{suffix}
    </span>
  );
};

const StatCard = ({ icon: Icon, label, value, suffix, prefix, color, delay }: StatProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: `0 20px 40px ${color}30`
      }}
      className="relative group bg-background border border-border p-6 overflow-hidden"
    >
      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        viewport={{ once: true }}
        style={{ backgroundColor: color, transformOrigin: 'left' }}
      />

      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, ${color}, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="p-2 border"
          style={{ borderColor: color, color }}
        >
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-xs text-muted-foreground tracking-widest uppercase">
          {label}
        </span>
      </div>

      {/* Value */}
      <div
        className="text-4xl md:text-5xl font-display font-black"
        style={{ color }}
      >
        <AnimatedCounter value={value} suffix={suffix} prefix={prefix} />
      </div>

      {/* Corner decoration */}
      <div
        className="absolute bottom-0 right-0 w-12 h-12 opacity-10 group-hover:opacity-30 transition-opacity"
        style={{
          background: `linear-gradient(135deg, transparent 50%, ${color} 50%)`,
        }}
      />
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: Bug,
      label: 'Bugs Reported',
      value: 23,
      color: '#00ffff',
      delay: 0,
    },
    {
      icon: Shield,
      label: 'Valid Vulns',
      value: 17,
      color: '#ff0055',
      delay: 0.1,
    },
    {
      icon: Award,
      label: 'Hall of Fame',
      value: 2,
      color: '#ffaa00',
      delay: 0.2,
    },
    {
      icon: Target,
      label: 'Programs',
      value: 12,
      color: '#00ff88',
      delay: 0.3,
    },
    {
      icon: Zap,
      label: 'Total Bounty',
      value: 8,
      prefix: '$',
      suffix: 'K+',
      color: '#aa55ff',
      delay: 0.4,
    },
    {
      icon: Clock,
      label: 'Hunting Since',
      value: 2024,
      suffix: '',
      color: '#55aaff',
      delay: 0.5,
    },
  ];

  return (
    <section className="py-24 bg-background/80 backdrop-blur-sm">
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
              SYS://PERFORMANCE_METRICS
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black">
              STATISTICS
            </h2>
          </div>
          <div className="hidden md:block">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-xs text-muted-foreground font-mono">
                LIVE_DATA
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* Additional info bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 p-4 border border-border bg-card/50 flex flex-wrap items-center justify-between gap-4 text-xs font-mono"
        >
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">STATUS:</span>
            <span className="text-primary font-bold">ACTIVE HUNTER</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">SIGNAL:</span>
            <span className="text-green-500 font-bold">4.8</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">IMPACT:</span>
            <span className="text-accent font-bold">5.2</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">MODE:</span>
            <span className="text-foreground">GRINDING</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
