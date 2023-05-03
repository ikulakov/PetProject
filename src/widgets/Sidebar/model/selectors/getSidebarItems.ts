import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/const/router'
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
                path: getRouteMain(),
                text: 'Главная',
                Icon: HomeIcon
            },
            {
                path: getRouteAbout(),
                text: 'О нас',
                Icon: AboutIcon
            }
        ]

        if (userData) {
            SidebarItemsList.push(
                {
                    path: getRouteProfile(userData.id),
                    text: 'Профиль',
                    Icon: ProfileIcon,
                    authOnly: true
                },
                {
                    path: getRouteArticles(),
                    text: 'Статьи',
                    Icon: ArticlesIcon,
                    authOnly: true
                }
            )
        }

        return SidebarItemsList
    }
)
