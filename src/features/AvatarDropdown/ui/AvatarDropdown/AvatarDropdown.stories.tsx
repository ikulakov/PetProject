import { StoryFn, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { AvatarDropdown } from './AvatarDropdown'

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as StoryObj<typeof AvatarDropdown>

const Template: StoryFn<typeof AvatarDropdown> = (args) => <div style={{marginLeft: '150px', width: 'max-content'}}><AvatarDropdown { ...args } /></div>

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({
    user: {
        authData: {
            avatar: '',
            username: 'Admin'
        }
    }
})]
