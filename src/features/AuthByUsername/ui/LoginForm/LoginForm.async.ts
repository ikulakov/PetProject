import { LoginFormProps } from './LoginForm'
import { FC, lazy } from 'react'

export const LoginFormAsync = lazy<FC<LoginFormProps>>(async () => await new Promise(resolve => {
    setTimeout(() => { resolve(import('./LoginForm')) }, 1500)
}))
