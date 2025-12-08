describe('Fluxo completo de cadastro, login e onboarding', () => {
  it('Criar conta, fazer login e completar onboarding uma vez', () => {

    cy.visit('http://localhost:3000/signin')

  
    cy.contains('Sign Up').click()
    cy.get('#firstName').type('Katharina')
    cy.get('#lastName').type('Bernier')
    cy.get('#username').type('Katharina_Bernier')
    cy.get('#password').type('s3cret')
    cy.get('#confirmPassword').type('s3cret')
    cy.get('button[type=submit]').click()


    cy.get('#username').type('Katharina_Bernier')
    cy.get('#password').type('s3cret')
    cy.get('input[type=checkbox]').click()
    cy.get('button[type=submit]').click()

    cy.get('body').then(($body) => {
      if ($body.find('[data-test="user-onboarding-next"]').length > 0) {
        cy.get('[data-test="user-onboarding-next"]').click()
      }
    })

    cy.get('body').then(($body) => {
      if ($body.find('#bankaccount-bankName-input').length > 0) {

        cy.get('#bankaccount-bankName-input').type('WillBank')
        cy.get('#bankaccount-routingNumber-input').type('858805148')
        cy.get('#bankaccount-accountNumber-input').type('877444999')
        cy.get('button[type=submit]').click()

        cy.get('[data-test="user-onboarding-next"]').click()
      }
    })

  })
})
