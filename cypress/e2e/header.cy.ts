describe('Header spec', () => {
  it('Abrindo e fechando componente Cart', () => {
    cy.visit('http://localhost:3000');
    cy.get('.icon-cart').click()
    cy.get('#cart').should('be.visible');
    cy.get('.icon-cart').click()
    cy.get('#cart').should('not.exist');
  })

 it('Voltar para home page com logo', () => {
    cy.visit('http://localhost:3000/comic/1');
    cy.get('img:first').click()
    cy.url().should('equal', 'http://localhost:3000/')
  })
})

export {};