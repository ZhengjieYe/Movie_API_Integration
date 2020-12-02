describe("upcomming page",()=>{
    beforeEach(()=>{
        cy.visit("/");
        cy.getBySel("site-header-upcoming").click();
    })
    it("should add to watch list when you click add button",()=>{
        cy.getBySel("header-number").text().should("eq","20");
        cy.getBySel("add-to-watch-button").eq(2).click();
        cy.getBySel("header-number").text().should("eq","19");
    })
})