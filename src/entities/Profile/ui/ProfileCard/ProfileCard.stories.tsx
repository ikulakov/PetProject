import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator'
import { ProfileCard } from './ProfileCard'

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
)

const primaryArgs = {
    data: {
        username: '123',
        age: 30,
        country: Country.Russia,
        lastname: 'Kulakov',
        first: 'Ivan',
        city: 'Moscow',
        currency: Currency.RUB,
        avatar: 'https://avt-5.foto.mail.ru/mail/olgalixa/_avatar180?',
    },
}

export const Primary = Template.bind({})
Primary.args = primaryArgs

export const PrimaryRedesigned = Template.bind({})
PrimaryRedesigned.args = primaryArgs
PrimaryRedesigned.decorators = [NewDesignDecorator]

export const WithError = Template.bind({})
WithError.args = {
    error: 'some error',
}

export const Loading = Template.bind({})
Loading.args = {
    isLoading: true,
}
