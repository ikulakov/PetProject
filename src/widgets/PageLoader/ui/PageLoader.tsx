import cls from './PageLoader.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import Loader from 'shared/ui/Loader/Loader'

interface PageLoaderProps {
    className?: string
}

const PageLoader: React.FC<PageLoaderProps> = ({ className }) => {
    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader />
        </div>
    )
}

export default PageLoader