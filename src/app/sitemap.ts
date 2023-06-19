import { type MetadataRoute } from 'next';
import { env } from '@/env.mjs';
import { i18n } from '@/i18n-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  const { APP_URL } = env;

  return i18n.locales.map(locale => ({
    url: `${APP_URL}/${locale}`,
    lastModified: currentDate,
  }));
}
