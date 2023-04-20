import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ArticleDetailsComments } from './ArticleDetailsComments'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'pages/Article/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [StoreDecorator({})]
} as ComponentMeta<typeof ArticleDetailsComments>

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments { ...args } />

export const Normal = Template.bind({})
Normal.args = {

}