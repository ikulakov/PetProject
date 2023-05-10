import { UserRole } from './model/consts/consts'
import { getUserAuthData } from './model/selector/getUserAuthData/getUserAuthData'
import { getUserInited } from './model/selector/getUserInited/getUserInited'
import {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selector/getUserRoles/getUserRoles'
import { userReducer, userActions } from './model/slice/userSlice'
import { User, UserSchema } from './model/types/user'

export {
    userReducer,
    userActions,
    UserRole,
    getUserAuthData,
    getUserInited,
    getUserRoles,
    isUserAdmin,
    isUserManager,
}

export type { User, UserSchema }

// Selectors
export { useJsonSettings } from './model/selector/getJsonSettings'

// Services
export { saveJsonSettings } from './model/services/saveJsonSettings'

export { initAuthData } from './model/services/initAuthData'
