import { LocaleProvider } from '~/shared/configs/i18n';

const text = 'Hello world!';

export const App = () => {
  return <LocaleProvider>{text}</LocaleProvider>;
};
