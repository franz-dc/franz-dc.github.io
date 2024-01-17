import { Section } from '~/components';
import { workExperience } from '~/variables';

const WorkExperience = () => {
  return (
    <section id='work-experience' className='work-experience container'>
      <h2>Work Experience</h2>
      <div className='work-experience__wrapper'>
        {workExperience.map((item, idx) => (
          <div key={idx} className='work-experience__item'>
            <div className='work-experience__header'>
              <div className='work-experience__date'>
                <span>{item.date}</span>
              </div>
              <h3 className='work-experience__company-name'>
                {item.companyName}
              </h3>
              <div className='work-experience__job-title'>{item.jobTitle}</div>
            </div>
            <Section className='work-experience__description'>
              <ul>
                {item.descriptions.map((description, idx) => (
                  <li key={idx}>{description}</li>
                ))}
              </ul>
            </Section>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
