/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://localhost:4200/auth')
    })

    it('Login', () => {
        // with username and password
        cy.get('#mat-input-0').type('userNuevo')
        cy.get('#mat-input-1').type('23072017')
        cy.get('.mat-raised-button').click()
        // verify the user is logged in and the url is correct
        cy.url().should('include', '/home/niveles')
    })

    it('Logout', () => {
        // with username and password
        cy.get('#mat-input-0').type('userNuevo')
        cy.get('#mat-input-1').type('23072017')
        cy.get('.mat-raised-button').click()
        cy.get('.mat-menu-trigger').click()
        cy.get('.mat-menu-content > :nth-child(3)').click()
        // cy.get('.mat-menu-content > :nth-child(2)').click()
        
    })
})