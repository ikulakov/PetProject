import { CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { ArticleDetailsSchema, ArticleListSchema } from 'entities/Article'
import { ArticleDetailsPageRecommendationSchema } from 'entities/Article/model/types/articleDetailsPageRecommendationSchema'
import { CounterSchema } from 'entities/Counter'
import { UserSchema } from 'entities/User'
import { AddCommentFormSchema } from 'features/AddCommentForm'
import { ArticleDetailsCommentsSchema } from 'features/ArticleCommentList'
import { LoginSchema } from 'features/AuthByUsername'
import { ProfileSchema } from 'features/EditableProfileCard'
import { rtkApi } from 'shared/api/rtkApi'
import { ScrollSaveSchema } from 'widgets/Page/ScrollSave/model/types/ScrollSchema'

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
