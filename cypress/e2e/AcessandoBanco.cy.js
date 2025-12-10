describe('Acessando Banco ', () => {
    it("clicar em realizar nova transacao", () => {
        cy.visit('http://localhost:3000')

        cy.get('#username').type('Katharina_Bernier')
        cy.get('#password').type('s3cret')
        cy.get('input[type=checkbox]').click()
        cy.get('button[type=submit]').click()

        cy.contains('span', 'Bank Accounts').click()

        cy.get('[data-test="bankaccount-new"]').click()

        const randomBank = `Bank${Math.floor(Math.random() * 1000)}`;
        const randomNumber = Math.floor(100000000 + Math.random() * 900000000).toString(); 
        const randomAccount = Math.floor(100000000 + Math.random() * 900000000).toString();

        cy.get('#bankaccount-bankName-input').type(randomBank)
        cy.get('#bankaccount-routingNumber-input').type(randomNumber)
        cy.get('#bankaccount-accountNumber-input').type(randomAccount)

        cy.get('button[type=submit]').click()

    })
})
