import { StoryFn, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { EditableProfileCard } from './EditableProfileCard'

export default {
    title: 'features/Profile/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as StoryObj<typeof EditableProfileCard>

const Template: StoryFn<typeof EditableProfileCard> = (args) => <EditableProfileCard { ...args } />

export const Normal = Template.bind({})
Normal.args = {
    id: '1'
}
Normal.decorators = [
    StoreDecorator({})
]
