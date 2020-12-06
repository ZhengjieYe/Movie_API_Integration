describe("upcomming page",()=>{
    beforeEach(()=>{
        cy.visit("/");
        cy.getBySel("site-header-upcoming").click();
    })
    it("should add to watch list when you click add button",()=>{
        cy.getBySel("header-number").text().should("eq","20");
        cy.getBySel("add-to-watch-button").eq(2).click();
        cy.getBySel("add-to-button--success").should("have.length",1)
    })

    it("should change two buttons' state when you click button",()=>{
        cy.getBySel("header-number").text().should("eq","20");
        cy.getBySel("add-to-watch-button").eq(2).click();
        cy.getBySel("add-to-button--success").should("have.length",1)
        cy.get(".carousel-indicators > li").eq(2).click();
        cy.getBySel("add-to-content--success").should("be.visible")
    })
})