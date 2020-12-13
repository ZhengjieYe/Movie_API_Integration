describe("watchlist page",()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.contains("Log in").click()
        cy.login("20091571@mail.wit.ie","123456789")
        cy.wait(5000)
    })
    it("should show the movie when you add it to watchlist",()=>{
        cy.getBySel("site-header-upcoming").click()
        cy.contains("Add to Watchlist").click()
        cy.getBySel("siteheader-user--login").click();
        cy.contains("Watchlist").click();
        cy.wait(5000)
        cy.getBySel("header-number").should("have.text",1)
    })
})