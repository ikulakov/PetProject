import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Page } from 'widgets/Page/Page'

interface AdminPanelPageProps {
    className?: string
}

const AdminPanelPage = (props: AdminPanelPageProps) => {
    const { t } = useTranslation('admin')

    return (
        <Page>
            {t('Админ панель')}
        </Page>
    )
}

export default memo(AdminPanelPage)
