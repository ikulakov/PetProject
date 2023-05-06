describe('Роутинг', () => {
    describe('Пользователь НЕ авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/')
            cy.getByTestId('MainPage').should('exist')
        })
        it('Переход открывает страницу профиля', () => {
            cy.visit('/profile/1')
            cy.getByTestId('MainPage').should('exist')
        })
        it('Переход открывает не существующую страницу', () => {
            cy.visit('/qwerty404')
            cy.getByTestId('NotFoundPage').should('exist')
        })
    })
    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login('testuser', '123')
        })
        it('Переход открывает страницу профиля', () => {
            cy.visit('/profile/1')
            cy.getByTestId('ProfilePage').should('exist')
        })
        it('Переход открывает страницу со списком статей', () => {
            cy.visit('/articles')
            cy.getByTestId('ArticlesPage').should('exist')
        })
    })
})

export {}
