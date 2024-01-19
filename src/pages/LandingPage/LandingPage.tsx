import useWindowScrollPosition from '@rehooks/window-scroll-position';

import About from './About';
import Contact from './Contact';
import Hero from './Hero';
import Projects from './Projects';
import WorkExperience from './WorkExperience';

import { Footer, Navbar, SideLinks } from '~/components';

const LandingPage = () => {
  const { y } = useWindowScrollPosition({ throttle: 0 });

  return (
    <>
      <Navbar pageYOffset={y} />
      <main>
        <Hero />
        <About />
        <Projects />
        <WorkExperience />
        <Contact />
      </main>
      <SideLinks pageYOffset={y} />
      <Footer />
    </>
  );
};

export default LandingPage;
