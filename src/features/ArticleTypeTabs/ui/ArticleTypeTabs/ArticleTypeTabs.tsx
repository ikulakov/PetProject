import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleType } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import {
    type TabItem,
    Tabs as TabsDeprecated,
} from '@/shared/ui/deprecated/Tabs'
import { Tabs } from '@/shared/ui/redesigned/Tabs'

interface ArticleTypeTabsProps {
    className?: string
    value: ArticleType
    onChangeTab: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeTab } = props
    const { t } = useTranslation()

    const onClickTab = useCallback(
        (tab: TabItem) => {
            onChangeTab(tab.value as ArticleType)
        },
        [onChangeTab],
    )

    const tabs = useMemo<TabItem[]>(
        () => [
            {
                content: t('Все'),
                value: ArticleType.ALL,
            },
            {
                content: t('Экономика'),
                value: ArticleType.ECONOMICS,
            },
            {
                content: t('IT'),
                value: ArticleType.IT,
            },
            {
                content: t('Наука'),
                value: ArticleType.SCIENCE,
            },
        ],
        [t],
    )

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <TabsDeprecated
                    className={classNames('', {}, [className])}
                    tabs={tabs}
                    onTabClick={onClickTab}
                    value={value}
                />
            }
            on={
                <Tabs
                    className={classNames('', {}, [className])}
                    tabs={tabs}
                    onTabClick={onClickTab}
                    value={value}
                    direction="column"
                />
            }
        />
    )
})
