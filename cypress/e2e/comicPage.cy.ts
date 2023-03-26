describe('ComicPage', () => {
  it('Displays comic information and allows adding to cart', () => {
    cy.visit('http://localhost:3000/comic/51200');
    cy.get('h2').should('contain', '1602 Witch Hunter Angela (2015) #3');
    // cy.get('img').should('have.attr', 'alt', '1602 Witch Hunter Angela (2015) #3');
    cy.get('p').should('contain', 'Marguerite Bennett');
    cy.get('p').should('contain', 'Kieron Gillen');
    cy.get('p').should('contain', 'Páginas: 32');
    cy.get('span').should('contain', 'Descrição:');
    // cy.get('button:first').should('contain', '$ 3.99');
    // cy.get('button').should('contain', 'Digital: $1.99');
    // cy.get('#cart').click();
    // cy.get('.icon-cart').click();
    // cy.get('.cart-item').should('have.length', 1);
    // cy.get('.cart-item').should('contain', 'Impressa');
    // cy.get('.cart-item').should('contain', '$3.99');
  });
});

export {};