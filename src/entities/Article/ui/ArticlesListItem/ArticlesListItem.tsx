import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { useTranslation } from 'react-i18next'
import EyeIcon from '@/shared/assets/icons/eye.svg'
import { getRouteArticleDetails } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppImage } from '@/shared/ui/AppImage'
import { AppLink } from '@/shared/ui/AppLink'
import { Avatar } from '@/shared/ui/Avatar'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Icon } from '@/shared/ui/Icon'
import { Skeleton } from '@/shared/ui/Skeleton'
import { Text } from '@/shared/ui/Text'
import cls from './ArticlesListItem.module.scss'
import { type Article, type ArticleTextBlock, type ArticleView } from '../../model/types/article'
import { ArticleTextBlockComponent } from '../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent'

interface ArticlesListItemProps {
    className?: string
    article: Article
    view: ArticleView
    target?: HTMLAttributeAnchorTarget
}

export const ArticlesListItem = memo((props: ArticlesListItemProps) => {
    const {
        className,
        article,
        view,
        target
    } = props

    const { t } = useTranslation()

    const types = <Text text={article.type.join(', ')} className={cls.types}/>
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon}/>
        </>
    )

    if (view === 'list') {
        const textBlock = article.blocks.find(block => block.type === 'TEXT') as ArticleTextBlock

        return (
            <div
                className={classNames(cls.ArticlesListItem, {}, [className, cls[view]])}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar src={article.user.avatar} size={30}/>
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.date} />
                    {types}
                    <AppImage
                        fallback={<Skeleton width={'100%'} height={250} />}
                        alt={article.title} 
                        src={article.img} 
                        className={cls.img} 
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <Button
                            theme={ButtonTheme.OUTLINE}
                        >
                            <AppLink to={getRouteArticleDetails(article.id)} target={target}>
                                {t('Читать далее')}
                            </AppLink>
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <AppLink to={getRouteArticleDetails(article.id)} target={target}>
                <Card className={cls.card}>
                    <div className={cls.imageWrapper}>
                        <AppImage 
                            alt={article.title} 
                            src={article.img} 
                            className={cls.img}
                            fallback={<Skeleton width={200} height={200} />}
                        />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <div className={cls.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text text={article.title} className={cls.title} />
                </Card>
            </AppLink>
        </div>
    )
})
