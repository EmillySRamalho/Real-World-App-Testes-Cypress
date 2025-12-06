describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/signin')
  })
  
  it ( 'criar conta de usuario', () => {
     cy.contains('Sign Up').click()
     cy.get('#firstName').type('Katharina')
     cy.get('#lastName').type('Bernier')
     cy.get('#username').type('Katharina_Bernier')
     cy.get('#password').type('s3cret')
     cy.get('#confirmPassword').type('s3cret')
     cy.get('button[type=submit]').click()


  })

  it('inserir dados do usuario', () => {
    cy.get('#username').type('Katharina_Bernier')
    cy.get('#password').type('s3cret')
    cy.get('input[type=checkbox]').click()
    cy.get('button[type=submit]').click()
  

  })
})

