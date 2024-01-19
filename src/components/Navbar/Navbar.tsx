import { ReactiveNav } from 'react-reactive-nav';

import { links } from '~/constants';

export type NavbarProps = {
  pageYOffset: number;
};

const Navbar = ({ pageYOffset }: NavbarProps) => {
  const showLinks = pageYOffset > document.documentElement.clientHeight - 1;

  const navbarItems = [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Projects',
      url: '#projects',
    },
    {
      name: 'Work Experience',
      url: '#work-experience',
    },
    {
      name: 'Get in Touch',
      url: '#get-in-touch',
    },
  ];

  return (
    <ReactiveNav
      height={64}
      style={{
        zIndex: 2,
        transition: 'none',
      }}
      paddingElementProps={{
        style: { height: 0 },
      }}
    >
      <nav
        className={`navbar ${pageYOffset > 64 ? 'navbar--shadow' : ''} ${
          showLinks ? '' : 'navbar--logo-only'
        }`}
      >
        <div className='container'>
          <a
            className={`navbar__brand-button ${
              showLinks ? 'navbar__brand-button--normal' : ''
            }`}
            href='#'
            aria-label='go to top'
          >
            <img
              className='navbar__brand-logo'
              src='/images/logo.webp'
              alt='Logo'
            />
          </a>
          {navbarItems.map((item) => (
            <a
              key={item.name}
              className='navbar__section-link'
              href={item.url}
              aria-label={item.name}
            >
              {item.name}
            </a>
          ))}
          {links.map((link) => (
            <a
              key={link.name}
              className={`navbar__link icon-button ${showLinks ? '' : 'hide'}`}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </nav>
    </ReactiveNav>
  );
};

export default Navbar;
