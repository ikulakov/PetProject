import { StoryFn, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import ArticleEditPage from './ArticleEditPage'

export default {
    title: 'pages/Article/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [StoreDecorator({})]
} as StoryObj<typeof ArticleEditPage>

const Template: StoryFn<typeof ArticleEditPage> = (args) => <ArticleEditPage { ...args } />

export const Normal = Template.bind({})
Normal.args = {

}
