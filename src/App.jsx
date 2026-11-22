import {
  About,
  Contact,
  Education,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Certifications,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Education />
      <Certifications />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  );
};

export default App;
