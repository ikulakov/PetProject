import { ArticleDetails } from 'entites/Article'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesDetailPage.module.scss'

interface ArticlesDetailPageProps {
    className?: string
}

const ArticlesDetailPage: FC<ArticlesDetailPageProps> = (props) => {
    const { className } = props
    const { t } = useTranslation('article_details')
    const { id: articleId } = useParams<{ id: string }>()

    if (!articleId) {
        return (
            <div className={classNames(cls.articlesDetailPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        )
    }

    return (
        <div className={classNames(cls.articlesDetailPage, {}, [className])}>
            <ArticleDetails id={articleId} />
        </div>
    )
}

export default memo(ArticlesDetailPage)
