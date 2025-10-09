import { z } from 'zod';

import { i18n } from '~/shared/configs/i18n';

export const signInSchema = z.object({
  email: z.string().nonempty({ error: () => i18n.t('auth.placeholder.enterEmail') }),
  password: z.string().nonempty({ error: () => i18n.t('auth.placeholder.enterPassword') }),
});
