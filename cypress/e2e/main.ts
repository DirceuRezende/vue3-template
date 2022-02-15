// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />

describe("Main", () => {
  it("should display header text", () => {
    cy.visit("/");
    cy.contains("h1", "You did it!");
  });
});
