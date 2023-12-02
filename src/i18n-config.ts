export const i18n = {
  locales: ['pl-PL', 'en-US'],
  defaultLocale: 'pl-PL',
} as const;

export type Locale = (typeof i18n)['locales'][number];
