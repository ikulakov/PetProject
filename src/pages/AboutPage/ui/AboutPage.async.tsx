import { lazy } from 'react'

export const AboutPageAsync = lazy(async () => await new Promise(resolve => {
    // @ts-expect-error descr
    setTimeout(() => { resolve(import('./AboutPage')) }, 1500)
}))
