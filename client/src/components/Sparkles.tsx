import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Sparkle {
  id: string;
  size: number;
  top: string;
  left: string;
  animationDuration: number;
  animationDelay: number;
}

export default function Sparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    // Generate 60 random sparkles
    const newSparkles = Array.from({ length: 60 }).map((_, i) => ({
      id: `sparkle-${i}`,
      size: Math.random() * 3 + 1, // 1px to 4px
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: Math.random() * 3 + 2, // 2s to 5s
      animationDelay: Math.random() * 5, // 0s to 5s
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 0,
    }}>
      {sparkles.map(sparkle => (
        <motion.div
          key={sparkle.id}
          style={{
            position: 'absolute',
            top: sparkle.top,
            left: sparkle.left,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: '#333333', // Dark charcoal/silver
            borderRadius: '50%',
            boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.2)',
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: sparkle.animationDuration,
            delay: sparkle.animationDelay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
