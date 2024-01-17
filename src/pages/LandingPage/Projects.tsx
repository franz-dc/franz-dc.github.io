import { useState } from 'react';

import Atropos from 'atropos/react';
import { MdOpenInNew } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';
import { Lightbox } from 'yet-another-react-lightbox';
import { Captions, Counter } from 'yet-another-react-lightbox/plugins';

import { Section, Tooltip } from '~/components';
import { projects } from '~/variables';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/counter.css';

const Projects = () => {
  const [projectItemIdx, setProjectItemIdx] = useState(-1);
  const [photoIndex, setPhotoIndex] = useState(-1);

  const linkCategoryIcons = {
    default: <MdOpenInNew />,
    Project: <MdOpenInNew />,
    GitHub: <SiGithub />,
  };

  return (
    <section id='projects' className='projects container'>
      <h2>Notable Projects</h2>
      <div className='projects__wrapper'>
        {projects.map((item, idx) => (
          <div key={idx} className='projects__item-container'>
            <div className='projects__number'>
              {String(idx + 1).padStart(2, '0')}
            </div>
            <div className='projects__item'>
              <div className='projects__frame-wrapper'>
                <Atropos
                  shadow={false}
                  highlight={false}
                  rotateXMax={12}
                  rotateYMax={12}
                  className='projects__frame'
                  rotateTouch={false}
                >
                  <button
                    className='button-base'
                    onClick={() => {
                      setProjectItemIdx(idx);
                      setPhotoIndex(0);
                    }}
                  >
                    <Section>
                      <img
                        src={item.mainImage}
                        alt={item.name}
                        data-atropos-offset='2'
                      />
                    </Section>
                  </button>
                </Atropos>
              </div>
              <div className='projects__content'>
                <h3 className='projects__name'>{item.name}</h3>
                <p className='projects__description'>{item.description}</p>
                <div className='projects__technologies'>
                  {item.technologies.map((technology, idx) => (
                    <div key={idx} className='chip'>
                      {technology}
                    </div>
                  ))}
                </div>
                <div className='projects__links'>
                  {item.links.map((link, idx) => (
                    <Tooltip key={idx} label={link.caption}>
                      <a
                        className='icon-button'
                        href={link.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={link.caption}
                      >
                        {/* @ts-ignore */}
                        {linkCategoryIcons[link.category] ||
                          linkCategoryIcons.default}
                        {/* {link.caption} */}
                      </a>
                    </Tooltip>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Lightbox
        open={projectItemIdx >= 0 && photoIndex >= 0}
        close={() => setPhotoIndex(-1)}
        index={photoIndex}
        animation={{
          fade: 220,
          swipe: 220,
          // default from PhotoSwipe
          easing: {
            fade: 'cubic-bezier(0.4, 0, 0.22, 1)',
            swipe: 'cubic-bezier(0.4, 0, 0.22, 1)',
          },
        }}
        plugins={[Captions, Counter]}
        counter={{
          container: { style: { top: 'unset', bottom: 0 } },
        }}
        slides={
          projectItemIdx >= 0
            ? [
                {
                  src: projects[projectItemIdx].mainImage,
                  alt: projects[projectItemIdx].name,
                  title: projects[projectItemIdx].name,
                },
                ...projects[projectItemIdx].otherImages.map((image) => ({
                  src: image.src,
                  alt: image.title,
                  title: image.title,
                })),
              ]
            : []
        }
      />
    </section>
  );
};

export default Projects;
