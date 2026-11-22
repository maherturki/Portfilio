import { motion } from "framer-motion";

const SectionWrapper = (Component, idName, compact = false) =>
  function WrappedSection() {
    return (
      <motion.section
        id={idName}
        aria-labelledby={`${idName}-heading`}
        tabIndex={-1}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
        className={`content-section${compact ? " content-section--compact" : ""}`}
      >
        <div className='page-container'>
          <Component sectionId={idName} />
        </div>
      </motion.section>
    );
  };

export default SectionWrapper;
