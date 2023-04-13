import cls from './ArticlesList.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem'
import { Article, ArticleView } from '../../model/types/article'
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticlesListItem/ArticleListItemSkeleton'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

interface ArticlesListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
}

export const ArticlesList = memo((props: ArticlesListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = 'grid'
    } = props

    const { t } = useTranslation()

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>
                <Text title={t('Статьи не найдены')} size={TextSize.L} />
            </div>
        )
    }

    return (
        <div
            className={classNames(cls.ArticlesList, {}, [className, cls[view]])}
        >
            {articles
                ? articles.map((article: Article) => (
                    <ArticlesListItem
                        article={article}
                        view={view}
                        key={article.id}
                    />
                ))
                : null
            }
            {isLoading &&
                <div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>
                    {new Array(view === 'grid' ? 9 : 3)
                        .fill(0)
                        .map((_, index) => (
                            <ArticleListItemSkeleton view={view} key={index} className='' />
                        ))}
                </div>
            }
        </div>
    )
})
