/// <reference types='cypress' />

describe('activities in the website', () => {

  it.skip('should be able to register', () => {
    cy.visit('https://www.demoblaze.com');
    cy.get('[id="signin2"]').click();
    cy.get('[id="sign-username"]').type('slava56');
    cy.get('[id="sign-password"]').type('slava56');
    cy.get('.btn').contains('Sign up').click();
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Sign up successful.');
    });
    cy.url().should('include', '/');
  });
  it.skip('should be able to login', () => {
    cy.visit("https://www.demoblaze.com");
    cy.get('[id="login2"]').click();
    cy.get('[id="loginusername"]').type('slava56');
    cy.get('[id="loginpassword"]').type('slava56');
    cy.get('.btn').contains('Log in').click();
  });
   it('should be able to add the product to the cart', () => {
    cy.visit("https://www.demoblaze.com");
    cy.get('[id="login2"]').click();
    cy.get('[id="loginusername"]').type('slava56');
    cy.get('[id="loginpassword"]').type('slava56');
    cy.get('.btn').contains('Log in').click();
    cy.get('[class="card-title"]').contains("Samsung galaxy s6").click();
     cy.get('.btn').contains('Add to cart').click();
  });
});
