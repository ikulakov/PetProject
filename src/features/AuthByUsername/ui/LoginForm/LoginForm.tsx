import cls from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selector/getLoginState'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo((props: LoginFormProps) => {
    const {
        className
    } = props
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { username, password, error, isLoading } = useSelector(getLoginState)

    const onUsernameChange = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])

    const onPasswordChange = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onFormSubmit = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, username, password])

    // if (isLoading) return <Loader />
    return (
        <div
            className={classNames(cls.LoginForm, {}, [className])}
        >
            <Text title={t('Форма авторизации')} />
            <Input
                className={cls.input}
                value={username}
                placeholder={t('Введите имя')}
                onChange={onUsernameChange}
                autofocus
            />
            <Input
                className={cls.input}
                onChange={onPasswordChange}
                placeholder={t('Введите пароль')}
                value={password}
            />
            <Button
                className={cls.loginBtn}
                theme={ButtonTheme.BACKGOUND_INVERTED}
                onClick={onFormSubmit}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
            {error && <Text text={t('Пользователь ввел неверный логин или пароль')} theme={TextTheme.ERROR} />}
        </div>
    )
})
