import '@/styles/globals.css';
import { type Metadata } from 'next';
import { type ReactNode } from 'react';
import { siteConfig } from '@/configs/site';
import { fontSans } from '@/lib/fonts';
import { locales } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/providers/theme-provider';
import type { LocaleType } from '@/data-types/types';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/images/favicon.ico',
  },
};

interface Props {
  children: ReactNode;
  params: { lang: LocaleType };
}

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default function RootLayout({ children, params }: Props) {
  return (
    <html lang={params.lang}>
      <head />
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
