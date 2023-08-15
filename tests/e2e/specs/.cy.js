describe('Adding products to Cart',()=>{
  it('adds a product to the cart',()=>{
    cy.visit('/cart');

    cy.get('.product-items')
    .first()
    .contains('Add to Cart')
    .click()
    cy.get('.cart-items').should('contain','Product 1')
  })
})

describe('Removing Products from Cart', () => {
  it('removes a product from the cart', () => {
    cy.visit('/cart'); // Replace with the actual route to your cart page

    // Click on the "Remove" button of a product in the cart
    cy.get('.cart-item')
      .first()
      .contains('Remove')
      .click();

    // Verify that the cart no longer contains the removed product
    cy.get('.cart-items').should('not.contain', 'Product A');
  });
});
