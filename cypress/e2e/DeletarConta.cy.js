describe('Acessando Banco ', () => {
    it("clicar em realizar nova transacao", () => {
        cy.visit('http://localhost:3000')

        cy.get('#username').type('Katharina_Bernier')
        cy.get('#password').type('s3cret')
        cy.get('input[type=checkbox]').click()
        cy.get('button[type=submit]').click()

        cy.contains('span', 'Bank Accounts').click()

        cy.get('[data-test="bankaccount-delete"]').eq(7).click({force:true})


    })
})