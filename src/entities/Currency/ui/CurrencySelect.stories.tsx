import { StoryFn, StoryObj } from '@storybook/react'
import { CurrencySelect } from './CurrencySelect'

export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as StoryObj<typeof CurrencySelect>

const Template: StoryFn<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />

export const Primary = Template.bind({})
Primary.args = {}
