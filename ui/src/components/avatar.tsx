'use client';

import * as React from 'react';

import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@/utils/cn';

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      className
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export interface AvatarGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
    size?: number;
    limit?: number;
    placeholder?: boolean;
    items: { src: string; alt: string }[];
};

const AvatarGroup = React.forwardRef<AvatarGroupProps>(
    ({ 
      className, 
      size = 32,
      limit = 4,
      items,
      placeholder,
      children,
      ...props 
    }, ref) => {
        if (items.length === 0) {
            return null;
        }

        const visibleItems = items.slice(0, limit);

        return (
            <div
                className={cn(
                  'flex space-x-2',
                  className,
                )}
                ref={ref}
                {...props}
            >
                {visibleItems.map((item, index) => (
                    <Avatar
                        key={index}
                        className={cn(
                            'border-2 border-white',
                            index > 0 && '-ml-2',
                        )}
                    >
                        <AvatarImage src={item.src} alt={item.alt} />
                    </Avatar>
                ))}
                {items.length > limit && (
                    <Avatar
                        className={cn(
                            'border-2 border-white',
                            '-ml-2',
                        )}
                    >
                        <AvatarFallback>
                            {`+${items.length - limit}`}
                        </AvatarFallback>
                    </Avatar>
                )}
            </div>
        )
    }
);
  
AvatarGroup.displayName = 'AvatarGroup';

export {
    AvatarGroup,
}