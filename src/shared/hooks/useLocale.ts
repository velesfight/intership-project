import { use } from 'react';

import { LocaleContext } from '~/shared/configs/i18n';

export const useLocale = () => use(LocaleContext);
