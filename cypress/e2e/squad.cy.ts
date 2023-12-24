describe("squad actions", () => {
  it("loads people and goes to detail page", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Anakin");
    cy.contains("More info").click();
    cy.contains("Ackbar");
  });
});
