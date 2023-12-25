// I know I not have tested thoroughly, but let the person without technical debt throw the first stone. :P

describe("main functionalities", () => {
  it("loads people, goes to detail page and back", () => {
    cy.visit("http://localhost:3000/");
    cy.intercept("POST", "https://fe-case-study.vercel.app/api/graphql").as(
      "getAll"
    );
    cy.wait("@getAll");
    cy.contains("Anakin");
    cy.contains("More info").click();
    cy.contains("Ackbar");
    cy.url().should("include", "person?id=27");
    cy.contains("Back").click();
    cy.wait("@getAll");
    cy.contains("Anakin");
  });
  it("moves people to squad and back", () => {
    cy.visit("http://localhost:3000/");
    cy.intercept("POST", "https://fe-case-study.vercel.app/api/graphql").as(
      "getAll"
    );
    cy.wait("@getAll");
    cy.get('[data-cy="toggle-button 29"]').click();
    cy.get('[data-cy="squad"]').find('[data-cy="name"]').contains("Arvel");
    cy.get('[data-cy="toggle-button 29"]').click();
    cy.get('[data-cy="people"]').find('[data-cy="name"]').contains("Arvel");
  });
});
