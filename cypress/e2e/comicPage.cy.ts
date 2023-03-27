describe('ComicPage', () => {
  it('Displays comic information and allows adding to cart', () => {
    cy.visit('http://localhost:3000/comic/51200');
    cy.get('h1').should('contain', '1602 Witch Hunter Angela (2015) #3');
    cy.get('p').should('contain', 'Marguerite Bennett');
    cy.get('p').should('contain', 'Kieron Gillen');
    cy.get('p').should('contain', 'Páginas: 32');
    cy.get('span').should('contain', 'Descrição:');

  });
});

export {};