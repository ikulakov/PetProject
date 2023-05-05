let currentArticleId = ''

describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login()
        cy.createArticle().then((article) => {
            currentArticleId = article.id
            cy.visit(`articles/${article.id}`)
        })
    })
    afterEach(() => {
        cy.removeArticle(currentArticleId)
    })
    it('И видит содержимое статьи', () => {
        cy.getByTestId('ArticleDetails')
    })
    it('И видит список рекоммендаций', () => {
        cy.getByTestId('ArticleRecommendationsList')
    })
    it('И оставляет комментарий', () => {
        cy.getByTestId('ArticleDetails')
        cy.getByTestId('AddCommentForm').scrollIntoView()
        cy.addComment('text')
        cy.getByTestId('CommentItem.Content').should('have.length', 1)
    })
    it('И ставит оценку', () => {
        cy.getByTestId('ArticleDetails')
        cy.getByTestId('RatingCard').scrollIntoView()
        cy.setRate(5, 'feedback')
        cy.get('[data-selected=true]').should('have.length', 5)
    })
})