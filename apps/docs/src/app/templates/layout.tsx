import React from "react";

import type { Metadata } from 'next';

import { constructMetadata } from '@utils/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Templates | UI ',
  description: 'UI templates to jumpstart your next project.',
});

interface LayoutProps {
    children: React.ReactNode;
};

export default function Layout ({
    children,
}: LayoutProps) {
    return (
        <main className="flex-1">
            {children}
        </main>
    );  
};