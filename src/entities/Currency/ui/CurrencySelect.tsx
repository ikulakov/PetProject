import { classNames } from 'shared/lib/classNames/classNames'
import { Select } from 'shared/ui/Select/Select'
import { Currency } from '../model/types/currency'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'

interface CurrencySelectProps {
    className?: string
    value?: Currency
    readonly?: boolean
    onChange?: (value: Currency) => void
}

const currencyOptions = Object.entries(Currency).map((val) => (
    { value: val[0], content: val[1] }
))

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        value,
        readonly,
        onChange
    } = props
    const { t } = useTranslation()

    const onChangeCurrencySelect = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])

    return (
        <Select
            value={value}
            options={currencyOptions}
            label={t('Укажите валюту')}
            className={classNames('', {}, [className])}
            onChange={onChangeCurrencySelect}
            readonly={readonly}
        />
    )
})
