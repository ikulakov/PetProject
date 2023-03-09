import { fetchProfileData, ProfileCard, profileReducer } from 'entites/Profile'
import { memo, ReactNode, useEffect } from 'react'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ProfilePageProps {
    children: ReactNode
}

const initialReducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage = memo((props: ProfilePageProps) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <ProfileCard />
        </DynamicModuleLoader>
    )
})

export default ProfilePage
