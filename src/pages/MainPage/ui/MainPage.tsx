import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page/Page'

const MainPage: React.FC = memo(() => {
    const { t } = useTranslation()

    return (
        <Page>
            <h1>{t('Главная страница')}</h1>
            {t('Контент на главной')}
        </Page>
    )
})

export default MainPage
