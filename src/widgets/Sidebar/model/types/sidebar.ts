export interface SidebarItemsType {
    path: string
    text: string
    Icon: React.VFC<React.SVGAttributes<SVGElement>>
    authOnly?: boolean
}
