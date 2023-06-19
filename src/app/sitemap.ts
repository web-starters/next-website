import { type MetadataRoute } from 'next';
import { env } from '@/env.mjs';
import { locales } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  const { APP_URL } = env;

  return locales.map(locale => ({
    url: `${APP_URL}/${locale}`,
    lastModified: currentDate,
  }));
}
