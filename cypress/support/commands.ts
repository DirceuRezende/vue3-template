Cypress.Commands.add("google", () => cy.visit("https://google.com"));
Cypress.Commands.add("getByDataCy", (selector, ...args) => {
  return cy.get(`[data-cy="${selector}"]`, ...args);
});
