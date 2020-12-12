import {getToken, authentication } from '../../src/api/tmdb-api'


describe("rate page",()=>{
    before(()=>{
        getToken().then(res=>{
            console.log(res);
            sessionStorage.setItem('tmdb-token', res.request_token);
            authentication(Cypress.env("TMDB_USER"),Cypress.env("TMDB_PASS"),res.request_token).then(res=>console.log(res))
          })
    })
    beforeEach(()=>{
        cy.visit('/')
        cy.contains("Log in").click()
        cy.login("20091571@mail.wit.ie","123456789")
        cy.wait(5000)
    })
    afterEach(()=>{
        cy.logout()
    })
    it("should show new rate when confirm rating",()=>{
        cy.getBySel("siteheader-user--login").click();
        cy.contains("Rate now").click();
        cy.wait(5000)
        cy.get("button").eq(1).click();
        cy.get(".ant-rate-star").eq(9).click()
        cy.contains("Confirm now").click()
        cy.get(".badge").eq(0).should("have.text",10)
    })
})