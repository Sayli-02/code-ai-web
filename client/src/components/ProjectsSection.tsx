import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { useIsMobile } from '@/hooks/useMobile';

export default function ProjectsSection() {
  const isMobile = useIsMobile();
  const easeCustom = [0.16, 1, 0.3, 1];

  const projects = [
    {
      title: 'NeuroVision',
      description: 'Real-time object detection and classification using a custom CNN architecture',
      tags: ['Computer Vision', 'PyTorch', 'OpenCV']
    },
    {
      title: 'SentiChat',
      description: 'Sentiment-aware chatbot leveraging transformer-based NLP for customer support',
      tags: ['NLP', 'Transformers', 'LangChain']
    },
    {
      title: 'PredictHealth',
      description: 'ML-based early disease risk prediction using patient health record datasets',
      tags: ['Scikit-learn', 'Pandas', 'Healthcare AI']
    },
    {
      title: 'GenArt Studio',
      description: 'Generative AI tool for creating custom digital art using diffusion models',
      tags: ['GenAI', 'Diffusion Models', 'Stable Diffusion']
    }
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
      marginBottom: '16px',
      letterSpacing: '-0.02em',
    },
    subtitle: {
      fontSize: isMobile ? '16px' : '18px',
      color: 'rgba(0,0,0,0.6)',
      marginBottom: '48px',
      maxWidth: '600px',
      lineHeight: '1.5'
    },
    grid: {
      display: 'grid' as const,
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '32px',
    },
    card: {
      backgroundColor: '#ffffff',
      border: '1px solid rgba(0, 0, 0, 0.08)',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
      display: 'flex' as const,
      flexDirection: 'column' as const,
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: 600 as const,
      marginBottom: '12px',
      color: '#000',
      letterSpacing: '-0.01em',
    },
    cardDesc: {
      fontSize: '14px',
      color: 'rgba(0,0,0,0.65)',
      lineHeight: '1.5',
      marginBottom: '24px',
      flexGrow: 1,
    },
    tagsContainer: {
      display: 'flex' as const,
      flexWrap: 'wrap' as const,
      gap: '8px',
      marginBottom: '24px',
    },
    tag: {
      backgroundColor: '#f4f4f4',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      borderRadius: '9999px',
      padding: '4px 12px',
      fontSize: '11px',
      fontWeight: 500 as const,
      color: '#333',
    },
    linksContainer: {
      display: 'flex' as const,
      alignItems: 'center' as const,
      gap: '16px',
      borderTop: '1px solid rgba(0,0,0,0.05)',
      paddingTop: '16px',
    },
    link: {
      display: 'flex' as const,
      alignItems: 'center' as const,
      gap: '6px',
      fontSize: '13px',
      fontWeight: 500 as const,
      color: '#000',
      textDecoration: 'none',
      opacity: 0.8,
    }
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeCustom as any } },
  };

  return (
    <section id="projects" style={styles.section}>
      <motion.div 
        style={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 style={styles.heading}>Our Projects</h2>
        <p style={styles.subtitle}>
          Discover the innovative solutions built by our members pushing the boundaries of AI and Machine Learning.
        </p>

        <motion.div 
          style={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              style={styles.card}
              variants={itemVariants}
              whileHover={{ 
                y: -6, 
                boxShadow: '0 12px 24px rgba(0,0,0,0.08)',
                borderColor: 'rgba(0,0,0,0.15)'
              }}
            >
              <h3 style={styles.cardTitle}>{project.title}</h3>
              <p style={styles.cardDesc}>{project.description}</p>
              
              <div style={styles.tagsContainer}>
                {project.tags.map((tag, tIdx) => (
                  <motion.span 
                    key={tIdx} 
                    style={styles.tag}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 + tIdx * 0.1 }}
                    viewport={{ once: false }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div style={styles.linksContainer}>
                <motion.a href="#" style={styles.link} whileHover={{ opacity: 1, x: 2 }}>
                  <Github size={16} /> Code
                </motion.a>
                <motion.a href="#" style={styles.link} whileHover={{ opacity: 1, x: 2 }}>
                  <ExternalLink size={16} /> Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
