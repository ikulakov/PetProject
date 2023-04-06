import { lazy } from 'react'

export const ArticlesDetailPageAsync = lazy(async () => await new Promise(resolve => {
    // @ts-expect-error ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    //
    setTimeout(() => { resolve(import('./ArticlesDetailPage')) }, 400)
}))
