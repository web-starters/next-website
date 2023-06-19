export const i18n = {
  defaultLocale: 'pl-PL',
  locales: ['pl-PL', 'en-US'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
