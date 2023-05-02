import { type CombinedState, type EnhancedStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type ArticleDetailsSchema, type ArticleListSchema } from '@/entities/Article'
import { type ArticleDetailsPageRecommendationSchema } from '@/entities/Article'
import { type CounterSchema } from '@/entities/Counter'
import { type UserSchema } from '@/entities/User'
import { type AddCommentFormSchema } from '@/features/AddCommentForm'
import { type ArticleDetailsCommentsSchema } from '@/features/ArticleCommentList'
import { type LoginSchema } from '@/features/AuthByUsername'
import { type ProfileSchema } from '@/features/EditableProfileCard'
import { type rtkApi } from '@/shared/api/rtkApi'
import { type ScrollSaveSchema } from '@/widgets/Page'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    scrollSave: ScrollSaveSchema
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

    // Асинхронные редюсеры
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    articleDetailsComments?: ArticleDetailsCommentsSchema
    addCommentForm?: AddCommentFormSchema
    articlesPage?: ArticleListSchema
    articleRecommendations?: ArticleDetailsPageRecommendationSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: Reducer<CombinedState<StateSchema>>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
