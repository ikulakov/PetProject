import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DropDown } from './Dropdown'

export default {
    title: 'shared/DropDown',
    component: DropDown,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof DropDown>

const Template: ComponentStory<typeof DropDown> = (args) => <DropDown { ...args } />

export const Normal = Template.bind({})
Normal.args = {

}
