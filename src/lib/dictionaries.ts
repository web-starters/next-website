import 'server-only';

import type { LocaleType } from '@/data-types/types';

const dictionaries = {
  ['pl-PL']: () => import('@/static/dictionaries/pl.json').then(module => module.default),
  ['en-US']: () => import('@/static/dictionaries/en.json').then(module => module.default),
};

export const getDictionary = async (locale: LocaleType) => dictionaries[locale]();
