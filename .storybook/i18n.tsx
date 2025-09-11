import type { Decorator } from '@storybook/react';

import i18next from 'i18next';
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';

import { i18n } from '../src/shared/configs/i18n/configs/index';

export const I18next: Decorator = (Story, context) => {
  const { locale } = context.globals;

  useEffect(() => {
    if (locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale]);

  return (
    <Suspense fallback={<div>Loading translations...</div>}>
      <I18nextProvider i18n={i18next}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};
