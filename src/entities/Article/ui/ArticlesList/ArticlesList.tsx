import cls from './ArticlesList.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem'
import { Article, ArticleView } from '../../model/types/article'
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticlesListItem/ArticleListItemSkeleton'

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

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>
                {new Array(view === 'grid' ? 9 : 3)
                    .fill(0)
                    .map((_, index) => (
                        <ArticleListItemSkeleton view={view} key={index} className='' />
                    ))}
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
        </div>
    )
})
