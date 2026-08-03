import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const bullets = [
    'Practical application of theoretical knowledge',
    'Building industry-ready skills',
    'Research and project development'
  ];

  const styles = {
    section: {
      padding: '80px 32px',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: 400 as const,
      color: '#000000',
      marginBottom: '32px',
      letterSpacing: '-0.03em',
    },
    paragraph: {
      fontSize: '22px',
      fontWeight: 300 as const,
      color: 'rgba(0, 0, 0, 0.8)',
      lineHeight: '1.5',
      marginBottom: '56px',
      maxWidth: '850px',
      letterSpacing: '-0.01em',
    },
    subParagraph: {
      fontSize: '16px',
      fontWeight: 400 as const,
      color: 'rgba(0, 0, 0, 0.65)',
      lineHeight: '1.6',
      marginBottom: '32px',
      maxWidth: '600px',
    },
    bulletsContainer: {
      display: 'grid' as const,
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '32px',
      marginBottom: '48px',
    },
    bulletItem: {
      display: 'flex' as const,
      gap: '16px',
      backgroundColor: '#fbfbfb',
      padding: '24px',
      borderRadius: '12px',
      border: '1px solid rgba(0,0,0,0.05)',
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

  return (
    <section id="about" style={styles.section}>
      <motion.div 
        style={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 style={styles.heading}>About DJS CodeAI</h2>
        <p style={styles.paragraph}>
          DJS CodeAI is a student-led community at DJ Sanghvi College of Engineering dedicated to exploring artificial intelligence and coding, bringing together students to learn, build, and innovate together.
        </p>

        <div style={{ paddingLeft: '24px', borderLeft: '2px solid #000000', marginBottom: '48px' }}>
          <h3 style={{...styles.heading, fontSize: '1.75rem', marginBottom: '16px'}}>Our Vision</h3>
          <p style={styles.subParagraph}>
            Bridging theoretical knowledge and practical application through real projects and mentorship.
          </p>
        </div>

        <div style={styles.bulletsContainer}>
          {bullets.map((bullet, index) => (
            <motion.div 
              key={index}
              style={styles.bulletItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover="hover"
              variants={{ hover: { y: -4, boxShadow: '0 12px 30px rgba(0,0,0,0.06)', borderColor: 'rgba(0,0,0,0.1)' } }}
            >
              <motion.div variants={{ hover: { scale: 1.2, rotate: 5 } }} transition={{ type: "spring", stiffness: 400 }}>
                <CheckCircle2 size={20} color="#000000" style={{ flexShrink: 0, marginTop: '2px' }} />
              </motion.div>
              <div>
                <p style={styles.bulletText}>{bullet}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ paddingLeft: '24px', borderLeft: '2px solid #000000', marginBottom: '48px' }}>
          <h3 style={{...styles.heading, fontSize: '1.75rem', marginBottom: '16px'}}>Mentor-Mentee System</h3>
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
