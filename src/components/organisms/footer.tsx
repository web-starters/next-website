import { useTranslations } from 'next-intl';

import { siteConfig } from '@/configs/site-config';
import { cn } from '@/lib/utils';
import { Text, textVariants } from '@/components/atoms/text';

export function Footer() {
  const t = useTranslations('layout');

  return (
    <footer className="w-full p-5 border-t text-sm">
      <div className="flex justify-start flex-col-reverse md:flex-row w-full max-w-7xl mx-auto">
        <Text className="mt-2.5 md:mt-0">
          &copy; {`${new Date().getFullYear()} ${siteConfig.author}. All rights reserved.`}
        </Text>

        <a href="#" className={cn(textVariants(), 'md:ml-4 hover:underline')}>
          {t('privacy_policy_and_cookies')}
        </a>
      </div>
    </footer>
  );
}
