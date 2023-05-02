import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import cls from './LangSwitcher.module.scss'
import LangIcon from '../assets/lang.svg'
import { memo } from 'react'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: React.FC<LangSwitcherProps> = memo(({ className }) => {
    const { t, i18n } = useTranslation()

    const toggleLanguage = (): void => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggleLanguage}>
            <LangIcon /> {t('Язык')}
        </Button>
    )
})
