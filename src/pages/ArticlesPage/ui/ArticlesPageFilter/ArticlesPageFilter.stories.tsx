import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ArticlesPageFilter } from './ArticlesPageFilter'

export default {
    title: 'pages/Article/ArticlesPageFilter',
    component: ArticlesPageFilter,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticlesPageFilter>

const Template: ComponentStory<typeof ArticlesPageFilter> = (args) => (
    <ArticlesPageFilter {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
