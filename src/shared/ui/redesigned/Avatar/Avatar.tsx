import { type CSSProperties, useMemo } from 'react'
import AvatarImage from '@/shared/assets/icons/user.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import { AppImage } from '../../redesigned/AppImage'
import { Icon } from '../Icon'
import { Skeleton } from '../Skeleton'

interface AvatarProps {
    className?: string
    alt?: string
    src?: string
    size?: number
}

export const Avatar = (props: AvatarProps) => {
    const { className, src, size = 100, alt } = props

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    )

    const errorFallback = (
        <Icon
            Svg={AvatarImage}
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
        />
    )
    const fallback = (
        <Skeleton
            width={size}
            height={size}
            border={'50%'}
        />
    )

    return (
        <AppImage
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            style={styles}
            alt={alt}
            fallback={fallback}
            errorFallback={errorFallback}
        />
    )
}
