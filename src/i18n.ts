import 'server-only';

import { getRequestConfig } from 'next-intl/server';

import { type Locale } from './i18n-config';

const messages = {
  ['en-US']: 'en.json',
  ['pl-PL']: 'pl.json',
};

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./static/messages/${messages[locale as Locale]}`)).default,
}));
