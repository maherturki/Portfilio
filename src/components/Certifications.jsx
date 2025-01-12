import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({ certification, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={certification.image}
          alt={certification.name}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">
          {certification.name}
        </h3>
        <p className="mt-2 text-secondary text-[16px]">
          {certification.organization}
        </p>
        <p className="mt-2 text-secondary text-[14px]">{certification.date}</p>
        <p className="mt-3 text-white text-[14px]">{certification.description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {certification.tags.map((tag) => (
          <p
            key={tag.name}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
      <div className="mt-4">
        <a
          href={certification.certificate_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-[14px] hover:underline"
        >
          View Certification
        </a>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Recognitions and Achievements</p>
        <h2 className={`${styles.sectionHeadText}`}>Certifications.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {certifications.map((certification, index) => (
          <CertificationCard
            key={`certification-${index}`}
            certification={certification}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
