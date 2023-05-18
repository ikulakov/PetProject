import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleSortField, ArticleType } from '@/entities/Article'
import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs'
import SearchIcon from '@/shared/assets/icons/search.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { SortOrder } from '@/shared/types/sort'
import { Card } from '@/shared/ui/redesigned/Card'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Input } from '@/shared/ui/redesigned/Input'
import { VStack } from '@/shared/ui/redesigned/Stack'
import cls from './ArticlesFilters.module.scss'

interface ArticlesFiltersProps {
    className?: string
    sort: ArticleSortField
    onChangeSort: (newSort: ArticleSortField) => void
    order: SortOrder
    onChangeOrder: (newOrder: SortOrder) => void
    type: ArticleType
    onChangeTab: (type: ArticleType) => void
    search: string
    onChangeSearch: (query: string) => void
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
    const {
        className,
        onChangeOrder,
        onChangeSearch,
        onChangeSort,
        onChangeTab,
        order,
        search,
        sort,
        type,
    } = props
    const { t } = useTranslation()

    return (
        <Card
            className={classNames(cls.ArticlesFilters, {}, [className])}
            padding="24"
        >
            <VStack gap="32">
                <Input
                    placeholder={t('Поиск')}
                    value={search}
                    onChange={onChangeSearch}
                    addonLeft={
                        <Icon
                            Svg={SearchIcon}
                            width={'20px'}
                            height={'20px'}
                        />
                    }
                />
                <ArticleTypeTabs
                    value={type}
                    onChangeTab={onChangeTab}
                    className={cls.tabs}
                />
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
            </VStack>
        </Card>
    )
})
