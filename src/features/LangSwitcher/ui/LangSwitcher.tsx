import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button'
import { Button } from '@/shared/ui/redesigned/Button'
import cls from './LangSwitcher.module.scss'
import LangIcon from '../assets/lang.svg'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: React.FC<LangSwitcherProps> = memo(
    ({ className }) => {
        const { t, i18n } = useTranslation()

        const toggleLanguage = (): void => {
            void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
        }
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                off={
                    <ButtonDeprecated
                        className={classNames(cls.LangSwitcher, {}, [
                            className,
                        ])}
                        theme={ButtonTheme.CLEAR}
                        onClick={toggleLanguage}
                    >
                        <LangIcon
                            width={'24px'}
                            height={'24px'}
                        />{' '}
                        {t('Язык')}
                    </ButtonDeprecated>
                }
                on={
                    <Button
                        variant="clear"
                        onClick={toggleLanguage}
                    >
                        <LangIcon
                            width={'24px'}
                            height={'24px'}
                        />{' '}
                        {t('Язык')}
                    </Button>
                }
            />
        )
    },
)
