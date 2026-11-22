import { languages } from "../constants";
import { SectionWrapper } from "../hoc";
import SectionHeading from "./SectionHeading";

const About = ({ sectionId }) => (
  <>
    <SectionHeading
      eyebrow='About'
      title='Engineering practical intelligence.'
      id={`${sectionId}-heading`}
    />

    <div className='about-grid'>
      <div className='about-copy'>
        <p>
          I work at the intersection of artificial intelligence and software
          engineering, turning modern AI capabilities into practical
          applications—from LLM-powered assistants and agentic workflows to
          enterprise automation.
        </p>
        <p>
          I combine <strong>AI engineering</strong>, Python backend development,
          cloud services, and full-stack implementation to build solutions that
          fit real business workflows.
        </p>
      </div>

      <aside className='about-aside' aria-label='Professional focus'>
        <h3>Where I focus</h3>
        <ul className='focus-list'>
          <li>LLM applications and agentic workflows</li>
          <li>Python services and API integration</li>
          <li>Azure-based AI and automation</li>
        </ul>
        <div className='language-row' aria-label='Languages'>
          {languages.map((language) => (
            <span key={language.name}>
              <strong>{language.name}</strong> · {language.level}
            </span>
          ))}
        </div>
      </aside>
    </div>
  </>
);

export default SectionWrapper(About, "about");
