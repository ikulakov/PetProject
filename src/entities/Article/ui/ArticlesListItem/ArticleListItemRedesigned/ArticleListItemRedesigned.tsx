import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import { getRouteArticleDetails } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Button } from '@/shared/ui/redesigned/Button'
import { Card } from '@/shared/ui/redesigned/Card'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import cls from './ArticleListItemRedesigned.module.scss'
import { type ArticleTextBlock } from '../../../model/types/article'
import { ArticlesListItemProps } from '../ArticlesListItem'

export const ArticleListItemRedesigned = memo(
    (props: ArticlesListItemProps) => {
        const { className, article, view, target } = props
        const { t } = useTranslation()

        const userInfo = (
            <>
                <Avatar
                    src={article.user.avatar}
                    size={32}
                />
                <Text
                    text={article.user.username}
                    bold
                />
            </>
        )
        const views = (
            <HStack gap="8">
                <Icon
                    Svg={EyeIcon}
                    width={'24px'}
                    height={'24px'}
                />
                <Text text={String(article.views)} />
            </HStack>
        )

        if (view === 'list') {
            const textBlock = article.blocks.find(
                (block) => block.type === 'TEXT',
            ) as ArticleTextBlock

            return (
                <Card
                    className={classNames('', {}, [className, cls[view]])}
                    data-testid="ArticlesListItem"
                    padding="24"
                    max
                >
                    <VStack
                        max
                        gap="16"
                    >
                        <HStack
                            gap="8"
                            max
                        >
                            {userInfo}
                            <Text text={article.createdAt} />
                        </HStack>
                        <Text
                            title={article.title}
                            bold
                        />
                        <Text
                            title={article.subtitle}
                            size="size_s"
                        />
                        <AppImage
                            fallback={
                                <Skeleton
                                    width={'100%'}
                                    height={250}
                                />
                            }
                            alt={article.title}
                            src={article.img}
                            className={cls.img}
                        />
                        {textBlock?.paragraphs && (
                            <Text
                                text={textBlock.paragraphs
                                    .slice(0, 2)
                                    .join(' ')}
                                className={cls.textBlock}
                            />
                        )}
                        <HStack
                            max
                            justify="between"
                        >
                            <AppLink
                                to={getRouteArticleDetails(article.id)}
                                target={target}
                            >
                                <Button variant="outline">
                                    {t('Читать далее')}
                                </Button>
                            </AppLink>
                            {views}
                        </HStack>
                    </VStack>
                </Card>
            )
        }

        return (
            <AppLink
                to={getRouteArticleDetails(article.id)}
                target={target}
                className={classNames('', {}, [className, cls[view]])}
                data-testid="ArticlesListItem"
            >
                <Card
                    className={cls.card}
                    border="round-xs"
                >
                    <AppImage
                        alt={article.title}
                        src={article.img}
                        className={cls.img}
                        fallback={
                            <Skeleton
                                width={'100%'}
                                height={265}
                            />
                        }
                    />
                    <VStack
                        gap="4"
                        className={cls.info}
                    >
                        <Text text={article.title} />
                        <VStack
                            gap="4"
                            max
                            className={cls.footer}
                        >
                            <HStack
                                max
                                justify="between"
                            >
                                <Text text={article.createdAt} />
                                {views}
                            </HStack>
                            <HStack gap="4">{userInfo}</HStack>
                        </VStack>
                    </VStack>
                </Card>
            </AppLink>
        )
    },
)
