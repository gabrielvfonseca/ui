import React from 'react';

import '@styles/globals.css';
import '@repo/ui/ui.css';

import { ThemeProvider } from '@components/providers/theme';
import { AnalyticsProvider } from '@components/providers/analytics';

import { sans, space, mono } from '../../../../ui/src/typography/fonts';

import type { Metadata, Viewport } from 'next';

import { constructMetadata } from '@utils/metadata';
import { constructViewport } from '@utils/viewport';

export const metadata: Metadata = constructMetadata({
  title: 'UI | Gabriel',
  description: 'This is my ui library',
});

export const viewport: Viewport = constructViewport();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang='en'>
      <AnalyticsProvider>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
        >
        <body className={`
          ${sans.variable} 
          ${mono.variable} 
          ${space.variable}
        `}>
          {children}
        </body>
      </ThemeProvider>
      </AnalyticsProvider>
    </html>
  );
};