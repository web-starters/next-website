import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/lib/constants';
import type { LocaleType } from '@/data-types/types';

export const useLocale = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const asPath = pathname.replace('/' + locale, '');

  const handleLocale = (value: LocaleType) => {
    if (!locales.includes(value)) return;

    Cookies.set('NEXT_LOCALE', value, { expires: 30, secure: true });

    void router.replace('/' + value + asPath);
  };

  const localeOptions = locales.map(elem => ({ name: elem, value: elem }));

  return { locale, handleLocale, localeOptions };
};
