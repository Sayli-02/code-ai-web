import { motion } from 'motion/react';
import { useIsMobile } from '@/hooks/useMobile';
import { useEffect, useState } from 'react';

const easeCustom = [0.16, 1, 0.3, 1];

function AnimatedCounter({ endValue, duration = 1.2 }: { endValue: number, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // easeOut function
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * endValue));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [endValue, duration]);

  return <span>{count}</span>;
}

export default function StatsSection() {
  const isMobile = useIsMobile();
  const [inView, setInView] = useState(false);
  
  const stats = [
    { label: 'Team Members', value: 35, suffix: '+' },
    { label: 'Projects', value: 3, suffix: '+' },
    { label: 'Events Hosted', value: 3, suffix: '+' },
    { label: 'Faculty Members', value: 3, suffix: '+' },
  ];

  const styles = {
    section: {
      padding: isMobile ? '40px 16px' : '60px 32px',
      backgroundColor: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-light)',
      borderBottom: '1px solid var(--border-light)',
      position: 'relative' as const,
      zIndex: 10,
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid' as const,
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: isMobile ? '32px 16px' : '32px',
      textAlign: 'center' as const,
    },
    number: {
      fontSize: isMobile ? '2.5rem' : '3rem',
      fontWeight: 200 as const,
      letterSpacing: '-0.02em',
      lineHeight: '1',
      marginBottom: '8px',
    },
    label: {
      fontSize: '12px',
      fontWeight: 600 as const,
      color: 'var(--text-tertiary)',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.05em',
    }
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeCustom as any } },
  };

  return (
    <section style={styles.section}>
      <motion.div
        style={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        onViewportEnter={() => setInView(true)}
      >
        {stats.map((stat, index) => (
          <motion.div key={index} variants={itemVariants}>
            <div style={styles.number} className="text-gradient">
              {inView ? <AnimatedCounter endValue={stat.value} /> : '0'}
              {stat.suffix}
            </div>
            <div style={styles.label}>{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
