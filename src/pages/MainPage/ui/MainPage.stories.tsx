import { StoryFn, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import MainPage from './MainPage'

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    decorators: [StoreDecorator({})]
} as StoryObj<typeof MainPage>

const Template: StoryFn<typeof MainPage> = () => <MainPage />

export const Normal = Template.bind({})
Normal.args = {}

