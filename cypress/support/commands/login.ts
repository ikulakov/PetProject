/* eslint-disable @typescript-eslint/no-namespace */
import { User } from '../../../src/entities/User'
import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage'

export const login =  (username = 'testuser', password = '123') => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            username,
            password
        }
    }).then(({ body }) => {
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body))

        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return body
    })
}

declare global {
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<User>
        }
    }
}