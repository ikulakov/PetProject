import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { CountrySelect } from './CountrySelect'

export default {
    title: 'entites/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof CountrySelect>

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />

export const Primary = Template.bind({})
Primary.args = {}
