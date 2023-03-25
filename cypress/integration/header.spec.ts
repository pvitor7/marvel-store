/// <reference types="cypress" />


describe('Header', () => {
  it('should display logo, gif, and cart icon', () => {
    cy.visit('/'); // visita a página que contém o componente Header

    // verifica se o logo está sendo exibido corretamente
    cy.get('img').should('have.attr', 'src', '/marvel-comics-logo.png');
    
    // verifica se o gif está sendo exibido corretamente
    cy.get('iframe').should('have.attr', 'src', 'https://giphy.com/embed/JQ54sqhIDXohG');
    
    // verifica se o ícone do carrinho está sendo exibido corretamente
    cy.get('.icon-cart').should('exist');
  });
});