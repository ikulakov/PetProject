import { StoryFn, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import ArticlesPage from './ArticlesPage'

export default {
    title: 'pages/Article/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [StoreDecorator({})],
    // parameters: {
    //     loki: {
    //         skip: true
    //     }
    // }
} as StoryObj<typeof ArticlesPage>

const Template: StoryFn<typeof ArticlesPage> = (args) => <ArticlesPage { ...args } />

export const Normal = Template.bind({})
Normal.args = {

}
