import { type CSSProperties, useMemo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'

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
