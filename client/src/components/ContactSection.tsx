import { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { useIsMobile } from '@/hooks/useMobile';

export default function ContactSection() {
  const isMobile = useIsMobile();
  const easeCustom = [0.16, 1, 0.3, 1];
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const styles = {
    section: {
      padding: isMobile ? '40px 16px' : '80px 32px',
      backgroundColor: 'var(--bg-secondary)',
      borderBottom: '1px solid var(--border-color)',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    heading: {
      fontSize: isMobile ? '2rem' : '2.5rem',
      fontWeight: 300 as const,
      color: 'var(--text-primary)',
      marginBottom: '48px',
      letterSpacing: '-0.02em',
    },
    contentGrid: {
      display: 'grid' as const,
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '32px' : '48px',
      marginBottom: '48px',
    },
    formSection: {
      display: 'flex' as const,
      flexDirection: 'column' as const,
      gap: '16px',
    },
    formGroup: {
      display: 'flex' as const,
      flexDirection: 'column' as const,
      gap: '8px',
    },
    label: {
      fontSize: '13px',
      fontWeight: 500 as const,
      color: 'var(--text-primary)',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.05em',
    },
    input: {
      padding: '12px 16px',
      border: '1px solid var(--border-color)',
      borderRadius: '4px',
      fontSize: '14px',
      fontFamily: 'Inter, sans-serif',
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      transition: 'all 0.2s ease-out',
    },
    textarea: {
      padding: '12px 16px',
      border: '1px solid var(--border-color)',
      borderRadius: '4px',
      fontSize: '14px',
      fontFamily: 'Inter, sans-serif',
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      minHeight: '120px',
      resize: 'vertical' as const,
      transition: 'all 0.2s ease-out',
    },
    submitButton: {
      backgroundColor: 'var(--text-primary)',
      color: 'var(--bg-primary)',
      border: 'none',
      borderRadius: '4px',
      padding: '12px 24px',
      fontSize: '14px',
      fontWeight: 500 as const,
      cursor: 'pointer',
      transition: 'all 0.2s ease-out',
      marginTop: '8px',
    },
    infoSection: {
      display: 'flex' as const,
      flexDirection: 'column' as const,
      gap: '32px',
      background: 'linear-gradient(180deg, var(--glass-bg), transparent)',
      padding: '24px',
      borderRadius: '12px',
    },
    infoBlock: {
      display: 'flex' as const,
      flexDirection: 'column' as const,
      gap: '8px',
      borderLeft: '2px solid var(--border-color)',
      paddingLeft: '16px',
    },
    infoLabel: {
      fontSize: '13px',
      fontWeight: 500 as const,
      color: 'var(--text-primary)',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.05em',
    },
    infoValue: {
      fontSize: '15px',
      fontWeight: 400 as const,
      color: 'var(--text-secondary)',
      lineHeight: '1.6',
    },
    socialsContainer: {
      display: 'flex' as const,
      gap: '16px',
      marginTop: '8px',
    },
    socialIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '4px',
      backgroundColor: 'var(--text-primary)',
      color: 'var(--bg-primary)',
      display: 'flex' as const,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
      fontSize: '18px',
      cursor: 'pointer',
      transition: 'all 0.2s ease-out',
      textDecoration: 'none',
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: easeCustom as any, delay: 0.1, staggerChildren: 0.1 }
    }
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeCustom as any } }
  };

  return (
    <section id="contact" style={styles.section}>
      <motion.div 
        style={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 style={{...styles.heading, marginBottom: '16px'}}>Get in Touch</h2>
        <p style={{ fontSize: isMobile ? '15px' : '16px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: isMobile ? '32px' : '48px', maxWidth: '700px' }}>
          Ready to join our AI community? Have questions about our projects? We'd love to hear from you!
        </p>

        <div style={styles.contentGrid}>
          {/* Contact Form */}
          <motion.form 
            style={styles.formSection} 
            onSubmit={handleSubmit}
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
          >
            <motion.div style={styles.formGroup} variants={fieldVariants}>
              <label style={styles.label}>Name</label>
              <input
                style={{...styles.input, ...(focusedField === 'name' ? { border: '1px solid var(--text-primary)', boxShadow: '0 0 0 3px var(--border-light)' } : {})}}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
              />
            </motion.div>

            <motion.div style={styles.formGroup} variants={fieldVariants}>
              <label style={styles.label}>Email</label>
              <input
                style={{...styles.input, ...(focusedField === 'email' ? { border: '1px solid var(--text-primary)', boxShadow: '0 0 0 3px var(--border-light)' } : {})}}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
              />
            </motion.div>

            <motion.div style={styles.formGroup} variants={fieldVariants}>
              <label style={styles.label}>Message</label>
              <textarea
                style={{...styles.textarea, ...(focusedField === 'message' ? { border: '1px solid var(--text-primary)', boxShadow: '0 0 0 3px var(--border-light)' } : {})}}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                required
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
              />
            </motion.div>

            <motion.button 
              style={styles.submitButton} 
              type="submit"
              variants={fieldVariants}
              whileHover={{ scale: 1.03, backgroundColor: '#222' }}
              whileTap={{ scale: 0.97 }}
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div 
            style={styles.infoSection}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: easeCustom as any }}
          >
            <div style={styles.infoBlock}>
              <p style={styles.infoLabel}>Email</p>
              <p style={styles.infoValue}>contact.djscodeai@gmail.com</p>
            </div>

            <div style={styles.infoBlock}>
              <p style={styles.infoLabel}>Phone</p>
              <p style={styles.infoValue}>+91 8104665118</p>
            </div>

            <div style={styles.infoBlock}>
              <p style={styles.infoLabel}>Location</p>
              <p style={styles.infoValue}>
                DJ Sanghvi College of Engineering, Mumbai, Maharashtra
              </p>
            </div>

            <div style={styles.infoBlock}>
              <p style={styles.infoLabel}>Follow Us</p>
              <div style={styles.socialsContainer}>
                <motion.a href="https://github.com/djs-codeai" target="_blank" rel="noreferrer" style={styles.socialIcon} title="GitHub" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} whileHover={{ scale: 1.1, backgroundColor: 'var(--text-secondary)' }}>
                  <Github size={18} />
                </motion.a>
                <motion.a href="https://www.linkedin.com/company/djs-codeai" target="_blank" rel="noreferrer" style={styles.socialIcon} title="LinkedIn" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} whileHover={{ scale: 1.1, backgroundColor: 'var(--text-secondary)' }}>
                  <Linkedin size={18} />
                </motion.a>
                <motion.a href="https://www.instagram.com/djs_codeai" target="_blank" rel="noreferrer" style={styles.socialIcon} title="Instagram" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} whileHover={{ scale: 1.1, backgroundColor: 'var(--text-secondary)' }}>
                  <Instagram size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
