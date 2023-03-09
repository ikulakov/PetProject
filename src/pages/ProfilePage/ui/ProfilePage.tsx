import { profileReducer } from 'entites/Profile'
import { memo, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

interface ProfilePageProps {
    children: ReactNode
}

const initialReducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage = memo((props: ProfilePageProps) => {
    const { t } = useTranslation()
    const {
        children
    } = props

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div>
                <h1>{t('Страница профиля')}</h1>
                {children}
            </div>
        </DynamicModuleLoader>
    )
})

export default ProfilePage
