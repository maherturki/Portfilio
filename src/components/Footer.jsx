import { socialLinks } from "../constants";

const Footer = () => (
  <footer className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 border-t border-secondary/20 px-6 py-8 sm:flex-row sm:px-16'>
    <p className='text-center text-[14px] text-secondary'>
      © {new Date().getFullYear()} Maher Turki
    </p>
    <nav aria-label='Social profiles' className='flex items-center gap-5'>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-[14px] text-secondary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#915EFF]'
        >
          {link.name}
        </a>
      ))}
    </nav>
  </footer>
);

export default Footer;
