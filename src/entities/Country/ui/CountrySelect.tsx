import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ListBox } from '@/shared/ui/Popups'
import { Country } from '../model/types/country'

interface CountrySelectProps {
    className?: string
    value?: Country
    readonly?: boolean
    onChange?: (value: Country) => void
}

const countryOptions = Object.entries(Country).map((val) => ({
    value: val[0],
    content: val[1],
}))

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, readonly, onChange } = props
    const { t } = useTranslation()

    const onChangeCountrySelect = useCallback(
        (value: string) => {
            onChange?.(value as Country)
        },
        [onChange],
    )

    return (
        <ListBox
            value={value}
            items={countryOptions}
            label={t('Укажите страну')}
            defaultValue={t('Укажите страну')}
            className={classNames('', {}, [className])}
            onChange={onChangeCountrySelect}
            readonly={readonly}
        />
    )
})
