/* eslint-disable fsd-architecture/layer-imports */
import { type RouteProps } from 'react-router-dom'
import { UserRole } from '@/entities/User'

export type AppRouteProps = RouteProps & {
    authOnly?: boolean
    roles?: UserRole[]
}
