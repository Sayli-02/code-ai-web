import { motion, useScroll, useTransform } from 'motion/react';
import { Plus } from 'lucide-react';

const easeCustom: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Header() {
  const { scrollY } = useScroll();
  // Map scroll values to colors: past ~600px switches to light mode
  const navLinkColor = useTransform(scrollY, [500, 600], ['#ffffff', '#000000']);
  const navBgColor = useTransform(scrollY, [500, 600], ['rgba(255, 255, 255, 0.1)', 'rgba(0, 0, 0, 0.05)']);
  const btnBgColor = useTransform(scrollY, [500, 600], ['#F4F4F6', '#000000']);
  const btnTextColor = useTransform(scrollY, [500, 600], ['#000000', '#ffffff']);
  const btnIconColor = useTransform(scrollY, [500, 600], ['#000000', '#ffffff']);

  const styles = {
    headerContainer: {
      position: 'relative' as const,
      zIndex: 50,
    },
    logoIcon: {
      position: 'fixed' as const,
      top: '28px',
      left: '32px',
      zIndex: 51,
      height: '40px',
      width: 'auto',
      objectFit: 'contain' as const,
    },
    navbar: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      padding: '24px 32px',
      display: 'flex' as const,
      justifyContent: 'space-between' as const,
      alignItems: 'center' as const,
      pointerEvents: 'none' as const,
      backgroundColor: 'transparent',
    },
    navLeft: {
      display: 'flex' as const,
      alignItems: 'center' as const,
      gap: '24px',
      pointerEvents: 'auto' as const,
      paddingLeft: '280px', // Space for the absolute logo
    },
    navRight: {
      display: 'flex' as const,
      alignItems: 'center' as const,
      pointerEvents: 'auto' as const,
    },

    navLinks: {
      display: 'flex' as const,
      alignItems: 'center' as const,
      gap: '24px',
      backgroundColor: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '9999px',
      padding: '8px 24px',
    },
    navLink: {
      fontSize: '13px',
      fontWeight: 500 as const,
      color: '#ffffff',
      textDecoration: 'none',
      transition: 'opacity 0.2s',
      opacity: 0.8,
    },
    neuralButton: {
      display: 'flex' as const,
      alignItems: 'center' as const,
      gap: '8px',
      backgroundColor: '#F4F4F6',
      borderRadius: '9999px',
      padding: '8px 12px',
      transition: 'all 0.2s ease-out',
      border: 'none',
      cursor: 'pointer',
    },
    neuralCircle: {
      width: '20px',
      height: '20px',
      backgroundColor: '#000000',
      borderRadius: '50%',
      display: 'flex' as const,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
    },
    neuralText: {
      fontSize: '11px',
      fontWeight: 500 as const,
    },
  };

  return (
    <div style={styles.headerContainer}>
      {/* Standalone Logo (Outside Navbar Stacking Context) */}
      <motion.img
        src="/assets/logo.jpeg"
        alt="DJS CodeAI Logo"
        style={styles.logoIcon}
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: easeCustom as any }}
      />

      {/* Navbar */}
      <motion.nav
        style={styles.navbar}
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: easeCustom as any }}
      >
        {/* Left side */}
        <div style={styles.navLeft}>


          {/* Navbar Links */}
          <motion.div style={{ ...styles.navLinks, backgroundColor: navBgColor }}>
            <motion.a whileHover={{ opacity: 1 }} href="#about" style={{ ...styles.navLink, color: navLinkColor }}>About</motion.a>
            <motion.a whileHover={{ opacity: 1 }} href="#events" style={{ ...styles.navLink, color: navLinkColor }}>Events</motion.a>
            <motion.a whileHover={{ opacity: 1 }} href="#team" style={{ ...styles.navLink, color: navLinkColor }}>Team</motion.a>
            <motion.a whileHover={{ opacity: 1 }} href="#contact" style={{ ...styles.navLink, color: navLinkColor }}>Contact</motion.a>
          </motion.div>
        </div>

        {/* Right side */}
        <div style={styles.navRight}>
          <motion.button 
            style={{ ...styles.neuralButton, backgroundColor: btnBgColor }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div style={styles.neuralCircle}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <motion.circle cx="4" cy="4" r="1.5" fill={btnIconColor} />
                <motion.circle cx="12" cy="4" r="1.5" fill={btnIconColor} />
                <motion.circle cx="4" cy="12" r="1.5" fill={btnIconColor} />
                <motion.circle cx="12" cy="12" r="1.5" fill={btnIconColor} />
              </svg>
            </div>
            <motion.span style={{ ...styles.neuralText, color: btnTextColor }}>Neural Systems</motion.span>
          </motion.button>
        </div>
      </motion.nav>
    </div>
  );
}
