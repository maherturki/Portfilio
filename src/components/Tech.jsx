import { skillGroups } from "../constants";
import { SectionWrapper } from "../hoc";
import SectionHeading from "./SectionHeading";

const Tech = ({ sectionId }) => (
  <>
    <SectionHeading
      eyebrow='Expertise'
      title='Technical expertise'
      description='Technologies and engineering disciplines I work with.'
      id={`${sectionId}-heading`}
    />

    <div className='expertise-grid'>
      {skillGroups.map((group, index) => (
        <article className='expertise-card' key={group.name}>
          <span className='expertise-index'>
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3>{group.name}</h3>
          <ul className='skill-list'>
            {group.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </>
);

export default SectionWrapper(Tech, "expertise");
