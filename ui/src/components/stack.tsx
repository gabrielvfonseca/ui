import * as React from 'react';

import { cn } from '../utils/cn';

type DeviceKey = 'sm' | 'md' | 'lg' | 'xl';

type GapValue = number;
type GapDevice = { [key in DeviceKey]?: GapValue };
type Gap = GapValue | GapDevice;

type Align = 'start' | 'center' | 'end';

type Justify = 'start' | 'center' | 'end' | 'space-between';

type DirectionCasses = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type DirectionDevice = { [key in DeviceKey]?: 'row' | 'column' | 'row-reverse' | 'column-reverse' };
type Direction = DirectionCasses | DirectionDevice;

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement> {
    gap?: Gap;
    align?: Align;
    justify?: Justify;
    direction?: Direction;
};

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ 
    className, 
    gap = 4,
    align,
    justify,
    direction,
    children,
    ...props 
  }, ref) => {

    const directionClasses = {
      'row': 'flex-row',
      'column': 'flex-col',
      'row-reverse': 'flex-row-reverse',
      'column-reverse': 'flex-col-reverse',
    }

    const alignClasses = {
      'start': 'items-start',
      'center': 'items-center',
      'end': 'items-end',
    }

    const justifyClasses = {
      'start': 'justify-start',
      'center': 'justify-center',
      'end': 'justify-end',
      'space-between': 'justify-between',
    }

    const getGapClasses = (gap: Gap) => {
      if (typeof gap === 'number') {
        return `gap-${gap}`;
      }

      if (typeof gap === 'object') {
        return Object.entries(gap).map(([key, value]) => {
          return `${key}:gap-${value}`;
        });
      }
    }

    const getDirectionClasses = (direction: Direction) => {
      if (typeof direction === 'string') {
        return directionClasses[direction];
      }

      if (typeof direction === 'object') {
        return Object.entries(direction).map(([key, value]) => {
          return `${key}:${directionClasses[value]}`;
        });
      }
    }

    return (
      <div
        className={cn(
          'flex', 
          gap && getGapClasses(gap),
          align && alignClasses[align],
          justify && justifyClasses[justify],
          direction && getDirectionClasses(direction),
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>  
    )
  }
);

Stack.displayName = 'Stack';

export { Stack };