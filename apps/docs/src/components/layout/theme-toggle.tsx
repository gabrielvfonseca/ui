'use client';
import { Icons } from '@components/icons';
import { cn } from '../../../../../ui/src/utils/cn';
import { AnimatePresence, Transition, motion } from 'framer-motion';
import {
  Children,
  cloneElement,
  ReactElement,
  useEffect,
  useState,
  useId,
} from 'react';

type AnimatedBackgroundProps = {
  children:
    | ReactElement<{ 'data-id': string }>[]
    | ReactElement<{ 'data-id': string }>;
  defaultValue?: string;
  onValueChange?: (newActiveId: string | null) => void;
  className?: string;
  transition?: Transition;
  enableHover?: boolean;
};

function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  className,
  transition,
  enableHover = false,
}: AnimatedBackgroundProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const uniqueId = useId();

  const handleSetActiveId = (id: string | null) => {
    setActiveId(id);

    if (onValueChange) {
      onValueChange(id);
    }
  };

  useEffect(() => {
    if (defaultValue !== undefined) {
      setActiveId(defaultValue);
    }
  }, [defaultValue]);

  return Children.map(children, (child: any, index) => {
    const id = child.props['data-id'];

    const interactionProps = enableHover
      ? {
          onMouseEnter: () => handleSetActiveId(id),
          onMouseLeave: () => handleSetActiveId(null),
        }
      : {
          onClick: () => handleSetActiveId(id),
        };

    return cloneElement(
      child,
      {
        key: index,
        className: cn('relative inline-flex', child.props.className),
        'aria-selected': activeId === id,
        'data-checked': activeId === id ? 'true' : 'false',
        ...interactionProps,
      },
      <>
        <AnimatePresence initial={false}>
          {activeId === id && (
            <motion.div
              layoutId={`background-${uniqueId}`}
              className={cn('absolute inset-0', className)}
              transition={transition}
              initial={{ opacity: defaultValue ? 1 : 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
            />
          )}
        </AnimatePresence>
        <span className='z-10'>{child.props.children}</span>
      </>
    );
  });
}

export function ThemeToggle () {
    return (
      <div className='rounded-full w-fit bg-gray-100 p-[2px] dark:bg-zinc-800'>
        <AnimatedBackground
            defaultValue='system'
            className='rounded-lg bg-white dark:bg-zinc-700'
            transition={{
                ease: 'easeInOut',
                duration: 0.2,
            }}
        >
            <button
                data-id='dark'
                type='button'
                className='inline-flex w-20 items-center justify-center text-center text-zinc-800 transition-transform active:scale-[0.98] dark:text-zinc-50'
            >
                <Icons.moon />
            </button>
            <button
                data-id='light'
                type='button'
                className='inline-flex w-20 items-center justify-center text-center text-zinc-800 transition-transform active:scale-[0.98] dark:text-zinc-50'
            >
                <Icons.sun />
            </button>
            <button
                data-id='system'
                type='button'
                className='inline-flex w-20 items-center justify-center text-center text-zinc-800 transition-transform active:scale-[0.98] dark:text-zinc-50'
            >
                <Icons.laptop />
            </button>
        </AnimatedBackground>
      </div>
    );
  }