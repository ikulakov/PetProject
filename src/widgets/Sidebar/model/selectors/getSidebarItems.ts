import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import { RoutePath } from '@/shared/const/router'
import AboutIcon from '../../assets/about.svg'
import ArticlesIcon from '../../assets/articles.svg'
import HomeIcon from '../../assets/home.svg'
import ProfileIcon from '../../assets/profile.svg'
import { type SidebarItemsType } from '../types/sidebar'

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const SidebarItemsList: SidebarItemsType[] = [
            {
                path: RoutePath.main,
                text: 'Главная',
                Icon: HomeIcon
            },
            {
                path: RoutePath.about,
                text: 'О нас',
                Icon: AboutIcon
            }
        ]

        if (userData) {
            SidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
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
            )
        }

        return SidebarItemsList
    }
)
