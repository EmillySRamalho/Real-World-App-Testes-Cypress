describe('Atualizar dados cadastrais', () => {
     it ("clicar em realizar nova transacao", ()  => { 
      cy.visit('http://localhost:3000')
      cy.get('#username').type('Katharina_Bernier')
      cy.get('#password').type('s3cret')
      cy.get('input[type=checkbox]').click()
      cy.get('button[type=submit]').click()

      cy.contains('span', 'My Account').click()
      cy.get("#user-settings-email-input").clear().type('Berner_Kath@teste.com')
      cy.get('#user-settings-phoneNumber-input').clear().type('987456321')

       cy.get('[data-test="user-settings-submit"]').click()
      
     })
    })