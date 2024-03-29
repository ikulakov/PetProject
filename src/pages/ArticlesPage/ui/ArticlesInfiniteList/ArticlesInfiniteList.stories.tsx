import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ArticlesInfiniteList } from './ArticlesInfiniteList'

export default {
    title: 'pages/Article/ArticlesInfiniteList',
    component: ArticlesInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticlesInfiniteList>

const Template: ComponentStory<typeof ArticlesInfiniteList> = (args) => (
    <ArticlesInfiniteList {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
