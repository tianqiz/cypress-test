describe('test all API', () => {
    let id;
    it('add new todo', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:8080/todos',
            body: {
                'name': 'new todo',
                'isComplete': false
            }
        }).then(response => {
            id = response.body.id;
            expect(response.status).to.equal(201);
            expect(response.body.name).to.equal('new todo');
        })
    })

    it('fetch todo by id', () => {
        cy.request('GET', `http://localhost:8080/todos/${id}`).then(response => {
            expect(response.status).to.equal(200);
            expect(response.body.name).to.equal('new todo');
        })
    })

    it('update new todo', () => {
        cy.request({
            method: 'PUT',
            url: 'http://localhost:8080/todos/' + id,
            body: {
                'name': 'new todo111',
                'isComplete': false
            }
        }).then(response => {
            id = response.body.id;
            expect(response.status).to.equal(200);
            expect(response.body.name).to.equal('new todo111');
        })
    })

    it('delete todo by id', () => {
        cy.request('DELETE', `http://localhost:8080/todos/${id}`).then(response => {
            expect(response.status).to.equal(200);
        })
    })
});