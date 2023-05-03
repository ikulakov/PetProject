import { addDecorator } from '@storybook/react'
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
    layout: 'fullscreen'
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
// addDecorator(RouterDecorator)
addDecorator(withRouter)
addDecorator(SuspenseDecorator)
