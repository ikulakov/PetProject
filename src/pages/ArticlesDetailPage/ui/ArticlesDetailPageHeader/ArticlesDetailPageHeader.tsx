import cls from './ArticlesDetailPageHeader.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from '@/app/providers/router/routeConfig/routeConfig'
import { useSelector } from 'react-redux'
import { getCanEditArticle } from '../../model/selectors/getCanEditArticle'
import { getArticleDetailsData } from '@/entities/Article'

interface ArticlesDetailPageHeaderProps {
    className?: string
}

export const ArticlesDetailPageHeader = memo((props: ArticlesDetailPageHeaderProps) => {
    const {
        className
    } = props
    const { t } = useTranslation()
    const navigate = useNavigate()

    const article = useSelector(getArticleDetailsData)
    const canEdit = useSelector(getCanEditArticle)

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    const onEditArticle = useCallback(() => {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        navigate(`${RoutePath.articles}/${article?.id}/edit`)
    }, [navigate, article?.id])

    return (
        <div
            className={classNames(cls.ArticlesDetailPageHeader, {}, [className])}
        >
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onBackToList}
            >
                {t('Назад к списку')}
            </Button>
            {canEdit &&
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEditArticle}
                    className={cls.editBtn}
                >
                    {t('Редактировать')}
                </Button>
            }
        </div>
    )
})
