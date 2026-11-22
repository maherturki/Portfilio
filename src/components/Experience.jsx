import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import SectionHeading from "./SectionHeading";

const Experience = ({ sectionId }) => (
  <>
    <SectionHeading
      eyebrow='Professional experience'
      title='Building systems in real workflows.'
      id={`${sectionId}-heading`}
    />

    <div className='experience-list'>
      {experiences.map((experience) => {
        const isCurrent = experience.date.endsWith("Present");

        return (
          <article
            className={`experience-card${isCurrent ? " experience-card--current" : ""}`}
            key={`${experience.title}-${experience.date}`}
          >
            <div className='experience-meta'>
              {isCurrent && <span className='experience-current'>Current role</span>}
              <span>{experience.date}</span>
            </div>
            <div>
              <h3 className='experience-role'>{experience.title}</h3>
              <p className='experience-company'>
                <a
                  className='experience-company-link'
                  href={experience.company_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {experience.company_name}
                  <span aria-hidden='true'> ↗</span>
                </a>
              </p>
              <p className='experience-summary'>{experience.summary}</p>
              <ul className='experience-points'>
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  </>
);

export default SectionWrapper(Experience, "experience");
