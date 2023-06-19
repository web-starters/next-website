import { type Metadata } from 'next';
import { getDictionary } from '@/lib/dictionaries';
import type { LocaleType } from '@/data-types/types';

interface Props {
  params: { lang: LocaleType };
}

export const metadata: Metadata = {
  title: 'Homepage',
};

export default async function Page({ params }: Props) {
  const dict = await getDictionary(params.lang);

  return <h2>{dict['greeting']}</h2>;
}
