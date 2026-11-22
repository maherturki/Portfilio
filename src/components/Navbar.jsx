import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { navLinks } from "../constants";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef(null);
  const mobileNavRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (!("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (current) setActiveSection(current.target.id);
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: [0, 0.1, 0.3, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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
  const handleMobileNavClick = (event) => {
    const sectionId = event.currentTarget.hash.slice(1);
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
