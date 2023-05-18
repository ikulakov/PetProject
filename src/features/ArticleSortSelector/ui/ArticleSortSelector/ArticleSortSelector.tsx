import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleSortField } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { type SortOrder } from '@/shared/types/sort'
import { Select, type SelectOption } from '@/shared/ui/deprecated/Select'
import { ListBox } from '@/shared/ui/redesigned/Popups'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import cls from './ArticleSortSelector.module.scss'

interface ArticleSortSelectorProps {
    className?: string
    sort: ArticleSortField
    order: SortOrder
    onChangeSort: (newSort: ArticleSortField) => void
    onChangeOrder: (newOrder: SortOrder) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className, sort, order, onChangeSort, onChangeOrder } = props
    const { t } = useTranslation()

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию'),
            },
            {
                value: 'desc',
                content: t('убыванию'),
            },
        ],
        [t],
    )

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('дате создания'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('просмотрам'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('названию'),
            },
        ],
        [t],
    )

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <div
                    className={classNames(cls.ArticleSortSelector, {}, [
                        className,
                    ])}
                >
                    <Select
                        label={t('Сортировать по')}
                        options={orderOptions}
                        value={order}
                        onChange={onChangeOrder}
                    />
                    <Select
                        label={t('по')}
                        options={sortFieldOptions}
                        value={sort}
                        onChange={onChangeSort}
                        className={cls.sort}
                    />
                </div>
            }
            on={
                <div
                    className={classNames(
                        cls.ArticleSortSelectorRedesigned,
                        {},
                        [className],
                    )}
                >
                    <VStack gap="8">
                        <Text text={t('Сортировать по')} />
                        <ListBox
                            items={orderOptions}
                            value={order}
                            onChange={onChangeOrder}
                        />
                        <ListBox
                            items={sortFieldOptions}
                            value={sort}
                            onChange={onChangeSort}
                        />
                    </VStack>
                </div>
            }
        />
    )
})
