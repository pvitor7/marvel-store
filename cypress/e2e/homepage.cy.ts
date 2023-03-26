describe('Test pagination', () => {
  it('Pagination should work correctly', () => {
    cy.visit('http://localhost:3000/page/1'); // Visits the first page
    cy.get('.buttons-page a').contains('3').click(); // Clicks on page 3
    cy.url().should('include', '/page/3'); // Verifies that the URL changed to page 3
    cy.get('.buttons-page a').contains('Next').click(); // Clicks on the "Next" button
    cy.url().should('include', '/page/4'); // Verifies that the URL changed to page 4
    // cy.get('.buttons-page a').contains('Previous').click(); // Clicks on the "Previous" button
    // cy.url().should('include', '/page/3'); // Verifies that the URL changed back to page 3
    })
})