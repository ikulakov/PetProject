import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './LangSwitcher.module.scss'
import LangIcon from '../assets/lang.svg'

interface LangSwitcherProps {
    className?: string
}

const LangSwitcher: React.FC<LangSwitcherProps> = ({ className }) => {
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
}

export default LangSwitcher
