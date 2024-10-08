import React from "react";
import { cn } from "../utils/cn";

export interface SearchProps extends React.ComponentPropsWithoutRef<'div'> {
  type?: 'input' | 'button'; // Determines whether to render as input or button
  onSearch?: () => void; // Optional search handler for button
}

const Search = React.forwardRef<HTMLDivElement, SearchProps>(
  ({ className, type = 'input', onSearch, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative flex px-[14px] justify-start items-center h-[34px] w-[200px] text-[14px] rounded-lg border bg-background-100 hover:bg-background-200 border-gray-alpha-400 transition-colors',
          className
        )}
        {...props}
      >
        {type === 'input' ? (
          <input
            className="inline-flex text-gray-600 w-full bg-transparent focus:outline-none"
            type="search"
            placeholder="Search..."
          />
        ) : (
          <button
            className="inline-flex w-full text-gray-600 justify-between items-center bg-transparent focus:outline-none"
            onClick={onSearch}
          >
            <span className="flex">Search...</span>
            <kbd className="pointer-events-none h-5 select-none rounded border border-gray-alpha-400 bg-background-100 px-1.5 font-mono text-[10px] font-medium">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>
        )}
      </div>
    );
  }
);

Search.displayName = 'Search';

export { Search };