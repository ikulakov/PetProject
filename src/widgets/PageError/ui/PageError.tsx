import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/deprecated/Button'
import cls from './PageError.module.scss'

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
            <Button onClick={ReloadPage}>{t('Обновить страницу')}</Button>
        </div>
    )
}
