
describe('Card Component', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('renders the card with the comic title', () => {
      cy.get('h3').first()
        .should('contain', 'Spider-Man: Chapter One (1998) #10')
    })
  
    it('renders the card with the comic image', () => {
      cy.get('img').first()
        .should('have.attr', 'src')
        .should('contain', 'http://i.annihil.us/u/prod/marvel/i/mg/5/20/5b5c99a81bc5e')
    })
  
    it('renders the card with the comic prices', () => {
      cy.get('[data-testid="card-prices"]').first()
        .should('contain', 'Impresso: $ 1.99')
        .should('contain', 'Digital: $ 0.99')
    })
  
    it('adds the comic to cart when clicked on the price', () => {
      cy.get('[data-testid="card-prices"]').first().contains('Impresso: $ 1.99').click()
      cy.get('@cart').should('have.length', 1)
      cy.get('@cart').first().should('contain', 'Spider-Man: Chapter One (1998) #10')
    })
  })