import { StoryFn, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ArticlesPageFilter } from './ArticlesPageFilter'

export default {
    title: 'pages/Article/ArticlesPageFilter',
    component: ArticlesPageFilter,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [StoreDecorator({})]
} as StoryObj<typeof ArticlesPageFilter>

const Template: StoryFn<typeof ArticlesPageFilter> = (args) => <ArticlesPageFilter { ...args } />

export const Normal = Template.bind({})
Normal.args = {

}
