import { motion } from "framer-motion";

import { socialLinks } from "../constants";
import HeroVisual from "./HeroVisual";

const Hero = () => (
  <section id='home' className='hero-section'>
    <div className='page-container hero-grid'>
      <motion.div
        className='hero-copy'
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className='hero-kicker'>AI Engineer · Generative AI · Agentic Systems</p>
        <h1 className='hero-title'>
          Building intelligent systems that solve{" "}
          <span className='hero-title-accent'>real-world problems.</span>
        </h1>
        <p className='hero-name'>Maher Turki</p>
        <p className='hero-description'>
          I build LLM-powered applications, agentic workflows, and practical
          enterprise AI solutions with Python and cloud infrastructure.
        </p>

        <div className='hero-actions'>
          <a className='button-primary' href='#projects'>
            Explore my work <span aria-hidden='true'>↗</span>
          </a>
          <a className='button-secondary' href='#contact'>
            Get in touch
          </a>
          <a
            className='button-secondary'
            href='/resume.pdf'
            download='Maher_Turki_AI_Engineer_CV.pdf'
          >
            Download CV
          </a>
        </div>

        <div className='hero-socials' aria-label='Social profiles'>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              className='social-link'
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`${link.name} profile (opens in a new tab)`}
            >
              <img src={link.icon} alt='' />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.72, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        <HeroVisual />
      </motion.div>
    </div>
    <a className='hero-scroll' href='#about'>
      Discover the work
    </a>
  </section>
);

export default Hero;
