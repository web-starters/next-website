import { Icons } from '@/components/atoms/icons';
import { LocaleToggle } from '@/components/molecules/locale-toggle';
import { ThemeToggle } from '@/components/molecules/theme-toggle';
import { Navigation, type NavigationItem } from '@/components/molecules/navigation';

const navigationItems: NavigationItem[] = [
  { name: 'Homepage', link: '/' },
  { name: 'About', link: '/about' },
];

export function Header() {
  return (
    <header className="w-full p-5 border-b bg-palette-50 dark:bg-palette-900">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto space-x-10">
        <Icons.logo className="w-20 h-6" />

        <Navigation items={navigationItems} />

        <div className="flex gap-4">
          <LocaleToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
