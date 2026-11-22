import { socialLinks } from "../constants";

const Footer = () => (
  <footer className='site-footer'>
    <div className='page-container footer-inner'>
      <div>
        <a className='brand-lockup' href='#home' aria-label='Back to top'>
          <span className='brand-mark' aria-hidden='true'>
            MT
          </span>
          <span>
            <span className='brand-name'>Maher Turki</span>
            <span className='brand-role'>AI Engineer</span>
          </span>
        </a>
        <p className='footer-copy'>
          © {new Date().getFullYear()} Maher Turki
        </p>
      </div>

      <nav className='footer-links' aria-label='Footer links'>
        <a className='footer-link' href='mailto:maherturki25@gmail.com'>
          Email
        </a>
        {socialLinks.map((link) => (
          <a
            className='footer-link'
            href={link.url}
            key={link.name}
            target='_blank'
            rel='noopener noreferrer'
          >
            {link.name}
          </a>
        ))}
        <a className='footer-link' href='/resume.pdf' download>
          CV
        </a>
      </nav>
    </div>
  </footer>
);

export default Footer;
