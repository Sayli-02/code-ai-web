import { motion } from 'motion/react';
import { Calendar, MapPin } from 'lucide-react';

export default function EventsSection() {
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
    eventsGrid: {
      display: 'grid' as const,
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
    },
    eventCard: {
      backgroundColor: '#ffffff',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '12px',
      padding: '24px',
    },
    eventHeader: {
      display: 'flex' as const,
      justifyContent: 'space-between' as const,
      alignItems: 'flex-start' as const,
      marginBottom: '16px',
      gap: '12px',
    },
    eventTitle: {
      fontSize: '19px',
      fontWeight: 600 as const,
      color: '#000000',
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
      backgroundColor: status === 'Registration Open' ? '#000000' : 'transparent',
      color: status === 'Registration Open' ? '#ffffff' : 'rgba(0, 0, 0, 0.6)',
      border: status === 'Registration Open' ? '1px solid #000000' : '1px solid rgba(0, 0, 0, 0.2)',
    }),
    eventDescription: {
      fontSize: '14px',
      fontWeight: 400 as const,
      color: 'rgba(0, 0, 0, 0.65)',
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
      color: 'rgba(0, 0, 0, 0.6)',
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
          {events.map((event, index) => (
            <motion.div 
              key={event.id} 
              style={styles.eventCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ 
                y: -6, 
                boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
                borderColor: 'rgba(0,0,0,0.25)' 
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
          ))}
        </div>
      </motion.div>
    </section>
  );
}
