import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'
import { withRouter } from 'storybook-addon-react-router-v6'
import { Theme } from '@/shared/const/theme'
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: Theme.LIGHT, color: '#fff' },
            { name: 'dark', class: Theme.DARK, color: '#1d1e20' },
            { name: 'blue', class: Theme.BLUE, color: '#5e69ee' },
        ],
    },
}

// // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
// addDecorator(StyleDecorator)
// addDecorator(ThemeDecorator(Theme.LIGHT))
// // addDecorator(RouterDecorator)
// addDecorator(withRouter)
// addDecorator(SuspenseDecorator)

export const decorators = [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    withRouter,
    SuspenseDecorator
]