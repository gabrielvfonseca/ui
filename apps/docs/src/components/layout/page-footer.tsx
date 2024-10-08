import React from 'react';

// Next
import Link from 'next/link';

// Site Config
import { siteConfig } from '@config/site';
import { ThemeToggle } from './theme-toggle';

// Footer JSX Component
export const PageFooter = () => (
    <footer className='flex w-full p-12 bg-gradient-to-b from-background-200 to-background-100'>
        <div className='space-y-6 w-full'>
            <Link 
                className="font-normal text-sm text-gray-1000 flex items-center gap-4 no-underline" 
                href="/"
            >
                {siteConfig.siteName}
            </Link>

            <nav className='flex flex-wrap items-center gap-6'>
                {
                    [
                        {
                            title: 'Docs',
                            url: '/docs'
                        },
                        {
                            title: 'Templates',
                            url: '/templates'
                        },
                        {
                            title: 'Design System',
                            url: '/design'
                        },
                        {
                            title: 'Components',
                            url: '/components'
                        },
                    ].map((item, index: number) => (
                        <Link 
                            key={`footer-route-link-${index}`}
                            className='text-gray-900 hover:text-gray-800 text-sm transition-colors' 
                            href={item.url}
                        >
                            {item.title}
                        </Link>
                    ))
                }
            </nav>

            <p className='font-normal text-sm text-gray-600'>
                &copy; {new Date().getFullYear()}{' '}
                <Link 
                    href={siteConfig.links.github} 
                    target='_blank'
                >
                    {siteConfig.author}
                </Link>
                {'. All rights reserved.'}
            </p>

            <ThemeToggle />
        </div>
    </footer>
);