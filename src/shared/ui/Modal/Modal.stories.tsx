import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Modal } from './Modal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
    isOpen: true,
    children: 'Text для модалки'
}

export const Dark = Template.bind({})
Dark.args = {
    isOpen: true,
    children: 'Text для модалки'
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
