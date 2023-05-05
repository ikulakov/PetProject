/* eslint-disable @typescript-eslint/no-namespace */
import { selectByTestId } from 'cypress/helpers/selectByTestId'

export const getByTestId = (testId: string) => {
    return cy.get(selectByTestId(testId))
}

declare global {
    namespace Cypress {
        interface Chainable {
            getByTestId(testId: string): Chainable<JQuery>
        }
    }
}
