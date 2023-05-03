import { type MutableRefObject, useCallback, useRef } from 'react'

/**
 * Хук, который позволяет отменять предыдущий вызов функции пока не истечет delay
 * @param callback
 * @param delay - задержка в мс
 */
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
