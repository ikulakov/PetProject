import { addDecorator } from '@storybook/react'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { withRouter } from 'storybook-addon-react-router-v6'
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator'
import { Theme } from '@/shared/const/theme'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
// addDecorator(RouterDecorator)
addDecorator(withRouter)
addDecorator(SuspenseDecorator)
