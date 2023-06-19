import { type MetadataRoute } from 'next';
import { env } from '@/env.mjs';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  const { APP_URL } = env;

  return [
    {
      url: APP_URL,
      lastModified: currentDate,
    },
  ];
}
