import 'server-only';

import { type Locale } from '@/i18n-config';

const dictionaries = {
  ['pl-PL']: () => import('@/static/dictionaries/pl.json').then(module => module.default),
  ['en-US']: () => import('@/static/dictionaries/en.json').then(module => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
