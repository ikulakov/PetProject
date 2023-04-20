import { type CSSProperties, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Skeleton.module.scss'

interface SkeletonProps {
    className?: string
    height?: number | string
    width?: number | string
    border?: number | string
}

export const Skeleton: FC<SkeletonProps> = (props) => {
    const {
        className,
        border,
        width,
        height
    } = props

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border
    }

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        >

        </div>
    )
}
