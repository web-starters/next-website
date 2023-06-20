import { getDictionary } from '@/lib/dictionaries';
import { type Locale } from '@/i18n-config';

interface Props {
  params: { lang: Locale };
}

export default async function Page({ params }: Props) {
  const dict = await getDictionary(params.lang);

  return <h2>{dict['greeting']}</h2>;
}
