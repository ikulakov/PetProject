import { User, UserSchema } from './model/types/user'
import { userReducer, userActions } from './model/slice/userSlice'
import { getUserAuthData } from './model/selector/getUserAuthData/getUserAuthData'
import { getUserInited } from './model/selector/getUserInited/getUserInited'

export {
    userReducer,
    userActions,
    User,
    UserSchema,
    getUserAuthData,
    getUserInited
}
