'use client';

import * as React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { cn } from '../utils/cn';

type States = 'sm' | 'md' | 'lg' | 'xl';

type SizeProperties = number | string | 'fit-content' | 'max-content' | 'min-content' | 'screen' | SizeStates;

type SizeStates = { [key in States]?: SizeProperties };

type Overflow = 'x' | 'y' | 'auto' | 'hidden' | 'visible' | 'clip' | 'scroll';

interface ScrollerProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  children: React.ReactNode;
  width?: SizeProperties;
  height?: SizeProperties;
  overflow?: Overflow;
}

const Scroller = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollerProps
>(
  (
    {
      className,
      children,
      overflow = 'auto',
      width = '100%',
      height = '100%',
      ...props
    },
    ref
  ) => {
    return (
      <ScrollAreaPrimitive.Root
        ref={ref}
        className={cn(
          'relative',
          overflow === 'x'
            ? 'overflow-x-auto'
            : overflow === 'y'
            ? 'overflow-y-auto'
            : `overflow-${overflow}`,
          typeof width === 'number'
            ? `w-[${width}px]`
            : typeof width === 'string'
            ? `w-[${width}]`
            : typeof width === 'object'
            ? Object.entries(width).map(([key, value]) => {
                return typeof value === 'number'
                  ? `${key}:w-[${value}px]`
                  : typeof value === 'string'
                  ? `${key}:w-[${value}]`
                  : {
                      'fit-content': 'w-fit',
                      'max-content': 'w-max',
                      'min-content': 'w-min',
                      screen: 'w-screen',
                    }[value as string];
              }).join(' ')
            : '',
          typeof height === 'number'
            ? `h-[${height}px]`
            : typeof height === 'string'
            ? `h-[${height}]`
            : typeof height === 'object'
            ? Object.entries(height).map(([key, value]) => {
                return typeof value === 'number'
                  ? `${key}:h-[${value}px]`
                  : typeof value === 'string'
                  ? `${key}:h-[${value}]`
                  : {
                      'fit-content': 'h-fit',
                      'max-content': 'h-max',
                      'min-content': 'h-min',
                      screen: 'h-screen',
                    }[value as string];
              }).join(' ')
            : '',
          className
        )}
        {...props}
      >
        <ScrollAreaPrimitive.Viewport className="h-full w-full">
          {children}
        </ScrollAreaPrimitive.Viewport>

        <ScrollerBar />
        <ScrollAreaPrimitive.Corner />
      </ScrollAreaPrimitive.Root>
    );
  }
);

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
      orientation === 'vertical' && 'h-full w-1.5 bg-transparent',
      orientation === 'horizontal' && 'h-1.5 flex-col bg-transparent',
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 mr-[2px] rounded-full bg-gray-300 hover:bg-gray-200 transition-colors" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));

ScrollerBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { Scroller };