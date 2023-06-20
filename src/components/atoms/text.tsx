import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const textVariants = cva('', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
    weight: {
      sm: 'font-normal',
      md: 'font-semibold',
      lg: 'font-extrabold',
    },
    type: {
      primary: '',
      muted: 'text-muted-foreground',
    },
  },
  defaultVariants: {
    size: 'sm',
    weight: 'sm',
    type: 'primary',
  },
});

export interface TextProps extends VariantProps<typeof textVariants> {
  children: React.ReactNode;
  className?: string;
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ children, className, size, weight, type, ...props }, ref) => (
    <p ref={ref} className={cn(textVariants({ size, weight, type }), className)} {...props}>
      {children}
    </p>
  ),
);
Text.displayName = 'Text';

export { Text, textVariants };
