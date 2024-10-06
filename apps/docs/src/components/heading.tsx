import React from 'react';

import { cn } from '../../../../ui/src/utils/cn';

interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
}

export default function Heading({
    title,
    description,
    className,
    ...props
}: HeadingProps): JSX.Element {
    return (
        <div className={cn('p-12', className)} {...props}>
            <h1 className='text-4xl mb-4 font-semibold text-gray-1000'>
                {title}
            </h1>
            <p className='text-gray-900 text-lg font-normal'>
                {description}
            </p>
        </div>
    );
}