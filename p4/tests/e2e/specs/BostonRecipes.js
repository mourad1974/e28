describe("Boston Recipes", () => {
  it("Visits homepage", () => {
    cy.visit("/");
    cy.contains("h2", "All Recipes");
  });
  it("Visits veganPage", () => {
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
});
