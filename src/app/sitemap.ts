import { type MetadataRoute } from 'next';

import { env } from '@/env.mjs';
import { i18n } from '@/i18n-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  const { NEXT_PUBLIC_APP_URL } = env;

  return i18n.locales.map(locale => ({
    url: `${NEXT_PUBLIC_APP_URL}/${locale}`,
    lastModified: currentDate,
  }));
}
