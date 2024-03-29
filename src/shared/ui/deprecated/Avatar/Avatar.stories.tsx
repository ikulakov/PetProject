import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Avatar } from './Avatar'
import ava from '../Avatar/avatar.jpg'

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
    src: ava,
    size: 150,
}
