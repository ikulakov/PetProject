import cls from './ProfileCard.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { Profile } from '../../model/types/profile'
import Loader from 'shared/ui/Loader/Loader'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { CurrencySelect } from '../../../Currency/ui/CurrencySelect'
import { Currency } from 'entities/Currency'
import { CountrySelect } from '../../../Country/ui/CountrySelect'
import { Country } from 'entities/Country'

interface ProfileCardProps {
    className?: string
    data?: Profile
    error?: string
    isLoading?: boolean
    readonly?: boolean
    onChangeFirstname?: (val?: string) => void
    onChangeLastname?: (val?: string) => void
    onChangeAge?: (val?: string) => void
    onChangeCity?: (val?: string) => void
    onChangeAvatar?: (val?: string) => void
    onChangeUsername?: (val?: string) => void
    onChangeCurrency?: (currency?: Currency) => void
    onChangeCountry?: (country?: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry
    } = props
    const { t } = useTranslation('profile')

    // const countryOptions = useMemo(() => Object.entries(Country).map((val) => ({ value: val[0], content: val[1] })), [])

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        )
    }
    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля:') + error}
                    text={t('Попробуйте обновить страницу')}
                />
            </div>
        )
    }
    return (
        <div
            className={classNames(cls.ProfileCard, {}, [className])}
        >
            <div className={cls.data}>
                <div>
                    {data?.avatar &&
                        <div className={cls.avatarWrapper}>
                            <Avatar
                                src={data.avatar}
                                size={180}
                            />
                        </div>
                    }
                </div>
                <div className={cls.fields}>
                    <Input
                        value={data?.first}
                        placeholder={t('Ваше имя')}
                        label={t('Ваше имя')}
                        className={cls.input}
                        readonly={readonly}
                        onChange={onChangeFirstname}
                    />
                    <Input
                        value={data?.lastname}
                        placeholder={t('Ваша фамилия')}
                        label={t('Ваша фамилия')}
                        className={cls.input}
                        readonly={readonly}
                        onChange={onChangeLastname}
                    />
                    <Input
                        value={data?.age}
                        placeholder={t('Ваш возраст')}
                        label={t('Ваш возраст')}
                        className={cls.input}
                        readonly={readonly}
                        onChange={onChangeAge}
                    />
                    <Input
                        value={data?.city}
                        placeholder={t('Город')}
                        label={t('Город')}
                        className={cls.input}
                        readonly={readonly}
                        onChange={onChangeCity}
                    />
                    <Input
                        value={data?.username}
                        placeholder={t('Введите имя пользователя')}
                        label={t('Введите имя пользователя')}
                        className={cls.input}
                        readonly={readonly}
                        onChange={onChangeUsername}
                    />
                    <Input
                        value={data?.avatar}
                        placeholder={t('Введите ссылку на аватар')}
                        label={t('Введите ссылку на аватар')}
                        className={cls.input}
                        readonly={readonly}
                        onChange={onChangeAvatar}
                    />
                    <CurrencySelect
                        value={data?.currency}
                        onChange={onChangeCurrency}
                        readonly={readonly}
                    />
                    <CountrySelect
                        value={data?.country}
                        onChange={onChangeCountry}
                        readonly={readonly}
                    />
                </div>
            </div>
        </div>
    )
}
