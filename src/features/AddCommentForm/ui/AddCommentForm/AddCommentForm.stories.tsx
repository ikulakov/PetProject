import { action } from '@storybook/addon-actions'
import { StoryFn, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import AddCommentForm from './AddCommentForm'

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as StoryObj<typeof AddCommentForm>

const Template: StoryFn<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />

export const Normal = Template.bind({})
Normal.args = {
    onSendComment: action('onSendComment')
}
Normal.decorators = [
    StoreDecorator({})
]
