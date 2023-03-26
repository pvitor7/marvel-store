
describe('Teste do Card', () => {
  
  it('Deve ir para a página /comic/:id ao clicar na imagem', () => {
      cy.visit('http://localhost:3000');
      cy.get('.img-card:first').click()
      cy.url().should('include', '/comic/')
    })

  it('Deve ir para a página /comic/:id ao clicar no título', () => {
      cy.visit('http://localhost:3000');
      cy.get('h3:first').click()
      cy.url().should('include', '/comic/')
    })
  
  
  it('Deve adicionar produto ao carrinho', () => {
    cy.visit('http://localhost:3000');
    cy.get('.buy-button:first').click();
    cy.get('.icon-cart').click();
    cy.get('#cart .cart-card-img').should('be.visible');

  });
})