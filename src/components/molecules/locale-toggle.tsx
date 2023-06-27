'use client';

import { useLocale } from '@/hooks/useLocale';

import { Icons } from '@/components/atoms/icons';
import { Button } from '@/components/atoms/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/molecules/dropdown-menu';
import { i18n } from '@/i18n-config';

export function LocaleToggle() {
  const { handleLocale } = useLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Icons.languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Locale theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale, index) => (
          <DropdownMenuItem key={index} onClick={() => handleLocale(locale)}>
            {locale}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
