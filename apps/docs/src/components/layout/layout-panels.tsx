'use client';

import React from "react";

import { docsConfig } from '@config/docs';

import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle
} from '@components/ui/panels';
import { Sidebar } from '@components/layout/sidebar-nav';

import { PageHeader } from '@components/layout/page-header';

import { Scroller } from '../../../../../ui/src/components/scroller';

import { useMediaQuery } from '@hooks/use-media-query';

interface LayoutPanelsProps {
  children: React.ReactNode;
  defaultLayout: number[] | undefined;
};

export default function LayoutPanels ({
    children, defaultLayout = [25, 75],
}: LayoutPanelsProps) {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const onLayout = (sizes: number[]) => {
        document.cookie = `layout=${JSON.stringify(sizes)}`;
    };

    if (!isDesktop) {
        return (
            <>
                <PageHeader items={docsConfig.sidebarNav} />
                {children}
            </>
        );
    }

    return (
        <ResizablePanelGroup
            direction='horizontal'
            className='min-h-screen max-h-screen'
            onLayout={onLayout}
        >
            <ResizablePanel 
                defaultSize={defaultLayout[0]}
                maxSize={30}
                minSize={20}
            >
            <Scroller 
                width='100%' 
                height='100%' 
                overflow='y'
            >
                <Sidebar items={docsConfig.sidebarNav} />
            </Scroller>
            </ResizablePanel>

            <ResizableHandle />

            <ResizablePanel defaultSize={defaultLayout[1]}>
            <Scroller 
                width='100%' 
                height='100%' 
                overflow='y'
            >
                <PageHeader items={docsConfig.sidebarNav} />
                {children}
            </Scroller>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
};