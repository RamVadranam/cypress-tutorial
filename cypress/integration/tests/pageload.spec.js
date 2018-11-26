describe('Check page load using cypress', () => {

 it('page load check',() => {

    cy.visit('https://google.com')
    cy.title().should('eq','Google')

 })

 it('Search cypress', function(){

    cy.get('input[title="Search"]').type('cypress')
    cy.get('#tsf').click()
    cy.get('.iUh30').contains('cypress')

 })

})
