import { useTranslation } from 'react-i18next';

import { DATE_FNS_LOCALES, DEFAULT_LOCALE, Locale } from '../contants';
import { LocaleContext } from '../contexts';
import { LocalesProviderProps } from '../types';

export const LocaleProvider: React.FC<LocalesProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const lang = i18n.resolvedLanguage as Locale | undefined;
  const locale = lang ?? DEFAULT_LOCALE;

  return (
    <LocaleContext
      value={{
        locale,
        dateFnsLocale: DATE_FNS_LOCALES[locale],
      }}
    >
      {children}
    </LocaleContext>
  );
};
