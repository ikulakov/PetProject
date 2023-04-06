import cls from './Avatar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { CSSProperties, useMemo } from 'react'

interface AvatarProps {
    className?: string
    alt?: string
    src?: string
    size?: number
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        size,
        alt
    } = props

    console.log('render avatar')

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size
    }), [size])

    return (
        <img
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            style={styles}
            alt={alt}
        />
    )
}
