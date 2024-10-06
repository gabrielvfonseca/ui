import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-gray-alpha-1000 hover:bg-gray-alpha-900 text-gray-100',
        secondary: 'border text-gray-1000 bg-gray-alpha-100 hover:bg-gray-alpha-200 border-gray-alpha-200',
        tertiary: 'bg-tertiary text-tertiary-foreground shadow-sm hover:bg-tertiary/80',
        error: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        warning: 'bg-warning text-warning-foreground shadow-sm hover:bg-warning/90',
      },
      size: {
        medium: 'px-[14px] h-[34px] text-[14px]',
        small: 'px-[6px] h-[34px] text-[14px]',
        large: 'px-[14px] h-[44px] text-[16px]',
        tiny: 'px-[4px] h-[28px] text-[12px]',
      },
      shape: {
        square: 'rounded-lg',
        circle: 'rounded-full',
        rounded: 'rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
      shape: 'square',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
      asChild?: boolean;
      loading?: boolean;
      prefix?: React.ReactNode;
      suffix?: React.ReactNode;
      svg?: boolean;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant,
    disabled,
    size,
    shape,
    asChild,
    suffix,
    prefix,
    'aria-label': ariaLabel,
    children,
    svg = false,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, shape, className }),
          'flex justify-center items-center',
          svg && `p-0 ${
            size === 'tiny'
              ? 'h-[28px] p-1.5 w-[28px]'
              : size === 'small'
              ? 'h-[34px] p-1.5 w-[34px]'
              : size === 'large'
              ? 'h-[44px] p-2.5 w-[44px]'
              : 'h-[38px] p-2 w-[38px]'
            }`,
          className
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {prefix && <span className='mr-2'>{prefix}</span>}
        {!svg && <span className='whitespace-nowrap'>{children}</span>}
        {suffix && <span className='ml-2'>{suffix}</span>}
        {svg && children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };