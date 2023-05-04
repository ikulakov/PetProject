import { StoryFn, StoryObj } from '@storybook/react'
import { AppLink, AppLinkTheme } from './AppLink'

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        to: '/'
    }
} as StoryObj<typeof AppLink>

const Template: StoryFn<typeof AppLink> = (args) => <div style={{backgroundColor: 'var(--primary-color)', padding: '10px'}}><AppLink {...args} /></div>

export const Primary = Template.bind({})
Primary.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY
}

export const Secondary = Template.bind({})
Secondary.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY
}

export const Red = Template.bind({})
Red.args = {
    children: 'Text',
    theme: AppLinkTheme.RED
}
