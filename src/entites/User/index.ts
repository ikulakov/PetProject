import { User, UserSchema } from './model/types/user'
import { userReducer, userActions } from './model/slice/userSlice'
import { getUserAuthData } from './model/selector/getUserAuthData/getUserAuthData'

export {
    userReducer,
    userActions,
    User,
    UserSchema,
    getUserAuthData
}
