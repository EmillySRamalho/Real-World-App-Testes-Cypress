describe('Atualizar dados cadastrais', () => {
     it ("clicar em realizar nova transacao", ()  => { 
      cy.visit('http://localhost:3000')
      cy.get('#username').type('Katharina_Bernier')
      cy.get('#password').type('s3cret')
      cy.get('input[type=checkbox]').click()
      cy.get('button[type=submit]').click()

      cy.wait(3000)

      cy.contains('span', 'Logout').click()

     })
    })