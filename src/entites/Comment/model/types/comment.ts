import { User } from 'entites/User'

export interface Comment {
    id: string
    text: string
    user: User
}
