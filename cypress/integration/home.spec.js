

describe('home page', () => {

    

        it('deve acessar a home page', function(){
            cy.visit('/')
            const expectedMessage = 'Conectando colecionadores de figurinhas da copa.'
            cy.get('.logo-container h2').should('have.text', expectedMessage)
        })

})