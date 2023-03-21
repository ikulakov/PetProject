import { classNames } from 'shared/lib/classNames/classNames'
import { Select } from 'shared/ui/Select/Select'
import { Country } from '../model/types/country'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'

interface CountrySelectProps {
    className?: string
    value?: Country
    readonly?: boolean
    onChange?: (value: Country) => void
}

const countryOptions = Object.entries(Country).map((val) => ({ value: val[0], content: val[1] }))

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        readonly,
        onChange
    } = props
    const { t } = useTranslation()

    const onChangeCountrySelect = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])

    return (
        <Select
            value={value}
            options={countryOptions}
            label={t('Укажите страну')}
            className={classNames('', {}, [className])}
            onChange={onChangeCountrySelect}
            readonly={readonly}
        />
    )
})
