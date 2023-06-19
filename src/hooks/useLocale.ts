import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';
import { i18n, type Locale } from '@/i18n-config';

export const useLocale = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const asPath = pathname.replace('/' + locale, '');
  const { locales } = i18n;

  const handleLocale = (value: Locale) => {
    if (!locales.includes(value)) return;

    Cookies.set('NEXT_LOCALE', value, { expires: 30, secure: true });

    void router.replace('/' + value + asPath);
  };

  const localeOptions = locales.map(elem => ({ name: elem, value: elem }));

  return { locale, handleLocale, localeOptions };
};
