/// <reference types="cypress" />

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays popular recipes on home page", () => {
    const drinkCards = cy.get('[data-test-id="drink-card"]');
    drinkCards.should("have.length", 5);
  });

  it("navigates to recipes page and navigates to other pages", () => {
    cy.get('[data-testid="navbar-link--recipes"]').click();
    const drinkCards = cy.get('[data-test-id="drink-card"]');
    drinkCards.should("have.length", 8);

    cy.get('[data-test-id="pagination-component"]').should("have.length", 1);
  });
});
