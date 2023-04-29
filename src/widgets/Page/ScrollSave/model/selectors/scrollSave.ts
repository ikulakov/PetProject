import { createSelector } from '@reduxjs/toolkit'
import { type StateSchema } from '@/app/providers/StoreProvider'

export const getScroll = (state: StateSchema) => state.scrollSave.scroll
export const getScrollSavePath = createSelector(
    getScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0
)
