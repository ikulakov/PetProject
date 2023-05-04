import { StoryFn, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ArticleDetailsComments } from './ArticleDetailsComments'

export default {
    title: 'pages/Article/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [StoreDecorator({})]
} as StoryObj<typeof ArticleDetailsComments>

const Template: StoryFn<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments { ...args } />

export const Normal = Template.bind({})
Normal.args = {

}
