// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("getBySel", (selector, ...args) => {
    return cy.get(`[data-test=${selector}]`, ...args);
  });

Cypress.Commands.add("getBySelLike", (selector, ...args) => {
  return cy.get(`[data-test*=${selector}]`, ...args);
});

Cypress.Commands.add("register", (email,pass) => {
  cy.getBySel("signup-email").clear().type(email);
  cy.getBySel("signup-password").clear().type(pass);
  cy.getBySel("signup-verify").clear().type(pass);
  cy.get(".btn-primary").click();
});

Cypress.Commands.add("login", (email,pass) => {
  cy.getBySel("login-email").clear().type(email);
  if(pass) cy.getBySel("login-password").clear().type(pass);
  cy.get(".btn-primary").click();
});