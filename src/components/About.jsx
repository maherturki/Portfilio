import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { languages, services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm an AI Engineer building enterprise applications with Generative AI, LLM integrations, agentic workflows, and Retrieval-Augmented Generation. I develop Python backends and REST APIs, and integrate cloud-based AI solutions using Microsoft Azure. My work includes financial-services-related enterprise solutions, intelligent document processing, and automation.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div className='mt-14'>
        <h3 className='text-white font-bold text-[24px]'>Languages</h3>
        <ul className='mt-5 flex flex-wrap gap-3'>
          {languages.map((language) => (
            <li
              key={language.name}
              className='rounded-full bg-tertiary px-4 py-2 text-secondary'
            >
              <span className='text-white'>{language.name}</span>
              <span aria-hidden='true'> — </span>
              {language.level}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
