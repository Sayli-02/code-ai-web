import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import AboutSection from '@/components/AboutSection';
import EventsSection from '@/components/EventsSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';

const easeCustom: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Home() {
  return (
    <div style={styles.container}>
      {/* Background Image with Ken Burns effect */}
      <motion.div
        style={styles.backgroundWrapper}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: easeCustom as any }}
      >
        <img
          src="/manus-storage/hero-background_fdbaa813.png"
          alt="Hero Background"
          style={styles.backgroundImage}
        />
      </motion.div>

      {/* Navbar */}
      <motion.nav
        style={styles.navbar}
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: easeCustom as any }}
      >
        {/* Left side */}
        <div style={styles.navLeft}>
          {/* Logo */}
          <div style={styles.logoContainer}>
            <img
              src="/manus-storage/logo_1582de0e.png"
              alt="DJS CodeAI Logo"
              style={styles.logoIcon}
            />
            <span style={styles.brandText}>DJS CodeAI</span>
          </div>

          {/* Menu button */}
          <button style={styles.menuButton}>
            <div style={styles.menuCircle}>
              <Plus size={12} strokeWidth={3} color="white" />
            </div>
            <span style={styles.menuText}>Menu</span>
          </button>

          {/* Tags pill */}
          <div style={styles.tagsPill}>
            <span style={styles.tagLabel}>Artificial Intelligence</span>
            <span style={styles.tagLabel}>Machine Learning</span>
          </div>
        </div>

        {/* Right side */}
        <div style={styles.navRight}>
          <button style={styles.neuralButton}>
            <div style={styles.neuralCircle}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="4" cy="4" r="1.5" fill="black" />
                <circle cx="12" cy="4" r="1.5" fill="black" />
                <circle cx="4" cy="12" r="1.5" fill="black" />
                <circle cx="12" cy="12" r="1.5" fill="black" />
              </svg>
            </div>
            <span style={styles.neuralText}>Neural Systems</span>
          </button>
        </div>
      </motion.nav>

      {/* Footer Content */}
      <motion.footer
        style={styles.footerWrapper}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: easeCustom as any }}
      >
        <div style={styles.footerContent}>
          {/* Left block */}
          <div style={styles.footerLeft}>
            {/* Subtitle */}
            <motion.div
              style={styles.subtitle}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: easeCustom as any }}
            >
              <div style={styles.subtitleDot} />
              <span style={styles.subtitleText}>
                Official AI Club of DJ Sanghvi College of Engineering
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              style={styles.heading}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: easeCustom as any }}
            >
              Welcome to<br />DJS CodeAI.
            </motion.h1>

            {/* Buttons */}
            <motion.div
              style={styles.buttonGroup}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0, ease: easeCustom as any }}
            >
              <button style={styles.primaryButton}>
                Explore Projects
              </button>
              <button style={styles.secondaryButton}>
                Meet the Team
              </button>
            </motion.div>
          </div>

          {/* Right block */}
          <div style={styles.footerRight}>
            <div style={styles.tagPill}>Deep Learning</div>
            <div style={styles.tagPill}>GenAI</div>
            <div style={styles.tagPill}>Research</div>
          </div>
        </div>
      </motion.footer>

      {/* About Section */}
      <AboutSection />

      {/* Events Section */}
      <EventsSection />

      {/* Team Section */}
      <TeamSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}

const styles = {
  container: {
    position: 'relative' as const,
    display: 'flex' as const,
    flexDirection: 'column' as const,
    justifyContent: 'space-between' as const,
    minHeight: '100vh',
    width: '100%',
    backgroundColor: 'transparent',
    overflow: 'visible' as const,
  },
  backgroundWrapper: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    zIndex: 0,
    backgroundColor: '#000000',
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    pointerEvents: 'none' as const,
  },
  backgroundImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    width: 'auto',
    height: 'auto',
    objectFit: 'contain' as const,
    objectPosition: 'center' as const,
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
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(8px)',
  },
  navLeft: {
    display: 'flex' as const,
    alignItems: 'center' as const,
    gap: '24px',
    pointerEvents: 'auto' as const,
  },
  navRight: {
    display: 'flex' as const,
    alignItems: 'center' as const,
    pointerEvents: 'auto' as const,
  },
  logoContainer: {
    display: 'flex' as const,
    alignItems: 'center' as const,
    gap: '8px',
  },
  logoIcon: {
    width: '32px',
    height: '32px',
    objectFit: 'contain' as const,
  },
  brandText: {
    fontSize: '14px',
    fontWeight: 600 as const,
    color: '#000000',
    letterSpacing: '-0.02em',
  },
  menuButton: {
    display: 'flex' as const,
    alignItems: 'center' as const,
    gap: '8px',
    backgroundColor: '#000000',
    borderRadius: '9999px',
    padding: '8px 12px',
    transition: 'all 0.2s ease-out',
    border: 'none',
    cursor: 'pointer',
  },
  menuCircle: {
    width: '20px',
    height: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
  menuText: {
    fontSize: '11px',
    fontWeight: 500 as const,
    color: '#ffffff',
  },
  tagsPill: {
    display: 'flex' as const,
    alignItems: 'center' as const,
    gap: '12px',
    backgroundColor: '#F4F4F6',
    borderRadius: '9999px',
    padding: '8px 16px',
  },
  tagLabel: {
    fontSize: '11px',
    fontWeight: 500 as const,
    color: '#000000',
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
    color: '#000000',
  },
  footerWrapper: {
    position: 'relative' as const,
    zIndex: 10,
    padding: '40px 32px',
    background: 'linear-gradient(to top, #ffffff 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)',
  },
  footerContent: {
    display: 'flex' as const,
    justifyContent: 'space-between' as const,
    alignItems: 'flex-end' as const,
    gap: '40px',
  },
  footerLeft: {
    display: 'flex' as const,
    flexDirection: 'column' as const,
    gap: '24px',
  },
  subtitle: {
    display: 'flex' as const,
    alignItems: 'center' as const,
    gap: '8px',
  },
  subtitleDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#000000',
    borderRadius: '50%',
    flexShrink: 0,
  },
  subtitleText: {
    fontSize: '13px',
    fontWeight: 400 as const,
    color: 'rgba(0, 0, 0, 0.55)',
    lineHeight: '1.4',
  },
  heading: {
    fontSize: 'clamp(2rem, 8vw, 4.5rem)',
    fontWeight: 300 as const,
    color: '#000000',
    letterSpacing: '-0.03em',
    lineHeight: '1',
  },
  buttonGroup: {
    display: 'flex' as const,
    alignItems: 'center' as const,
    gap: '12px',
  },
  primaryButton: {
    backgroundColor: '#000000',
    color: '#ffffff',
    borderRadius: '9999px',
    padding: '10px 20px',
    fontSize: '13px',
    fontWeight: 500 as const,
    transition: 'all 0.2s ease-out',
    border: 'none',
    cursor: 'pointer',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: '#000000',
    border: '1px solid rgba(0, 0, 0, 0.35)',
    borderRadius: '9999px',
    padding: '10px 20px',
    fontSize: '13px',
    fontWeight: 500 as const,
    transition: 'all 0.2s ease-out',
    cursor: 'pointer',
  },
  footerRight: {
    display: 'flex' as const,
    alignItems: 'center' as const,
    gap: '12px',
  },
  tagPill: {
    backgroundColor: '#ffffff',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: '9999px',
    padding: '8px 16px',
    fontSize: '11px',
    fontWeight: 500 as const,
    color: '#000000',
  },
};
