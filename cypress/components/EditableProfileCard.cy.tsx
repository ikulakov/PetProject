import { EditableProfileCard } from '../../src/features/EditableProfileCard'
import { TestProvider } from '../../src/shared/lib/tests/componentRender/componentRender'

describe('<EditableProfileCard />', () => {
    it('renders', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' })
        cy.mount(
            <TestProvider
                options={{
                    initialState: {
                        user: {
                            authData: {
                                id: '1',
                            },
                        },
                    },
                }}
            >
                <EditableProfileCard id="1" />
            </TestProvider>,
        )
        // описываем тест кейсы
    })
})
