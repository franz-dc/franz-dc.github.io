import { Tooltip } from '~/components';
import { links } from '~/constants';

const Hero = () => (
  <section className='hero container'>
    <header>
      <p className='hero__greeting'>Hello there! I am</p>
      <h1>
        <span>Franz Joshua</span> <span>Dela Cruz</span>
      </h1>
      <p className='hero__subtitle'>Building stuff for the web</p>
    </header>
    <div className='hero__actions'>
      <a href='#get-in-touch' className='button'>
        Get in Touch
      </a>
      <a href='#about' className='button button--text'>
        Learn More
      </a>
    </div>
    <div className='hero__links'>
      {links.map((link, idx) => (
        <Tooltip
          key={idx}
          label={link.name}
          popperOptions={{
            placement: 'top',
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
    </div>
  </section>
);

export default Hero;
