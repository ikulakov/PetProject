import { StoryFn, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'
import ava from '../Avatar/avatar.jpg'

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as StoryObj<typeof Avatar>

const Template: StoryFn<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
    src: ava,
    size: 150
}
