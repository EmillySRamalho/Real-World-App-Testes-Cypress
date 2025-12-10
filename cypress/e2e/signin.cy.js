describe('Fluxo completo de cadastro, login e onboarding', () => {

 const uniqueUsername = `Bernier_${Cypress._.random(0, 10000)}`;
 const password = 's3cret';

  it('Criar conta, fazer login e completar onboarding uma vez', () => {
    cy.visit('http://localhost:3000/signin')
  
    cy.contains('Sign Up').click()
    cy.get('#firstName').type('Katharina')
    cy.get('#lastName').type('Bernier')
    cy.get('#username').type(uniqueUsername);
    cy.get('#password').type('s3cret')
    cy.get('#confirmPassword').type('s3cret')
    cy.get('button[type=submit]').click()


    cy.get('#username').type(uniqueUsername);
    cy.get('#password').type('s3cret')
    cy.get('input[type=checkbox]').click()
    cy.get('button[type=submit]').click()

    cy.log('3. Onboarding: Etapa de saudação');

    cy.get('[data-test="user-onboarding-next"]', { timeout: 10000 })
      .should('be.visible') 
      .click()
    cy.log('4. Onboarding: Cadastro da conta bancária');
    cy.get('#bankaccount-bankName-input', { timeout: 10000 })
      .should('be.visible');

    cy.get('#bankaccount-bankName-input').type('WillBank')
    cy.get('#bankaccount-routingNumber-input').type('858805148')
    cy.get('#bankaccount-accountNumber-input').type('877444999')
    cy.get('button[type=submit]').click()

    cy.log('5. Onboarding: Conclusão');
    
    cy.get('[data-test="user-onboarding-next"]', { timeout: 10000 })
      .should('be.visible')
      .click();

})
})
