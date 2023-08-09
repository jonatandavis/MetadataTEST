describe('template spec', () => {
  
  beforeEach( () => {
    cy.visit('/')
    cy.url().should('include', 'demoblaze')
  })
  
  it('Sign Up', () => {
    
    cy.SignUp()

  })

  it('Valid Login', () => {
    
    cy.ValidLogin()
    cy.get('#logout2').click()
  })


})