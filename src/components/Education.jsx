import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import SectionHeading from "./SectionHeading";

const Education = ({ sectionId }) => (
  <>
    <SectionHeading
      eyebrow='Education'
      title='A foundation in software engineering.'
      id={`${sectionId}-heading`}
    />

    <div className='education-grid'>
      {education.map((item) => (
        <article className='education-card' key={item.institution}>
          <span className='education-date'>{item.date}</span>
          <h3>{item.degree}</h3>
          <p>{item.institution}</p>
        </article>
      ))}
    </div>
  </>
);

export default SectionWrapper(Education, "education", true);
