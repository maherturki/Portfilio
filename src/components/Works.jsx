import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import ProjectVisual from "./ProjectVisual";
import SectionHeading from "./SectionHeading";

const ProjectCard = ({ project, featured }) => (
  <article
    className={`project-card${featured ? " project-card--featured" : ""}`}
  >
    <div className='project-body'>
      <div className='project-topline'>
        <p className='project-category'>{project.category}</p>
        {project.status && (
          <span
            className={`project-status${project.status.includes("production") ? " project-status--production" : ""}`}
          >
            {project.status}
          </span>
        )}
      </div>
      <h3 className='project-title'>{project.name}</h3>
      <p className='project-description'>{project.description}</p>

      <ul className='project-tech' aria-label={`${project.name} technologies`}>
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      <div className='project-details'>
        {project.details.map((detail) => (
          <details className='project-detail' key={detail.heading}>
            <summary>{detail.heading}</summary>
            <ul>
              {detail.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </div>
    <ProjectVisual type={project.visual} />
  </article>
);

const Works = ({ sectionId }) => (
  <>
    <SectionHeading
      eyebrow='Selected work'
      title='AI systems, built for real workflows.'
      description='A closer look at enterprise AI applications, document processing, and automation work.'
      id={`${sectionId}-heading`}
      wide
    />

    <div className='projects-grid'>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.name}
          project={project}
          featured={index === 0}
        />
      ))}
    </div>
  </>
);

export default SectionWrapper(Works, "projects");
