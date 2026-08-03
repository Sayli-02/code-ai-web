export default function AboutSection() {
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
      fontWeight: 300 as const,
      color: '#000000',
      marginBottom: '32px',
      letterSpacing: '-0.02em',
    },
    paragraph: {
      fontSize: '16px',
      fontWeight: 400 as const,
      color: 'rgba(0, 0, 0, 0.75)',
      lineHeight: '1.6',
      marginBottom: '40px',
      maxWidth: '700px',
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
    },
    bulletDot: {
      width: '8px',
      height: '8px',
      backgroundColor: '#000000',
      borderRadius: '50%',
      marginTop: '8px',
      flexShrink: 0,
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
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>About DJS CodeAI</h2>
        <p style={styles.paragraph}>
          DJS CodeAI is a student-led artificial intelligence and machine learning community at DJ Sanghvi College of Engineering. We are dedicated to fostering innovation, learning, and collaboration among students passionate about AI/ML technologies. Through hands-on projects, mentorship, and workshops, we empower students to build real-world solutions and advance their technical expertise.
        </p>

        <div style={styles.bulletsContainer}>
          <div style={styles.bulletItem}>
            <div style={styles.bulletDot} />
            <div>
              <p style={styles.bulletText}>
                <strong>Hands-On Projects</strong> — Build real-world AI/ML applications and contribute to open-source initiatives
              </p>
            </div>
          </div>
          <div style={styles.bulletItem}>
            <div style={styles.bulletDot} />
            <div>
              <p style={styles.bulletText}>
                <strong>Mentorship Program</strong> — Learn from experienced practitioners and industry professionals
              </p>
            </div>
          </div>
          <div style={styles.bulletItem}>
            <div style={styles.bulletDot} />
            <div>
              <p style={styles.bulletText}>
                <strong>Workshops & Events</strong> — Regular sessions on cutting-edge AI/ML topics and best practices
              </p>
            </div>
          </div>
        </div>

        <button style={styles.ctaButton}>Get Involved</button>
      </div>
    </section>
  );
}
