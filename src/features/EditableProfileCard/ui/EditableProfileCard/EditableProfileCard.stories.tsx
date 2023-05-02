import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { EditableProfileCard } from './EditableProfileCard'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'features/Profile/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof EditableProfileCard>

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard { ...args } />

export const Normal = Template.bind({})
Normal.args = {
    id: '1'
}
Normal.decorators = [
    StoreDecorator({})
]
