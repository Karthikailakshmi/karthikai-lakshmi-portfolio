import React, { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BrainCircuit, BriefcaseBusiness,
  Check, Code2, Github, Linkedin, Mail, Menu, Moon, Sparkles, Sun, X
} from "lucide-react";
import { projects } from "./data/projects.js";

const skills = [
  { title: "AI & Generative AI", items: ["Artificial Intelligence", "LLM Applications", "AI Chatbots", "AI Agents"] },
  { title: "Machine Learning", items: ["Model Evaluation", "Regression", "Predictive Analytics", "Data Preprocessing"] },
  { title: "Development", items: ["Python", "FastAPI", "REST APIs", "JWT Authentication"] },
  { title: "Data & Tools", items: ["R", "Streamlit", "R Shiny", "MySQL", "Git", "GitHub"] }
];
const filters = ["All Projects", "Artificial Intelligence", "Generative AI", "Machine Learning", "Data Analytics", "Backend Development"];

function App() {
  const [theme, setTheme] = useState("dark");
  const [filter, setFilter] = useState("All Projects");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = useMemo(() => {
    const filtered = filter === "All Projects" ? projects : projects.filter(p => p.category === filter);
    return showAll || filter !== "All Projects" ? filtered : filtered.filter(p => p.featured);
  }, [filter, showAll]);

  const closeMenu = () => setMenuOpen(false);
  const navItems = [["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Experience", "#experience"], ["Contact", "#contact"]];

  return (
    <div className={`site ${theme}`}>
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="M Karthikai Lakshmi home"><span className="brand-mark">MK</span><span className="brand-name">KARTHIKAI LAKSHMI<span className="brand-dot">.</span></span></a>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navItems.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
            <a className="nav-social" href="https://github.com/Karthikailakshmi" target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={17}/></a>
            <a className="nav-social" href="https://www.linkedin.com/in/karthikai-lakshmi-m/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={17}/></a>
            <button className="theme-toggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
              {theme === "dark" ? <Sun size={17}/> : <Moon size={17}/>}
            </button>
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X/> : <Menu/>}</button>
        </nav>
      </header>

      <main>
        <section className="hero section container" id="home">
          <div className="hero-grid">
            <motion.div className="hero-copy" initial={{opacity:0, y:22}} animate={{opacity:1, y:0}} transition={{duration:.7}}>
              <div className="eyebrow"><span className="status-dot"/><span>ARTIFICIAL INTELLIGENCE INTERN</span></div>
              <p className="hero-intro">Hello, I'm</p>
              <h1>M Karthikai<br/><span className="outline-text">Lakshmi.</span></h1>
              <p className="hero-description">Building intelligent solutions with <span>AI</span> — exploring machine learning, LLM applications, and practical software that makes a difference.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore projects <ArrowDownRight size={17}/></a>
                <a className="button button-ghost" href="#contact">Get in touch <ArrowUpRight size={16}/></a>
              </div>
              <div className="hero-socials">
                <a href="https://github.com/Karthikailakshmi" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={13}/></a>
                <a href="https://www.linkedin.com/in/karthikai-lakshmi-m/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={13}/></a>
              </div>
            </motion.div>
            <motion.div className="hero-art" initial={{opacity:0, scale:.96}} animate={{opacity:1, scale:1}} transition={{duration:.8, delay:.15}}>
              <div className="art-topline"><span>PORTFOLIO / 2026</span><span>01 — 04</span></div>
              <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
              <div className="core"><BrainCircuit size={62} strokeWidth={1.1}/><span>AI / ML</span></div>
              <span className="orbit-label label-a">LEARN</span><span className="orbit-label label-b">BUILD</span><span className="orbit-label label-c">ITERATE</span>
              <div className="art-bottomline"><span>CURIOUS BY DESIGN</span><Sparkles size={15}/></div>
            </motion.div>
          </div>
          <div className="hero-meta"><span>MCA GRADUATE</span><span className="meta-line"/><span>NAZARETH, TAMIL NADU</span><span className="meta-line"/><span>AI · ML · DATA</span></div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="section-label"><span>01</span><span>ABOUT ME</span></div>
            <div className="about-content">
              <h2>Curiosity drives me.<br/><span className="muted-heading">Code brings ideas to life.</span></h2>
              <p className="lead">I'm an MCA graduate currently working as an Artificial Intelligence Intern at Entrans Technologies Pvt. Ltd.</p>
              <p className="body-copy">I enjoy exploring AI, machine learning, large language models, and data analytics through hands-on projects. I’m interested in turning technical ideas into practical applications, learning from experimentation, and continuously growing as a developer.</p>
              <div className="about-facts">
                <div><span className="fact-number">01</span><span>AI & intelligent applications</span></div>
                <div><span className="fact-number">02</span><span>Learning through real projects</span></div>
                <div><span className="fact-number">03</span><span>Thoughtful, useful software</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section container" id="skills">
          <div className="section-heading">
            <div className="section-label"><span>02</span><span>TOOLKIT</span></div>
            <div><h2>Skills & <span className="muted-heading">interests.</span></h2><p className="section-subtitle">A growing toolkit for building and exploring intelligent systems.</p></div>
          </div>
          <div className="skills-grid">
            {skills.map((group, i) => <motion.div className="skill-card" key={group.title} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{delay:i*.07}}>
              <div className="skill-card-top"><span>0{i+1}</span><Code2 size={18}/></div>
              <h3>{group.title}</h3>
              <div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
            </motion.div>)}
          </div>
          <p className="small-note">Skills are presented as areas of experience and interest. Update this list to match your current hands-on experience.</p>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-heading projects-heading">
              <div className="section-label"><span>03</span><span>SELECTED WORK</span></div>
              <div><h2>Projects that <span className="muted-heading">make me curious.</span></h2><p className="section-subtitle">A selection of explorations across AI, machine learning, data, and development.</p></div>
              <a className="text-link all-github" href="https://github.com/Karthikailakshmi" target="_blank" rel="noreferrer">All repositories <ArrowUpRight size={16}/></a>
            </div>
            <div className="filter-row" aria-label="Filter projects">
              {filters.map(item => <button key={item} className={`filter-chip ${filter === item ? "active" : ""}`} onClick={() => setFilter(item)}>{item}</button>)}
            </div>
            <div className="projects-grid">
              {visibleProjects.map((project, i) => <motion.article className="project-card" key={project.title} layout initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.1}} transition={{duration:.35,delay:i*.04}}>
                <div className={`project-visual visual-${project.number}`}>
                  <div className="visual-top"><span>PROJECT / {project.number}</span><span>{project.category.toUpperCase()}</span></div>
                  {project.number === "01" ? <div className="benchmark-art"><span className="benchmark-node">RAW TEXT</span><span className="connector"/><span className="benchmark-node">PREPROCESS</span><span className="connector"/><span className="benchmark-node">EVALUATE</span></div> :
                   project.number === "02" ? <div className="chat-art"><span className="chat-bubble">Hello! How can I help?</span><span className="chat-bubble response">Let's explore an idea.</span><span className="chat-cursor"/></div> :
                   project.number === "03" ? <div className="satellite-art"><div className="satellite-grid"/><span className="satellite-orbit"/><span className="satellite-dot"/></div> :
                   project.number === "04" ? <div className="api-art"><span>POST /auth</span><span>GET /products</span><span>200 OK ✓</span></div> :
                   project.number === "05" ? <div className="chart-art"><span style={{height:"30%"}}/><span style={{height:"58%"}}/><span style={{height:"42%"}}/><span style={{height:"78%"}}/><span style={{height:"65%"}}/><span style={{height:"90%"}}/></div> :
                   <div className="price-art"><span className="price-symbol">₹</span><span className="price-line"/><span className="price-line short"/></div>}
                  <span className="visual-index">{project.number}</span>
                </div>
                <div className="project-info">
                  <div className="project-title-row"><h3>{project.title}</h3><a href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`} className="project-arrow"><ArrowUpRight size={19}/></a></div>
                  <p>{project.description}</p>
                  <div className="project-tags">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
                  <a className="project-link" href={project.url} target="_blank" rel="noreferrer">View on GitHub <ArrowRight size={14}/></a>
                </div>
              </motion.article>)}
            </div>
            {filter === "All Projects" && <button className="button button-ghost view-more" onClick={() => setShowAll(!showAll)}>{showAll ? "Show featured projects" : "View all six projects"} <ArrowDownRight size={16}/></button>}
            <p className="small-note project-disclaimer">Project summaries are introductory descriptions. Review each repository README to confirm current features, tools, and results.</p>
          </div>
        </section>

        <section className="section container" id="experience">
          <div className="section-heading">
            <div className="section-label"><span>04</span><span>EXPERIENCE</span></div>
            <div><h2>Learning by <span className="muted-heading">building.</span></h2><p className="section-subtitle">Where I’m growing my skills and putting ideas into practice.</p></div>
          </div>
          <div className="experience-card">
            <div className="experience-icon"><BriefcaseBusiness size={23}/></div>
            <div className="experience-main"><span className="experience-kicker">CURRENT ROLE</span><h3>Artificial Intelligence Intern</h3><p className="company">Entrans Technologies Pvt. Ltd.</p><p className="experience-description">Currently developing my practical understanding of artificial intelligence and related technologies through hands-on learning and technical work.</p></div>
            <div className="experience-location">Nazareth, Tamil Nadu, India</div>
          </div>
          <div className="education-row"><span className="section-label"><span>EDUCATION</span></span><div><h3>Master of Computer Applications <span>(MCA)</span></h3><p>Academic background in computer applications and software development.</p></div></div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-inner">
            <div className="section-label"><span>05</span><span>CONTACT</span></div>
            <p className="contact-kicker">HAVE AN IDEA OR OPPORTUNITY?</p>
            <h2>Let’s build something<br/><span className="muted-heading">meaningful together.</span></h2>
            <p className="contact-copy">I’m always glad to connect with people who are interested in AI, technology, and creative problem-solving.</p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:karthikailakshmi46@gmail.com">Email me <Mail size={17}/></a>
              <a className="button button-ghost" href="https://www.linkedin.com/in/karthikai-lakshmi-m/" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16}/></a>
            </div>
            <div className="contact-socials"><a href="https://github.com/Karthikailakshmi" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={13}/></a><a href="https://www.linkedin.com/in/karthikai-lakshmi-m/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={13}/></a></div>
          </div>
        </section>
      </main>

      <footer className="footer container"><a className="brand footer-brand" href="#home"><span className="brand-mark">MK</span><span className="brand-name">KARTHIKAI LAKSHMI<span className="brand-dot">.</span></span></a><span>Designed with intention. Built to keep learning.</span><a href="#home" className="back-top">BACK TO TOP ↑</a><span className="copyright">© {new Date().getFullYear()} M Karthikai Lakshmi</span></footer>
    </div>
  );
}

export default App;