import { motion } from "framer-motion";

import { education } from "../constants";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Education = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Academic background</p>
      <h2 className={styles.sectionHeadText}>Education.</h2>
    </motion.div>

    <div className='mt-12 grid gap-6 md:grid-cols-2'>
      {education.map((item, index) => (
        <motion.article
          key={`${item.institution}-${item.date}`}
          variants={fadeIn("up", "spring", index * 0.1, 0.6)}
          className='rounded-2xl bg-tertiary p-6 shadow-card'
        >
          <p className='text-secondary text-[14px]'>{item.date}</p>
          <h3 className='mt-3 text-white font-bold text-[20px]'>
            {item.degree}
          </h3>
          <p className='mt-2 text-secondary'>{item.institution}</p>
        </motion.article>
      ))}
    </div>
  </>
);

export default SectionWrapper(Education, "education");
