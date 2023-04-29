import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import LoginForm from './LoginForm'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [StoreDecorator({
    loginForm: { username: 'Username', password: 'password' }
})]

export const WithError = Template.bind({})
WithError.args = {}
WithError.decorators = [StoreDecorator({
    loginForm: { username: 'Username', password: 'password', error: 'Some error' }
})]

export const FormSending = Template.bind({})
FormSending.args = {}
FormSending.decorators = [StoreDecorator({
    loginForm: { isLoading: true }
})]
