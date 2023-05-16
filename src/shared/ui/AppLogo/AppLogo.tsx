import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AppLogo.module.scss'
import { HStack } from '../Stack'

interface AppLogoProps {
    className?: string
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className } = props

    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <div className={cls.gradientBig}></div>
            <div className={cls.gradientSmall}></div>
            {/* LogoSvg */}
            <div className={cls.appLogo}></div>
        </HStack>
    )
})
