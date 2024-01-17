import useWindowScrollPosition from '@rehooks/window-scroll-position';
import { ReactiveNav } from 'react-reactive-nav';

import About from './About';
import Contact from './Contact';
import Hero from './Hero';
import Projects from './Projects';
import WorkExperience from './WorkExperience';

import { Tooltip } from '~/components';
import { links } from '~/variables';

const LandingPage = () => {
  const { y } = useWindowScrollPosition({ throttle: 0 });

  const showSideLinks = y > document.documentElement.clientHeight - 1;

  return (
    <>
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
        <nav className={`navbar ${y > 64 ? 'navbar--shadow' : ''}`}>
          <div className='container'>TODO: Navbar</div>
        </nav>
      </ReactiveNav>
      <main>
        <Hero />
        <About />
        <Projects />
        <WorkExperience />
        <Contact />
      </main>
      <aside
        className='side-links'
        style={{
          // link count * icon height + flex gaps + padding
          height: links.length * 42 + (links.length - 1) * 8 + 56,
          // hide on hero section
          opacity: showSideLinks ? 1 : 0,
          transform: showSideLinks ? 'translateY(0)' : 'translateY(100%)',
        }}
        // it's ok to remove this from accessibility tree since this already
        // exists in the hero section
        aria-hidden='true'
        tabIndex={-1}
      >
        <div className='side-links__line' style={{ height: 48 }} />
        {links.map((link, idx) => (
          <Tooltip
            key={idx}
            label={link.name}
            popperOptions={{
              placement: 'left',
            }}
          >
            <a
              className='icon-button'
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={link.name}
            >
              {link.icon}
            </a>
          </Tooltip>
        ))}
      </aside>
      <footer>
        <div className='container'>
          <p>
            Made with{' '}
            <span role='img' aria-label='heart'>
              🤍
            </span>{' '}
            by{' '}
            <a
              href='https://github.com/franz-dc'
              target='_blank'
              rel='noopener noreferrer'
            >
              Franz DC
            </a>
          </p>
          <p>
            This portfolio is free and open source. Feel free to use and fork
            this through{' '}
            <a
              href='https://github.com/franz-dc/franz-dc.github.io'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
