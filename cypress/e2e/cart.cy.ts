describe('Teste do Cart', () => {

    it('Deve checar a abertuda e o fechamento do carrinho', () => {
        cy.visit('http://localhost:3000');
        cy.get('.icon-cart').click();
        cy.get('.title-cart').should('be.visible');
        cy.get('.icon-cart').click();
        cy.get('.title-cart').should('not.exist');
    });

    it('Deve testar a quantidade de produtos diferentes no carrinho', () => {
        cy.visit('http://localhost:3000');
        cy.get('.buy-button').eq(0).click();
        cy.get('.buy-button').eq(1).click();
        cy.get('.buy-button').eq(2).click();
        cy.get('.buy-button').eq(2).click();
        cy.get('.buy-button').eq(2).click();
        cy.get('.icon-cart').click();
        cy.get('#cart table tbody tr').should('have.length', 3);
    });

    it('Deve testar o valor total do carrinho', () => {
        cy.visit('http://localhost:3000');

        cy.get('.buy-button').eq(0).click();
        cy.get('.buy-button').eq(1).click();
        cy.get('.buy-button').eq(2).click();
      cy.get('.icon-cart').click();
      
        let total = 0;
      
        cy.get('#cart table tbody tr').each(($el, index, $list) => {
          const price = $el.find('.cart-item-price').text().replace(/^\D+/g, '');
          total += Number(price);
        }).then(() => {
          cy.get('#cart p:last').contains(`Total: R$ ${total.toFixed(2)}`);
        });
      });

});

export {};