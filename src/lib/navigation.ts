import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['pl-PL', 'en-US'] as const;
export const defaultLocale = 'pl-PL';
export const localePrefix = 'always';

export const pathnames = ['/', '/about'] as const;

export type Locale = (typeof locales)[number];
export type Pathname = (typeof pathnames)[number];

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
  localePrefix,
});
