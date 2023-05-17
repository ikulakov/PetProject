import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { AppLink } from './AppLink'

export default {
    title: 'shared/redesigned/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => (
    <div style={{ backgroundColor: 'var(--primary-color)', padding: '10px' }}>
        <AppLink {...args} />
    </div>
)

export const Primary = Template.bind({})
Primary.args = {
    children: 'Text',
    variant: 'primary',
}

export const Red = Template.bind({})
Red.args = {
    children: 'Text',
    variant: 'red',
}
