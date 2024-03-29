import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticlesList } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi'

interface ArticleRecommendationsListProps {
    className?: string
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props
        const { t } = useTranslation()
        const { data: articles, isLoading } = useArticleRecommendationsList(3)

        if (isLoading || !articles) {
            return null
        }

        return (
            <VStack
                className={classNames('', {}, [className])}
                gap="8"
                data-testid="ArticleRecommendationsList"
            >
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Text
                            title={t('Рекоммендуем')}
                            size="size_l"
                        />
                    }
                    off={
                        <TextDeprecated
                            title={t('Рекоммендуем')}
                            size={TextSize.L}
                        />
                    }
                />
                <ArticlesList
                    articles={articles}
                    target="_blank"
                />
            </VStack>
        )
    },
)
