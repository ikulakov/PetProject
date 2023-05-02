import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Loader.module.scss'

interface LoaderProps {
    className?: string
}

export const Loader: React.FC<LoaderProps> = ({ className }) => {
    return (
        <div className={classNames(cls.Loader, {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
