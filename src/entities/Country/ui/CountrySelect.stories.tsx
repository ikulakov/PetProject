import { StoryFn, StoryObj } from '@storybook/react'
import { CountrySelect } from './CountrySelect'

export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as StoryObj<typeof CountrySelect>

const Template: StoryFn<typeof CountrySelect> = (args) => <CountrySelect {...args} />

export const Primary = Template.bind({})
Primary.args = {}
