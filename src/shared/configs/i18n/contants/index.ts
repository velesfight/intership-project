import { enUS, ru, de, es, fr, zhCN } from 'date-fns/locale';

import { DateFnsLocale } from '../types';

export enum Locale {
  Ru = 'ru',
  En = 'en',
  De = 'de',
  Es = 'es',
  Fr = 'fr',
  Zh = 'zh',
}

export const DEFAULT_LOCALE = Locale.En;

export const DATE_FNS_LOCALES: Record<Locale, DateFnsLocale> = {
  [Locale.En]: enUS,
  [Locale.Ru]: ru,
  [Locale.De]: de,
  [Locale.Es]: es,
  [Locale.Fr]: fr,
  [Locale.Zh]: zhCN,
};
