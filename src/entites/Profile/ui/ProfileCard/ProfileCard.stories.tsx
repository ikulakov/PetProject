import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Country } from 'entites/Country'
import { Currency } from 'entites/Currency'
import AvatarImage from 'shared/ui/Avatar/avatar.jpg'

export default {
    title: 'entites/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
    data: {
        username: '123',
        age: 30,
        country: Country.Russia,
        lastname: 'Kulakov',
        first: 'Ivan',
        city: 'Moscow',
        currency: Currency.RUB,
        avatar: AvatarImage
    }
}

export const WithError = Template.bind({})
WithError.args = {
    error: 'some error'
}

export const Loading = Template.bind({})
Loading.args = {
    isLoading: true
}
