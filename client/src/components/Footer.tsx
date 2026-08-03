import { motion } from 'motion/react';
import { Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const styles = {
    footer: {
      backgroundColor: '#000000',
      color: '#ffffff',
      padding: '60px 32px 32px',
      fontFamily: 'Inter, sans-serif',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex' as const,
      flexDirection: 'column' as const,
      gap: '48px',
    },
    topSection: {
      display: 'flex' as const,
      justifyContent: 'space-between' as const,
      flexWrap: 'wrap' as const,
      gap: '40px',
    },
    brandSection: {
      display: 'flex' as const,
      flexDirection: 'column' as const,
      gap: '16px',
      maxWidth: '300px',
    },
    brandName: {
      fontSize: '20px',
      fontWeight: 600 as const,
      letterSpacing: '-0.02em',
    },
    brandDesc: {
      fontSize: '14px',
      color: 'rgba(255, 255, 255, 0.6)',
      lineHeight: '1.6',
    },
    linksSection: {
      display: 'flex' as const,
      gap: '64px',
      flexWrap: 'wrap' as const,
    },
    linkColumn: {
      display: 'flex' as const,
      flexDirection: 'column' as const,
      gap: '16px',
    },
    linkHeading: {
      fontSize: '13px',
      fontWeight: 600 as const,
      textTransform: 'uppercase' as const,
      letterSpacing: '0.05em',
      color: 'rgba(255, 255, 255, 0.4)',
    },
    link: {
      fontSize: '14px',
      color: '#ffffff',
      opacity: 0.7,
      textDecoration: 'none',
      cursor: 'pointer',
    },
    bottomSection: {
      display: 'flex' as const,
      justifyContent: 'space-between' as const,
      alignItems: 'center' as const,
      paddingTop: '32px',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      flexWrap: 'wrap' as const,
      gap: '16px',
    },
    copyright: {
      fontSize: '13px',
      color: 'rgba(255, 255, 255, 0.5)',
    },
    socials: {
      display: 'flex' as const,
      gap: '16px',
    },
    socialIcon: {
      fontSize: '18px',
      color: '#ffffff',
      textDecoration: 'none',
      opacity: 0.7,
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.topSection}>
          <div style={styles.brandSection}>
            <div style={styles.brandName}>DJS CodeAI</div>
            <p style={styles.brandDesc}>
              The official Artificial Intelligence and Machine Learning community at DJ Sanghvi College of Engineering.
            </p>
          </div>

          <div style={styles.linksSection}>
            <div style={styles.linkColumn}>
              <span style={styles.linkHeading}>Explore</span>
              <motion.a href="#" style={styles.link} whileHover={{ x: 4, opacity: 1 }}>About Us</motion.a>
              <motion.a href="#" style={styles.link} whileHover={{ x: 4, opacity: 1 }}>Events</motion.a>
              <motion.a href="#" style={styles.link} whileHover={{ x: 4, opacity: 1 }}>Projects</motion.a>
            </div>
            <div style={styles.linkColumn}>
              <span style={styles.linkHeading}>Connect</span>
              <motion.a href="#" style={styles.link} whileHover={{ x: 4, opacity: 1 }}>Team</motion.a>
              <motion.a href="#" style={styles.link} whileHover={{ x: 4, opacity: 1 }}>Contact</motion.a>
              <motion.a href="#" style={styles.link} whileHover={{ x: 4, opacity: 1 }}>Join Us</motion.a>
            </div>
          </div>
        </div>

        <div style={styles.bottomSection}>
          <div style={styles.copyright}>
            &copy; {currentYear} DJS CodeAI. All rights reserved.
          </div>
          <div style={styles.socials}>
            <motion.a href="https://github.com/djs-codeai" target="_blank" rel="noreferrer" style={styles.socialIcon} title="GitHub" whileHover={{ scale: 1.1, opacity: 1 }}><Github size={18} /></motion.a>
            <motion.a href="https://www.linkedin.com/company/djs-codeai" target="_blank" rel="noreferrer" style={styles.socialIcon} title="LinkedIn" whileHover={{ scale: 1.1, opacity: 1 }}><Linkedin size={18} /></motion.a>
            <motion.a href="https://www.instagram.com/djs_codeai" target="_blank" rel="noreferrer" style={styles.socialIcon} title="Instagram" whileHover={{ scale: 1.1, opacity: 1 }}><Instagram size={18} /></motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
