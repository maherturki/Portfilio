import { useState } from "react";
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
  const [theme, setTheme] = useState(() =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark"
  );

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", nextTheme === "light" ? "#f7f6fb" : "#08090d");

    try {
      localStorage.setItem("maher-portfolio-theme", nextTheme);
    } catch (error) {
      console.warn("Theme preference could not be saved:", error);
    }

    setTheme(nextTheme);
  };

  return (
    <MotionConfig reducedMotion='user'>
      <div className='site-shell'>
        <a className='skip-link' href='#main-content'>
          Skip to content
        </a>
        <Navbar theme={theme} onThemeToggle={toggleTheme} />
        <main id='main-content' tabIndex={-1}>
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
