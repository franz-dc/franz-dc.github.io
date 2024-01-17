import {
  SiFigma,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSass,
  SiTypescript,
} from 'react-icons/si';

import { TTechnology } from '~/types';

export const technologies: TTechnology[] = [
  {
    name: 'JavaScript',
    icon: <SiJavascript />,
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
  },
  {
    name: 'Node.js',
    icon: <SiNodedotjs />,
  },
  {
    name: 'React',
    icon: <SiReact />,
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
  },
  {
    name: 'Figma',
    icon: <SiFigma />,
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb />,
  },
  {
    name: 'Firebase',
    icon: <SiFirebase />,
  },
  {
    name: 'Sass',
    icon: <SiSass />,
  },
];
