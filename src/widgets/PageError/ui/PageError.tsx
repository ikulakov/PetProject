import cls from './PageError.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui/Button'

interface PageErrorProps {
    className?: string
}

export const PageError: React.FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation()
    const ReloadPage = () => {
        location.reload()
    }
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <div>{t('Ошибка')}</div>
            <Button
                onClick={ReloadPage}
            >
                {t('Обновить страницу')}
            </Button>
        </div>
    )
}
