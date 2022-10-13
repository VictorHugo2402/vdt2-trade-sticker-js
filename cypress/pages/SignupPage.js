

class SignupPage {
    go() {
        cy.visit('/')
    }
    email() {
        cy.get('input[placeholder="Seu email"]').type('papito@gmail.com')
    }
    truepassword() {
        cy.get('input[placeholder="Senha secreta"]').type('vaibrasil')
    }
    falsepassword() {
        cy.get('input[placeholder="Senha secreta"]').type('pwd123')
    }
    submit() {
        cy.contains('Entrar').click()
    }
    messageShouldBe(ExpectedMessage) {
        cy.get('.header-content strong').should('have.text', ExpectedMessage)
    }
    alertMessageShouldBe(ExpectedMessage) {
        cy.get('.Toastify__toast-body').should('have.text', ExpectedMessage)
    }
}

export default new SignupPage;