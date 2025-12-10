describe('Atualizar dados cadastrais', () => {
     it ("clicar em realizar nova transacao", ()  => { 
      cy.visit('http://localhost:3000')
      cy.get('#username').type('Katharina_Bernier')
      cy.get('#password').type('s3cret')
      cy.get('input[type=checkbox]').click()
      cy.get('button[type=submit]').click()


      cy.contains('span', 'Date: ALL').click({ force: true })

      cy.get('button.react-calendar__tile').contains('10').click()
      cy.get('button.react-calendar__tile').contains('13').click()

      cy.wait(1000)


      cy.get('[data-test="transaction-list-filter-date-clear-button"]').click({ force: true }) 




     })
    })
