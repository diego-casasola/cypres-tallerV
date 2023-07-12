/// <reference types="cypress" />

describe('SoundFlow Testing', () => {
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

    it('Resolver Prueba', () => {
        // dar click a la primera etiqueta <a>
        cy.get('#mat-input-0').type('HakonLand')
        cy.get('#mat-input-1').type('23072017')
        cy.get('.mat-raised-button').click()
        // esperar a que se cargue la pagina
        cy.wait(2000)
        // dar click a la primera etiqueta <a>
        cy.get('.card').first().click()
        cy.get('.card').first().click()

        // hay 7 inputs, en cada uno se debe escribir las notas musicales:
        // 1. Do 2. Re 3. Mi 4. Fa 5. Sol 6. La 7. Si
        cy.get('.mat-input-element').eq(0).type('Do')
        cy.get('.mat-input-element').eq(1).type('Re')
        cy.get('.mat-input-element').eq(2).type('Mi')
        cy.get('.mat-input-element').eq(3).type('Fa')
        cy.get('.mat-input-element').eq(4).type('Sol')
        cy.get('.mat-input-element').eq(5).type('La')
        cy.get('.mat-input-element').eq(6).type('Si')

        // dar click al boton de resolver
        cy.get('.resolver').click()


    })
})