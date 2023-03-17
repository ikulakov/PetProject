import { RoutePath } from 'app/providers/router/routeConfig/routeConfig'
import HomeIcon from '../assets/home.svg'
import AboutIcon from '../assets/about.svg'
import ProfileIcon from '../assets/profile.svg'
import ArticlesIcon from '../assets/articles.svg'

export interface SidebarItemsType {
    path: string
    text: string
    Icon: React.VFC<React.SVGAttributes<SVGElement>>
    authOnly?: boolean
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
        Icon: ProfileIcon,
        authOnly: true
    },
    {
        path: RoutePath.articles,
        text: 'Статьи',
        Icon: ArticlesIcon,
        authOnly: true
    }
]
