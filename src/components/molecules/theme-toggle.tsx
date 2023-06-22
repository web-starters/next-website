'use client';

import { useCallback } from 'react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/atoms/button';
import { Icons } from '@/components/atoms/icons';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);

  return (
    <Button variant="ghost" size="sm" onClick={toggleTheme}>
      <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
