describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit(`articles`)
        })
    })
    it('и статьи успешно подгружаются', () => {
        cy.getByTestId('ArticlesList').should('exist')
        cy.getByTestId('ArticlesListItem').should('have.length.greaterThan', 3)
    })
    it('На стабах (фикстурах)', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' })
        cy.getByTestId('ArticlesList').should('exist')
        cy.getByTestId('ArticlesListItem').should('have.length.greaterThan', 3)
    })
    it.skip('Пример заскипанного теста', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' })
        cy.getByTestId('ArticlesList').should('exist')
        cy.getByTestId('ArticlesListItem').should('have.length.greaterThan', 3)
    })
})
