import { ProfileSchema, Profile } from './model/types/profile'
import { profileActions, profileReducer } from './model/slice/profileSlice'
import { fetchProfileData } from './services/fetchProfileData/fetchProfileData'
import { ProfileCard } from './ui/ProfileCard/ProfileCard'
import { getProfileData } from './model/selectors/getProfileData/getProfileData'
import { getProfileError } from './model/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileForm } from './model/selectors/getProfileForm/getProfileForm'
import { updateProfileData } from './services/updateProfileData/updateProfileData'

export {
    ProfileSchema,
    Profile,
    profileActions,
    profileReducer,
    fetchProfileData,
    updateProfileData,
    ProfileCard
}

export {
    getProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileForm
}
