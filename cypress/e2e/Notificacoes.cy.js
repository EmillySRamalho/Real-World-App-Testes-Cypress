describe('Atualizar dados cadastrais', () => {
     it ("clicar em realizar nova transacao", ()  => { 
      cy.visit('http://localhost:3000')
      cy.get('#username').type('Katharina_Bernier')
      cy.get('#password').type('s3cret')
      cy.get('input[type=checkbox]').click()
      cy.get('button[type=submit]').click()

      cy.get('[data-test="nav-top-notifications-link"]').click()

      cy.wait(1000)

      cy.contains('span', 'Home').click() 
      
      cy.wait(1000)

      cy.contains('span', 'Notifications').click()



     })
})