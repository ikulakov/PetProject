import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated'
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned'
import { type Article, type ArticleView } from '../../model/types/article'

export interface ArticlesListItemProps {
    className?: string
    article: Article
    view: ArticleView
    target?: HTMLAttributeAnchorTarget
}

export const ArticlesListItem = memo((props: ArticlesListItemProps) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={<ArticleListItemDeprecated {...props} />}
            on={<ArticleListItemRedesigned {...props} />}
        />
    )
})
