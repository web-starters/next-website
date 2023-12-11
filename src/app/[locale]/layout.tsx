import '@/styles/globals.css';

import { type Metadata } from 'next';
import { type ReactNode } from 'react';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { siteConfig } from '@/configs/site-config';
import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { type Locale, locales } from '@/lib/navigation';

import { Header } from '@/components/organisms/header';
import { Footer } from '@/components/organisms/footer';
import ThemeProvider from '@/components/providers/ThemeProvider';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/images/favicon.ico',
  },
};

interface Props {
  children: ReactNode;
  params: { locale: Locale };
}

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default function RootLayout({ children, params }: Props) {
  if (!locales.includes(params.locale)) notFound();
  unstable_setRequestLocale(params.locale);
  const messages = useMessages();

  return (
    <html lang={params.locale}>
      <head />
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />

            <main>{children}</main>

            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
