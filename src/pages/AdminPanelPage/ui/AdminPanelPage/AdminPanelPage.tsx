import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Page } from '@/widgets/Page'

interface AdminPanelPageProps {
    className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AdminPanelPage = (props: AdminPanelPageProps) => {
    const { t } = useTranslation('admin')

    return (
        <Page>
            {t('Админ панель')}
        </Page>
    )
}

export default memo(AdminPanelPage)
