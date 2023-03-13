import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Country } from 'entites/Country'
import { Currency } from 'entites/Currency'
import AvatarImage from 'shared/ui/Avatar/avatar.jpg'

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [StoreDecorator({
    profile: {
        form: {
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
})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: '123',
            age: 30,
            country: Country.Russia,
            lastname: 'Kulakov',
            first: 'Ivan',
            city: 'Moscow',
            currency: Currency.RUB,
            avatar: 'https://avt-5.foto.mail.ru/mail/olgalixa/_avatar180?'
        }
    }
})]
