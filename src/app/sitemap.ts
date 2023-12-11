import { type MetadataRoute } from 'next';

import { env } from '@/env.mjs';
import { locales } from '@/lib/navigation';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  const { NEXT_PUBLIC_APP_URL } = env;

  return locales.map(locale => ({
    url: `${NEXT_PUBLIC_APP_URL}/${locale}`,
    lastModified: currentDate,
  }));
}
