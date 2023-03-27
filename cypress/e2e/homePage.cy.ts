describe('Test pagination', () => {
  it('Pagination should work correctly', () => {
    cy.visit('http://localhost:3000/page/1');
    cy.get('.buttons-page a').contains('3').click();
    cy.url().should('include', '/page/3');
    cy.get('.buttons-page a').contains('Next').click();
    
    })
})

export {};