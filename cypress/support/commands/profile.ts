/* eslint-disable @typescript-eslint/no-namespace */
export const updateProfile = (newFirstname: string, newLastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click()
    cy.getByTestId('ProfileCard.firstname').clear().type(newFirstname)
    cy.getByTestId('ProfileCard.lastname').clear().type(newLastname)
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click()
}

export const resetProfile = (profileId: string) => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: '123' },
        body: {
            id: '4',
            first: 'test profile',
            lastname: '',
            age: 123,
            currency: 'EUR',
            country: 'Russia',
            city: 'Moscow',
            username: 'testof',
            avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
        },
    })
}

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(
                newFirstname: string,
                newLastname: string,
            ): Chainable<void>
            resetProfile(profileId: string): Chainable<void>
        }
    }
}
