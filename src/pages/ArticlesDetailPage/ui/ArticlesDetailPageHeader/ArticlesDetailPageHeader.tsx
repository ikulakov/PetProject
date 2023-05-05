import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getArticleDetailsData } from '@/entities/Article'
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import cls from './ArticlesDetailPageHeader.module.scss'
import { getCanEditArticle } from '../../model/selectors/getCanEditArticle'

interface ArticlesDetailPageHeaderProps {
    className?: string
}

export const ArticlesDetailPageHeader = memo(
    (props: ArticlesDetailPageHeaderProps) => {
        const { className } = props
        const { t } = useTranslation()
        const navigate = useNavigate()

        const article = useSelector(getArticleDetailsData)
        const canEdit = useSelector(getCanEditArticle)

        const onBackToList = useCallback(() => {
            navigate(getRouteArticles())
        }, [navigate])

        const onEditArticle = useCallback(() => {
            if (article) {
                navigate(getRouteArticleEdit(article.id))
            }
        }, [article, navigate])

        return (
            <div
                className={classNames(cls.ArticlesDetailPageHeader, {}, [
                    className,
                ])}
            >
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onBackToList}
                >
                    {t('Назад к списку')}
                </Button>
                {canEdit && (
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEditArticle}
                        className={cls.editBtn}
                    >
                        {t('Редактировать')}
                    </Button>
                )}
            </div>
        )
    },
)
