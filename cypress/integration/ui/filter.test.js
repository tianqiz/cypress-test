describe('Filter functionality', () => {
    beforeEach(() => {
        // cy.addDummyTodos();
        cy.intercept({
            method: 'GET',
            url: 'http://localhost:8080/todos',
        }, {
            fixture: 'todos'
        })
        cy.visit('/');
    })

    it('Should filter complete', () => {
        // cy.contains('Complete').click();
        // cy.url().should('contain', '/complete');
        // cy.get('.todo-checkbox').each(element => {
        //     cy.wrap(element).should('be.checked');
        // });
    })

    it('Should filter active', () => {
        // cy.contains('Active').click();
        // cy.url().should('contain', '/active');
        // cy.get('.todo-checkbox').each(element => {
        //     cy.wrap(element).should('not.be.checked');
        // });
    })
});