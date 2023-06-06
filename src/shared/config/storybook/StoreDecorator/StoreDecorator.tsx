/* eslint-disable fsd-architecture/layer-imports */
import { type Story } from '@storybook/react'
import { StoreProvider, type StateSchema } from '@/app/providers/StoreProvider'
import {
    articleDetailsPageRecommendationReducer,
    articleDetailsReducer,
    articleListSliceReducer,
} from '@/entities/Article'
import { userReducer } from '@/entities/User'
import { addCommentFormReducer } from '@/features/AddCommentForm'
import { articleDetailCommentsReducer } from '@/features/ArticleCommentList'
import { loginReducer } from '@/features/AuthByUsername'
import { profileReducer } from '@/features/EditableProfileCard'
import { type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    user: userReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articleDetailCommentsReducer,
    articlesPage: articleListSliceReducer,
    articleRecommendations: articleDetailsPageRecommendationReducer,
}

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
    (ComponentStory: Story) =>
        (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <ComponentStory />
            </StoreProvider>
        )
