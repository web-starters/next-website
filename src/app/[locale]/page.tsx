import { getDictionary } from '@/lib/dictionaries';
import { type Locale } from '@/i18n-config';
import { Heading } from '@/components/atoms/heading';

interface Props {
  params: { locale: Locale };
}

export default async function Page({ params }: Props) {
  const dict = await getDictionary(params.locale);

  return <Heading>{dict['greeting']}</Heading>;
}
