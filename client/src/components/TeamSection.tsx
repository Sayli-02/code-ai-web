import { motion } from 'motion/react';
import { User } from 'lucide-react';
import { useIsMobile } from '@/hooks/useMobile';
import { useState } from 'react';

export default function TeamSection() {
  const isMobile = useIsMobile();
  const easeCustom = [0.16, 1, 0.3, 1];
  const [showPastMembers, setShowPastMembers] = useState(false);

  const currentTeamMembers = [
    {
      id: 'faculty-1',
      name: 'Dr. Aruna Gawde',
      role: 'Head of Department',
      bio: 'Guiding the community with vast experience in academia and AI research.',
      photo: '/assets/Aruna-mam.jpg',
    },
    {
      id: 'faculty-2',
      name: 'Prof. Purva Badhe',
      role: 'Faculty co-ordinator',
      bio: 'Mentoring students and fostering innovation in machine learning.',
      photo: '/assets/Purva-mam.jpg',
    },
    { id: 1, name: 'Meet Dwada', role: 'Chairperson', bio: 'Leading the AI club and shaping its vision.' },
    { id: 2, name: 'Saad Sayeed', role: 'VCP Tech', bio: 'Overseeing all technical initiatives and projects.' },
    { id: 3, name: 'Juee Shimpi', role: 'VCP Admin', bio: 'Managing club administration and internal operations.' },
    { id: 4, name: 'Suruchi Makwana', role: 'Secretary', bio: 'Coordinating communications and documentation.' },
    { id: 5, name: 'Yash Poojari', role: 'Treasurer', bio: 'Managing finances and resource allocation.' },
    { id: 6, name: 'Sayli Kulkarni', role: 'HOD Projects', bio: 'Leading technical projects and guiding teams.' },
    { id: 7, name: 'Adish Shah', role: 'HOD Outreach', bio: 'Building external relations and partnerships.' },
    { id: 8, name: 'Manya Sanghvi', role: 'HOD Outreach', bio: 'Driving community engagement and outreach programs.' },
    { id: 9, name: 'Kavya Shah', role: 'HOD Events', bio: 'Planning and executing successful club events.' },
    { id: 10, name: 'Swaleha Shaikh', role: 'HOD Events', bio: 'Organizing impactful workshops and hackathons.' },
    { id: 11, name: 'Tanishka Dhanudharmi', role: 'HOD Creatives', bio: 'Leading the creative and design initiatives.' }
  ];

  const pastTeamMembers = [
    {
      id: 'faculty-3',
      name: 'Prof. Ragini Mishra',
      role: 'Faculty Sponsor',
      bio: 'Mentoring students and fostering innovation in machine learning.',
      photo: '/assets/ragini.jpg',
    },
    {
      id: 12,
      name: 'Krishil Parikh',
      role: 'President',
      bio: 'Leading AI research and club operations with 3+ years in ML.',
    },
    {
      id: 13,
      name: 'Krisha Maisheri',
      role: 'Vice President',
      bio: 'Specializing in deep learning and neural network architectures.',
    },
    {
      id: 14,
      name: 'Rishee Panchal',
      role: 'Secretary',
      bio: 'Full-stack developer with expertise in AI integration.',
    },
    {
      id: 15,
      name: 'Deep Mehta',
      role: 'Admin',
      bio: "Finance enthusiast integrating analytical and coding skills to power tomorrow's financial tools.",
    },
    {
      id: 16,
      name: 'Netra Sangani',
      role: 'Events Head',
      bio: 'Great in event management.',
    },
    {
      id: 17,
      name: 'Vruddhi Zaveri',
      role: 'Creatives Head',
      bio: 'From algorithms to aesthetics, creativity is intelligence having fun.',
    },
  ];

  const activeMembers = showPastMembers ? pastTeamMembers : currentTeamMembers;

  const styles = {
    section: {
      padding: isMobile ? '40px 16px' : '80px 32px',
      backgroundColor: 'var(--bg-primary)',
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
    teamGrid: {
      display: 'grid' as const,
      gridTemplateColumns: isMobile ? 'repeat(auto-fit, minmax(140px, 1fr))' : 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: isMobile ? '16px' : '32px',
    },
    memberCard: {
      textAlign: 'center' as const,
      backgroundColor: 'var(--glass-bg)',
      backdropFilter: 'blur(12px)',
      border: '1px solid var(--glass-border)',
      borderRadius: '12px',
      padding: '24px 16px',
    },
    memberPlaceholder: (isFaculty: boolean) => ({
      width: isFaculty ? '140px' : '120px',
      height: isFaculty ? '140px' : '120px',
      background: 'linear-gradient(135deg, var(--bg-tertiary), var(--border-light))',
      border: '1px solid var(--border-color)',
      borderRadius: '50%',
      margin: '0 auto 20px',
      display: 'flex' as const,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
      fontSize: '48px',
      color: 'var(--border-color)',
      overflow: 'hidden' as const,
    }),
    memberName: {
      fontSize: '18px',
      fontWeight: 600 as const,
      color: 'var(--text-primary)',
      margin: '0 0 4px 0',
      letterSpacing: '-0.01em',
    },
    memberRole: {
      fontSize: '13px',
      fontWeight: 600 as const,
      color: 'var(--text-secondary)',
      margin: '0 0 12px 0',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.05em',
    },
    memberBio: {
      fontSize: '14px',
      fontWeight: 400 as const,
      color: 'var(--text-secondary)',
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
    hover: { y: -6, scale: 1.02, boxShadow: '0 12px 32px rgba(0,0,0,0.1)', borderColor: 'var(--border-color)' }
  };

  return (
    <section id="team" style={styles.section}>
      <motion.div 
        style={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', flexDirection: isMobile ? 'column' : 'row', marginBottom: '48px', gap: '16px' }}>
          <h2 style={{...styles.heading, marginBottom: 0}}>{showPastMembers ? 'Past Team Members' : 'Meet Our Team'}</h2>
          <motion.button
            onClick={() => setShowPastMembers(!showPastMembers)}
            style={{
              padding: '12px 24px',
              backgroundColor: 'var(--text-primary)',
              color: 'var(--bg-primary)',
              border: 'none',
              borderRadius: '9999px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,0,0,0.1)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showPastMembers ? 'View Current Team' : 'View Past Members'}
          </motion.button>
        </div>
        <motion.div 
          key={showPastMembers ? 'past' : 'current'}
          style={styles.teamGrid}
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
        >
          {activeMembers.map((member, index) => (
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
                <div style={{ display: 'inline-block', backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)', fontSize: '10px', padding: '2px 10px', borderRadius: '9999px', marginBottom: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Faculty</div>
              )}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '12px' }}>
                <div style={{ width: '16px', height: '1px', backgroundColor: 'var(--text-primary)' }} />
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
