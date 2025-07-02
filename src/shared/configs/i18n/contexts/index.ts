import { createContext } from 'react';

import { DATE_FNS_LOCALES, DEFAULT_LOCALE } from '../contants';

export const LocaleContext = createContext({
  locale: DEFAULT_LOCALE,
  dateFnsLocale: DATE_FNS_LOCALES[DEFAULT_LOCALE],
});
