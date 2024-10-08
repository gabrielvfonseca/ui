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

interface DocsSidebarNavItemsProps {
    items: SidebarNavItem[]
    pathname: string | null
}