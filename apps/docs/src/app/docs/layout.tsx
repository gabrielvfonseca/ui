import React from 'react';

import { cookies } from 'next/headers';

import LayoutPanels from '@components/layout/layout-panels';

import type { Metadata } from 'next';

import { constructMetadata } from '@utils/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Docs | UI ',
  description: 'UI templates to jumpstart your next project.',
});

interface LayoutProps {
  children: React.ReactNode;
};

export default function Layout ({ children }: LayoutProps) {
  const layout = cookies().get("layout");

  let defaultLayout = [25, 75];

  if (layout) {
    defaultLayout = JSON.parse(layout.value);
  }

  return (
    <main className='flex-1'>
      <LayoutPanels defaultLayout={defaultLayout}>
        {children}
      </LayoutPanels>
    </main>
  );
};