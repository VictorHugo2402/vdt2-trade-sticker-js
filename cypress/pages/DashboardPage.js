class DashboardPage {

    go() {
        cy.get('input[type="text"]').type('legend')
    }
    submit() {
        cy.contains('Buscar').click()
    }
    sticker() {
        cy.get('img[alt="Neymar Jr"]').click()
    }

}

export default new DashboardPage;