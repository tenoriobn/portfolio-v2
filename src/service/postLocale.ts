import Cookies from 'js-cookie';

export const useSetLocale = () => {
  const setLocale = (locale: string) => {
    Cookies.set('NEXT_LOCALE', locale, { expires: 365, path: '/' });
  };

  return { setLocale };
};