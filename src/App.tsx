import { Mail, Github, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import './App.css';

// Animation presets
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }

};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};



function App() {
  const softwareNodes = [
    { name: 'N8N', x: 20, y: 15 },
    { name: 'CHATGPT', x: 80, y: 10 },
    { name: 'Pinecone', x: 15, y: 45 },
    { name: 'Claude', x: 85, y: 40 },
    { name: 'Gemini', x: 10, y: 75 },
    { name: 'Slack', x: 90, y: 70 },
    { name: 'Retell AI', x: 35, y: 25 },
    { name: 'Twilio', x: 65, y: 20 },
    { name: 'Lovable', x: 25, y: 60 },
    { name: 'Air Table', x: 75, y: 55 },
    { name: 'Render', x: 45, y: 80 },
    { name: 'ElevenLabs', x: 55, y: 35 },
    { name: 'etc', x: 55, y: 80 }

  ];

  return (
    
<div className="portfolio-container">
  {/* Header Navigation */}
  <header className="header-nav">
    <div className="nav-content">
      <div className="nav-logo">MUHAMMAD SAQUIB</div>
        <nav className="nav-links">
          <a href="#home">HOME</a>
          <a href="#profile">PROFILE</a>
          <a href="#introduction">INTRODUCTION</a>
          <a href="#skills">SKILLS</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#activities">ACTIVITIES</a>
          <a href="#certificates">CERTIFICATES</a> 
        </nav>
    
      </div>
      </header>



      {/* Moile Header */}
    
<header className="header-mobile-nav"> 
  <div className="mobile-nav-content">
  <div className="header-mobile">
    <div className="mobile-logo">MOHAMMAD SAQUIB</div>
    <div className="mobile-nav-scroll">
      <a href="#home">HOME</a>
      <a href="#profile">PROFILE</a>
      <a href="#introduction">INTRODUCTION</a>
      <a href="#skills">SKILLS</a>
      <a href="#experience">EXP</a>
      <a href="#activities">ACTS</a>
      <a href="#certificates">CERTS</a>
    </div>
    </div>  
  </div>
</header>


      
     

      {/* Section 1 - Cover Page */}
      <motion.section 
        id="home" 
        className="cover-section"
        variants={scaleIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="cover-micro-text">
          <div className="micro-top-left">2025</div>
          <div className="micro-top-center">
            SAQUIB
            <div className="birth-date">07.03.2004</div>
          </div>
          <div className="micro-top-right">PORTFOLIO</div>
        </div>
        <div className="cover-circle">
          <div className="cover-content">
            <div className="portfolio-title">
              P<span className="o-with-star">O</span>RTFOLIO
            </div>
            <div className="cover-subtitle">
              AI ENGINEER, AI AGENT, AI/ML, AND MORE
            </div>
          </div>
        </div>
      </motion.section>

{/* Profile Section */}
      <motion.section 
        id="profile" 
        className="profile-section"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="red-arc"></div>
        <div className="profile-container">
          <motion.div className="profile-header" variants={fadeUp}>
            <h2 className="profile-name">SAQUIB | ثاقب</h2>
            <div className="profile-title">AI ENGINEER</div>
          </motion.div>

          <motion.div className="profile-image-section" variants={scaleIn}>
            <div className="profile-image-container">
              <div className="grayscale-collage"></div>
              <motion.div 
                className="profile-image-placeholder"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src="/man.jpg" alt="MAN" className="profile-image" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="profile-branding" variants={fadeUp}>
            <div className="profile-logo">Mohammad<br />Saquib</div>
            <div className="profile-callouts">
              {['Persevere','Learn','Achieve'].map((txt,i)=>(
                <motion.div className="callout-item" key={i} variants={fadeUp}>
                  <div className={`callout-line ${i===0?'left-line':i===1?'center-line':'right-line'}`}></div>
                  <div className={`callout-label ${i===0?'left-label':i===1?'center-label':'right-label'}`}>{txt}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>


      {/* Introduction Section */}
      <motion.section 
        className="introduction-section" 
        id="introduction"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="section-container">
          <h3 className="section-title">INTRODUCTION</h3>
          <motion.p className="intro-text" variants={fadeUp}>
            I’m an <span className="highlight">AI engineering</span> student who loves turning ideas into working projects. 
            I’m skilled in <span className="highlight">Python</span>, known for strong leadership, clear communication, and 
            the ability to keep things running smoothly even when juggling multiple tasks. Whether it’s building 
            <span className="highlight"> AI agents </span> or collaborating on web technologies, I thrive in 
            <span className="highlight"> team environments </span> and bring energy, focus, and creativity to every project.
          </motion.p>

          <div className="contact-grid mt-8">
            <motion.div className="contact-item" variants={fadeUp}>
              <Mail className="contact-icon" />
              <div className="contact-label">EMAIL</div>
              <div className="contact-value">saquib6111@gmail.com</div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Section 4 - Education / Skills / Soft Skills */}
      <section id="skills" className="skills-section">
        <div className="section-container">
          <div className="skills-grid">
            <div className="skill-column">
              <h3 className="skill-title">EDUCATION</h3>
              <div className="skill-content">
                <div className="skill-item">
                  <div className="skill-date">2021 – 2025</div>
                  <div className="skill-desc">Priyadarshani College Of Engineering</div>
                  <div className="skill-field">Artificial Intelligence</div>
                </div>
              </div>
            </div>
            <div className="skill-column">
              <h3 className="skill-title"> SKILLS </h3>
              <div className="skill-content">
                <div className="skill-list">
                  <span className="skill-tag">PYTHON</span>
                  <span className="skill-tag">AI AGENT</span>
                  <span className="skill-tag">MYSQL</span>
                  <span className="skill-tag">AI/ML</span>
                  <span className="skill-tag">WEB DEVELOPMENT</span>
                </div>
              </div>
            </div>
            <div className="skill-column">
              <h3 className="skill-title"> SOFT SKILLS </h3>
              <div className="skill-content">
                <div className="skill-list">
                  <span className="skill-tag">EXCELLENT LEADERSHIP</span>
                  <span className="skill-tag">PROBLEM SOLVING</span>
                  <span className="skill-tag">PRESENTATION</span>
                  <span className="skill-tag">RESEARCH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
{/* EXPERIENCE */}
<section id="experience" className="work-section">
  <h3 className="section-title">EXPERIENCE</h3>

  {/* Now – Fresher line centered below heading */}
  <div className="mb-6 text-white/60 text-sm text-center">
    Now – FRESHER
  </div>

  {/* AI AGENT DEVELOPMENT CARD */}
  <div className="experience-card mb-10">
    <div className="experience-title">AI AGENT DEVELOPMENT:</div>
    <div className="experience-tags"> 
      <span className="experience-tag">RAG AGENT</span>
      <span className="experience-tag">MULTI-AGENT</span>
      <span className="experience-tag">MCP SERVER AGENT</span>
      <span className="experience-tag">VOICE AGENT</span>
      <span className="experience-tag">VECTOR EMBEDDING</span>
      <span className="experience-tag">GENERATIVE AI</span>
      <span className="experience-tag">APIs</span>
      <span className="experience-tag">HTML</span>
      <span className="experience-tag">SQL</span>
      <span className="experience-tag">JSON</span>
      <span className="experience-tag">XML</span>
    </div>
  </div>

  {/* BASIC WEB DEVELOPMENT CARD */}
  <div className="experience-card mb-10">
    <div className="experience-title">BASIC WEB DEVELOPMENT:</div>
    <div className="experience-tags">
      <span className="experience-tag">HTML</span>
      <span className="experience-tag">CSS</span>
      <span className="experience-tag">JavaScript</span>
      <span className="experience-tag">Responsive Design</span>
      <span className="experience-tag">Bootstrap</span>
      <span className="experience-tag">Version Control (Git)</span>
      <span className="experience-tag">Simple Web Apps</span>
      <span className="experience-tag">Landing Pages</span>
    </div>
  </div>

 {/* Hybrid Builder Card */}
  <div className="experience-card">
    <div className="experience-title">HYBRID BUILDER (CODE + NO-CODE):</div>
    <div className="experience-tags">
      <span className="experience-tag">Automation with Tools</span>
      <span className="experience-tag">Custom Scripting (Python / JS)</span>
      <span className="experience-tag">API Integration</span>
      <span className="experience-tag">Rapid Prototyping</span>
      <span className="experience-tag">AI + No-Code App Development</span>
      <span className="experience-tag">Workflow Optimization</span>
    </div>
  </div>


</section>


{/* WORK HISTORY */}
<section id="work-history" className="work-history-section">
  <h3 className="section-title">WORK HISTORY</h3>
  <div className="work-history-content">
    <div className="work-item">• Android developer virtual internship by AICTE</div>
    <div className="work-item">• AI/ML virtual internship by AICTE</div>
    <div className="work-item">• Employability internship by Wadhwani foundation</div>
    <div className="work-item">• Web development intern in Code Alpha</div>
    <div className="work-item">• Implemented system for blind person (project)</div>
    <div className="work-item">• Accessing medical history using biometric (project)</div>
  </div>
</section>

<section className="featured-projects-section">
  <h3 className="featured-title">FEATURED PROJECTS</h3>
  <div className="projects-grid">
    <div className="project-card">
      <img src="/quickccess.jpg" alt="Quickccess" className="project-image" />
      <h4 className="project-title">QUICKCCESS</h4>
      <p className="project-description">
        Providing quick and secure access to medical records.{' '}
        <a 
          href="http://www.jetir.org/view?paper=JETIR2505152" 
          target="_blank" 
          rel="noopener noreferrer"
          className="project-link" 
        >
          Know more ...
        </a>
      </p>
    </div>
    <div className="project-card">
      <img src="/thethirdeye_resized.jpg" alt="The Third Eye" className="project-image" />
      <h4 className="project-title">THE THIRD EYE</h4>
      <p className="project-description">
        An assistive technology for visually impaired individuals.{' '}
        <a 
          href="https://ijariie.com/FormDetails.aspx?MenuScriptId=222777" 
          target="_blank" 
          rel="noopener noreferrer"
          className="project-link"
        >
          Know more ...
        </a>
      </p>
    </div>
  </div>
</section>

      {/* SOFTWARES Section - move this inside the return */}
      <section className="software-section">
        <h3 className="section-title">SOFTWARES</h3>
        <div className="software-network relative h-96 bg-black/30 border border-red-500/20 rounded-lg overflow-hidden">
          {/* Center Hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                          w-8 h-8 bg-red-500 rounded-full z-20 shadow-lg shadow-red-500/50">
            <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-20"></div>
          </div>

          {/* Software Nodes */}
          {softwareNodes.map((software, index) => (
            <div 
              key={index} 
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ left: `${software.x}%`, top: `${software.y}%` }}
            >
              <div className="bg-white/10 border border-red-500/40 rounded-full px-3 py-2 
                              text-center backdrop-blur-sm hover:bg-red-500/20 hover:scale-110 
                              transition-all duration-300 group">
                <span className="text-white text-xs font-medium whitespace-nowrap group-hover:text-red-200">
                  {software.name}
                </span>
              </div>
            </div>
          ))}

          {/* Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-30" viewBox="0 0 100 100" preserveAspectRatio="none">
            {softwareNodes.map((software, index) => (
              <line
                key={index}
                x1={50}
                y1={50}
                x2={software.x}
                y2={software.y}
                stroke="rgba(255, 0, 0, 0.3)"
                strokeWidth="0.2"
              />
            ))}
          </svg>
        </div>
      </section>

      {/* Section 6 - Extra-curricular Activities */}
      <section id="activities" className="activities-section">
        <div className="section-container">
          <h2 className="section-title"> EXTRA-CURRICULAR ACTIVITIES </h2>
          <div className="activities-grid">
            {['Video editing','Photography','Basic app development','Basic cybersecurity'].map((act,i)=>
              <div key={i} className="activity-item">
                <div className="activity-title">{act}</div>
              </div>
            )}
          </div>
        </div>
      </section>


{/* Section 7 - Certificates */}
<section id="certificates" className="certificates-section">
  <div className="section-container">
    <h2 className="section-title">CERTIFICATES</h2>

    <div className="certificates-grid">
      <div className="project-card">
        <img src="/google AI-ML.jpg" alt="Certificate 1" className="certificates-image" />
      </div>
      <div className="project-card">
        <img src="/google basic android.jpg" alt="Certificate 2" className="certificates-image" />
      </div>
      <div className="project-card">
        <img src="/wadhwani job ready.jpg" alt="Certificate 3" className="certificates-image" />
      </div>
      <div className="project-card">
        <img src="/web development.jpg" alt="Certificate 4" className="certificates-image" />
      </div>
    </div>

    <a 
      href="/all wadhwani certi.pdf"   
      target="_blank" 
      rel="noopener noreferrer"
      className="certificates-link"
    >
      View more certi...
    </a>
  </div>
</section>



 {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="contact-section"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h3 className="section-title">CONTACT ME</h3>
        <form 
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Your message has been sent!");
          }}
        >
          <motion.div className="form-group" variants={fadeUp}>
            <input type="text" name="name" placeholder="Your Name" required className="form-input" />
          </motion.div>
          <motion.div className="form-group" variants={fadeUp}>
            <input type="email" name="email" placeholder="Your Email" required className="form-input" />
          </motion.div>
          <motion.div className="form-group" variants={fadeUp}>
            <textarea name="message" placeholder="Your Message" rows={4} required className="form-textarea"></textarea>
          </motion.div>
          <motion.button type="submit" className="form-button" variants={fadeUp}>
            Send Message
          </motion.button>
        </form>
      </motion.section>


      {/* Footer */}
      <footer className="footer-section"> 
        <div className="footer-glow"></div>
        <div className="footer-content">
          <div className="social-icons">
            <a href="mailto:saquib6111@gmail.com" className="social-icon"><Mail size={24}/></a>
            <a href="https://github.com/saquibansari-7" className="social-icon"><Github size={24}/></a>
            <a href="https://instagram.com/saqprof" className="social-icon"><Instagram size={24}/></a>
          </div>
          <div className="footer-copyright text-xs text-gray-400 mt-2 text-center">
            © 2025 MUHAMMAD SAQUIB. All rights reserved.
          </div>
        </div>  
      </footer>
    </div>
  );
}

export default App;
