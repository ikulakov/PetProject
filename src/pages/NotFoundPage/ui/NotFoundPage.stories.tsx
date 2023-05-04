import { StoryFn, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import NotFoundPage from './NotFoundPage'

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [StoreDecorator({})]
} as StoryObj<typeof NotFoundPage>

const Template: StoryFn<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
