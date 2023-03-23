import { StoreProvider, StateSchema } from 'app/providers/StoreProvider'
import { Story } from '@storybook/react'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { profileReducer } from 'entities/Profile'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleReducer } from 'entities/Article'
import { addCommentFormReducer } from 'features/AddCommentForm'
import { articleDetailCommentsReducer } from 'features/ArticleCommentList'

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsComments: articleDetailCommentsReducer
}

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
)
