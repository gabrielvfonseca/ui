'use client';

import React from 'react';

import { Button } from '../../../../../ui/src/components/button';
import { Stack } from '../../../../../ui/src/components/stack';

import { cn } from '../../../../../ui/src/utils/cn';

import { useMediaQuery } from '@hooks/use-media-query';

import OverlayMenu from '@components/overlays/overlay-menu';
import ModalFeedback from '../overlays/modal-feedback';

import { SidebarNavItem } from '@types/index';

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  items: SidebarNavItem[];
};

export function PageHeader ({
  className,
  items,
  ...props
}: HeaderProps) {
  const isDesktop = useMediaQuery('(min-width: 1068px)');

  return (
    <header 
      className={cn(
        'z-100 top-0 w-full sticky',
        className
      )}
      {...props}
    >
      <Stack 
        direction='row' 
        justify='space-between'
        className='px-4 items-center border-b border-gray-alpha-400 shadow-sm bg-background-100 w-full h-[70px]'
      >
        {
          isDesktop ?
            <> 
              <OverlayMenu 
                items={items}
                type='input'
                overwrite='dialog'
              />

              <Stack
                direction='row'
                gap={4}
              >
                <ModalFeedback />

                <Button 
                  variant='default'
                  size='medium'
                  shape='square'
                >
                  Contribute
                </Button>
              </Stack>
            </>
          : 
            <>
              <div className='flex items-center h-full'>
                Logo
              </div>

              <div className='border-l border-gray-alpha-400 flex pl-4 items-center h-full'>
                <OverlayMenu 
                  items={items} 
                  type='button'
                />
              </div>
            </>
        }
      </Stack>
    </header>
  )
};