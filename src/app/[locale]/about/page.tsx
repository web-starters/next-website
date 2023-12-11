import { useTranslations } from 'next-intl';

import { Heading } from '@/components/atoms/heading';

export default function Page() {
  const t = useTranslations('about');

  return (
    <div className="max-w-7xl mx-auto">
      <Heading>{t('title')}</Heading>
    </div>
  );
}
