import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { useIsMobile } from '@/hooks/useMobile';

export default function AboutSection() {
  const easeCustom = [0.16, 1, 0.3, 1];
  const isMobile = useIsMobile();
  const bullets = [
    'Practical application of theoretical knowledge',
    'Building industry-ready skills',
    'Research and project development'
  ];

  const styles = {
    section: {
      padding: isMobile ? '40px 16px' : '80px 32px',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative' as const,
      paddingLeft: isMobile ? '20px' : '40px',
    },
    accentBar: {
      position: 'absolute' as const,
      left: 0,
      top: '10px',
      height: '80%',
      width: '3px',
      background: 'linear-gradient(to bottom, #111 0%, transparent 100%)',
      borderRadius: '4px',
    },
    heading: {
      fontSize: isMobile ? '2rem' : '2.5rem',
      fontWeight: 400 as const,
      color: '#000000',
      marginBottom: '32px',
      letterSpacing: '-0.03em',
    },
    paragraph: {
      fontSize: isMobile ? '18px' : '22px',
      fontWeight: 300 as const,
      color: 'rgba(0, 0, 0, 0.8)',
      lineHeight: '1.5',
      marginBottom: '56px',
      maxWidth: '850px',
      letterSpacing: '-0.01em',
    },
    subParagraph: {
      fontSize: isMobile ? '15px' : '16px',
      fontWeight: 400 as const,
      color: 'rgba(0, 0, 0, 0.65)',
      lineHeight: '1.6',
      marginBottom: '32px',
      maxWidth: '600px',
    },
    bulletsContainer: {
      display: 'grid' as const,
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: isMobile ? '16px' : '32px',
      marginBottom: '48px',
    },
    bulletItem: {
      display: 'flex' as const,
      gap: '16px',
      background: 'linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)',
      padding: '24px',
      borderRadius: '12px',
      border: '1px solid rgba(0,0,0,0.08)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
      alignItems: 'flex-start' as const,
    },
    bulletDot: {
      display: 'none',
    },
    bulletText: {
      fontSize: '15px',
      fontWeight: 400 as const,
      color: 'rgba(0, 0, 0, 0.7)',
      lineHeight: '1.5',
    },
    ctaButton: {
      backgroundColor: '#000000',
      color: '#ffffff',
      border: 'none',
      borderRadius: '9999px',
      padding: '12px 32px',
      fontSize: '14px',
      fontWeight: 500 as const,
      cursor: 'pointer',
      transition: 'all 0.2s ease-out',
    },
  };

  const sectionVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeCustom as any } },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, duration: 0.6, ease: easeCustom as any } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeCustom as any } },
    hover: { y: -4, boxShadow: '0 12px 24px rgba(0,0,0,0.08)', borderColor: 'rgba(0,0,0,0.15)' },
  };

  return (
    <section id="about" style={styles.section}>
      <motion.div 
        style={styles.container}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
      >
        <div style={styles.accentBar} />
        <motion.h2 style={styles.heading} variants={textVariants}>About DJS CodeAI</motion.h2>
        <motion.p style={styles.paragraph} variants={textVariants}>
          DJS CodeAI is a student-led community at DJ Sanghvi College of Engineering dedicated to exploring artificial intelligence and coding, bringing together students to learn, build, and innovate together.
        </motion.p>

        <motion.div style={{ paddingLeft: isMobile ? '16px' : '24px', borderLeft: '2px solid #000000', marginBottom: '48px' }} variants={textVariants}>
          <h3 style={{...styles.heading, fontSize: isMobile ? '1.5rem' : '1.75rem', marginBottom: '16px'}}>Our Vision</h3>
          <p style={styles.subParagraph}>
            Bridging theoretical knowledge and practical application through real projects and mentorship.
          </p>
        </motion.div>

        <motion.div 
          style={styles.bulletsContainer}
          variants={containerVariants}
        >
          {bullets.map((bullet, index) => (
            <motion.div 
              key={index}
              style={styles.bulletItem}
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.div variants={{ hover: { scale: 1.1, rotate: 5 } }} transition={{ type: "spring", stiffness: 400 }}>
                <div style={{ backgroundColor: '#111', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <CheckCircle2 size={16} color="#ffffff" />
                </div>
              </motion.div>
              <div>
                <p style={styles.bulletText}>{bullet}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div style={{ paddingLeft: isMobile ? '16px' : '24px', borderLeft: '2px solid #000000', marginBottom: '48px' }} variants={textVariants}>
          <h3 style={{...styles.heading, fontSize: isMobile ? '1.5rem' : '1.75rem', marginBottom: '16px'}}>Mentor-Mentee System</h3>
          <p style={styles.subParagraph}>
            A structured mentor-mentee pairing system designed for hands-on guidance and continuous learning.
          </p>
        </motion.div>

        <motion.button 
          style={styles.ctaButton}
          variants={textVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Involved
        </motion.button>
      </motion.div>
    </section>
  );
}
