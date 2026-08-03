import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useIsMobile } from '@/hooks/useMobile';
import AboutSection from '@/components/AboutSection';
import EventsSection from '@/components/EventsSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sparkles from '@/components/Sparkles';

const easeCustom: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Home() {
  const isMobile = useIsMobile();
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 800], ['0%', '30%']);
  const backgroundOpacity = useTransform(scrollY, [0, 600], [1, 0.3]);

  const [stage, setStage] = useState<'bg' | 'hand' | 'brain' | 'content' | 'done'>('bg');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStage('done');
      return;
    }

    const timer = setTimeout(() => {
      setStage('done');
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (stage === 'done') {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
      return;
    }

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const preventDefault = (e: Event) => e.preventDefault();
    const preventKeyScroll = (e: KeyboardEvent) => {
      if (['Space', 'PageUp', 'PageDown', 'End', 'Home', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'].includes(e.code)) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', preventDefault, { passive: false });
    window.addEventListener('touchmove', preventDefault, { passive: false });
    window.addEventListener('keydown', preventKeyScroll, { passive: false });

    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
      window.removeEventListener('wheel', preventDefault);
      window.removeEventListener('touchmove', preventDefault);
      window.removeEventListener('keydown', preventKeyScroll);
    };
  }, [stage]);

  useEffect(() => {
    if (stage === 'brain') {
      const timer = setTimeout(() => setStage('content'), 600);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const styles = getStyles(isMobile);

  return (
    <div style={styles.container}>
      {/* Background Image with Ken Burns effect */}
      <motion.div
        style={styles.backgroundWrapper}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={stage === 'done' ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
        transition={stage === 'done' ? { duration: 0 } : { duration: 1.8, ease: easeCustom as any }}
        onAnimationComplete={() => { if (stage === 'bg') setStage('hand'); }}
      >
        <motion.div style={{ ...styles.imageWrapper, y: backgroundY, opacity: backgroundOpacity }}>
          <img
            src="/assets/hero-background.png"
            alt="Hero Background"
            style={styles.backgroundImage}
          />
          <motion.img
            src="/assets/hand.png"
            alt="Robotic Hand"
            style={styles.animatedHand}
            initial={{ y: 150, opacity: 0 }}
            animate={stage === 'done' ? { y: 0, opacity: 1 } : (stage === 'bg' ? { y: 150, opacity: 0 } : { y: 0, opacity: 1 })}
            transition={stage === 'done' ? { duration: 0 } : { duration: 2.4, ease: easeCustom as any }}
            onAnimationComplete={() => { if (stage === 'hand') setStage('brain'); }}
          />
          <motion.img
            src="/assets/brain.png"
            alt="Animated Brain"
            style={styles.animatedBrain}
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            animate={
              stage === 'done'
                ? { opacity: 1, scale: 1, rotate: 360 }
                : (stage === 'bg' || stage === 'hand')
                ? { opacity: 0, scale: 0.9, rotate: 0 }
                : { opacity: 1, scale: 1, rotate: 360 }
            }
            transition={
              stage === 'done'
                ? { rotate: { duration: 8, repeat: Infinity, ease: "linear" } }
                : {
                    default: { duration: 0.6, ease: easeCustom as any },
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                  }
            }
          />
        </motion.div>
      </motion.div>

      <Header />

      {/* Hero Section Container */}
      <div style={styles.heroSection}>
        {/* Footer Content */}
        <motion.footer
          style={styles.footerWrapper}
          initial={{ y: 20, opacity: 0 }}
          animate={stage === 'done' || stage === 'content' ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={stage === 'done' ? { duration: 0 } : { duration: 1, ease: easeCustom as any }}
        >
          <div style={styles.footerContent}>
            {/* Left block */}
            <div style={styles.footerLeft}>
              {/* Subtitle */}
              <motion.div
                style={styles.subtitle}
                initial={{ y: 16, opacity: 0 }}
                animate={stage === 'done' || stage === 'content' ? { y: 0, opacity: 1 } : { y: 16, opacity: 0 }}
                transition={stage === 'done' ? { duration: 0 } : { duration: 0.8, delay: 0.2, ease: easeCustom as any }}
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
                animate={stage === 'done' || stage === 'content' ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={stage === 'done' ? { duration: 0 } : { duration: 0.8, delay: 0.4, ease: easeCustom as any }}
              >
                Welcome to<br />DJS CodeAI.
              </motion.h1>

              {/* Buttons */}
              <motion.div
                style={styles.buttonGroup}
                initial={{ y: 16, opacity: 0 }}
                animate={stage === 'done' || stage === 'content' ? { y: 0, opacity: 1 } : { y: 16, opacity: 0 }}
                transition={stage === 'done' ? { duration: 0 } : { duration: 0.8, delay: 0.6, ease: easeCustom as any }}
                onAnimationComplete={() => { if (stage === 'content') setStage('done'); }}
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
      </div>

      <div style={styles.contentSections}>
        <Sparkles />
        
        {/* About Section */}
        <AboutSection />

        {/* Events Section */}
        <EventsSection />

        {/* Team Section */}
        <TeamSection />

        {/* Contact Section */}
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

const getStyles = (isMobile: boolean) => ({
  container: {
    position: 'relative' as const,
    width: '100%',
    backgroundColor: 'transparent',
    overflowX: 'hidden' as const,
  },
  heroSection: {
    position: 'relative' as const,
    width: '100%',
    minHeight: '100vh',
    display: 'flex' as const,
    flexDirection: 'column' as const,
    justifyContent: 'flex-end' as const,
  },
  contentSections: {
    position: 'relative' as const,
    zIndex: 10,
    backgroundColor: '#000000',
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
    overflow: 'hidden' as const,
  },
  imageWrapper: {
    position: 'relative' as const,
    aspectRatio: '647 / 555',
    height: '75%',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain' as const,
  },
  animatedHand: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'contain' as const,
    transform: 'rotate(180deg)',
    pointerEvents: 'none' as const,
    zIndex: 2,
  },
  animatedBrain: {
    position: 'absolute' as const,
    top: '-12%',
    left: '58%',
    transform: 'translate(-50%, -50%)',
    width: '35%',
    height: 'auto',
    pointerEvents: 'none' as const,
    zIndex: 5,
  },

  footerWrapper: {
    position: 'relative' as const,
    zIndex: 10,
    padding: isMobile ? '24px 16px' : '40px 32px',
    background: 'linear-gradient(to top, #ffffff 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)',
  },
  footerContent: {
    display: 'flex' as const,
    flexDirection: isMobile ? 'column' as const : 'row' as const,
    justifyContent: isMobile ? 'flex-start' as const : 'space-between' as const,
    alignItems: isMobile ? 'flex-start' as const : 'flex-end' as const,
    gap: isMobile ? '24px' : '40px',
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
    flexWrap: 'wrap' as const,
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
});
