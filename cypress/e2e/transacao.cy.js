describe('Realizar nova transaçao financeira', () => {
     it ("clicar em realizar nova transacao", ()  => { 
      cy.visit('http://localhost:3000')
      cy.get('#username').type('Katharina_Bernier')
      cy.get('#password').type('s3cret')
      cy.get('input[type=checkbox]').click()
      cy.get('button[type=submit]').click()
      

      cy.get('[data-test="nav-top-new-transaction"]').click()
      cy.contains('span', 'Santos.Runte65@gmail.com').click({ force: true })
      cy.get('#amount').type('100')
      cy.get('#transaction-create-description-input').type('Pagamento mensal')
      cy.get('[data-test="transaction-create-submit-payment"]').click();

      cy.get('[data-test="new-transaction-return-to-transactions"]').click()


})
})