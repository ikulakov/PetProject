/// <reference types="cypress" />
import { getByTestId } from 'cypress/support/commands/common'
import { login } from 'cypress/support/commands/login'
import * as articleCommands from './commands/article'
import * as commentCommands from './commands/comments'
import * as profileCommands from './commands/profile'
import * as ratingCommands from './commands/rating'

Cypress.Commands.add('login', login)
Cypress.Commands.add('getByTestId', getByTestId)
Cypress.Commands.addAll(profileCommands)
Cypress.Commands.addAll(articleCommands)
Cypress.Commands.addAll(commentCommands)
Cypress.Commands.addAll(ratingCommands)

// Cypress.Commands.overwrite( 'intercept', () => {
//     const FIXTURE_MODE = process.env.FIXTURE_MODE
//     const fixtureName = req.METHOD + requestAnimationFrame.url + hash(req.body)
//     if (FIXTURE_MODE === 'READ') {
//         readFixture(fixtureName)
//     }
//     if (FIXTURE_MODE === 'WHRITE') {
//         createFixture(fixtureName, req.body)
//     }
// })
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
