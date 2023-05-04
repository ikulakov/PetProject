import { StoryFn, StoryObj } from '@storybook/react'
import { ArticleViewSelector } from './ArticleViewSelector'

export default {
    title: 'features/Article/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as StoryObj<typeof ArticleViewSelector>

const Template: StoryFn<typeof ArticleViewSelector> = (args) => <ArticleViewSelector { ...args } />

export const Normal = Template.bind({})
Normal.args = {}
