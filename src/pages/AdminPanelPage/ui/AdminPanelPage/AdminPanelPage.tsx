import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Page } from 'widgets/Page/Page'

const AdminPanelPage = () => {
    const { t } = useTranslation('admin')

    return (
        <Page>
            {t('Админ панель')}
        </Page>
    )
}

export default memo(AdminPanelPage)
