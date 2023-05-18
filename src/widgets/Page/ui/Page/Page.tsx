import {
    type MutableRefObject,
    type ReactNode,
    type UIEvent,
    useRef,
} from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { type StateSchema } from '@/app/providers/StoreProvider'
import { classNames } from '@/shared/lib/classNames/classNames'
import { toggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle'
import { TestProps } from '@/shared/types/tests'
import cls from './Page.module.scss'
import { getScrollSavePath } from '../../ScrollSave/model/selectors/scrollSave'
import { scrollActions } from '../../ScrollSave/model/slices/scrollSaveSclice'

interface PageProps extends TestProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page = (props: PageProps) => {
    const { className, children, onScrollEnd } = props

    const wrapperRef = useRef() as MutableRefObject<HTMLElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const scrollPosition = useSelector((state: StateSchema) =>
        getScrollSavePath(state, pathname),
    )

    useInfiniteScroll({
        triggerRef,
        wrapperRef: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => undefined,
            off: () => wrapperRef,
        }),
        callback: onScrollEnd,
    })

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            scrollActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            }),
        )
    }, 500)

    const pageClass = toggleFeatures({
        name: 'isAppRedesigned',
        off: () => cls.Page,
        on: () => cls.Page_redesigned,
    })

    return (
        <section
            ref={wrapperRef}
            className={classNames(pageClass, {}, [className])}
            onScroll={onScroll}
            data-testid={props['data-testid'] ?? 'Page'}
        >
            {children}
            {onScrollEnd ? (
                <div
                    className={cls.trigger}
                    ref={triggerRef}
                />
            ) : null}
        </section>
    )
}
