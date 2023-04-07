import { useTranslation } from 'react-i18next'
import cls from './NotFoundPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Page } from 'shared/ui/Page/Page'

interface NotFoundPageProps {
    className?: string
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation()

    return (
        <Page className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </Page>
    )
}

export default NotFoundPage
