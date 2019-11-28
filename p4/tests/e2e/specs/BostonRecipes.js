describe("Boston Recipes", () => {

  let product = {
    name: 'Bruschetta with Tomato and Basil',
    id: 6
  }

  // testing home page`
  it("Test Homepage (all recipes)", () => {
    cy.visit("/");
    cy.contains("h2", "All Recipes");
  });



  // testing Vegan page
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

  // testing Gluten Free page
  it("Test gluten free page", () => {
    cy.visit("/glutenfree");
    cy.contains("h2", "Filtered Recipes");
    cy.get('[data-test="product-name"]').should("have.length", 3);
    cy.get('[data-test="product-name"]')
      .first()
      .click({
        force: true
      });
    cy.get('[data-test="add-recipe"]').click();
    cy.contains('Item was added to your cart')
  });



  // testing cart page
  it('Test Cart page features', () => {
    cy.visit('/product/' + product.id);
    cy.get('[data-test="add-recipe"]').click();
    cy.contains('[data-test="cart-count"]', 1);
    cy.visit('/cart');
    cy.contains('[data-test="cart-contents"]', '1 Recipe(s) of ' + product.name);
    cy.get('[data-test="remove recipe"]').click();
    cy.contains('[data-test="cart-count"]', 0);
    cy.contains('Empty Cart');
  })
});