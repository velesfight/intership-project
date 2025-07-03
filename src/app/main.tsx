import '@fontsource-variable/geologica';

import '~/shared/configs/i18n';
import '~/shared/theme/index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

const root = document.getElementById('root');
if (!root) throw new Error('Root dom node is missing');

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
