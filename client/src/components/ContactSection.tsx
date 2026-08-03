import { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Instagram } from 'lucide-react';

export default function ContactSection() {
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
      padding: '80px 32px',
      backgroundColor: '#f9f9f9',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: 300 as const,
      color: '#000000',
      marginBottom: '48px',
      letterSpacing: '-0.02em',
    },
    contentGrid: {
      display: 'grid' as const,
      gridTemplateColumns: '1fr 1fr',
      gap: '48px',
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
      color: '#000000',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.05em',
    },
    input: {
      padding: '12px 16px',
      border: '1px solid rgba(0, 0, 0, 0.15)',
      borderRadius: '4px',
      fontSize: '14px',
      fontFamily: 'Inter, sans-serif',
      backgroundColor: '#ffffff',
      color: '#000000',
      transition: 'all 0.2s ease-out',
    },
    textarea: {
      padding: '12px 16px',
      border: '1px solid rgba(0, 0, 0, 0.15)',
      borderRadius: '4px',
      fontSize: '14px',
      fontFamily: 'Inter, sans-serif',
      backgroundColor: '#ffffff',
      color: '#000000',
      minHeight: '120px',
      resize: 'vertical' as const,
      transition: 'all 0.2s ease-out',
    },
    submitButton: {
      backgroundColor: '#000000',
      color: '#ffffff',
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
    },
    infoBlock: {
      display: 'flex' as const,
      flexDirection: 'column' as const,
      gap: '8px',
    },
    infoLabel: {
      fontSize: '13px',
      fontWeight: 500 as const,
      color: '#000000',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.05em',
    },
    infoValue: {
      fontSize: '15px',
      fontWeight: 400 as const,
      color: 'rgba(0, 0, 0, 0.75)',
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
      backgroundColor: '#000000',
      color: '#ffffff',
      display: 'flex' as const,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
      fontSize: '18px',
      cursor: 'pointer',
      transition: 'all 0.2s ease-out',
      textDecoration: 'none',
    },
    responsiveGrid: {
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
      },
    },
  };

  return (
    <section id="contact" style={styles.section}>
      <motion.div 
        style={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 style={{...styles.heading, marginBottom: '16px'}}>Get in Touch</h2>
        <p style={{ fontSize: '16px', color: 'rgba(0, 0, 0, 0.75)', lineHeight: '1.6', marginBottom: '48px', maxWidth: '700px' }}>
          Ready to join our AI community? Have questions about our projects? We'd love to hear from you!
        </p>

        <div style={styles.contentGrid}>
          {/* Contact Form */}
          <motion.form 
            style={styles.formSection} 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <div style={styles.formGroup}>
              <label style={styles.label}>Name</label>
              <motion.input
                style={styles.input}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                whileFocus={{ borderColor: '#000000', boxShadow: '0 0 0 1px rgba(0,0,0,0.1)' }}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <motion.input
                style={styles.input}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                whileFocus={{ borderColor: '#000000', boxShadow: '0 0 0 1px rgba(0,0,0,0.1)' }}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Message</label>
              <motion.textarea
                style={styles.textarea}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                required
                whileFocus={{ borderColor: '#000000', boxShadow: '0 0 0 1px rgba(0,0,0,0.1)' }}
              />
            </div>

            <motion.button 
              style={styles.submitButton} 
              type="submit"
              whileHover={{ scale: 1.02, backgroundColor: '#1a1a1a' }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div 
            style={styles.infoSection}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
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
                <motion.a href="https://github.com/djs-codeai" target="_blank" rel="noreferrer" style={styles.socialIcon} title="GitHub" whileHover={{ y: -3, backgroundColor: '#333333' }}>
                  <Github size={18} />
                </motion.a>
                <motion.a href="https://www.linkedin.com/company/djs-codeai" target="_blank" rel="noreferrer" style={styles.socialIcon} title="LinkedIn" whileHover={{ y: -3, backgroundColor: '#333333' }}>
                  <Linkedin size={18} />
                </motion.a>
                <motion.a href="https://www.instagram.com/djs_codeai" target="_blank" rel="noreferrer" style={styles.socialIcon} title="Instagram" whileHover={{ y: -3, backgroundColor: '#333333' }}>
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
