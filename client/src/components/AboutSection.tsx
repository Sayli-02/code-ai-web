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
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
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
      background: 'linear-gradient(to bottom, #ffffff 0%, transparent 100%)',
      borderRadius: '4px',
    },
    heading: {
      fontSize: isMobile ? '2rem' : '2.5rem',
      fontWeight: 400 as const,
      color: '#ffffff',
      marginBottom: '32px',
      letterSpacing: '-0.03em',
    },
    paragraph: {
      fontSize: isMobile ? '18px' : '22px',
      fontWeight: 300 as const,
      color: 'rgba(255, 255, 255, 0.8)',
      lineHeight: '1.5',
      marginBottom: '56px',
      maxWidth: '850px',
      letterSpacing: '-0.01em',
    },
    subParagraph: {
      fontSize: isMobile ? '15px' : '16px',
      fontWeight: 400 as const,
      color: 'rgba(255, 255, 255, 0.65)',
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
      background: 'linear-gradient(135deg, #111111 0%, #0a0a0a 100%)',
      padding: '24px',
      borderRadius: '12px',
      border: '1px solid rgba(255,255,255,0.1)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
      alignItems: 'flex-start' as const,
    },
    bulletDot: {
      display: 'none',
    },
    bulletText: {
      fontSize: '15px',
      fontWeight: 400 as const,
      color: 'rgba(255, 255, 255, 0.7)',
      lineHeight: '1.5',
    },
    ctaButton: {
      backgroundColor: '#ffffff',
      color: '#000000',
      border: 'none',
      borderRadius: '9999px',
      padding: '12px 32px',
      fontSize: '14px',
      fontWeight: 500 as const,
      cursor: 'pointer',
      transition: 'all 0.2s ease-out',
    },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeCustom as any } },
    hover: { y: -4, boxShadow: '0 12px 24px rgba(0,0,0,0.2)', borderColor: 'rgba(255,255,255,0.25)' },
  };

  return (
    <section id="about" style={styles.section}>
      <motion.div 
        style={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div style={styles.accentBar} />
        <h2 style={styles.heading}>About DJS CodeAI</h2>
        <p style={styles.paragraph}>
          DJS CodeAI is a student-led community at DJ Sanghvi College of Engineering dedicated to exploring artificial intelligence and coding, bringing together students to learn, build, and innovate together.
        </p>

        <div style={{ paddingLeft: isMobile ? '16px' : '24px', borderLeft: '2px solid #ffffff', marginBottom: '48px' }}>
          <h3 style={{...styles.heading, fontSize: isMobile ? '1.5rem' : '1.75rem', marginBottom: '16px'}}>Our Vision</h3>
          <p style={styles.subParagraph}>
            Bridging theoretical knowledge and practical application through real projects and mentorship.
          </p>
        </div>

        <motion.div 
          style={styles.bulletsContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {bullets.map((bullet, index) => (
            <motion.div 
              key={index}
              style={styles.bulletItem}
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.div variants={{ hover: { scale: 1.1, rotate: 5 } }} transition={{ type: "spring", stiffness: 400 }}>
                <div style={{ backgroundColor: '#ffffff', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <CheckCircle2 size={16} color="#000000" />
                </div>
              </motion.div>
              <div>
                <p style={styles.bulletText}>{bullet}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div style={{ paddingLeft: isMobile ? '16px' : '24px', borderLeft: '2px solid #ffffff', marginBottom: '48px' }}>
          <h3 style={{...styles.heading, fontSize: isMobile ? '1.5rem' : '1.75rem', marginBottom: '16px'}}>Mentor-Mentee System</h3>
          <p style={styles.subParagraph}>
            A structured mentor-mentee pairing system designed for hands-on guidance and continuous learning.
          </p>
        </div>

        <motion.button 
          style={styles.ctaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Involved
        </motion.button>
      </motion.div>
    </section>
  );
}
