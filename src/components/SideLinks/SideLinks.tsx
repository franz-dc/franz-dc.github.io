import Tooltip from '../Tooltip';

import { links } from '~/constants';

export type SideLinksProps = {
  pageYOffset: number;
};

const SideLinks = ({ pageYOffset }: SideLinksProps) => {
  const showSideLinks = pageYOffset > document.documentElement.clientHeight - 1;

  return (
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
  );
};

export default SideLinks;
