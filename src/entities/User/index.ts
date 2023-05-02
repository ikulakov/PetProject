import { User, UserSchema } from './model/types/user'
import { UserRole } from "./model/consts/consts"
import { userReducer, userActions } from './model/slice/userSlice'
import { getUserAuthData } from './model/selector/getUserAuthData/getUserAuthData'
import { getUserInited } from './model/selector/getUserInited/getUserInited'
import { isUserAdmin, isUserManager, getUserRoles } from './model/selector/getUserRoles/getUserRoles'

export {
    userReducer,
    userActions,
    UserRole,
    getUserAuthData,
    getUserInited,
    getUserRoles,
    isUserAdmin,
    isUserManager
}

export type {
    User,
    UserSchema
}