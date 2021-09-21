///<reference types='Cypress' />

describe('UI test', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    //add some comments
    it('Should add a new todo correctly', () => {
        cy.intercept('POST', 'http://localhost:8080/todos').as('postRequest');
        cy.addNewTodo('First todo');
        cy.wait('@postRequest').then(xhr => {
            expect(xhr.request.body.name).equal('First todo');
        })
        //cy.get('.todo-item').last().contains('First todo');
    });

    it('should toggle todo item status', () => {
        cy.addNewTodo('Sec todo');
        cy.get('.todo-checkbox').check().should('be.checked');
        cy.get('.todo-checkbox').uncheck().should('not.be.checked');
    });

    it('should delete item correctly', () => {
        cy.addNewTodo('Sec todo');
        cy.get('.delete-item').click();

    });

    it('should not add empty todo', () => {
        cy.addNewTodo('');
    });

    afterEach(() => {
        cy.get('body').then(element => {
            if(element.find('.delete-item').length > 0) {
                cy.get('.delete-item').click({multiple: true});
            }
        })
        
    })
});