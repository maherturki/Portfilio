import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { navLinks } from "../constants";

const Navbar = ({ theme, onThemeToggle }) => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef(null);
  const mobileNavRef = useRef(null);

  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    let animationFrame = null;

    const updateNavigation = () => {
      animationFrame = null;
      setIsScrolled(window.scrollY > 24);

      const activationPoint =
        window.scrollY + Math.min(window.innerHeight * 0.25, 260);
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        if (sectionTop <= activationPoint) currentSection = section.id;
      });

      const isAtPageBottom =
        Math.ceil(window.scrollY + window.innerHeight) >=
        document.documentElement.scrollHeight - 2;
      if (isAtPageBottom && sections.length) {
        currentSection = sections[sections.length - 1].id;
      }

      setActiveSection(currentSection);
    };

    const scheduleUpdate = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateNavigation);
      }
    };

    const handleHashChange = () => {
      const sectionId = window.location.hash.slice(1);
      setActiveSection(
        sections.some((section) => section.id === sectionId) ? sectionId : ""
      );
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", handleHashChange);

    const initialSectionId = window.location.hash.slice(1);
    const initialSection = sections.find(
      (section) => section.id === initialSectionId
    );
    if (initialSection) {
      setActiveSection(initialSectionId);
      initialSection.scrollIntoView({ block: "start" });
    }
    scheduleUpdate();

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", handleHashChange);
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    mobileNavRef.current?.querySelector("a")?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !mobileNavRef.current) return;
      const focusable = mobileNavRef.current.querySelectorAll("a[href], button");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const handleNavClick = (event) => {
    setActiveSection(event.currentTarget.hash.slice(1));
  };
  const handleMobileNavClick = (event) => {
    const sectionId = event.currentTarget.hash.slice(1);
    setActiveSection(sectionId);
    closeMenu();
    window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.focus({ preventScroll: true });
    });
  };

  return (
    <header
      className={`site-header${isScrolled ? " site-header--scrolled" : ""}`}
    >
      <div className='nav-shell'>
        <a
          className='brand-lockup'
          href='#home'
          onClick={() => {
            setActiveSection("");
            closeMenu();
          }}
          aria-label='Maher Turki, home'
        >
          <span className='brand-mark' aria-hidden='true'>
            MT
          </span>
          <span>
            <span className='brand-name'>Maher Turki</span>
            <span className='brand-role'>AI Engineer</span>
          </span>
        </a>

        <nav className='desktop-nav' aria-label='Main navigation'>
          {navLinks.map(({ id, title }) => (
            <a
              key={id}
              className={`nav-link${activeSection === id ? " nav-link--active" : ""}`}
              href={`#${id}`}
              aria-current={activeSection === id ? "location" : undefined}
              onClick={handleNavClick}
            >
              {title}
            </a>
          ))}
        </nav>

        <a
          className='nav-cv'
          href='/resume.pdf'
          download='Maher_Turki_AI_Engineer_CV.pdf'
        >
          Download CV
        </a>

        <button
          className='theme-toggle'
          type='button'
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          aria-pressed={theme === "light"}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          onClick={onThemeToggle}
        >
          <svg
            aria-hidden='true'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.8'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            {theme === "dark" ? (
              <>
                <circle cx='12' cy='12' r='4' />
                <path d='M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42' />
              </>
            ) : (
              <path d='M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.6 8.6 0 1 0 20.2 15.1Z' />
            )}
          </svg>
        </button>

        <button
          ref={menuButtonRef}
          className='menu-toggle'
          type='button'
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls='mobile-navigation'
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className='menu-glyph' aria-hidden='true' />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.button
              type='button'
              className='mobile-nav-backdrop'
              aria-label='Close navigation menu'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.16 }}
              onClick={() => {
                closeMenu();
                menuButtonRef.current?.focus();
              }}
            />
            <motion.div
              ref={mobileNavRef}
              id='mobile-navigation'
              className='mobile-nav-panel'
              role='dialog'
              aria-modal='true'
              aria-label='Mobile navigation'
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <nav aria-label='Mobile navigation links'>
                <ul className='mobile-nav-list'>
                  {navLinks.map(({ id, title }) => (
                    <li key={id}>
                      <a
                        className={`mobile-nav-link${activeSection === id ? " mobile-nav-link--active" : ""}`}
                        href={`#${id}`}
                        aria-current={
                          activeSection === id ? "location" : undefined
                        }
                        onClick={handleMobileNavClick}
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      className='mobile-nav-link'
                      href='/resume.pdf'
                      download='Maher_Turki_AI_Engineer_CV.pdf'
                      onClick={closeMenu}
                    >
                      Download CV
                    </a>
                  </li>
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
