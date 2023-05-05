import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Icon.module.scss'

export const enum IconTheme {
    LIGHT = 'light_icon',
    DARK = 'dark_icon',
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string
    Svg: React.FC<React.SVGProps<SVGSVGElement>>
    theme?: IconTheme
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, theme = IconTheme.LIGHT, ...rest } = props

    return (
        <Svg
            className={classNames(cls.Icon, {}, [className, cls[theme]])}
            {...rest}
        />
    )
})
