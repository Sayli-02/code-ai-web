export default function EventsSection() {
  const events = [
    {
      id: 1,
      title: 'Introduction to Deep Learning',
      status: 'Open',
      description: 'Learn the fundamentals of neural networks and deep learning architectures',
      date: 'August 15, 2026',
      venue: 'Room 301, Engineering Block',
    },
    {
      id: 2,
      title: 'GenAI Workshop: Building with LLMs',
      status: 'Open',
      description: 'Hands-on session on leveraging large language models for real-world applications',
      date: 'August 22, 2026',
      venue: 'Auditorium, Main Campus',
    },
    {
      id: 3,
      title: 'AI Ethics & Responsible AI',
      status: 'Save the Date',
      description: 'Explore ethical considerations and best practices in AI development',
      date: 'September 5, 2026',
      venue: 'Room 401, Engineering Block',
    },
    {
      id: 4,
      title: 'Hackathon 2026: AI Solutions Challenge',
      status: 'Closed',
      description: 'Build innovative AI solutions to real-world problems in 24 hours',
      date: 'September 20-21, 2026',
      venue: 'Campus Grounds',
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
      borderRadius: '8px',
      padding: '24px',
      transition: 'all 0.2s ease-out',
    },
    eventHeader: {
      display: 'flex' as const,
      justifyContent: 'space-between' as const,
      alignItems: 'flex-start' as const,
      marginBottom: '16px',
      gap: '12px',
    },
    eventTitle: {
      fontSize: '18px',
      fontWeight: 500 as const,
      color: '#000000',
      margin: 0,
    },
    statusBadge: (status: string) => ({
      display: 'inline-block' as const,
      padding: '4px 12px',
      borderRadius: '9999px',
      fontSize: '11px',
      fontWeight: 500 as const,
      whiteSpace: 'nowrap' as const,
      backgroundColor: status === 'Open' ? '#000000' : status === 'Closed' ? '#e0e0e0' : '#f0f0f0',
      color: status === 'Open' ? '#ffffff' : '#000000',
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
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Upcoming Events</h2>
        <div style={styles.eventsGrid}>
          {events.map((event) => (
            <div key={event.id} style={styles.eventCard}>
              <div style={styles.eventHeader}>
                <h3 style={styles.eventTitle}>{event.title}</h3>
                <span style={styles.statusBadge(event.status)}>{event.status}</span>
              </div>
              <p style={styles.eventDescription}>{event.description}</p>
              <div style={styles.eventMeta}>
                <div style={styles.metaItem}>
                  <span style={styles.metaLabel}>📅</span>
                  <span>{event.date}</span>
                </div>
                <div style={styles.metaItem}>
                  <span style={styles.metaLabel}>📍</span>
                  <span>{event.venue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
