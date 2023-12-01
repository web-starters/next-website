'use client';

import Link from 'next/link';

import { useLocale } from '@/hooks/useLocale';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/atoms/navigation-menu';

type NavigationItem = {
  name: string;
  link: string;
};

interface NavigationProps {
  items: NavigationItem[];
}

export function Navigation({ items }: NavigationProps) {
  const { locale } = useLocale();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {items.map((item, index) => (
            <Link key={index} href={`/${locale + item.link}`} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.name}
              </NavigationMenuLink>
            </Link>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
