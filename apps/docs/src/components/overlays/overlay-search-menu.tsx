'use client';

import React from 'react';

import { Icons } from '@components/icons';

import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from '../../../../../ui/src/components/drawer';

import {
    CommandEmpty,
    CommandDialog,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '../../../../../ui/src/components/command';

import { useMediaQuery } from '@hooks/use-media-query';

import { SidebarNavItem } from '@types/index';
import { usePathname } from 'next/navigation';
import { Scroller } from '../../../../../ui/src/components/scroller';
import Link from 'next/link';
import { Button } from '../../../../../ui/src/components/button';
import { Search } from '../../../../../ui/src/components/search';

interface OverlaySearchMenuProps {
    type?: 'input' | 'button';
    overwrite?: 'dialog' | 'drawer';
    items: SidebarNavItem[];
};

export default function OverlayMenu ({ 
    items, overwrite, type = 'button'
}: OverlaySearchMenuProps) {
    const [open, setOpen] = React.useState<boolean>(false);
    const isDesktop = useMediaQuery('(min-width: 768px)');

    const pathname = usePathname();
 
    if (isDesktop || overwrite === 'dialog') {
        return (
            <>
                {
                    type === 'button' ? (
                        <Button 
                            variant='secondary'
                            size='medium'
                            shape='circle'
                            aria-label='Search'
                            onClick={() => setOpen(true)}
                            svg
                        >
                            <Icons.search />
                        </Button>
                    ) : <Search type='input' onClick={() => setOpen(true)} />
                }   
                <CommandDialog open={open} onOpenChange={setOpen}>
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        {
                            items.length ? (
                                <>
                                    {items.map((item, index) => (
                                        <CommandGroup 
                                            key={index} 
                                            heading={item.title}
                                        >
                                            {item.items ? (
                                                <>
                                                    {item.items.map((item, index) => (
                                                        <Link
                                                            key={index}
                                                            href={item.href}
                                                            target={item.external ? '_blank' : ''}
                                                            rel={item.external ? 'noreferrer' : ''}
                                                            aria-disabled={item.disabled}
                                                        >
                                                            <CommandItem 
                                                                className='text-gray-1000'
                                                                disabled={item.disabled}
                                                            >
                                                                <Icons.arrowRight size={16} className='mr-2' />
                                                                <span>{item.title}</span>
                                                            </CommandItem>
                                                        </Link>
                                                    ))}
                                                </>
                                            ) : (
                                                <CommandItem className='cursor-not-allowed text-gray-1000'>
                                                    <Icons.arrowRight size={16} className='mr-2' />
                                                    <span>{item.title}</span>
                                                </CommandItem>
                                            )}
                                        </CommandGroup>
                                    ))}
                                </>
                            ) : null
                        }
                    </CommandList>
                </CommandDialog>
            </>
        )
    }
 
    return (
        <Drawer 
            open={open} 
            onOpenChange={setOpen}
        >
            <DrawerTrigger asChild>
                <Button 
                    variant='secondary'
                    size='medium'
                    shape='circle'
                    aria-label='Search'
                    onClick={() => setOpen(true)}
                    svg
                >
                    <Icons.search />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
      
            </DrawerContent>
        </Drawer>
    );
};