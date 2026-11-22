import { MotionConfig } from "framer-motion";

import {
  About,
  Contact,
  Education,
  Experience,
  EngineeringApproach,
  Hero,
  Navbar,
  Tech,
  Works,
  Certifications,
  Footer,
} from "./components";

const App = () => {
  return (
    <MotionConfig reducedMotion='user'>
      <div className='site-shell'>
        <a className='skip-link' href='#main-content'>
          Skip to content
        </a>
        <Navbar />
        <main id='main-content'>
          <Hero />
          <About />
          <Tech />
          <Experience />
          <Works />
          <EngineeringApproach />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
};

export default App;
