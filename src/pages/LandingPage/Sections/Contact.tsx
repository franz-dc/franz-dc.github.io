import { MdInsertDriveFile } from 'react-icons/md';

const Contact = () => {
  const email = 'franzdc.21@gmail.com';

  return (
    <section id='get-in-touch' className='contact'>
      <div className='contact__diagonal' />
      <div className='contact__content-wrapper'>
        <div className='container'>
          <h2>Get in Touch</h2>
          <div className='contact__content'>
            <form
              className='contact__form'
              onSubmit={(e) => {
                e.preventDefault();
                window.open(
                  [
                    `mailto:${email}?subject=`,
                    e.currentTarget.subject.value,
                    '&body=',
                    e.currentTarget.message.value,
                  ].join('')
                );
              }}
            >
              <div className='input-group'>
                <label htmlFor='subject'>Subject</label>
                <input id='subject' type='text' name='subject' required />
              </div>
              <div className='input-group' style={{ marginBottom: '1rem' }}>
                <label htmlFor='message'>Message</label>
                <textarea id='message' name='message' required />
              </div>
              <button type='submit' className='button button--full-width'>
                Send
              </button>
            </form>
            <div className='contact__info'>
              <p>
                I&apos;m always eager to connect with like-minded individuals,
                potential clients, and fellow developers. Whether you have a
                project idea, a job opportunity, or just want to say hello, feel
                free to reach out using the contact form or connect with me on
                social media!
              </p>
              <p style={{ marginBottom: 0 }}>
                You can mail me at <a href={`mailto:${email}`}>{email}</a>.
              </p>
              <a
                className='button button--outlined'
                href='/resume.pdf'
                target='_blank'
                rel='noopener noreferrer'
                style={{ marginTop: '1.75rem' }}
              >
                <MdInsertDriveFile className='button__icon' />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
