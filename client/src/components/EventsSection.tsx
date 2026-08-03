import { motion } from 'motion/react';
import { Calendar, MapPin } from 'lucide-react';
import { useIsMobile } from '@/hooks/useMobile';

export default function EventsSection() {
  const isMobile = useIsMobile();
  const easeCustom = [0.16, 1, 0.3, 1];
  const events = [
    {
      id: 1,
      title: 'Roadmap to Becoming an AI Engineer',
      status: 'Registration Closed',
      description: 'Seminar guiding students toward becoming AI engineers, with expert mentors',
      date: 'August 5, 2025, 11:00 AM–1:00 PM',
      venue: 'Seminar Hall',
    },
    {
      id: 2,
      title: 'CODEQUEST 2025',
      status: 'Registration Closed',
      description: 'Hybrid hackathon introducing juniors to the full hackathon experience with mentorship and pitching',
      date: 'October 5–12, 2025',
      venue: 'Hybrid',
    },
    {
      id: 3,
      title: 'CodeVerse 1.0',
      status: 'Registration Open',
      description: 'Flagship offline AI challenge with real-world debugging and data-driven problem-solving tasks',
      date: 'November 8, 2025, 8:00 AM–6:00 PM',
      venue: '4th Floor, AIML Department',
    },
    {
      id: 4,
      title: 'Hackathon: AI for Good',
      status: 'Save the Date',
      description: '48-hour hackathon developing AI solutions for social good and sustainability',
      date: 'June 1–3, 2025',
      venue: 'Innovation Center',
    },
  ];

  const styles = {
    section: {
      padding: isMobile ? '40px 16px' : '80px 32px',
      backgroundColor: '#f9f9f9',
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
    eventsGrid: {
      display: 'flex' as const,
      flexDirection: 'column' as const,
      gap: '48px',
      position: 'relative' as const,
    },
    timelineLine: {
      position: 'absolute' as const,
      left: '50%',
      top: 0,
      bottom: 0,
      width: '2px',
      transform: 'translateX(-50%)',
      background: 'linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.2), rgba(0,0,0,0.05))',
      display: isMobile ? 'none' : 'block',
    },
    eventWrapper: (index: number) => ({
      position: 'relative' as const,
      width: '100%',
      display: 'flex' as const,
      justifyContent: isMobile ? 'flex-start' : (index % 2 === 0 ? 'flex-start' : 'flex-end'),
    }),
    timelineNode: {
      position: 'absolute' as const,
      top: '32px',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '12px',
      height: '12px',
      backgroundColor: '#111',
      border: '3px solid #fff',
      boxShadow: '0 0 0 2px rgba(0,0,0,0.15)',
      borderRadius: '50%',
      zIndex: 2,
      display: isMobile ? 'none' : 'block',
    },
    eventCard: {
      width: isMobile ? '100%' : '46%',
      backgroundColor: '#0a0a0a',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    },
    eventHeader: {
      display: 'flex' as const,
      flexDirection: isMobile ? 'column' as const : 'row' as const,
      justifyContent: 'space-between' as const,
      alignItems: 'flex-start' as const,
      marginBottom: '16px',
      gap: '12px',
    },
    eventTitle: {
      fontSize: '19px',
      fontWeight: 600 as const,
      color: '#ffffff',
      margin: 0,
      letterSpacing: '-0.01em',
    },
    statusBadge: (status: string) => ({
      display: 'inline-block' as const,
      padding: '4px 12px',
      borderRadius: '9999px',
      fontSize: '11px',
      fontWeight: 600 as const,
      whiteSpace: 'nowrap' as const,
      backgroundColor: status === 'Registration Open' ? '#ffffff' : 'transparent',
      color: status === 'Registration Open' ? '#000000' : 'rgba(255, 255, 255, 0.6)',
      border: status === 'Registration Open' ? '1px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.2)',
    }),
    eventDescription: {
      fontSize: '14px',
      fontWeight: 400 as const,
      color: 'rgba(255, 255, 255, 0.75)',
      lineHeight: '1.5',
      marginBottom: '16px',
      margin: '0 0 16px 0',
    },
    eventMeta: {
      display: 'flex' as const,
      flexDirection: 'column' as const,
      gap: '8px',
    },
    metaItem: {
      fontSize: '13px',
      fontWeight: 400 as const,
      color: 'rgba(255, 255, 255, 0.6)',
      display: 'flex' as const,
      gap: '8px',
    },
    metaLabel: {
      fontWeight: 500 as const,
    },
  };

  return (
    <section id="events" style={styles.section}>
      <motion.div 
        style={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 style={styles.heading}>Upcoming Events</h2>
        <div style={styles.eventsGrid}>
          {!isMobile && <div style={styles.timelineLine} />}
          {events.map((event, index) => (
            <div key={event.id} style={styles.eventWrapper(index)}>
              {!isMobile && <div style={styles.timelineNode} />}
              <motion.div 
                style={styles.eventCard}
                initial={{ opacity: 0, x: isMobile ? 0 : (index % 2 === 0 ? -40 : 40) }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: easeCustom as any }}
                whileHover={{ 
                  y: -4, 
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                  borderColor: 'rgba(255,255,255,0.25)' 
                }}
              >
                <div style={styles.eventHeader}>
                  <h3 style={styles.eventTitle}>{event.title}</h3>
                  <span style={styles.statusBadge(event.status)}>{event.status}</span>
                </div>
                <p style={styles.eventDescription}>{event.description}</p>
                <div style={styles.eventMeta}>
                  <div style={styles.metaItem}>
                    <Calendar size={14} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{event.date}</span>
                  </div>
                  <div style={styles.metaItem}>
                    <MapPin size={14} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{event.venue}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
