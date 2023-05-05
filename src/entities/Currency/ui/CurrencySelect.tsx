import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ListBox } from '@/shared/ui/Popups'
import { Currency } from '../model/types/currency'

interface CurrencySelectProps {
    className?: string
    value?: Currency
    readonly?: boolean
    onChange?: (value: Currency) => void
}

const currencyOptions = Object.entries(Currency).map((val) => ({
    value: val[0],
    content: val[1],
}))

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { className, value, readonly, onChange } = props
    const { t } = useTranslation()

    const onChangeCurrencySelect = useCallback(
        (value: string) => {
            onChange?.(value as Currency)
        },
        [onChange],
    )

    return (
        <ListBox
            value={value}
            items={currencyOptions}
            // label={t('Укажите валюту')}
            className={className}
            onChange={onChangeCurrencySelect}
            readonly={readonly}
            defaultValue={t('Укажите валюту')}
            label={t('Укажите валюту')}
            direction="top left"
        />
    )
})
