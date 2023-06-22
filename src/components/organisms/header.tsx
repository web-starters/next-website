import { Icons } from '@/components/atoms/icons';
import { ThemeToggle } from '@/components/molecules/theme-toggle';

export function Header() {
  return (
    <header className="w-full p-5 border-b bg-palette-50 dark:bg-palette-900">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto space-x-10">
        <Icons.logo className="w-20 h-6" />

        <ThemeToggle />
      </div>
    </header>
  );
}
