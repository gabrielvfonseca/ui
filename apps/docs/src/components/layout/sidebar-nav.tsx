"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@repo/ui/utils/cn";
import { siteConfig } from "@config/site";
import { useMediaQuery } from "@hooks/use-media-query";
import { buttonVariants } from "../../../../../ui/src/components/button";

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: any;
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)

export interface DocsSidebarNavProps {
  items: SidebarNavItem[]
}

export function Sidebar ({ items }: DocsSidebarNavProps) {
  const pathname = usePathname();

  return (
    <>
      <div className="z-100 absolute top-0 w-full">
        <div className="border-b border-gray-alpha-400 shadow-sm bg-background-100 h-[70px] flex w-full px-4">
          <div className="flex grow items-center gap-4 py-4 pl-px xl:w-[237px] xl:grow-0">
            <Link 
              className="font-normal text-sm text-gray-1000 flex items-center gap-4 no-underline" 
              href="/"
            >
              {siteConfig.siteName}
            </Link>
          </div>
        </div>
      </div>

      <nav className="py-8 mt-[70px] px-4">
        {
          items.length ? (
            <div className="w-full">
              {items.map((item, index) => (
                <div key={index} className={cn("pb-8")}>
                  <h4 className="mb-1 px-2 py-1 text-sm font-medium">
                    {item.title}
                  </h4>
                  {item.items ? (
                    <DocsSidebarNavItems items={item.items} pathname={pathname} />
                  ) : null}
                </div>
              ))}
            </div>
          ) : null
        }
      </nav>
    </>
  )
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[]
  pathname: string | null
}

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        !item.disabled && item.href ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "flex w-full items-center font-normal rounded-md p-2",
              {
                "hover:bg-gray-100 text-gray-700": pathname === item.href,
                "hover:bg-gray-200 text-gray-700": pathname !== item.href,
              }
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
          </Link>
        ) : (
          <span className="flex w-full cursor-not-allowed items-center rounded-md p-2 text-gray-500">
            {item.title}
          </span>
        )
      )}
    </div>
  ) : null
}
