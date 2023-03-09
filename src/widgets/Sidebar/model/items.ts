import { RoutePath } from 'app/providers/router/routeConfig/routeConfig'
import HomeIcon from '../assets/home.svg'
import AboutIcon from '../assets/about.svg'
import ProfileIcon from '../assets/profile.svg'

export interface SidebarItemsType {
    path: string
    text: string
    Icon: React.VFC<React.SVGAttributes<SVGElement>>
}

export const SidebarItemsList: SidebarItemsType[] = [
    {
        path: RoutePath.main,
        text: 'Главная',
        Icon: HomeIcon
    },
    {
        path: RoutePath.about,
        text: 'О нас',
        Icon: AboutIcon
    },
    {
        path: RoutePath.profile,
        text: 'Профиль',
        Icon: ProfileIcon
    }
]
