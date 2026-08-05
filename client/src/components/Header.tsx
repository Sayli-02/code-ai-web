import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useIsMobile } from '@/hooks/useMobile';
import { useTheme } from '@/contexts/ThemeContext';

const easeCustom: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Header() {
  const isMobile = useIsMobile();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  
  const { theme, toggleTheme } = useTheme();
  
  const { scrollY } = useScroll();

  useEffect(() => {
    const sectionIds = ['home', 'about', 'events', 'projects', 'team', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Map scroll values to colors: past ~600px switches to light mode
  const navLinkColor = useTransform(scrollY, [500, 600], ['#ffffff', 'var(--text-primary)']);
  const navBgColor = useTransform(scrollY, [500, 600], ['rgba(255, 255, 255, 0.1)', 'var(--glass-bg)']);
  const navBorder = useTransform(scrollY, [500, 600], ['1px solid rgba(255, 255, 255, 0)', '1px solid var(--border-color)']);
  const navShadow = useTransform(scrollY, [500, 600], ['none', '0 8px 32px rgba(0,0,0,0.1)']);
  const btnBgColor = useTransform(scrollY, [500, 600], ['#F4F4F6', 'var(--text-primary)']);
  const btnTextColor = useTransform(scrollY, [500, 600], ['#000000', 'var(--bg-primary)']);
  const btnIconColor = useTransform(scrollY, [500, 600], ['#000000', 'var(--bg-primary)']);

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
      padding: isMobile ? '16px 20px' : '24px 32px',
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
      paddingLeft: isMobile ? '0px' : '280px', // Space for the absolute logo
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
      display: isMobile ? 'none' : 'flex' as const,
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
    hamburger: {
      display: 'flex' as const,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
      border: 'none',
      borderRadius: '50%',
      width: '36px',
      height: '36px',
      cursor: 'pointer',
      pointerEvents: 'auto' as const,
      marginRight: '12px',
    },
    mobileMenu: {
      position: 'fixed' as const,
      top: '72px',
      left: '16px',
      right: '16px',
      backgroundColor: 'var(--glass-bg)',
      backdropFilter: 'blur(20px)',
      borderRadius: '16px',
      padding: '16px 0',
      display: 'flex' as const,
      flexDirection: 'column' as const,
      zIndex: 49,
      border: '1px solid rgba(255,255,255,0.1)',
    },
    mobileLink: {
      padding: '16px 24px',
      color: 'var(--text-primary)',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: 500 as const,
      borderBottom: '1px solid var(--border-light)',
    },
  };

  return (
    <div style={styles.headerContainer}>
      {/* Standalone Logo (Outside Navbar Stacking Context) */}
      <motion.img
        src="/assets/logo.jpeg"
        alt="DJS CodeAI Logo"
        style={{ ...styles.logoIcon, top: isMobile ? '20px' : '28px', left: isMobile ? '20px' : '32px', height: isMobile ? '32px' : '40px' }}

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
          {!isMobile && (
            <motion.div style={{ ...styles.navLinks, backgroundColor: navBgColor, border: navBorder as any, boxShadow: navShadow as any }}>
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'events', label: 'Events' },
                { id: 'projects', label: 'Projects' },
                { id: 'team', label: 'Team' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <motion.a 
                  key={item.id} 
                  whileHover={{ opacity: 1 }} 
                  href={`#${item.id}`} 
                  style={{ 
                    ...styles.navLink, 
                    color: navLinkColor, 
                    position: 'relative',
                    opacity: activeSection === item.id ? 1 : 0.8
                  }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      style={{
                        position: 'absolute',
                        bottom: '-4px',
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'currentColor',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </motion.a>
              ))}
            </motion.div>
          )}
        </div>

        {/* Right side */}
        <div style={styles.navRight}>
          <motion.button
            onClick={toggleTheme}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: navBgColor,
              color: navLinkColor as any,
              border: navBorder as any,
              marginRight: '12px',
              cursor: 'pointer'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
          {isMobile && (
            <motion.button 
              style={{ ...styles.hamburger, backgroundColor: navBgColor, color: navLinkColor as any }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          )}
          <motion.button 
            style={{ ...styles.neuralButton, backgroundColor: btnBgColor }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div style={{...styles.neuralCircle, backgroundColor: btnTextColor as any}}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <motion.circle cx="4" cy="4" r="1.5" fill={btnIconColor as any} />
                <motion.circle cx="12" cy="4" r="1.5" fill={btnIconColor as any} />
                <motion.circle cx="4" cy="12" r="1.5" fill={btnIconColor as any} />
                <motion.circle cx="12" cy="12" r="1.5" fill={btnIconColor as any} />
              </svg>
            </div>
            <motion.span style={{ ...styles.neuralText, color: btnTextColor as any }}>Neural Systems</motion.span>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      {isMobile && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -20, pointerEvents: isMobileMenuOpen ? 'auto' : 'none' }}
          transition={{ duration: 0.3, ease: easeCustom as any }}
          style={styles.mobileMenu}
        >
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} style={styles.mobileLink}>Home</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} style={styles.mobileLink}>About</a>
          <a href="#events" onClick={() => setIsMobileMenuOpen(false)} style={styles.mobileLink}>Events</a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} style={styles.mobileLink}>Projects</a>
          <a href="#team" onClick={() => setIsMobileMenuOpen(false)} style={styles.mobileLink}>Team</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} style={{ ...styles.mobileLink, borderBottom: 'none' }}>Contact</a>
        </motion.div>
      )}
    </div>
  );
}
