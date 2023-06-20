import '@/styles/globals.css';
import { type Metadata } from 'next';
import { type ReactNode } from 'react';
import { i18n, type Locale } from '@/i18n-config';
import { siteConfig } from '@/configs/site-config';
import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/providers/theme-provider';
import { Header } from '@/components/organisms/header';
import { Footer } from '@/components/organisms/footer';

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
  params: { lang: Locale };
}

export function generateStaticParams() {
  return i18n.locales.map(locale => ({ locale }));
}

export default function RootLayout({ children, params }: Props) {
  return (
    <html lang={params.lang}>
      <head />
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />

          <main>{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
