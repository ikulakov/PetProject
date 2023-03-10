import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Avatar } from './Avatar'

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
    src: 'https://avt-30.foto.mail.ru/mail/marianna.gul/_avatar180?',
    size: 150
}
