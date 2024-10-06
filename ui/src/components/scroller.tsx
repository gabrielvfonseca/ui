'use client';

import * as React from 'react';

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

import { cn } from '../utils/cn';

interface ScrollerProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
    children: React.ReactNode;
    width: number | string;
    height: number | string;
    overflow: 'x' | 'y' | 'auto' | 'hidden' | 'visible' | 'clip' | 'scroll';
};

const Scroller = React.forwardRef<
    React.ElementRef<typeof ScrollAreaPrimitive.Root>,
    ScrollerProps
>(({ 
    className, 
    children, 
    overflow = 'auto',
    width = '100%',
    height = '100%',
    ...props 
}, ref) => (
    <ScrollAreaPrimitive.Root
        ref={ref}
        className={cn(
            'relative', 
            overflow === 'x' 
                ? 'overflow-x-auto' 
                : overflow === 'y' 
                    ? 'overflow-y-auto' 
                    : `overflow-${overflow}`,
            width === '100%' ? 'w-full' : `w-[${width}px]`,
            height === '100%' ? 'h-full' : `h-[${height}px]`,
            className,
        )}
        {...props}
    >
        <ScrollAreaPrimitive.Viewport className='h-full w-full'>
            {children}
        </ScrollAreaPrimitive.Viewport>
        
        <ScrollerBar />
        <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
));

Scroller.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollerBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
        ref={ref}
        orientation={orientation}
        className={cn(
            'flex touch-none select-none transition-colors',
            orientation === 'vertical' &&
                'h-full w-1.5 bg-transparent',
            orientation === 'horizontal' &&
                'h-1.5 flex-col bg-transparent',
            className
        )}
        {...props}
    >
        <ScrollAreaPrimitive.ScrollAreaThumb className='relative flex-1 mr-[2px] rounded-full bg-gray-300 hover:bg-gray-200 transition-colors' />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
));

Scroller.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { Scroller };