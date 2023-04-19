import cls from './ForbiddenPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

interface ForbiddenPageProps {
    className?: string
}

const ForbiddenPage = memo((props: ForbiddenPageProps) => {
    const {
        className
    } = props
    const { t } = useTranslation()

    return (
        <div
            className={classNames(cls.ForbiddenPage, {}, [className])}
        >
            {t('У вас нет доступа к данной странице')}
        </div>
    )
})

export default ForbiddenPage
