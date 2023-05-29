import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ToggleFeatures } from '@/shared/lib/features'
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups'
import { ListBox } from '@/shared/ui/redesigned/Popups'
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

    const listProps = {
        value,
        items: currencyOptions,
        className,
        readonly,
        onChange: onChangeCurrencySelect,
        defaultValue: t('Укажите валюту'),
        label: t('Укажите валюту'),
        direction: 'top left' as const,
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={<ListBoxDeprecated {...listProps} />}
            on={<ListBox {...listProps} />}
        />
    )
})
