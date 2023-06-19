import { usePathname, useRouter } from 'next/navigation';
import { i18n, type Locale } from '@/i18n-config';

export const useLocale = () => {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split('/');

  const handleLocale = (locale: Locale) => {
    if (!i18n.locales.includes(locale)) return;

    segments[1] = locale;
    void router.push(segments.join('/'));
  };

  return { locale: segments[1], handleLocale };
};
