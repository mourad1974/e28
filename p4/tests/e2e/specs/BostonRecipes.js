describe("Boston Recipes", () => {
  it("Test Homepage (all recipes)", () => {
    cy.visit("/");
    cy.contains("h2", "All Recipes");
  });

  let product = {
    name: 'Bruschetta with Tomato and Basil',
    id: 6
  }
  it("Test Vegan page", () => {
    cy.visit("/vegan");
    cy.contains(
      '[data-test="product-name"]',
      product.name
    );
    cy.get('[data-test="product-name"]').should("have.length", 2);
    cy.get('[data-test="product-name"]')
      .first()
      .click({
        force: true
      });
    cy.contains(
      '[data-test="product-name"]', product.name

    );
    cy.get('[data-test="add-recipe"]').click();
    cy.contains('Item was added to your cart')
  });




  it('Test Cart page features', () => {
    cy.visit('/product/' + product.id);
    cy.get('[data-test="add-recipe"]').click();
    cy.contains('[data-test="cart-count"]', 1);
    cy.visit('/cart');
    cy.contains('[data-test="cart-contents"]', '1 Recipe(s) of ' + product.name);
    cy.get('[data-test="remove-from-cart-button"]').click();
    cy.contains('[data-test="cart-count"]', 0);
    cy.contains('Empty Cart');
  })
});