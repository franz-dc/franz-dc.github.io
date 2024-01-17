import Atropos from 'atropos/react';

import { technologies } from '~/variables';

const About = () => (
  <section id='about' className='about'>
    <div className='about__bg' />
    <Atropos
      shadow={false}
      highlight={false}
      rotateXMax={12}
      rotateYMax={12}
      className='about__image-wrapper'
      rotateTouch={false}
    >
      <img
        className='about__image'
        src='/images/portrait.webp'
        alt='portrait'
        draggable={false}
      />
    </Atropos>
    <div className='container'>
      <div className='about__content'>
        <h2>About</h2>
        <p className='about__info'>
          Passionate full-stack web developer with 4+ years of experience in
          designing and implementing innovative web solutions. Proficient in
          front and back-end technologies, specializing in creating responsive
          and user-friendly applications. It is my commitment to write clean and
          efficient code, complemented by the ability to collaborate with teams
          to deliver quality projects.
        </p>
        <div className='about__technologies'>
          {technologies.map(({ name, icon }, idx) => (
            <div key={idx} className='about__technology'>
              <span className='about__technology__icon'>{icon}</span>
              <span className='about__technology__name'>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
