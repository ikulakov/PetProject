import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesDetailPage.module.scss'

interface ArticlesDetailPageProps {
    className?: string
}

const ArticlesDetailPage: FC<ArticlesDetailPageProps> = (props) => {
    const { className } = props
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.articlesDetailPage, {}, [className])}>
            {t('Articles Detail Page')}
        </div>
    )
}

export default memo(ArticlesDetailPage)
