import cls from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
    className?: string
}

export const LoginForm = (props: LoginFormProps) => {
    const {
        className
    } = props
    const { t } = useTranslation()

    return (
        <div
            className={classNames(cls.LoginForm, {}, [className])}
        >
            <Input className={cls.input} autofocus/>
            <Input className={cls.input} />
            <Button className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    )
}
