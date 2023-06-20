import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const headingVariants = cva('pb-12 scroll-m-20 tracking-tight', {
  variants: {
    size: {
      xs: 'text-xl',
      sm: 'text-2xl',
      md: 'text-3xl',
      lg: 'text-4xl',
    },
    weight: {
      md: 'font-semibold',
      lg: 'font-extrabold',
    },
  },
  defaultVariants: {
    size: 'md',
    weight: 'md',
  },
});

export enum HeadingTypeEnum {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export interface HeadingProps extends VariantProps<typeof headingVariants> {
  children: React.ReactNode;
  type?: HeadingTypeEnum;
  className?: string;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, type = HeadingTypeEnum.H2, size, weight, ...props }, ref) => {
    switch (type) {
      case HeadingTypeEnum.H1:
        return (
          <h1 ref={ref} className={cn(headingVariants({ size, weight }), className)} {...props}>
            {children}
          </h1>
        );
      case HeadingTypeEnum.H2:
      default:
        return (
          <h2 ref={ref} className={cn(headingVariants({ size, weight }), className)} {...props}>
            {children}
          </h2>
        );
      case HeadingTypeEnum.H3:
        return (
          <h3 ref={ref} className={cn(headingVariants({ size, weight }), className)} {...props}>
            {children}
          </h3>
        );
      case HeadingTypeEnum.H4:
        return (
          <h4 ref={ref} className={cn(headingVariants({ size, weight }), className)} {...props}>
            {children}
          </h4>
        );
      case HeadingTypeEnum.H5:
        return (
          <h5 ref={ref} className={cn(headingVariants({ size, weight }), className)} {...props}>
            {children}
          </h5>
        );
      case HeadingTypeEnum.H6:
        return (
          <h6 ref={ref} className={cn(headingVariants({ size, weight }), className)} {...props}>
            {children}
          </h6>
        );
    }
  },
);
Heading.displayName = 'Heading';

export { Heading, headingVariants };
