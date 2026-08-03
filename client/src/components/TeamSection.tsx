import { motion } from 'motion/react';
import { User } from 'lucide-react';

export default function TeamSection() {
  const teamMembers = [
    {
      id: 'faculty-1',
      name: 'Dr. Aruna Gawde',
      role: 'Faculty Sponsor',
      bio: 'Guiding the community with vast experience in academia and AI research.',
      photo: '/assets/aruna.jpg',
    },
    {
      id: 'faculty-2',
      name: 'Prof. Ragini Mishra',
      role: 'Faculty Sponsor',
      bio: 'Mentoring students and fostering innovation in machine learning.',
      photo: '/assets/ragini.jpg',
    },
    {
      id: 1,
      name: 'Krishil Parikh',
      role: 'President',
      bio: 'Leading AI research and club operations with 3+ years in ML.',
    },
    {
      id: 2,
      name: 'Krisha Maisheri',
      role: 'Vice President',
      bio: 'Specializing in deep learning and neural network architectures.',
    },
    {
      id: 3,
      name: 'Rishee Panchal',
      role: 'Secretary',
      bio: 'Full-stack developer with expertise in AI integration.',
    },
    {
      id: 4,
      name: 'Deep Mehta',
      role: 'Admin',
      bio: "Finance enthusiast integrating analytical and coding skills to power tomorrow's financial tools.",
    },
    {
      id: 5,
      name: 'Netra Sangani',
      role: 'Events Head',
      bio: 'Great in event management.',
    },
    {
      id: 6,
      name: 'Vruddhi Zaveri',
      role: 'Creatives Head',
      bio: 'From algorithms to aesthetics, creativity is intelligence having fun.',
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
      backgroundColor: '#ffffff',
      border: '1px solid transparent',
      borderRadius: '12px',
      padding: '24px 16px',
    },
    memberPlaceholder: {
      width: '120px',
      height: '120px',
      backgroundColor: '#f8f8f8',
      borderRadius: '50%',
      margin: '0 auto 20px',
      display: 'flex' as const,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
      fontSize: '48px',
      color: 'rgba(0, 0, 0, 0.2)',
      overflow: 'hidden' as const,
    },
    memberName: {
      fontSize: '18px',
      fontWeight: 600 as const,
      color: '#000000',
      margin: '0 0 4px 0',
      letterSpacing: '-0.01em',
    },
    memberRole: {
      fontSize: '13px',
      fontWeight: 600 as const,
      color: 'rgba(0, 0, 0, 0.45)',
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
    <section id="team" style={styles.section}>
      <motion.div 
        style={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 style={styles.heading}>Meet Our Team</h2>
        <div style={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.id} 
              style={styles.memberCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover="hover"
              variants={{ hover: { y: -6, boxShadow: '0 12px 30px rgba(0,0,0,0.08)', borderColor: 'rgba(0,0,0,0.1)' } }}
            >
              <div style={styles.memberPlaceholder}>
                {member.photo ? (
                  <motion.img 
                    src={member.photo} 
                    alt={member.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    variants={{ hover: { scale: 1.1 } }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                ) : (
                  <motion.div
                    variants={{ hover: { scale: 1.1 } }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <User size={48} color="rgba(0,0,0,0.2)" />
                  </motion.div>
                )}
              </div>
              <h3 style={styles.memberName}>{member.name}</h3>
              <p style={styles.memberRole}>{member.role}</p>
              <p style={styles.memberBio}>{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
