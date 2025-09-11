import '@fontsource-variable/geologica';

import '../src/shared/theme/index.css';

import type { Preview } from '@storybook/react-vite';

import { DEFAULT_LOCALE, Locale } from '../src/shared/configs/i18n';
import { I18next } from './i18n';

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: DEFAULT_LOCALE,
    toolbar: {
      icon: 'globe',
      items: [
        { value: Locale.En, right: '🇺🇸', title: 'English' },
        { value: Locale.Ru, right: '🇷🇺', title: 'Русский' },
        { value: Locale.De, right: '🇩🇪', title: 'Deutsch' },
        { value: Locale.Es, right: '🇪🇸', title: 'Español' },
        { value: Locale.Fr, right: '🇫🇷', title: 'Français' },
        { value: Locale.Zh, right: '🇨🇳', title: '中文' },
      ],
    },
  },
};

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [I18next],
};

export default preview;
