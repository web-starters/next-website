import { useTranslations } from 'next-intl';

import { Heading } from '@/components/atoms/heading';

export default function Page() {
  const t = useTranslations('Index');

  return <Heading>{t('title')}</Heading>;
}
