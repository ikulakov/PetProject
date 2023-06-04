import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import CalendarIcon from '@/shared/assets/icons/calendar.svg'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import {
    Text as TextDeprecated,
    TextSize,
    TextTheme,
} from '@/shared/ui/deprecated/Text'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import cls from './ArticleDetails.module.scss'
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData/getArticleDetailsData'
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError'
import { getArticleDetailsIsLoading } from '../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading'
import { getArticleById } from '../../model/services/getArticleById/getArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice/articleDetailsSlice'
import { type ArticleBlock } from '../../model/types/article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

interface ArticleDetailsProps {
    className?: string
    id: string
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
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

export const ArticleDetailsSkeleton = () => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <>
                    <Skeleton
                        width={600}
                        height={35}
                    />
                    <Skeleton
                        width={400}
                        height={30}
                    />
                    <Skeleton
                        width={'100%'}
                        height={420}
                        border={'16px'}
                    />
                    <Skeleton
                        width={'100%'}
                        height={200}
                    />
                </>
            }
            off={
                <>
                    <Skeleton
                        className={cls.avatar}
                        border={'50%'}
                        width={200}
                        height={200}
                    />
                    <Skeleton
                        className={cls.title}
                        width={300}
                        height={32}
                    />
                    <Skeleton
                        className={cls.skeleton}
                        width={600}
                        height={24}
                    />
                    <Skeleton
                        className={cls.skeleton}
                        width={'100%'}
                        height={200}
                    />
                </>
            }
        />
    )
}

const Redesigned = () => {
    const article = useSelector(getArticleDetailsData)
    return (
        <>
            <Text
                title={article?.title}
                size="size_l"
                bold
            />
            <Text title={article?.subtitle} />
            <AppImage
                fallback={
                    <Skeleton
                        width={'100%'}
                        height={420}
                        border={'16px'}
                    />
                }
                src={article?.img}
                className={cls.img}
            />
            <VStack gap="32">{article?.blocks.map(renderBlock)}</VStack>
        </>
    )
}

const Deprecated = () => {
    const article = useSelector(getArticleDetailsData)
    return (
        <>
            <HStack
                justify="center"
                max
            >
                <AvatarDeprecated
                    src={article?.img}
                    size={200}
                    className={cls.avatar}
                />
            </HStack>
            <TextDeprecated
                title={article?.title}
                text={article?.subtitle}
                theme={TextTheme.PRIMARY}
                size={TextSize.L}
            />
            <HStack gap="8">
                <IconDeprecated
                    Svg={EyeIcon}
                    width={'24px'}
                    height={'24px'}
                />
                <TextDeprecated text={String(article?.views)} />
            </HStack>
            <HStack gap="8">
                <IconDeprecated
                    Svg={CalendarIcon}
                    width={'24px'}
                    height={'24px'}
                />
                <TextDeprecated text={article?.createdAt} />
            </HStack>
            <VStack gap="32">{article?.blocks.map(renderBlock)}</VStack>
        </>
    )
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props

    const { t } = useTranslation('article_details')
    const dispatch = useAppDispatch()

    const isLoading = useSelector(getArticleDetailsIsLoading)
    const error = useSelector(getArticleDetailsError)

    useInitialEffect(() => {
        dispatch(getArticleById(id))
    })

    const content = isLoading ? (
        <ArticleDetailsSkeleton />
    ) : error ? (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Text
                    text={t('Произошла ошибка при загрузке статьи')}
                    variant="error"
                />
            }
            off={
                <TextDeprecated
                    text={t('Произошла ошибка при загрузке статьи')}
                    theme={TextTheme.ERROR}
                />
            }
        />
    ) : (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<Redesigned />}
            off={<Deprecated />}
        />
    )

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack
                className={classNames(cls.ArticleDetails, {}, [className])}
                gap="16"
                max
                data-testid="ArticleDetails"
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    )
})
