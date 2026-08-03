import { motion } from 'motion/react';
import { User } from 'lucide-react';
import { useIsMobile } from '@/hooks/useMobile';

export default function TeamSection() {
  const isMobile = useIsMobile();
  const easeCustom = [0.16, 1, 0.3, 1];
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
      padding: isMobile ? '40px 16px' : '80px 32px',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    heading: {
      fontSize: isMobile ? '2rem' : '2.5rem',
      fontWeight: 300 as const,
      color: '#000000',
      marginBottom: '48px',
      letterSpacing: '-0.02em',
    },
    teamGrid: {
      display: 'grid' as const,
      gridTemplateColumns: isMobile ? 'repeat(auto-fit, minmax(140px, 1fr))' : 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: isMobile ? '16px' : '32px',
    },
    memberCard: {
      textAlign: 'center' as const,
      backgroundColor: '#ffffff',
      border: '1px solid transparent',
      borderRadius: '12px',
      padding: '24px 16px',
    },
    memberPlaceholder: (isFaculty: boolean) => ({
      width: isFaculty ? '140px' : '120px',
      height: isFaculty ? '140px' : '120px',
      background: 'linear-gradient(135deg, #f5f5f5, #e8e8e8)',
      border: '1px solid rgba(0, 0, 0, 0.08)',
      borderRadius: '50%',
      margin: '0 auto 20px',
      display: 'flex' as const,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
      fontSize: '48px',
      color: 'rgba(0, 0, 0, 0.2)',
      overflow: 'hidden' as const,
    }),
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

  const gridVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeCustom as any } },
    hover: { y: -6, boxShadow: '0 12px 28px rgba(0,0,0,0.08)', borderColor: 'rgba(0,0,0,0.08)' }
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
        <motion.div 
          style={styles.teamGrid}
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.id} 
              style={styles.memberCard}
              variants={cardVariants}
              whileHover="hover"
            >
              <div style={styles.memberPlaceholder(member.id.toString().startsWith('faculty'))}>
                {member.photo ? (
                  <motion.img 
                    src={member.photo} 
                    alt={member.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    variants={{ hover: { scale: 1.08 } }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                ) : (
                  <motion.div
                    variants={{ hover: { scale: 1.08 } }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <User size={48} color="rgba(0,0,0,0.2)" />
                  </motion.div>
                )}
              </div>
              <h3 style={{...styles.memberName, marginBottom: member.id.toString().startsWith('faculty') ? '8px' : '16px'}}>{member.name}</h3>
              {member.id.toString().startsWith('faculty') && (
                <div style={{ display: 'inline-block', backgroundColor: '#000', color: '#fff', fontSize: '10px', padding: '2px 10px', borderRadius: '9999px', marginBottom: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Faculty</div>
              )}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '12px' }}>
                <div style={{ width: '16px', height: '1px', backgroundColor: '#000' }} />
                <p style={{...styles.memberRole, marginBottom: 0}}>{member.role}</p>
              </div>
              <p style={styles.memberBio}>{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
