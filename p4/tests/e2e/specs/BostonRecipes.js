describe("Boston Recipes", () => {


  //  testing home page
  it("Visit Homepage", () => {
    cy.visit("/");
    cy.contains("h2", "All Recipes");
  });

  // testing vegan page
  it("Visit Vegan Page", () => {
    cy.visit("/vegan");
    cy.contains(
      '[data-test="product-name"]',
      "Bruschetta with Tomato and Basil"
    );
    cy.get('[data-test="product-name"]').should("have.length", 2);
    cy.get('[data-test="product-name"]')
      .first()
      .click({
        force: true
      });
    cy.contains(
      '[data-test="product-name"]',
      "Bruschetta with Tomato and Basil"
    );
  });
  // testing Gluten Free page
  it("Visit Gluten Free Page", () => {
    cy.visit("/GlutenFree");
    cy.contains(
      '[data-test="product-name"]',
      "Perfect Guacamole"
    );
    cy.get('[data-test="product-name"]').should("have.length", 3);
    cy.get('[data-test="product-name"]')
      .first()
      .click({
        force: true
      });
    cy.contains(
      '[data-test="product-name"]',
      "Grilled Sweet Potatoes"
    );
  });
  // testing cart page
  it("Visit Cart Page", () => {
    cy.visit("/cart");
    cy.contains("h1", "Your Recipes Cart");
  });
  // testing create page
  it("Visit Create Page", () => {
    cy.visit("/product/create");
    cy.contains("h1", "Create a Recipe");
  });


});