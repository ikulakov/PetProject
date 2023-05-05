let profileId = ''

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('profile')
        cy.login().then((data) => {
            profileId = data.id
            cy.visit(`profile/${data.id}`)
        })
    })
    afterEach(() => {
        cy.resetProfile(profileId)
    })
    it('И профиль успешно загружен', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test profile')
    })
    it('И редактируем', () => {
        const newFirstname = 'newFirstname'
        const newLastname = 'newLastname'

        cy.updateProfile(newFirstname, newLastname)
        cy.getByTestId('ProfileCard.firstname').should('have.value', newFirstname)
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname)
    })
})