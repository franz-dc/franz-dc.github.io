import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import './sass/main.scss';

import { LandingPage } from '~/pages';

import '@fontsource-variable/urbanist';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>
);
