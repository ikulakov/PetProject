import { StoreProvider, StateSchema } from 'app/providers/StoreProvider'
import { Story } from '@storybook/react'
import { loginReducer } from 'features/AuthByUsername'
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from 'entities/Article'
import { addCommentFormReducer } from 'features/AddCommentForm'
import { articleDetailCommentsReducer } from 'features/ArticleCommentList'
import { profileReducer } from 'features/EditableProfileCard/model/slice/profileSlice'

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
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
