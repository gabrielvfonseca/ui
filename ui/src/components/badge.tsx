import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { LucideIcon } from 'lucide-react';

import { cn } from '../utils/cn';

const badgeIconVariants = cva(
    'inline-flex transition-colors',
    {
      variants: {
        variant: {
          gray: 'bg-gray-100 text-gray-800',
          'gray-subtle': 'bg-gray-50 text-gray-500',
          blue: 'bg-blue-100 text-blue-800',
          'blue-subtle': 'bg-blue-50 text-blue-500',
          purple: 'bg-purple-100 text-purple-800',
          'purple-subtle': 'bg-purple-50 text-purple-500',
          amber: 'bg-amber-100 text-amber-800',
          'amber-subtle': 'bg-amber-50 text-amber-500',
          red: 'bg-red-100 text-red-800',
          'red-subtle': 'bg-red-50 text-red-500',
          pink: 'bg-pink-100 text-pink-800',
          'pink-subtle': 'bg-pink-50 text-pink-500',
          green: 'bg-green-100 text-green-800',
          'green-subtle': 'bg-green-50 text-green-500',
          teal: 'bg-teal-100 text-teal-800',
          'teal-subtle': 'bg-teal-50 text-teal-500',
          inverted: 'bg-gray-800 text-white',
        },
        size: {
          sm: 'px-2 py-0.5 text-xs',
          md: 'px-3 py-1 text-sm',
          lg: 'px-4 py-1.5 text-base',
        }
      },
      defaultVariants: {
          variant: 'gray',
          size: 'sm',
      },
    }
);

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        gray: 'bg-gray-100 text-gray-800',
        'gray-subtle': 'bg-gray-50 text-gray-500',
        blue: 'bg-blue-100 text-blue-800',
        'blue-subtle': 'bg-blue-50 text-blue-500',
        purple: 'bg-purple-100 text-purple-800',
        'purple-subtle': 'bg-purple-50 text-purple-500',
        amber: 'bg-amber-100 text-amber-800',
        'amber-subtle': 'bg-amber-50 text-amber-500',
        red: 'bg-red-100 text-red-800',
        'red-subtle': 'bg-red-50 text-red-500',
        pink: 'bg-pink-100 text-pink-800',
        'pink-subtle': 'bg-pink-50 text-pink-500',
        green: 'bg-green-100 text-green-800',
        'green-subtle': 'bg-green-50 text-green-500',
        teal: 'bg-teal-100 text-teal-800',
        'teal-subtle': 'bg-teal-50 text-teal-500',
        inverted: 'bg-gray-800 text-white',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-1.5 text-base',
      }
    },
    defaultVariants: {
        variant: 'gray',
        size: 'sm',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
        icon?: LucideIcon;
};

function Badge({ className, variant, size, ...props }: BadgeProps) {    
    return (
        <div 
            className={cn(
                badgeVariants({ variant, size }), 
                className,
            )} 
            {...props}
        >
            {props.icon && (
                <props.icon className={cn(
                    badgeIconVariants({ variant, size }),
                    'mr-1',
                )} />
            )}
            {props.children}
        </div>
    )
};

export { Badge, badgeVariants };