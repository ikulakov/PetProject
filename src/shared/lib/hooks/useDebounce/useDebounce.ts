import { type MutableRefObject, useCallback, useRef } from 'react'

export function useDebounce (callback: (...args: any[]) => void, delay: number) {
    const timer = useRef(false) as MutableRefObject<any>

    return useCallback((...args: any[]) => {
        if (!timer.current) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            callback(...args)
        }, delay)
    }, [callback, delay])
}
