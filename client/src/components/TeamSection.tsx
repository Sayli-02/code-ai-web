export default function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: 'Aarav Patel',
      role: 'Club President',
      bio: 'AI enthusiast passionate about deep learning and computer vision',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Vice President',
      bio: 'Specializes in NLP and generative AI applications',
    },
    {
      id: 3,
      name: 'Rohan Gupta',
      role: 'Technical Lead',
      bio: 'Full-stack developer with expertise in ML infrastructure',
    },
    {
      id: 4,
      name: 'Ananya Desai',
      role: 'Events Coordinator',
      bio: 'Organizes workshops and hackathons for the community',
    },
    {
      id: 5,
      name: 'Vikram Singh',
      role: 'Research Lead',
      bio: 'Focused on cutting-edge AI research and publications',
    },
    {
      id: 6,
      name: 'Neha Kapoor',
      role: 'Community Manager',
      bio: 'Builds mentorship programs and community engagement',
    },
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
      fontWeight: 300 as const,
      color: '#000000',
      marginBottom: '48px',
      letterSpacing: '-0.02em',
    },
    teamGrid: {
      display: 'grid' as const,
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '32px',
    },
    memberCard: {
      textAlign: 'center' as const,
      transition: 'all 0.2s ease-out',
    },
    memberPlaceholder: {
      width: '120px',
      height: '120px',
      backgroundColor: '#f0f0f0',
      borderRadius: '8px',
      margin: '0 auto 16px',
      display: 'flex' as const,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
      fontSize: '48px',
      color: 'rgba(0, 0, 0, 0.2)',
    },
    memberName: {
      fontSize: '18px',
      fontWeight: 500 as const,
      color: '#000000',
      margin: '0 0 4px 0',
    },
    memberRole: {
      fontSize: '13px',
      fontWeight: 500 as const,
      color: 'rgba(0, 0, 0, 0.5)',
      margin: '0 0 12px 0',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.05em',
    },
    memberBio: {
      fontSize: '14px',
      fontWeight: 400 as const,
      color: 'rgba(0, 0, 0, 0.65)',
      lineHeight: '1.5',
      margin: 0,
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Meet Our Team</h2>
        <div style={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} style={styles.memberCard}>
              <div style={styles.memberPlaceholder}>👤</div>
              <h3 style={styles.memberName}>{member.name}</h3>
              <p style={styles.memberRole}>{member.role}</p>
              <p style={styles.memberBio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
