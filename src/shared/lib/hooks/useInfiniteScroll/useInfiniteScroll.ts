import { type MutableRefObject, useEffect } from 'react'

export interface UseInfiniteScrollOptions {
    callback?: () => void
    triggerRef: MutableRefObject<HTMLElement>
    wrapperRef?: MutableRefObject<HTMLElement>
}

export function useInfiniteScroll({
    callback,
    triggerRef,
    wrapperRef,
}: UseInfiniteScrollOptions) {
    useEffect(() => {
        const wrapperElement = wrapperRef?.current || null
        const triggerElement = triggerRef.current
        let observer: IntersectionObserver | null = null

        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            }
            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback()
                }
            }, options)

            observer.observe(triggerElement)
        }
        return () => {
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            if (observer && triggerElement) {
                observer.unobserve(triggerElement)
            }
        }
    }, [wrapperRef, triggerRef, callback])
}
