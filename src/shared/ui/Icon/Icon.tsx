import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Icon.module.scss'
import { memo } from 'react'

export const enum IconTheme {
    LIGHT = 'light_icon',
    DARK = 'dark_icon'
}

interface IconProps {
    className?: string
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
    theme?: IconTheme
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        theme = IconTheme.LIGHT
    } = props

    return (
        <Svg className={classNames(cls.Icon, {}, [className, cls[theme]])} />
    )
})
