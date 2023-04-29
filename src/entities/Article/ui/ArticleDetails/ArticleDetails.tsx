import cls from './ArticleDetails.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getArticleById } from '../../model/services/getArticleById/getArticleById'
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData/getArticleDetailsData'
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError'
import { getArticleDetailsIsLoading } from '../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice/articleDetailsSlice'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import EyeIcon from '../../../../shared/assets/icons/eye.svg'
import CalendarIcon from '../../../../shared/assets/icons/calendar.svg'
import { Icon } from '@/shared/ui/Icon/Icon'
import { type ArticleBlock } from '@/entities/Article/model/types/article'
import { ArticleTextBlockComponent } from '@/entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent'
import { ArticleCodeBlockComponent } from '@/entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '@/entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent'
import { useInitialEffect } from '../../../../shared/lib/hooks/useInitialEffect/useInitialEffect'
import { HStack, VStack } from '@/shared/ui/Stack'

interface ArticleDetailsProps {
    className?: string
    id: string
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer
}

const renderBlock = (block: ArticleBlock) => {
    switch (block.type) {
        case 'TEXT':
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    block={block}
                />
            )
        case 'CODE':
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                />
            )
        case 'IMAGE':
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block}
                />
            )
        default:
            return null
    }
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const {
        className,
        id
    } = props

    const { t } = useTranslation('article_details')
    const dispatch = useAppDispatch()

    const article = useSelector(getArticleDetailsData)
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const error = useSelector(getArticleDetailsError)

    useInitialEffect(() => {
        dispatch(getArticleById(id))
    })

    const content = isLoading
        ? (
            <>
                <Skeleton className={cls.avatar} border={'50%'} width={200} height={200} />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width={'100%'} height={200} />
            </>
        )
        : error
            ? (
                <Text
                    text={t('Произошла ошибка при загрузке статьи')}
                    theme={TextTheme.ERROR}
                />
            )
            : (
                <>
                    <HStack justify='center' max>
                        <Avatar
                            src={article?.img}
                            size={200}
                            className={cls.avatar}
                        />
                    </HStack>
                    <Text
                        title={article?.title}
                        text={article?.subtitle}
                        theme={TextTheme.PRIMARY}
                        size={TextSize.L}
                    />
                    <HStack gap='8'>
                        <Icon Svg={EyeIcon} />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack gap='8'>
                        <Icon Svg={CalendarIcon} />
                        <Text text={article?.createdAt} />
                    </HStack>
                    <VStack gap='32'>
                        {article?.blocks.map(renderBlock)}
                    </VStack>
                </>
            )

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack
                className={classNames(cls.ArticleDetails, {}, [className])}
                gap='16'
                max
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    )
})
