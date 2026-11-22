import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, project }) => (
  <motion.article
    variants={fadeIn("up", "spring", index * 0.15, 0.6)}
    className='flex flex-col rounded-2xl bg-tertiary p-6 shadow-card'
  >
    <div className='flex flex-wrap items-start justify-between gap-3'>
      <div>
        <p className='text-secondary text-[14px]'>{project.category}</p>
        <h3 className='mt-1 text-white font-bold text-[22px]'>
          {project.name}
        </h3>
      </div>
      {project.status && (
        <span className='rounded-full border border-secondary/30 px-3 py-1 text-[12px] text-secondary'>
          {project.status}
        </span>
      )}
    </div>

    <p className='mt-4 flex-1 text-white-100 text-[15px] leading-7'>
      {project.description}
    </p>

    <ul className='mt-5 flex flex-wrap gap-2' aria-label='Technologies'>
      {project.technologies.map((technology) => (
        <li
          key={technology}
          className='rounded-full border border-secondary/30 px-3 py-1.5 text-[13px] text-secondary'
        >
          {technology}
        </li>
      ))}
    </ul>

    {project.details?.length > 0 && (
      <div className='mt-6 border-t border-secondary/20 pt-4'>
        {project.details.map((detail) => (
          <details key={detail.heading} className='group'>
            <summary className='cursor-pointer list-none font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#915EFF]'>
              <span>{detail.heading}</span>
              <span aria-hidden='true' className='ml-2 text-[#915EFF] group-open:hidden'>
                +
              </span>
              <span aria-hidden='true' className='ml-2 hidden text-[#915EFF] group-open:inline'>
                −
              </span>
            </summary>
            <ul className='mt-3 list-disc space-y-2 pl-5 text-[14px] leading-6 text-secondary'>
              {detail.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    )}
  </motion.article>
);

const Works = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Selected work</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-3 max-w-3xl text-secondary text-[17px] leading-[30px]'
    >
      A selection of enterprise AI, document-processing, and automation work.
      Project details describe the technologies and contributions involved.
    </motion.p>

    <div className='mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2'>
      {projects.map((project, index) => (
        <ProjectCard key={project.name} index={index} project={project} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Works, "projects");
