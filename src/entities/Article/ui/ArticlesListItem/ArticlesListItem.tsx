import cls from './ArticlesListItem.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import { Article, ArticleTextBlock, ArticleView } from '../../model/types/article'
import { Text } from 'shared/ui/Text/Text'
import { Card } from 'shared/ui/Card/Card'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Icon } from 'shared/ui/Icon/Icon'
import EyeIcon from '../../../../shared/assets/icons/eye.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { ArticleTextBlockComponent } from '../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'app/providers/router/routeConfig/routeConfig'

interface ArticlesListItemProps {
    className?: string
    article: Article
    view: ArticleView
}

export const ArticlesListItem = memo((props: ArticlesListItemProps) => {
    const {
        className,
        article,
        view
    } = props

    const { t } = useTranslation()
    const navigate = useNavigate()

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id)
    }, [article.id, navigate])

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
                    <img alt={article.title} src={article.img} className={cls.img} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onOpenArticle}
                        >
                            {t('Читать далее')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card} onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img alt={article.title} src={article.img} className={cls.img} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </div>
    )
})
