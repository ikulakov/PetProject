import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text'
import { Button } from '@/shared/ui/redesigned/Button'
import { Input } from '@/shared/ui/redesigned/Input'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import cls from './LoginForm.module.scss'
import { getLoginError } from '../../model/selector/getLoginError'
import { getLoginIsLoading } from '../../model/selector/getLoginIsLoading'
import { getLoginPassword } from '../../model/selector/getLoginPassword'
import { getLoginUsername } from '../../model/selector/getLoginUsername'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'

export interface LoginFormProps {
    className?: string
    onSuccess: () => void
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
}

const LoginForm = memo((props: LoginFormProps) => {
    const { className, onSuccess } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const username = useSelector(getLoginUsername)
    const password = useSelector(getLoginPassword)
    const error = useSelector(getLoginError)
    const isLoading = useSelector(getLoginIsLoading)

    const onUsernameChange = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value))
        },
        [dispatch],
    )

    const onPasswordChange = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value))
        },
        [dispatch],
    )

    const onFormSubmit = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }))
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }, [onSuccess, dispatch, username, password])

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount
        >
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <VStack
                        className={classNames(cls.LoginFormRedesigned, {}, [
                            className,
                        ])}
                        gap="16"
                    >
                        <Text title={t('Форма авторизации')} />
                        <Input
                            value={username}
                            placeholder={t('Введите имя')}
                            onChange={onUsernameChange}
                            autofocus
                        />
                        <Input
                            onChange={onPasswordChange}
                            placeholder={t('Введите пароль')}
                            value={password}
                        />
                        <Button
                            className={cls.loginBtn}
                            // eslint-disable-next-line @typescript-eslint/no-misused-promises
                            onClick={onFormSubmit}
                            disabled={isLoading}
                        >
                            {t('Войти')}
                        </Button>
                        {error && (
                            <Text
                                text={t(
                                    'Пользователь ввел неверный логин или пароль',
                                )}
                                variant="error"
                            />
                        )}
                    </VStack>
                }
                off={
                    <div className={classNames(cls.LoginForm, {}, [className])}>
                        <TextDeprecated title={t('Форма авторизации')} />
                        <InputDeprecated
                            className={cls.input}
                            value={username}
                            placeholder={t('Введите имя')}
                            onChange={onUsernameChange}
                            autofocus
                        />
                        <InputDeprecated
                            className={cls.input}
                            onChange={onPasswordChange}
                            placeholder={t('Введите пароль')}
                            value={password}
                        />
                        <ButtonDeprecated
                            className={cls.loginBtn}
                            theme={ButtonTheme.BACKGOUND_INVERTED}
                            // eslint-disable-next-line @typescript-eslint/no-misused-promises
                            onClick={onFormSubmit}
                            disabled={isLoading}
                        >
                            {t('Войти')}
                        </ButtonDeprecated>
                        {error && (
                            <TextDeprecated
                                text={t(
                                    'Пользователь ввел неверный логин или пароль',
                                )}
                                theme={TextTheme.ERROR}
                            />
                        )}
                    </div>
                }
            />
        </DynamicModuleLoader>
    )
})

export default LoginForm
