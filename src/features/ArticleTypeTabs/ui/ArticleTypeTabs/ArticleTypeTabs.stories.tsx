import { StoryFn, StoryObj } from '@storybook/react'
import { ArticleTypeTabs } from './ArticleTypeTabs'

export default {
    title: 'features/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as StoryObj<typeof ArticleTypeTabs>

const Template: StoryFn<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs { ...args } />

export const Normal = Template.bind({})
Normal.args = {}
