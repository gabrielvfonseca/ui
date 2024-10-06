import React from "react";

import Link from "next/link";

import { PageFooter } from '@components/layout/page-footer';
import Heading from "@components/heading";

export default function Page (): JSX.Element {
    return (
        <>
            <div className="h-fit">
                <Heading 
                    title="Design System"
                    description="Vercel design system for building consistent web experiences."
                />

                <div className="grid grid-cols-2 grid-rows-3 border-t border-gray-alpha-400">
                    <div className="border-b border-r border-gray-alpha-400 hover:bg-background-100 transition-colors">
                        <Link 
                            href="/docs/icons"
                            className="group relative flex h-full flex-col gap-2 p-12 no-underline"
                        >
                            <h2 className="text-xl font-semibold text-gray-1000">
                                Starter Kits
                            </h2>
                            <p className="text-gray-900 text-md font-normal">
                                Starter kits for every project type.
                            </p>
                        </Link>
                    </div>
                    <div className="border-b border-gray-alpha-400 hover:bg-background-100 transition-colors">
                        <Link 
                            href="/docs/icons"
                            className="group relative flex h-full flex-col gap-2 p-12 no-underline"
                        >
                            <h2 className="text-xl font-semibold text-gray-1000">
                                Icons
                            </h2>
                            <p className="text-gray-900 text-md font-normal">
                                Icon set tailored for every use case.
                            </p>
                        </Link>
                    </div>

                    <div className="border-b border-r border-gray-alpha-400 hover:bg-background-100 transition-colors">
                        <Link 
                            href="/docs/icons"
                            className="group relative flex h-full flex-col gap-2 p-12 no-underline"
                        >
                            <h2 className="text-xl font-semibold text-gray-1000">
                                Components
                            </h2>
                            <p className="text-gray-900 text-md font-normal">
                                Building blocks for every application.
                            </p>
                        </Link>
                    </div>
                    <div className="border-b border-gray-alpha-400 hover:bg-background-100 transition-colors">
                        <Link 
                            href="/docs/icons"
                            className="group relative flex h-full flex-col gap-2 p-12 no-underline"
                        >
                            <h2 className="text-xl font-semibold text-gray-1000">
                                Colors
                            </h2>
                            <p className="text-gray-900 text-md font-normal">
                                Color palette for every use case.
                            </p>
                        </Link>
                    </div>

                    <div className="border-b border-r border-gray-alpha-400 hover:bg-background-100 transition-colors">
                        <Link 
                            href="/docs/icons"
                            className="group relative flex h-full flex-col gap-2 p-12 no-underline"
                        >
                            <h2 className="text-xl font-semibold text-gray-1000">
                                Grid
                            </h2>
                            <p className="text-gray-900 text-md font-normal">
                                Layout system for every screen size.
                            </p>
                        </Link>
                    </div>
                    <div className="border-b border-gray-alpha-400 hover:bg-background-100 transition-colors">
                        <Link 
                            href="/docs/icons"
                            className="group relative flex h-full flex-col gap-2 p-12 no-underline"
                        >
                        <h2 className="text-xl font-semibold text-gray-1000">
                            Typefaces
                        </h2>
                        <p className="text-gray-900 text-md font-normal">
                            Typography system for every application.
                        </p>
                        </Link>
                    </div>
                </div>
            </div>
            <PageFooter />
        </>
    );
};