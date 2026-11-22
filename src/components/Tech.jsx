import { motion } from "framer-motion";

import { styles } from "../styles";
import { skillGroups } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technical capabilities</p>
        <h2 className={styles.sectionHeadText}>Technical Skills.</h2>
      </motion.div>

      <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
        {skillGroups.map((group, index) => (
          <motion.section
            key={group.name}
            variants={fadeIn("up", "spring", index * 0.1, 0.6)}
            aria-labelledby={`skill-group-${index}`}
            className='rounded-2xl bg-tertiary p-6 shadow-card'
          >
            <h3
              id={`skill-group-${index}`}
              className='text-white font-bold text-[20px]'
            >
              {group.name}
            </h3>
            <ul className='mt-5 flex flex-wrap gap-2'>
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className='rounded-full border border-secondary/30 px-3 py-2 text-[14px] text-secondary'
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.section>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
