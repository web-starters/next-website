import 'server-only';

import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  switch (locale) {
    case 'en-US':
      return {
        messages: (await import(`./static/messages/en.json`)).default,
      };
    case 'pl-PL':
    default:
      return {
        messages: (await import(`./static/messages/pl.json`)).default,
      };
  }
});
