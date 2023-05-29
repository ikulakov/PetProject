import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text, TextSize } from '@/shared/ui/deprecated/Text'
import { HStack } from '@/shared/ui/redesigned/Stack'
import cls from './ArticlesList.module.scss'
import { type Article, type ArticleView } from '../../model/types/article'
import { ArticleListItemSkeleton } from '../ArticlesListItem/ArticleListItemSkeleton'
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem'

interface ArticlesListProps {
    className?: string
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
}

export const ArticlesList = memo((props: ArticlesListProps) => {
    const { className, articles, isLoading, view = 'grid', target } = props

    const { t } = useTranslation()

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.ArticlesList, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Text
                    title={t('Статьи не найдены')}
                    size={TextSize.L}
                />
            </div>
        )
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <>
                    <HStack
                        max
                        gap="16"
                        className={classNames(cls.ArticlesList, {}, [
                            className,
                            cls[view],
                        ])}
                        data-testid="ArticlesList"
                    >
                        {articles.map((article: Article) => (
                            <ArticlesListItem
                                article={article}
                                view={view}
                                key={article.id}
                                target={target}
                            />
                        ))}
                    </HStack>
                    {isLoading && (
                        <HStack
                            max
                            gap="16"
                            className={classNames(cls.ArticlesList, {}, [
                                cls[view],
                            ])}
                        >
                            {new Array(view === 'grid' ? 9 : 3)
                                .fill(0)
                                .map((_, index) => (
                                    <ArticleListItemSkeleton
                                        view={view}
                                        key={index}
                                    />
                                ))}
                        </HStack>
                    )}
                </>
            }
            on={
                <>
                    <HStack
                        max
                        gap="16"
                        data-testid="ArticlesList"
                        wrap="wrap"
                    >
                        {articles.map((article: Article) => (
                            <ArticlesListItem
                                article={article}
                                view={view}
                                key={article.id}
                                target={target}
                            />
                        ))}
                    </HStack>
                    {isLoading && (
                        <HStack
                            max
                            gap="16"
                            wrap="wrap"
                        >
                            {new Array(view === 'grid' ? 9 : 3)
                                .fill(0)
                                .map((_, index) => (
                                    <ArticleListItemSkeleton
                                        view={view}
                                        key={index}
                                    />
                                ))}
                        </HStack>
                    )}
                </>
            }
        />
    )
})
