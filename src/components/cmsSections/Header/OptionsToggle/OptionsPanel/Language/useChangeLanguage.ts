import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

export const useChangeLanguage = () => {
  const router = useRouter();

  const changeLanguage = (lang: string) => {
    if (router.locale === lang) return;
    Cookies.set('NEXT_LOCALE', lang, { expires: 365, path: '/' });
    router.push('/', '/', { locale: lang });
  };

  return { changeLanguage };
};