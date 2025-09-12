import { LocaleProvider } from '~/shared/configs/i18n';

import { Router } from './Router';

export const App = () => {
  return (
    <LocaleProvider>
      <Router />
    </LocaleProvider>
  );
};
