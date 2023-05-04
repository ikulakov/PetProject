import { StoryFn, StoryObj } from '@storybook/react'
import { ArticleSortSelector } from './ArticleSortSelector'

export default {
    title: 'features/Article/ArticlesSortSelector',
    component: ArticleSortSelector,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as StoryObj<typeof ArticleSortSelector>

const Template: StoryFn<typeof ArticleSortSelector> = (args) => <ArticleSortSelector { ...args } />

export const Normal = Template.bind({})
Normal.args = {

}
