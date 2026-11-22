import { motion } from "framer-motion";

import { styles } from "../styles";
import { socialLinks } from "../constants";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section id='home' className={`relative w-full h-screen min-h-[720px] mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className='text-[#915EFF]'>Maher Turki</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            AI Engineer building enterprise AI applications, agentic workflows,
            <br className='sm:block hidden' /> and intelligent automation.
          </p>
          <div className='mt-7 flex flex-wrap items-center gap-4'>
            <a
              href='#projects'
              className='rounded-xl bg-[#915EFF] px-5 py-3 font-semibold text-white hover:bg-[#7c4fe0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white'
            >
              View projects
            </a>
            <a
              href='/resume.pdf'
              download='Maher_Turki_AI_Engineer_CV.pdf'
              className='rounded-xl border border-secondary px-5 py-3 font-semibold text-white hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#915EFF]'
            >
              Download CV
            </a>
            <div className='flex items-center gap-4' aria-label='Social profiles'>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`Maher Turki on ${link.name} (opens in a new tab)`}
                  className='rounded-full p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#915EFF]'
                >
                  <img src={link.icon} alt='' className='h-7 w-7 object-contain' />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
