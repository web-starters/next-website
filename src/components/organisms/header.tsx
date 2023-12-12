import { useTranslations } from 'next-intl';

import { Link } from '@/lib/navigation';

import { Icons } from '@/components/atoms/icons';
import { LocaleToggle } from '@/components/molecules/locale-toggle';
import { ThemeToggle } from '@/components/molecules/theme-toggle';
import { Navigation, type NavigationItem } from '@/components/molecules/navigation';

export function Header() {
  const t = useTranslations('layout');

  const navigationItems: NavigationItem[] = [
    { name: t('homepage'), link: '/' },
    { name: t('about'), link: '/about' },
  ];

  return (
    <header className="w-full p-5 border-b bg-palette-50 dark:bg-palette-900">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto space-x-10">
        <Link href="/">
          <Icons.logo className="w-24 h-5" />
        </Link>

        <Navigation items={navigationItems} />

        <div className="flex gap-4">
          <LocaleToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
